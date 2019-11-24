import React from "react";
import { Layout } from 'antd';
const { Content } = Layout;

var ZheCss = require('../zhe/Zhe.css');
export default class Zhe extends React.Component {
    render() {
        return (
            <div>
                <Content style={{ marginTop: 64 }}>
                    <div style={{ width: '95%', background: '#fff', minHeight: 500, marginLeft: '2.5%', marginTop: "50px" }}>
                        <div style={{ width: "100%", height: "50px" }}>
                            <img src={require('../img/zhe.png')} className={ZheCss.biaopian}></img>
                            <h1 style={{ marginLeft: '100px', lineHeight: '50px' }}> 浙菜</h1>
                        </div>
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block', float: "left" }}>
                            <div style={{ width: "100%", height: "60%" }}>
                                <img src={require('../img/西湖醋鱼.jpg')}></img>
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px" }} className={ZheCss.menufone} >
                                <h3>西湖醋鱼</h3>
                                <h5>健康功效：</h5>
                                <p>草鱼:草鱼含有丰富的不饱和脂肪酸，对血液循环有利，是心血管病人的良好食物;草鱼含有丰富的硒元素，经常食用有抗衰老、养颜的功效，而且对肿瘤也有一定的防治作用;并具有暖胃和中、平肝祛风、治痹、截疟、益肠明眼目之功效，主治虚劳、风虚头痛、肝阳上亢、高血压、头痛、久疟。</p>
                                <h5>原料：</h5>
                                <p>鳊鱼 一条(约重700克) 绍兴陈酒25毫升、酱油75毫升 姜末2.5克、白糖60克 湿淀粉50克、米醋50毫升 胡椒粉适量</p>
                                <h5>做法：</h5>
                                <p>(1)将草鱼饿养两天，促其排尽草料及泥土味，使鱼肉结实，宰杀去掉鳞、鳃、内脏，洗净。</p>
                                <p>(2)把鱼身劈成雌雄两片(连背脊骨一边称雄片，另一边为雌片)，斩去牙齿，在雄片上，从颔下4.5厘米处开始每隔4.5厘米斜片一刀(刀深约5厘米)，刀口斜向头部(共片五刀)，片第三刀时，在腰鳍后处切断，使鱼分成两段。再在雌片脊部厚肉处向腹部斜剞一长刀(深约4至5厘米)，不要损伤鱼皮。</p>
                                <p>(3)将炒锅置旺火上，舀入清水1000克，烧沸后将雄片前后两段相继放入锅内，然后，将雌片并排放入，鱼头对齐，皮朝上(水不能淹没鱼头，胸鳍翘起)盖上锅盖。待锅水再沸时，揭开盖，撇去浮沫，转动炒锅，继续用旺火烧煮，前后共烧约3分钟，用筷子轻轻地扎鱼的雄片颔下部，如能扎入，即熟。炒锅内留下250克清水(余汤撇去)，放入酱油、绍酒和姜末调味后，即将鱼捞出，装在盘中(要鱼皮朝下，两片鱼的背脊拼连，鱼尾段拼接在雄片的切断处)。</p>
                                <p>(4)把炒锅内的汤汁，加入白糖、湿淀粉和醋，用手勺推搅成浓汁，见滚沸起泡，立即起锅，徐徐浇在鱼身上，即成。烹调技巧必须用活草鱼烹制，入开水锅中氽至断生捞出，保持整条不碎，肉质不糊烂。浇鱼卤汁要薄而浓，其味才美。</p>
                            </div>
                        </div>
                        <div style={{ width: "100px", height: "20px", marginLeft: "48%" ,marginTop:"470px"}}>未完待续......</div>
                    </div>
                </Content>
            </div>
        )
    }
}