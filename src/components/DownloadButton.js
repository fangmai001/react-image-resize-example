import React, { useState, useEffect, Fragment } from 'react';
import {
  Button,
} from 'antd';

import ImageResize from './ImageResize'

function ExportComponent(props) {
  const { originFiles } = props

  const handleFiles = () => {
    console.log('originFiles', originFiles)
    ImageResize(originFiles)
  } 

  return (
    <div>
      <Button
        onClick={handleFiles}
      >
        下載
      </Button>
    </div>
  )
}

export default ExportComponent;
