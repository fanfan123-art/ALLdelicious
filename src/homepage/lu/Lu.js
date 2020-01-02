import React from "react";

var LuCss = require('../lu/Lu.css');
export default class Lu extends React.Component {
    render() {
        return (
                    <div  className={LuCss.all}>
                       
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block', float: "left" }} className={LuCss.border}>
                            <div style={{ width: "100%", height: "50%" }}>
                                <img src={require('../img/芫爆鱿鱼卷.jpg')}></img>
                            </div>
                            <div style={{ width: "100%", height: "50%"}} className={LuCss.menufone} >
                                <h3>芫爆鱿鱼卷</h3>
                                <h5>原料：</h5>
                                <p>主料:鱿鱼(鲜)300克。<br/>
                                辅料:香菜50克。<br/>
                                调料:植物油20克， 香油5克 ，料酒5克 ，醋3克， 胡椒粉2克， 盐2克 ，味精2克， 大葱5克 ，姜2克 ，大蒜(白皮)5克。</p>
                                <h5>做法：</h5>
                                <p>1. 将鱿鱼洗净，剞上十字花刀，切成长方块，下入开水锅内略烫，成卷后捞出，用料酒、精盐、胡椒粉、味精、香油、醋及少许水调成味汁。<br/>
                                2. 香菜择洗干净，切成段。<br/>
                                3. 葱姜切丝，蒜切片。<br/>
                                4. 炒锅注油烧热，下入葱姜丝、蒜片、香菜、鱿鱼卷翻炒，加入味汁炒匀即可。</p>
                            </div>
                        </div>
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block' }} className={LuCss.border}>
                        <div style={{ width: "100%", height: "50%" }}>
                                <img src={require('../img/雨前虾仁.jpg')}></img>
                            </div>
                            <div style={{ width: "100%", height: "49%", marginTop: "5px"}} className={LuCss.menufone} >
                                <h3>雨前虾仁</h3>
                                <h5>原料：</h5>
                                <p>鲜虾仁150 克，水发海参15 克，葱姜各5 克，豆粉面25 克，精盐1.5克，湿淀粉少许，雨前茶叶15 克，南荠50 克，鸡蛋清1 个，绍酒10 克，清汤50 克，鸡油10 克，白油250 克(约耗50 克)。</p>
                                <h5>做法：</h5>
                                <p>1.准备工作:把虾仁洗净沾干、用鸡蛋清和豆粉面抓匀。南荠去皮用开水焯过，切成0.7 厘米的小丁，姜切末，葱切段。<br/>
                                    2.把"雨前"茶用开水泡上，泡好后晾凉，取茶叶及茶水50 克放碗内，加精盐、绍酒、清汤、湿淀粉对成茶汁。<br/>
                                3.烹调:把炒勺放火上，倒入白油烧至六成热时，下入虾仁拨散至九成熟，倒人漏勺。炒勺内留少许油，放入葱姜一炸，下入海参、南荠，再放虾仁翻炒至匀，倒入茶汁一炒，淋上鸡油出勺装盘即成。</p>
                            </div>
                        </div>
                        

                    </div>
        )
    }
}