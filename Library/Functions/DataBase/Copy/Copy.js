export const COPY = async (data) => {

  try {

    await navigator.clipboard.writeText(data);

    TOASTVIEW("Copied to clipboard");

  } catch (err) {

    TOASTVIEW("Failed to copy:", err);

  }
  
};
