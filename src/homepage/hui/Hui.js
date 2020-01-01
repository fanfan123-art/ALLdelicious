import React from "react";
import { Layout } from 'antd';
const { Content } = Layout;

var HuiCss = require('../hui/Hui.css');
export default class Hui extends React.Component {
    render() {
        return (
            <div className={HuiCss.all}>
               <div className={HuiCss.left}></div>
               <div className={HuiCss.right}></div>
            </div>
        )
    }
}