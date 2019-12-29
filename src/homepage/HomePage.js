import React from 'react';
import { Carousel } from 'antd';
import {Link,HashRouter as Router } from 'react-router-dom';


var HomePageCss = require('../homepage/HomePage.css')
export default class HomePage extends React.Component {
    render() {
        return (
            <Carousel autoplay>
                <div className={HomePageCss.home}>

                </div>
                <div className={HomePageCss.chuan}>
                    <div className={HomePageCss.font01}>
                        <p>腌腊煸熏爆溜滑，甜酸咸苦香辣麻，
                           东坡煨焖东坡肉，太白清蒸太白鸭，
                           诗圣临厨烹蜀笋，文君下灶炒川虾，
                           百馐百味百盘馔，一菜一格一品花。</p>
                    </div>
                    <div className={HomePageCss.logo01}>
                    <Link to="/Chuan"><h1>川</h1></Link>
                    </div>
                </div>
                <div className={HomePageCss.lu}>
                    <div className={HomePageCss.font02}>
                        <p>鲁菜香，豫菜香。<br/>香到德州乐乐房，<br/>文坛网海忙。<br/>
                           思常常，乐常常，<br/>乐于为人慰断肠，<br/>姐妹情谊长。</p>
                    </div>
                    <div className={HomePageCss.logo02}>
                        <Link to="/Lu"><h1>鲁</h1></Link>
                    </div>
                </div>
                <div className={HomePageCss.yue}>
                    <div className={HomePageCss.font01}>
                        <p>
                            羊城客汕大三元，饕餮敢为天下先。
                            狸狗猫蛇烹作馔，鸭鸡雁雀制成筵。
                            龟虾贝蟹坛中炖，笋果参菇釜中煎。
                            妙手天工龙凤宴，乳猪裙翅醉神仙。
                        </p>
                    </div>
                    <div className={HomePageCss.logo01}> 
                        <Link to="/Yue"><h1>粤 </h1></Link>
                    </div>
                </div>
                <div className={HomePageCss.hui}>
                    <div className={HomePageCss.font02}>
                        <p>安邦定国，<br/>品美味佳肴庆贺。
                           徽商经济，<br/> 做珍馐天物犒劳。</p>
                    </div>
                    <div  className={HomePageCss.logo02}> 
                        <Link to="/Hui"><h1>徽</h1></Link>
                    </div>
                </div>
                <div className={HomePageCss.zhe}>
                <div className={HomePageCss.font01}>
                        <p>
                            羊城客汕大三元，饕餮敢为天下先。
                            狸狗猫蛇烹作馔，鸭鸡雁雀制成筵。
                            龟虾贝蟹坛中炖，笋果参菇釜中煎。
                            妙手天工龙凤宴，乳猪裙翅醉神仙。
                        </p>
                    </div>
                    <div className={HomePageCss.logo01}> 
                        <Link to="/Zhe"><h1>浙</h1></Link>
                    </div>
                </div>
                <div className={HomePageCss.min}>
                <div className={HomePageCss.font02}>
                        <p>安邦定国，<br/>品美味佳肴庆贺。
                           徽商经济，<br/> 做珍馐天物犒劳。</p>
                    </div>
                    <div  className={HomePageCss.logo02}> 
                        <Link to="/Min"><h1>闽</h1></Link>
                    </div>
                </div>
                <div className={HomePageCss.su}>
                <div className={HomePageCss.font01}>
                        <p>
                            羊城客汕大三元，饕餮敢为天下先。
                            狸狗猫蛇烹作馔，鸭鸡雁雀制成筵。
                            龟虾贝蟹坛中炖，笋果参菇釜中煎。
                            妙手天工龙凤宴，乳猪裙翅醉神仙。
                        </p>
                    </div>
                    <div className={HomePageCss.logo01}> 
                        <Link to="/Su"><h1> 苏</h1></Link>
                    </div>
                </div>
                <div className={HomePageCss.xiang}>
                <div className={HomePageCss.font02}>
                        <p>安邦定国，<br/>品美味佳肴庆贺。
                           徽商经济，<br/> 做珍馐天物犒劳。</p>
                    </div>
                    <div  className={HomePageCss.logo02}> 
                        <Link to="/Xiang"><h1>湘</h1></Link>
                    </div>
                </div>
            </Carousel>
        )
    }
}
