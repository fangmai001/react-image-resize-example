import Resizer from "react-image-file-resizer";

export default function ImageResize(files) {

  const resizeFile = (file) =>
  new Promise((resolve) => {

    const maxWidth = 1920
    // const maxWidth = 1280
    const maxHeight = 1920
    // const maxHeight = 1280
    const quality = 75
    // const quality = 50
    // const quality = 25
    const compressFormat = 'JPEG'
    const rotation = 0
    const responseUriFunc = (resizeFile) => {
      resolve(resizeFile)
    }
    const outputType = 'file'
    // const minWidth = 1280
    // const minHeight = 1280

    Resizer.imageFileResizer(
      file,
      maxWidth,
      maxHeight,
      compressFormat,
      quality,
      rotation,
      responseUriFunc,
      outputType,
      // minWidth,
      // minHeight,
    );
  });

  const onChange = async (file) => {
    try {
      const image = await resizeFile(file);
      console.log('image', image);

      const element = document.createElement('a');
      const url = window.URL.createObjectURL(image);
      const filename = image.name;
      element.href = url;
      element.download = filename;
      element.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.log('err', err);
    }
  };
  
  const fileArr = Array.from(files)
  fileArr.forEach((f) => onChange(f))
}
