import React from 'react';
import { Empty } from 'antd';

var NumberCss = require('./Number.css');
export default class Data extends React.Component {
    render() {
        return (
            <div className={NumberCss.all}>
                <div className={NumberCss.header}>
                    <h1>账号安全</h1>
                </div>
                <Empty style={{margin:"200px"}} />
            </div>
        )
    }
}