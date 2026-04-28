function doPost(e) {
    var requestData = JSON.parse(e.postData.contents);
    var sheetName = requestData.sheetName;
    var spreadsheetUrl = requestData.spreadsheetUrl;
  
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

    var existingSheet = spreadsheet.getSheetByName(sheetName);
    if (existingSheet) {
      var response = {
        message: `A sheet with the name '${sheetName}' already exists in the spreadsheet. Please choose a different name.`,
        error: true
      };
      return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
    }

    var newSheet = spreadsheet.insertSheet(sheetName);
  
    if (!newSheet) {
      var response = {
        message: `Unable to create a new sheet with the name '${sheetName}'.`,
        error: true
      };
      return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
    }
  
    var message = `New sheet '${sheetName}' successfully created inside the spreadsheet.`;
  
    var response = {
      message: message,
      spreadsheetUrl: spreadsheet.getUrl(), 
      spreadsheetId: spreadsheet.getId(), 
      sheetId: newSheet.getSheetId(), 
      error: false
    };
    
    return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

function extractSpreadsheetId(url) {
    var matches = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)\//);
    return matches ? matches[1] : null;
}