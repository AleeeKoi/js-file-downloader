/**
 * This is a simulation of FileReader object for nodejs
 */

const toArrayBuffer = (bufer) => {
  const arrayBuffer = new ArrayBuffer(bufer.length);
  const view = new Uint8Array(arrayBuffer);
  for (let i = 0; i < bufer.length; ++i) {
    view[i] = bufer[i];
  }
  return arrayBuffer;
};

class FileReaderMock {

  static DONE = 2;

  onloadend () {}

  onerror () {}

  async readAsArrayBuffer (blob) {
    const buffer = blob[Object.getOwnPropertySymbols(blob)[0]]._buffer;
    const arrBuffer = toArrayBuffer(buffer);
    this.onloadend({
      target: {
        readyState: FileReader.DONE,
        result: arrBuffer
      }
    });
  }
};

export default FileReaderMock;
