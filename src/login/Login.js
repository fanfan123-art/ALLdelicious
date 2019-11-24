import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom';

var LoginCss = require('../login/Login.css');
class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        let history = this.props.history;
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            history.push('/HomePage');
          }
        });
      };
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={LoginCss.background}>
                <div className={LoginCss.loginbg01}>
                    <img src={require('../images/red.jpg')} className={LoginCss.img}></img>
                </div>
                <div className={LoginCss.loginbg02}></div>
                <div className={LoginCss.logobg}>
                    <p className={LoginCss.font}>Delicious  |  通行证</p>
                </div>
                <div className={LoginCss.Login02}>
                    <div className={LoginCss.enter}>
                        <p className={LoginCss.font04}>登  录</p>
                    </div>
                    <div className={LoginCss.Input}>
                        <Form onSubmit={this.handleSubmit} className={LoginCss.form}>
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                        size="large"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                        size="large"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}
                                <a className={LoginCss.forgot} href="">
                                    Forgot password
                                </a>
                                <Button type="primary" htmlType="submit" className={LoginCss.button} size="large">
                                    Log in
                                </Button>
                                Or <Link to="/Register">register now!</Link>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;