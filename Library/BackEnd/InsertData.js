function doPost(e) {
    var requestData = JSON.parse(e.postData.contents);
    var spreadsheetUrl = requestData.spreadsheetUrl;
    var sheetName = requestData.sheetName;
    var headers = requestData.Headers; 
    var data = requestData.Data;  
  
    var spreadsheetId = extractSpreadsheetId(spreadsheetUrl);
  
    if (!spreadsheetId) {
      var response = {
        message: "Invalid spreadsheet URL.",
        error: true
      };
      return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
    }

    var spreadsheet = SpreadsheetApp.openById(spreadsheetId);

    var sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
    }
  
    if (!sheet) {
      var response = {
        message: `Unable to create or access a sheet with the name '${sheetName}'.`,
        error: true
      };
      return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
    }
  
    var uniqueId = null;
  
    if (sheet.getLastRow() === 0) {
      var headerRow = ['ID'].concat(headers);
      sheet.appendRow(headerRow); 
    }
  
    if (data && Array.isArray(data) && data.length > 0) {
      uniqueId = generateUniqueId();
      var dataRow = [uniqueId].concat(data);
  
      sheet.appendRow(dataRow);
    }
  
    var message = `Data successfully inserted into sheet '${sheetName}' with unique ID: ${uniqueId}.`;
  
    var response = {
      message: message,
      uniqueId: uniqueId,
      spreadsheetUrl: spreadsheet.getUrl(), 
      spreadsheetId: spreadsheet.getId(),
      sheetId: sheet.getSheetId(),       
      error: false
    };
    
    return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

function generateUniqueId() {
    return Utilities.getUuid();
}
  
function extractSpreadsheetId(url) {
    var matches = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)\//);
    return matches ? matches[1] : null;
}
