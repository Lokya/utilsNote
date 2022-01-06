/**
 * 读取blob数据
 * @param {Blob} blob blob数据
 * @returns Boolean
 */
fileReader (blob) {
  const fileReader = new FileReader();
  return new Promise((resolve, reject) => {
    fileReader.onerror = () => {
      fileReader.abort();
      reject();
    };

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.readAsText(blob);
  });
};

async getJsonBlob (blob){
  const blobText = await this.fileReader(blob);
  return JSON.parse(blobText);
};
