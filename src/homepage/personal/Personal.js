import React from 'react';
import { Descriptions} from 'antd';

export default class Personal extends React.Component {
    state = {
        size: 'default',
    };

    onChange = e => {
        console.log('size checked', e.target.value);
        this.setState({
            size: e.target.value,
        });
    };

    render() {
        return (
               <div style={{ width: "90%", height: "800px", marginLeft: "5%", background: "#fff", marginTop: "80px" }}>
                <Descriptions bordered title="个人信息" border size={this.state.size} >
                    <Descriptions.Item label="姓名"></Descriptions.Item>
                    <Descriptions.Item label="账号">123456789</Descriptions.Item>
                    <Descriptions.Item label="性别">女</Descriptions.Item>
                    <Descriptions.Item label="年龄"></Descriptions.Item>
                    <Descriptions.Item label="住址"></Descriptions.Item>
                    <Descriptions.Item label="联系方式：">0826-1111111111</Descriptions.Item>
                    <Descriptions.Item label="e-mali">xxxxxxxxx@163.com</Descriptions.Item>
                    <Descriptions.Item label="职业"></Descriptions.Item>
                    <Descriptions.Item label="工作单位"></Descriptions.Item>
                    <Descriptions.Item label="个性签名"></Descriptions.Item>
                </Descriptions>
            </div>
        );
    }
}