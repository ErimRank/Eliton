function doPost(e) {
    var requestData = JSON.parse(e.postData.contents);
    var databaseName = requestData.sheetName;
  
    var files = DriveApp.getFilesByName(databaseName);
    if (files.hasNext()) {
      var message = `A spreadsheet with the name '${databaseName}' already exists. Please choose a different name.`;
      var response = {
        message: message,
        error: true
      };
      
      return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
    }
  
    var newSpreadsheet = SpreadsheetApp.create(databaseName);
    var newDatabase = newSpreadsheet.getSheets()[0];
    newDatabase.setName(databaseName); 
  
    var message = `New spreadsheet '${databaseName}' successfully created.`;
  
    var response = {
      message: message,
      spreadsheetUrl: newSpreadsheet.getUrl(), 
      spreadsheetId: newSpreadsheet.getId(),   
      databaseId: newDatabase.getSheetId(),   
      error: false
    };
    
    return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}