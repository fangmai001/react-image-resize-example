import React, { useState, useEffect, Fragment } from 'react';
import {
  Card,
  Row,
  Col,
} from 'antd';

import UploadButton from '../components/UploadButton'
import UploadImage from '../components/UploadImage'
import DownloadButton from '../components/DownloadButton'

import './index.css'

function Content() {

  const [originFiles, setOriginFiles] = useState([])

  const colLayout = {
    xs: 24,
    sm: 24,
    md: 8,
  }

  return (
    <div>
      <UploadButton />
      <Row gutter={[16, 16]}>
        <Col {...colLayout}>
          <Card title="上傳檔案">
            <UploadImage setOriginFiles={setOriginFiles} />
          </Card>
        </Col>
        <Col {...colLayout}>
          <Card title="壓縮設定">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col {...colLayout}>
          <Card title="下載壓縮檔案">
            <DownloadButton originFiles={originFiles} />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Content;
