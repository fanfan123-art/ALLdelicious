
import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import Home from './home/Home';
import Chuan from './chuan/Chuan';
import Lu from './lu/Lu';
import Zhe from './zhe/Zhe';
import Xiang from './xiang/Xiang';
import Min from './min/Min';
import Yue from './yue/Yue';
import Su from './su/Su';
import Hui from './hui/Hui';
import Information from './information/Information';
import Number01 from './number/Number';


const { Header, Footer, Content } = Layout;
var HomeCss = require('./HomePage.css');
const menu = (
    <Menu>
    <Menu.Item>
        <Link to="Information">
            我的资料
    </Link>
    </Menu.Item>
    <Menu.Item>
        <Link to="Number">
            账号安全
    </Link>
    </Menu.Item>
</Menu>
);
export default class HomePage extends React.Component {

    render() {
        return (
            <div className={HomeCss.codeboxdemo}>
                <BrowserRouter>
                    <Layout className={HomeCss.Layout}>
                        <Header className={HomeCss.Header}>
                            <div className={HomeCss.logo} />
                            <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '61px' }} className={HomeCss.Menu}>
                                <Menu.Item key="1"><Link to="/Home">首 页</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/Chuan">川 菜</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/Lu">鲁 菜</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/Zhe">浙 菜</Link></Menu.Item>
                                <Menu.Item key="5"><Link to="/Xiang">湘 菜</Link></Menu.Item>
                                <Menu.Item key="6"><Link to="/Min">闽 菜</Link></Menu.Item>
                                <Menu.Item key="7"><Link to="/Yue">粤 菜</Link></Menu.Item>
                                <Menu.Item key="8"><Link to="/Su">苏 菜</Link></Menu.Item>
                                <Menu.Item key="9"><Link to="/Hui">徽 菜</Link></Menu.Item>
                            </Menu>
                            <Dropdown overlay={menu} className={HomeCss.User}>
                                    <Avatar size={50} icon="user" style={{backgroundColor:'#edd70c'}}/>
                            </Dropdown>
                        </Header>
                        <Content className={HomeCss.Content}>
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/Home" component={Home}></Route>
                            <Route path="/Chuan" component={Chuan}></Route>
                            <Route path="/Lu" component={Lu}></Route>
                            <Route path="/Zhe" component={Zhe}></Route>
                            <Route path="/Xiang" component={Xiang}></Route>
                            <Route path="/Min" component={Min}></Route>
                            <Route path="/Yue" component={Yue}></Route>
                            <Route path="/Su" component={Su}></Route>
                            <Route path="/Hui" component={Hui}></Route>
                            <Route path="/Information" component={Information}></Route>
                                <Route path="/Number" component={Number01}></Route>
                        </Content>
                        <Footer className={HomeCss.Footer}>创建于2019.12.29</Footer>
                    </Layout>
                </BrowserRouter>
            </div>
        )
    }
}
