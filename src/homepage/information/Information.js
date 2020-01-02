import React from 'react';
import "antd/dist/antd.css";
import { Form, Select, Input, Button, DatePicker } from "antd";

const { Option } = Select;
const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 15 }
};
var InformationCss = require('./Information.css');
class Information extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            // Should format date value before submit.
            const values = {
                ...fieldsValue,
                "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD")
            };
            console.log("Received values of form: ", values);
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const config = {
            rules: [
                { type: "object", required: true, message: "Please select time!" }
            ]
        };

        return (
            <div className={InformationCss.all}>
                <div className={InformationCss.header}>
                    <h1>个人信息</h1>
                </div>
            <Form style={{width:'100%',margin:'30px 0'}}
                {...formItemLayout}
                onSubmit={this.handleSubmit}
            >
                <Form.Item {...formItemLayout} label="姓名">
                    <Input placeholder="请填写你的姓名" />
                </Form.Item>
                <Form.Item {...formItemLayout} label="昵称">
                    {getFieldDecorator("nickname", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your nickname"
                            }
                        ]
                    })(<Input placeholder="请输入你的昵称" />)}
                </Form.Item>
                <Form.Item  {...formItemLayout} label="性别">
                    {getFieldDecorator("gender", {
                        rules: [{ required: true, message: "请选择你的性别!" }]
                    })(
                        <Select placeholder="请选择">
                            <Option value="male">男</Option>
                            <Option value="female">女</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="出生日期">
                    {getFieldDecorator("date-picker", config)(
                        <DatePicker placeholder="选择日期" />
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} label="出生地">
                    <Input placeholder="请填写你的出生地" />
                </Form.Item>
                <Form.Item {...formItemLayout} label="居住地">
                    <Input placeholder="请填写你的居住地" />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                    <Button type="primary" htmlType="submit" style={{backgroundColor:'#eed70d',border:'#eed70d'}}>
                        保存
          </Button>
                </Form.Item>
            </Form>
            </div>
        );
    }
}

const WrappedInformationForm = Form.create()(Information);

export default WrappedInformationForm;
