import React from 'react';
import {
  Form,
  InputNumber,
} from 'antd';

function ExportComponent(props) {
  const { resizeSetting, setResizeSetting } = props
  const {
    maxWidth,
    maxHeight,
    quality,
  } = resizeSetting

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
