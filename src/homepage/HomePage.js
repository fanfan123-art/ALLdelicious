import React from 'react';
import { Layout, Menu, Dropdown} from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Chuan from './chuan/Chuan';
import Yue from './yue/Yue';
import Lu from './lu/Lu';
import Min from './min/Min';
import Xiang from './xiang/Xiang';
import Su from './su/Su';
import Zhe from './zhe/Zhe';
import Hui from './hui/Hui';
import LeaveMessage from './leavemessage/LeaveMessage';
import Personal from './personal/Personal';

const { Header, Footer } = Layout;

var HomePageCss = require('../homepage/HomePage.css')
export default class HomePage extends React.Component {
    render() {

        const menus = (
            <Menu>
                <Menu.Item>
                    <Link to="/Chuan">川菜</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/Yue">粤菜</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/Xiang">湘菜</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/Zhe">浙菜</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/Min">闽菜</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/Lu">鲁菜</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/Hui">徽菜</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/Su">苏菜</Link>
                </Menu.Item>
            </Menu>
        );
        return (
            <Layout>
                <BrowserRouter className={HomePageCss.content}>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} className={HomePageCss.header}>
                        <div className={HomePageCss.logo} >
                            <img src={require('../images/logo02.png')} className={HomePageCss.img}></img>
                        </div>
                        <Menu
                            theme="red"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px', width: '400px' }} className={HomePageCss.webmenu} >
                            <Menu.Item key="1">
                                <Link to="/Home">首页</Link>
                            </Menu.Item>
                            <span>| </span>
                            <Menu.Item key="2">
                                <Dropdown overlay={menus}>
                                    <a className={HomePageCss.menu}>菜谱</a>
                                </Dropdown>
                            </Menu.Item>
                            <span> |</span>
                            <Menu.Item key="3">
                                <Link to="/LeaveMessage">留言</Link>
                            </Menu.Item>
                            <span>|</span>
                            <Menu.Item key="4">
                                <Link to="/Personal">个人信息</Link>
                            </Menu.Item>
                        </Menu>

                    </Header>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/Home" component={Home}></Route>
                    <Route path="/Chuan" component={Chuan}></Route>
                    <Route path="/Yue" component={Yue}></Route>
                    <Route path="/Xiang" component={Xiang}></Route>
                    <Route path="/Zhe" component={Zhe}></Route>
                    <Route path="/Min" component={Min}></Route>
                    <Route path="/Lu" component={Lu}></Route>
                    <Route path="/Hui" component={Hui}></Route>
                    <Route path="/Su" component={Su}></Route>
                    <Route path="/LeaveMessage" component={LeaveMessage}></Route>
                    <Route path="/Personal" component={Personal}></Route>
                </BrowserRouter>
                <Footer style={{ textAlign: 'center' }} >Delicious Spectrum Net ©2019 Created by Three Nuts</Footer>
            </Layout>

        )
    }
}
