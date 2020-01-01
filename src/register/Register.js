import React from 'react';
import {Form,Input,Tooltip,Icon,Select,Checkbox,Button,message} from 'antd';
const { Option } = Select;
var RegisterCss = require('./Register.css')
class Register extends React.Component {
    //双向数据绑定
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
        //xhr
        var xhr= new XMLHttpRequest()
        var data={
            "email":this.state.email,
            "username":this.state.username,
            "password":this.state.password,
            "number":this.state.number,
        }
        //open连接
        xhr.open("post","/user/register")
        //配置响应函数
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    var result=JSON.parse(xhr.responseText)
                    if(result.state==2){
                        message.info("用户名已存在！")
                    }else if(result.state==1){
                        message.info("注册成功！")
                        this.props.history.push("/Homepage")
                    }
                    
                }else{
                    message.info(xhr.status)
                }
            }
        }
        //发送数据
        xhr.setRequestHeader('content-type','application/JSON')
        xhr.send(JSON.stringify(data))
    }
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (_rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码输入不一致');
        } else {
            callback();
        }
    };

    validateToNextPassword = (_rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };
    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );


        return (
                <div className={RegisterCss.background}>
                <div className={RegisterCss.loginbg02}></div>

                <div className={RegisterCss.head}>
                    <p className={RegisterCss.font}>Delicious | 注 册 通 行 证</p>
                </div>
                <div className={RegisterCss.Register}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit} action="/Login.js" style={{fontStyle:"white"}}>
                        <Form.Item label="邮箱" value={this.state.email} name="email" onChange={e=>this.changeValue(e)}>
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: '请输入正确的邮箱!',
                                    },
                                    {
                                        required: true,
                                        message: '请输入您的邮箱！',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="密码" hasFeedback value={this.state.password} name="password" onChange={e=>this.changeValue(e)}>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入您的密码！',
                                    },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password />)}
                        </Form.Item>
                        <Form.Item label="再次输入密码" hasFeedback value={this.state.password} name="password" onChange={e=>this.changeValue(e)}>
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请再次输入您的密码！',
                                    },
                                    {
                                        validator: this.compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                        </Form.Item>
                        <Form.Item
                            label={
                                <span>
                                    昵称
                <Tooltip title="你希望别人怎么称呼你?">
                                        <Icon type="question-circle-o" />
                                    </Tooltip>
                                </span>
                            }
                            value={this.state.username} name="username" onChange={e=>this.changeValue(e)}>
                            {getFieldDecorator('昵称', {
                                rules: [{ required: true, message: '请输入您的昵称!', whitespace: true }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="电话号码" value={this.state.number} name="number" onChange={e=>this.changeValue(e)}>
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, message: '请输入您的电话号码！' }],
                            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            {getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                            })(
                                <Checkbox>
                                    我已阅读并同意<a href="">《delicious官网协议》</a>
                                </Checkbox>,
                            )}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" onClick={this.upload()} >
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedRegister = Form.create()(Register);

export default WrappedRegister;
