import React from 'react';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import {Link} from 'react-router-dom';

var LoginCss = require('../login/Login.css');
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
           [e.target.name]:e.target.value 
        })
    }
    upload=()=>{
        var data={
            "username":this.state.username,
            "password":this.state.password,
        }
        fetch("/user/login",{
            method:"post",
           headers:{
               "Content-type":"application/json"
           },
           body:JSON.stringify(data)
        }).then(response=>response.json())
        .then(result=>{
            message.info("登陆成功!")
        }).catch(e=>{
            message.error(e)
        })

}
    handleSubmit = e => {
        e.preventDefault();
        let history = this.props.history;
        this.props.form.validateFields((err, values) => {
          if (!err) {
            history.push('/HomePage');
          }
        });
      };
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={LoginCss.loginwindow}>
                <div className={LoginCss.loginwindow01}></div>
                {/* 背景 */}
                <div className={LoginCss.headerbg}>
                    <p className={LoginCss.font}>Delicious  |  通行证</p>
                </div>
                <div className={LoginCss.Loginbg}>
                    <div className={LoginCss.enter}>
                        <p className={LoginCss.font04}>登  录</p>
                    </div>
                    {/* 头部 */}
                    <div className={LoginCss.Input}>
                        <Form onSubmit={this.handleSubmit} className={LoginCss.form}>
                            <Form.Item >
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入你的手机号/邮箱!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="手机号/邮箱"
                                        size="large"
                                        value={this.state.username} name="username" onChange={e=>this.changeValue(e)}
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码！' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                        size="large"
                                        value={this.state.password} name="password" onChange={e=>this.changeValue(e)}
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>记住密码</Checkbox>)}
                                <a className={LoginCss.forgot} href="">忘记密码</a>
                                <Button type="primary" htmlType="submit" className={LoginCss.button} size="large">登 录</Button>
                                <Link to="/Register">注册</Link>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                {/* 登录 */}
            </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;