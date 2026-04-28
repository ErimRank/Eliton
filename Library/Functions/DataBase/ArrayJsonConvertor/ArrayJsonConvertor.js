export const ARRAYJSONCONVERTOR = (DATA, CALLBACK) => {
  try {
    // If nothing passed, default to empty array
    if (!DATA) {
      CALLBACK([]);
      return;
    }

    // Parse if string (localStorage)
    const parsedData = typeof DATA === "string" ? JSON.parse(DATA) : DATA;

    // If not array, return empty array instead of null
    if (!Array.isArray(parsedData)) {
      CALLBACK([]);
      return;
    }

    const result = parsedData.map((item, index) => ({
      id: index + 1,
      message: item
    }));

    CALLBACK(result);

  } catch (error) {
    // On JSON error, return empty array
    CALLBACK([]);
  }
};
