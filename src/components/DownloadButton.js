import React from 'react';
import Resizer from "react-image-file-resizer";
import {
  Button,
} from 'antd';

function ExportComponent(props) {
  const { originFiles } = props
  const { resizeSetting } = props
  const {
    maxWidth,
    maxHeight,
    quality,
    compressFormat,
    rotation,
    outputType,
  } = resizeSetting

  // const [isLoading, setIsLoading] = useState(false)

  const resizeFile = (file) => {
    return new Promise((resolve) => {
      const responseUriFunc = (resizeFile) => {
        resolve(resizeFile)
      }

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
    })
  }

  const onDownloadFile = async (file) => {
    try {
      const image = await resizeFile(file);

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

  const onClickButton =  () => {
    // setIsLoading(true)
    const fileArr = Array.from(originFiles)
    fileArr.forEach((f) => onDownloadFile(f))
    // setIsLoading(false)
  }

  return (
    <div>
      <Button
        onClick={onClickButton}
      >
        進行壓縮並下載
      </Button>
    </div>
  )
}

export default ExportComponent;
