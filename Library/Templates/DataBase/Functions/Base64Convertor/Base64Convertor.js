export const BASE64CONVERTOR = async (dataUrl, callBack) => {
  const MAX_LENGTH = 50000;

  if (!dataUrl.startsWith("data:image")) {
    throw new Error("Only images are supported without ffmpeg.wasm");
  }

  const img = new Image();
  img.src = dataUrl;

  await new Promise((res) => (img.onload = res));

  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  let width = img.width;
  let height = img.height;

  let quality = 0.9;
  let output = dataUrl;

  while (output.length > MAX_LENGTH && quality > 0.1) {
    width *= 0.9;
    height *= 0.9;

    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);

    output = canvas.toDataURL("image/jpeg", quality);
    quality -= 0.05;
  }

  if (output.length > MAX_LENGTH) {
    throw new Error("Cannot compress image below 50,000 chars without heavy loss");
  }

  callBack(output);
};
