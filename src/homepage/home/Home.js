import React from "react";
import { Layout, Carousel, Icon } from 'antd';
const { Content } = Layout;

var HomeCss = require('../home/Home.css');
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className={HomeCss.first}>
                    <Carousel autoplay className={HomeCss.Carousel}>
                        <div>
                            <img src={require('../img/01.jpg')} style={{ height: "650px" }}></img>
                        </div>
                        <div>
                            <img src={require('../img/02.jpg')} style={{ height: "650px" }}></img>
                        </div>
                        <div>
                            <img src={require('../img/03.jpg')} style={{ height: "650px" }}></img>
                        </div>
                        <div>
                            <img src={require('../img/04.jpg')} style={{ height: "650px" }}></img>
                        </div>
                        <div>
                            <img src={require('../img/05.jpg')} style={{ height: "650px" }}></img>
                        </div>
                        <div>
                            <img src={require('../img/06.jpg')} style={{ height: "650px" }}></img>
                        </div>
                        <div>
                            <img src={require('../img/07.jpg')} style={{ height: "650px" }}></img>
                        </div>
                        <div>
                            <img src={require('../img/08.jpg')} style={{ height: "650px" }}></img>
                        </div>
                        <div>
                            <img src={require('../img/09.jpg')} style={{ height: "650px" }}></img>
                        </div>
                    </Carousel>
                </div>
                <div className={HomeCss.second}>
                    <div className={HomeCss.second02}>
                    </div>
                    <div className={HomeCss.second01}>
                        <div className={HomeCss.div}>
                            <div className={HomeCss.circle}>
                                <h2>风味多样</h2>
                            </div>
                            <div className={HomeCss.font01}>
                                <h3>风味多样</h3>
                                <h6>由于中国幅员辽阔，各地气候、风俗习惯都存在着差异，长期以来，在饮食上也就形成了许多风味。口味上有“南甜北咸东酸西辣”之分，主要是巴蜀、齐鲁、淮扬、粤闽四大风味。</h6>
                            </div>
                        </div>
                        <div className={HomeCss.div}>
                            <div className={HomeCss.circle}>
                                <h2>四季有别</h2>
                            </div>
                            <div className={HomeCss.font01}>
                                <h3>四季有别</h3>
                                <h6>一年有四季，按季节而吃，是中国烹饪又一大特征。自古以来，中国一直按季节变化而调味、配菜。冬天味醇浓厚，夏天清淡凉爽；冬天多炖焖煨，夏天多凉拌冷冻。</h6>
                            </div>
                        </div>
                        <div className={HomeCss.div}>
                            <div className={HomeCss.circle}>
                                <h2>食医结合</h2>
                            </div>
                            <div className={HomeCss.font01}>
                                <h3>食医结合</h3>
                                <h6>中国的烹饪技术，与医疗保健有密切的联系，在几千年前有‘医食同源’和‘药膳同功’的说法，利用食物原料的药用价值，做成各种美味佳肴，达到对某些疾病防治的目的。</h6>
                            </div>
                        </div>
                    </div>
                </div>
                
                    <div className={HomeCss.third}>
                        <div className={HomeCss.third02}>

                        </div>
                    <div className={HomeCss.third01}>
                        <div className={HomeCss.foot_culture}>
                            <div className={HomeCss.font02}>
                                <h1>中国饮食文化</h1>
                                <h5>中国饮食文化是一种广视野、深层次、多角度、高品位的悠久区域文化；是中华各族人民在5000多年的生产和生活实践中，在食源开发、食具研制、食品调理、营养保健和饮食审美等方面创造、积累并影响周边国家乃至世界的物质财富及精神财富。</h5>
                            </div>
                        </div>
                        <div className={HomeCss.image01}></div>
                        <div className={HomeCss.skilled}>
                            <div className={HomeCss.font03}>
                                <h1><Icon type="check" /> 刀工细巧</h1>
                                <h6>刀工，即厨师对原材料进行刀法处理，使之成为烹调所需要的，整齐一致的形态，因而是烹调技术的关键之一。</h6>
                            </div>
                        </div>
                        <div className={HomeCss.skilled}>
                            <div className={HomeCss.font03}>
                                <h1><Icon type="check" /> 火候独到</h1>
                                <h6>火候，是形成菜肴美食的风味特色的关键之一</h6>
                            </div>
                        </div>
                        <div className={HomeCss.skilled}>
                            <div className={HomeCss.font03}>
                                <h1><Icon type="check" /> 技法各异</h1>
                                <h6>常用的技法有：炒、爆、炸、烹、溜、煎、贴、烩、扒、烧、炖、焖、煮、酱、卤、蒸、烤、拌、炝、熏，以及甜菜的拔丝、蜜汁、挂霜等。</h6>
                            </div>
                        </div> 
                    </div>
                    
                </div>

                <div className={HomeCss.fourth}>
                    <div className={HomeCss.font04}>
                        <h1>Chinese catering culture</h1>
                        <h6>中国饮食文化可以从时代与技法、地域与经济、民族与宗教、食品与食具、消费与层次、民俗与功能等多种角度进行分类，展示出不同的文化品位，体现出不同的使用价值，异彩缤纷。</h6>
                    </div>
                </div>
                <div className={HomeCss.fifth}>
                    <div className={HomeCss.image02}></div>
                    <div className={HomeCss.connotation01}>
                        <div className={HomeCss.font05}>
                            <h1>中华饮食文化基本内涵</h1>
                            <h6>中华饮食文化就其深层次内涵来讲，可以概括成四个字：精、美、情、礼。这四个字，反映了饮食活动过程中饮食品质、审美体验、情感活动、社会功能等所包含的独特文化意蕴，也反映了饮食文化与中华优秀传统文化的密切联系</h6>
                        </div>
                    </div>
                    <div className={HomeCss.connotation02}>
                        <div className={HomeCss.font05}>
                            <h6><Icon type="check" /> 精，对中华饮食文化的内在品质的概括</h6>
                            <h6><Icon type="check" /> 美，体现了饮食文化的审美特征</h6>
                            <h6><Icon type="check" /> 情，这是对中华饮食文化社会心理功能的概括</h6>
                            <h6><Icon type="check" /> 礼，是指饮食活动的礼仪性</h6>
                        </div>
                    </div>
                </div>
                <div className={HomeCss.sixth}>
                    <div className={HomeCss.image03}></div>
                    <div className={HomeCss.saying}>
                        <div className={HomeCss.font06}>
                            <h1><Icon type="tag" theme="filled" /> 美食语录</h1>
                            <h6>鲜鲫食丝脍，香芹碧涧羹；蜀酒浓无敌，江鱼美可求。</h6>
                            <h1><Icon type="tag" theme="filled" /> 美食语录</h1>
                            <h6>初游唐安饭薏米，炊成不减雕胡美；大如苋实白如玉，滑欲流匙香满屋。</h6>
                            <h1><Icon type="tag" theme="filled" /> 美食语录</h1>
                            <h6>新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡美酥。</h6>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}