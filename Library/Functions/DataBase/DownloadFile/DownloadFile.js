export const DOWNLOADFILE = async (url, filename) => {
  if (navigator.onLine) {
    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "no-cors",   
        credentials: "omit",   
        cache: "no-cache"
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.status}`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = filename || "download";
      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Download error:", error);
    }
  } else {
    console.warn("No internet connection");
  }
};
