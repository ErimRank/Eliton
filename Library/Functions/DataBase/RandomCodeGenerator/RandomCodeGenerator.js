export const RANDOMCODEGENERATOR = (callback) => {
  const code = Math.floor(100000 + Math.random() * 900000);
  if (typeof callback === "function") {
    callback(code);
  }
};
