import React, { useState, useEffect, Fragment } from 'react';
import {
  Card,
  Row,
  Col,
} from 'antd';
import UploadImage from '../components/UploadImage'
import ResizeSetting from '../components/ResizeSetting'
import DownloadButton from '../components/DownloadButton'

import './index.css'

function Content() {

  const defaultResizeSetting = {
    maxWidth: 1920,
    maxHeight: 1920,
    quality: 75,
    compressFormat: 'JPEG',
    rotation: 0,
    outputType: 'file',
  }
  const [originFiles, setOriginFiles] = useState([])
  const [resizeSetting, setResizeSetting] = useState(defaultResizeSetting)

  const colLayout = {
    xs: 24,
    sm: 24,
    md: 8,
  }

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col {...colLayout}>
          <Card title="上傳檔案">
            <UploadImage
              setOriginFiles={setOriginFiles}
            />
          </Card>
        </Col>
        <Col {...colLayout}>
          <Card title="壓縮設定">
            <ResizeSetting
              originFiles={originFiles}
              setOriginFiles={setOriginFiles}
              resizeSetting={resizeSetting}
              setResizeSetting={setResizeSetting}
            />
          </Card>
        </Col>
        <Col {...colLayout}>
          <Card title="下載壓縮檔案">
            <DownloadButton
              originFiles={originFiles}
              resizeSetting={resizeSetting}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <span>
            本專案使用 <a href='https://github.com/onurzorluer/react-image-file-resizer'>react-image-file-resizer</a> 作為圖片壓縮的套件
          </span>
        </Col>
      </Row>
    </div>
  )
}

export default Content;
