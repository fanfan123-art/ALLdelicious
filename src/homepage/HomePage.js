import React from 'react';
import { Carousel } from 'antd';

var HomePageCss = require('../homepage/HomePage.css')
export default class HomePage extends React.Component {
    render() {
        return (
            <Carousel autoplay>
                <div className={HomePageCss.home}>

                </div>
                <div className={HomePageCss.chuan}>
                    <div className={HomePageCss.font}>
                        <p>腌腊煸熏爆溜滑，甜酸咸苦香辣麻，
                        东坡煨焖东坡肉，太白清蒸太白鸭，
                        诗圣临厨烹蜀笋，文君下灶炒川虾，
                        百馐百味百盘馔，一菜一格一品花。</p>
                    </div>
                    <div className={HomePageCss.chuanlogo}>
                        <h1>川</h1>
                    </div>
                </div>
                <div className={HomePageCss.lu}>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className={HomePageCss.yue}>
                </div>
                <div className={HomePageCss.hui}>

                </div>
                <div className={HomePageCss.zhe}>
                </div>
                <div className={HomePageCss.min}>
                </div>
                <div className={HomePageCss.su}>
                </div>
                <div className={HomePageCss.xiang}>
                </div>
            </Carousel>
        )
    }
}
