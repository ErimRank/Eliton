//TOKENIZATION
function doPost(e) {
  const url = 'https://pay.pesapal.com/v3/api/Auth/RequestToken';

  try {
    // Ensure request has a body
    if (!e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: 'No POST data received' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Parse incoming JSON payload
    const payload = JSON.parse(e.postData.contents);

    // Optional validation
    if (!payload.consumer_key || !payload.consumer_secret) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: 'Missing consumer_key or consumer_secret' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const options = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch(url, options);
    const responseCode = response.getResponseCode();
    const responseText = response.getContentText();

    Logger.log("Response Code: " + responseCode);
    Logger.log("Raw Response: " + responseText);

    if (responseCode >= 200 && responseCode < 300) {
      const json = JSON.parse(responseText);
      return ContentService.createTextOutput(JSON.stringify(json))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService.createTextOutput(
        JSON.stringify({
          error: 'Failed to fetch token',
          responseCode: responseCode,
          response: responseText
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

  } catch (err) {
    Logger.log("Exception occurred: " + err.message);
    return ContentService.createTextOutput(
      JSON.stringify({ error: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}


// IPZ
function doPost(e) {
  try {
    // Parse incoming JSON
    const requestData = JSON.parse(e.postData.contents);

    const siteUrl = requestData.site;
    const token = requestData.token;

    if (!siteUrl || !token) {
      throw new Error('Missing required parameters: site and token');
    }

    const url = 'https://pay.pesapal.com/v3/api/URLSetup/RegisterIPN';

    const payload = {
      url: siteUrl,
      ipn_notification_type: "GET"
    };

    const options = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
      muteHttpExceptions: true,
      headers: {
        Authorization: `Bearer ${token}`  // ✅ Token from the request body
      }
    };

    const response = UrlFetchApp.fetch(url, options);
    const data = JSON.parse(response.getContentText());

    Logger.log(data);

    return ContentService.createTextOutput(JSON.stringify(data))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error: " + error.message);
    return ContentService.createTextOutput(JSON.stringify({ error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}


// SUB
function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);

    const token = body.token;
    const orderId = body.id;
    const amount = body.amount;
    const description = body.description;
    const callbackUrl = body.callback_url;
    const notificationId = body.notification_id;
    const billing = body.billing_address;
    const currency = body.currency;  // ✅ New: Currency from request

    if (!token || !orderId || !amount || !callbackUrl || !notificationId || !billing || !currency) {
      throw new Error("Missing required parameters (ensure 'currency' is included)");
    }

    const url = 'https://pay.pesapal.com/v3/api/Transactions/SubmitOrderRequest';

    const payload = {
      id: orderId,
      currency: currency, // ✅ Now dynamic
      amount: amount,
      description: description,
      callback_url: callbackUrl,
      notification_id: notificationId,
      billing_address: {
        email_address: billing.email_address,
        phone_number: billing.phone_number,
        country_code: billing.country_code || "",
        first_name: billing.first_name,
        middle_name: billing.middle_name || "",
        last_name: billing.last_name,
        line_1: billing.line_1 || "",
        line_2: billing.line_2 || "",
        city: billing.city || "",
        state: billing.state || "",
        postal_code: billing.postal_code || "",
        zip_code: billing.zip_code || ""
      }
    };

    const options = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
      muteHttpExceptions: true,
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const response = UrlFetchApp.fetch(url, options);
    const result = JSON.parse(response.getContentText());

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
