import React from "react";
import { Layout, Carousel } from 'antd';
const { Content } = Layout;

var HomeCss = require('../home/Home.css');
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Content style={{ marginTop: 64 }}>
                    <div style={{ width: "100%", height: "10px" }}></div>
                    <div style={{ width: '25%', height: "1000px", float: "left", marginLeft: "15px", marginTop: "8px" }}>
                        <Carousel autoplay className={HomeCss.Carousel}>
                            <div>
                                <img src={require('../img/01.jpg')} style={{ height: "1000px" }}></img>
                            </div>
                            <div>
                                <img src={require('../img/02.jpg')} style={{ height: "1000px" }}></img>
                            </div>
                            <div>
                                <img src={require('../img/03.jpg')} style={{ height: "1000px" }}></img>
                            </div>
                            <div>
                                <img src={require('../img/04.jpg')} style={{ height: "1000px" }}></img>
                            </div><div>
                                <img src={require('../img/05.jpg')} style={{ height: "1000px" }}></img>
                            </div>
                            <div>
                                <img src={require('../img/06.jpg')} style={{ height: "1000px" }}></img>
                            </div>
                            <div>
                                <img src={require('../img/07.jpg')} style={{ height: "1000px" }}></img>
                            </div>
                            <div>
                                <img src={require('../img/08.jpg')} style={{ height: "1000px" }}></img>
                            </div>
                            <div>
                                <img src={require('../img/09.jpg')} style={{ height: "1000px" }}></img>
                            </div>
                        </Carousel>
                    </div>
                    <div style={{ width: '73%', background: '#ffffff00', minHeight: "400px", marginLeft: '26%', marginTop: "5px" }}>
                        <div className={HomeCss.div01} >
                            <div className={HomeCss.div01_1}>
                                <p style={{ fontSize: "18px", fontFamily: "华文行楷", marginTop: "50px" }}>菜系是在选料、切配、烹饪等技艺方面，经长期演变而自成体系，具有鲜明的地方风味特色，并为社会所公认的中国饮食的菜肴流派。
                                中国饮食文化的菜系，是指在一定区域内，由于气候、地理、历史、物产及饮食风俗的不同，经过漫长历史演变而形成的一整套自成体系的烹饪技艺和风味，并被全国各地所承认的地方菜肴。
                                早在商周时期中国的膳食文化已有雏形，以太公望最为代表 ，再到春秋战国的齐桓公时期，饮食文化中南北菜肴风味就表现出差异。到唐宋时，南食、北食各自形成体系。
                                到了南宋时期，南甜北咸的格局形成。发展到清代初期时，鲁菜、川菜、粤菜、苏菜 ，成为当时最有影响的地方菜，被称作"四大菜系"。
                                到清末时，浙菜、闽菜、湘菜、徽菜四大新地方菜系分化形成，共同构成中国传统饮食的"八大菜系"。</p>
                            </div>
                            <div className={HomeCss.div01_2}>
                                <img src={require('../img/川.jpg')} style={{ marginTop: "25px" }}></img>
                            </div>
                        </div>
                        <div className={HomeCss.div02} >
                            <div className={HomeCss.div02_1}>
                                <p style={{ fontSize: "17px", fontFamily: "华文行楷", marginTop: "25px" }}>
                                    <strong>鲁菜:</strong>雍鲁菜讲究原料质地优良，以盐提鲜，以汤壮鲜，调味讲求咸鲜纯正，突出本味。容华贵、中正大气、平和养生 (咸鲜为主火候精湛 精于制汤 善烹海味 注重礼仪)
                                    <br />
                                    <strong>川菜:</strong>调味多变，菜式多样，口味清鲜醇浓并重，以善用麻辣调味(鱼香、麻辣、辣子、陈皮、椒麻、怪味、酸辣诸味)
                                    <br />
                                    <strong>粤菜:</strong>选料精细，清而不淡，鲜而不俗，嫩而不生，油而不腻。擅长小炒，要求掌握火候和油温恰到好处。还兼容许多西菜做法，讲究菜的气势、档次。(由广州菜(也称广府菜)、潮州菜(也称潮汕菜)、东江菜(也称客家菜)三种地方风味组成，主要是量精而细，配料多而巧，装饰美而艳)
                                    <br />
                                    <strong>苏菜:</strong>用料严谨，注重配色，讲究造型，四季有别。(烹调技艺以炖、焖、煨著称;重视调汤，保持原汁。内又细分金陵菜、淮扬菜、苏帮菜，口味平和。善用蔬菜，以"金陵三草"和"早春四野"驰名。淮扬菜，讲究选料和刀工，擅长制汤)
                                    <br />
                                    <strong>闽菜:</strong>尤以"香"、"味"见长，其清鲜、和醇、荤香、不腻的风格。三大特色，一长于红糟调味，二长于制汤，三长于使用糖醋。
                                    <br />
                                    <strong>徽菜:</strong>擅长烧、炖、蒸，而爆、炒菜少，重油、重色，重火功。重火工是历来的，其独到之处集中体现于擅长烧、炖、熏、蒸类的功夫菜上，不同菜肴使用不同的控火技术，形成酥、嫩、香、鲜独特风味，其中最能体现徽式特色的是滑烧、清炖和生熏法。
                                    <br />
                                    <strong>湘菜:</strong>口味多变，品种繁多;色泽上油重色浓，讲求实惠;香辣、香鲜、软嫩。重视原料互相搭配，滋味互相渗透。湘菜调味尤重酸辣。相对而言，湘菜的煨功夫更胜一筹，几乎达到炉火纯青的地步。煨，在色泽变化上可分为红煨、白煨，在调味方面有清汤煨、浓汤煨和奶汤煨。小火慢炖，原汁原味。
                                    <br />
                                    <strong>浙菜:</strong>菜式小巧玲珑，清俊逸秀，菜品鲜美滑嫩，脆软清爽。运用香糟调味。烹调技法丰富，尤为在烹制海鲜河鲜有其独到之处。口味注重清鲜脆嫩，保持原料的本色和真味。菜品形态讲究，精巧细腻，清秀雅丽。
                                </p>
                            </div>
                            <div className={HomeCss.div02_2}>
                                <img src={require('../img/鲁.jpg')} style={{ marginTop: "90px" }}></img>
                            </div>
                        </div>
                    </div>
                </Content>
            </div>
        )
    }
}