import React, { useState, useEffect, Fragment } from 'react';
import {
  Upload,
  Modal,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function ExportComponent(props) {
  const { setOriginFiles } = props

  const [previewImage, setPreviewImage] = useState(false)
  const [previewVisible, setPreviewVisible] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState([])

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview)
    setPreviewVisible(true)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  }

  const handleCancel = () => {
    setPreviewVisible(false)
  }

  const handleChange = (info) => {
    const customInfo = info
    customInfo.file.status = 'done'

    const originFiles = []
    customInfo.fileList.forEach(({ originFileObj }) => {
      originFiles.push(originFileObj)
    })

    setFileList(customInfo.fileList)
    setOriginFiles(originFiles)
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  console.log('fileList', fileList)

  return (
    <div>
      <Upload
        listType="picture-card"
        fileList={fileList}
        multiple
        customRequest={() => {}}
        onPreview={handlePreview}
        onChange={handleChange}
        showUploadList={{
          showPreviewIcon: true,
          showRemoveIcon: true,
          showDownloadIcon: false,
        }}
      >
        {uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt={previewTitle} style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  )
}

export default ExportComponent;
