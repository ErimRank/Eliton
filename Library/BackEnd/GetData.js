function doPost(e) {
    try {
      var requestData = JSON.parse(e.postData.contents);
      var spreadsheetUrl = requestData.spreadsheetUrl;
      var sheetName = requestData.sheetName;

      var spreadsheetId = extractSpreadsheetId(spreadsheetUrl);
      if (!spreadsheetId) {
        return createErrorResponse("Invalid spreadsheet URL.");
      }
  
      var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  
      var sheet = spreadsheet.getSheetByName(sheetName);
      if (!sheet) {
        return createErrorResponse(`Sheet with the name '${sheetName}' does not exist.`);
      }
  
      var data = sheet.getDataRange().getValues();
  
      var headers = data[0]; 
      var jsonData = [];
  
      for (var i = 1; i < data.length; i++) {
        var rowObject = {};
        for (var j = 0; j < headers.length; j++) {
          rowObject[headers[j]] = data[i][j];
        }
        jsonData.push(rowObject);
      }
  
      return ContentService.createTextOutput(JSON.stringify(jsonData))
      .setMimeType(ContentService.MimeType.JSON);
  
    } catch (error) {
      
      return createErrorResponse("An error occurred: " + error.message);
    }
}
  
function extractSpreadsheetId(url) {
    var matches = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    return matches ? matches[1] : null;
}
  
function createErrorResponse(message) {
    var response = {
      message: message,
      error: true
    };
    return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}