import React, { useState, useEffect, Fragment } from 'react';
import Resizer from "react-image-file-resizer";
import {
  Button,
  Form,
  Input,
  InputNumber,
} from 'antd';

function ExportComponent(props) {
  const { resizeSetting, setResizeSetting } = props
  const {
    maxWidth,
    maxHeight,
    quality,
    compressFormat,
    rotation,
    outputType,
  } = resizeSetting

  // const formItemLayout = {
  //   labelCol: {
  //     xs: { span: 24 },
  //     sm: { span: 8 },
  //   },
  //   wrapperCol: {
  //     xs: { span: 24 },
  //     sm: { span: 16 },
  //   },
  // }
  const formItemLayout = {
    labelCol: { span: 14 },
    wrapperCol: { span: 6 },
  }

  const onFormChange = (params) => {
    setResizeSetting({
      ...resizeSetting,
      ...params,
    })
  }

  return (
    <div>
      <Form
        labelCol={{
          span: 12,
        }}
        wrapperCol={{
          span: 8,
        }}
        layout="horizontal"
      >
        <Form.Item label="寬(width)">
          <InputNumber
            min={1}
            max={16384}
            defaultValue={maxWidth}
            onChange={(value) => onFormChange({ maxWidth: value })}
          />
        </Form.Item>
        <Form.Item label="高(height)">
          <InputNumber
            min={1}
            max={16384}
            defaultValue={maxHeight}
            onChange={(value) => onFormChange({ maxHeight: value })}
          />
        </Form.Item>
        <Form.Item label="品質(quality)">
          <InputNumber
            min={1}
            max={100}
            defaultValue={quality}
            onChange={(value) => onFormChange({ quality: value })}
          />
        </Form.Item>
      </Form>
    </div>
  )
}

export default ExportComponent;
