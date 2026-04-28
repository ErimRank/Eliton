function doGet(e) {
  return ContentService.createTextOutput("GET request received")
  .setMimeType(ContentService.MimeType.TEXT)
  .setHeader("Access-Control-Allow-Origin", "*"); 
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    Logger.log(data);

    return ContentService.createTextOutput("POST request received: " + JSON.stringify(data))
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*");
  } catch (error) {
    Logger.log("Error in doPost: " + error.message);
    return ContentService.createTextOutput("Error: " + error.message)
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*");
  }
}