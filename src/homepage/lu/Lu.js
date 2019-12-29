import React from "react";
import { Layout } from 'antd';
const { Content } = Layout;

var LuCss = require('../lu/Lu.css');
export default class Lu extends React.Component {
    render() {
        return (
            <div>
                <Content style={{ marginTop: 64 }}>
                    <div style={{ width: '95%', background: '#fff', minHeight: 800, marginLeft: '2.5%', marginTop: "50px" }}>
                        <div style={{ width: "100%", height: "50px" }}>
                            <img src={require('../img/lu.png')} className={LuCss.biaopian}></img>
                            <h1 style={{ marginLeft: '100px', lineHeight: '50px' }}> 鲁菜</h1>
                        </div>
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block', float: "left" }}>
                            <div style={{ width: "100%", height: "60%" }}>
                                <img src={require('../img/芫爆鱿鱼卷.jpg')}></img>
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px"}} className={LuCss.menufone} >
                                <h3>芫爆鱿鱼卷</h3>
                                <h5>健康功效</h5>
                                <p>1. 鱿鱼富含钙、磷、铁元素，利于骨骼发育和造血，能有效治疗贫血;</p>
                                <p>2. 鱿鱼除富含蛋白质和人体所需的氨基酸外，鱿鱼还含有大量的牛磺酸，可抑制血液中的胆固醇含量，缓解疲劳，恢复视力，改善肝脏功能;</p>
                                <p>3. 其所含多肽和硒有抗病毒、抗射线作用。</p>
                                <h5>原料：</h5>
                                <p>主料:鱿鱼(鲜)300克。</p>
                                <p>辅料:香菜50克。</p>
                                <p>调料:植物油20克， 香油5克 ，料酒5克 ，醋3克， 胡椒粉2克， 盐2克 ，味精2克， 大葱5克 ，姜2克 ，大蒜(白皮)5克。</p>
                                <h5>做法：</h5>
                                <p>1. 将鱿鱼洗净，剞上十字花刀，切成长方块，下入开水锅内略烫，成卷后捞出，用料酒、精盐、胡椒粉、味精、香油、醋及少许水调成味汁。</p>
                                <p>2. 香菜择洗干净，切成段。</p>
                                <p>3. 葱姜切丝，蒜切片。</p>
                                <p>4. 炒锅注油烧热，下入葱姜丝、蒜片、香菜、鱿鱼卷翻炒，加入味汁炒匀即可。</p>
                                <h5>注意：</h5>
                                <p>脾胃虚寒、高血脂、高胆固醇血症、动脉硬化等心血管病及肝病患者、湿疹、荨麻疹等疾病患者忌食。</p>
                            </div>
                        </div>
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block' }}>
                        <div style={{ width: "100%", height: "60%" }}>
                                <img src={require('../img/雨前虾仁.jpg')}></img>
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px"}} className={LuCss.menufone} >
                                <h3>雨前虾仁</h3>
                                <h5>健康功效</h5>
                                <p>1. 鱿鱼富含钙、磷、铁元素，利于骨骼发育和造血，能有效治疗贫血;</p>
                                <p>2. 鱿鱼除富含蛋白质和人体所需的氨基酸外，鱿鱼还含有大量的牛磺酸，可抑制血液中的胆固醇含量，缓解疲劳，恢复视力，改善肝脏功能;</p>
                                <p>3. 其所含多肽和硒有抗病毒、抗射线作用。</p>
                                <h5>原料：</h5>
                                <p>鲜虾仁150 克，水发海参15 克，葱姜各5 克，豆粉面25 克，精盐1.5克，湿淀粉少许，雨前茶叶15 克，南荠50 克，鸡蛋清1 个，绍酒10 克，清汤50 克，鸡油10 克，白油250 克(约耗50 克)。</p>
                                <h5>做法：</h5>
                                <p>1.准备工作:把虾仁洗净沾干、用鸡蛋清和豆粉面抓匀。南荠去皮用开水焯过，切成0.7 厘米的小丁，姜切末，葱切段。把"雨前"茶用开水泡上，泡好后晾凉，取茶叶及茶水50 克放碗内，加精盐、绍酒、清汤、湿淀粉对成茶汁。</p>
                                <p>2.烹调:把炒勺放火上，倒入白油烧至六成热时，下入虾仁拨散至九成熟，倒人漏勺。炒勺内留少许油，放入葱姜一炸，下入海参、南荠，再放虾仁翻炒至匀，倒入茶汁一炒，淋上鸡油出勺装盘即成。</p>
                            </div>
                        </div>
                        <div style={{width:"100px",height:"30px",marginLeft:"48%"}}>未完待续......</div>
                    </div>
                </Content>
            </div>
        )
    }
}