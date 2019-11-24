import React from "react";
import { Layout } from 'antd';
const { Content } = Layout;

var SuCss = require('../su/Su.css');
export default class Su extends React.Component {
    render() {
        return (
            <div>
                <Content style={{ marginTop: 64 }}>
                    <div style={{ width: '95%', background: '#fff', minHeight: 500, marginLeft: '2.5%', marginTop: "50px" }}>
                        <div style={{ width: "100%", height: "50px" }}>
                            <img src={require('../img/su.png')} className={SuCss.biaopian}></img>
                            <h1 style={{ marginLeft: '100px', lineHeight: '50px' }}> 苏菜</h1>
                        </div>
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block', float: "left" }}>
                            <div style={{ width: "100%", height: "60%" }}>
                                <img src={require('../img/清炖鸡孚.jpg')}></img>
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px" }} className={SuCss.menufone} >
                                <h3>清炖鸡孚</h3>
                                <h5>健康功效：</h5>
                                <p>鸡腿:鸡腿肉肉蛋白质的含量比例较高，种类多，而且消化率高，很容易被人体吸收利用，有增强体力、强壮身体的作用。</p>
                                <p>猪肉(肥瘦):猪肉含有丰富的优质蛋白质和必需的脂肪酸，并提供血红素(有机铁)和促进铁吸收的半胱氨酸，能改善缺铁性贫血;具有补肾养血，滋阴润燥的功效;</p>
                                <p>鸡蛋清:鸡蛋清富含蛋白质和人体必需的8种氨基酸和少量醋酸，可以增强皮肤的润滑作用，保护皮肤的微酸性，以防细菌感染;此外，鸡蛋清还具有清热解毒作用;我国中医还认为，鸡蛋清性微寒而气清，能易经补气，润肺利咽，清热解毒，有助于延缓衰老。</p>
                                <h5>原料：</h5>
                                <p>主料:鸡腿(185克) 猪肉(肥瘦)(185克)</p>
                                <p>辅料:香菇(鲜)(60克) 火腿(60克) 鸡蛋清(100克)</p>
                                <p>调料:姜(5克) 黄酒(15克) 小葱(3克) 淀粉(蚕豆)(30克) 盐(2克) 猪油(炼制)(60克)</p>
                                <p>做法：</p>
                                <p>1. 香菇去蒂，洗净;</p>
                                <p>2. 葱姜分别洗净，均切成末;</p>
                                <p>3. 熟火腿切片;</p>
                                <p>4. 将猪肉切细，剁成米粒状，放入碗内，加葱末、姜末、精盐少量拌匀;</p>
                                <p>5. 将鸡肉皮朝下，平摊在砧板上，用刀在鸡肉上轻轻排剁一次;</p>
                                <p>6. 再将肉茸均匀地平铺在鸡肉上;</p>
                                <p>7. 仍用刀在肉茸上横竖交叉剁两遍，使猪肉、鸡肉紧密粘在一起，再将鸡肉切成边长3 厘米的菱形块;</p>
                                <p>8. 将鸡蛋清倒入盘中，用竹筷3 支，搅打成蛋泡糊，加干淀粉拌匀;</p>
                                <p>9. 再将鸡肉块放入蘸满蛋泡糊;</p>
                                <p>10. 炒锅置旺火烧热，放入熟猪油烧至五成热时，将鸡块分3 次逐块放入，炸约1 分钟，使鸡块稍起软壳，呈白色，用漏勺捞出，沥油;</p>
                                <p>11. 放入炒锅内，加鸡清汤600毫升、火腿片、黄酒、精盐少量，盖上锅盖，用旺火烧沸后，再用小火焖约25 分钟，待鸡肉酥烂，放入香菇，再焖5 分钟即成。</p>
                                <h5>食谱相克：</h5>
                                <p>鸡腿:鸡腿肉忌与野鸡、甲鱼、芥末、鲤鱼、鲫鱼、兔肉、李子、虾子、芝麻、菊花以及葱蒜等一同食用;与芝麻、菊花同食易中毒;与李子、兔肉同食，会导致腹泻;与芥末同食会上火。</p>
                                <p>猪肉(肥瘦):猪肉不宜与乌梅、甘草、鲫鱼、虾、鸽肉、田螺、杏仁、驴肉、羊肝、香菜、甲鱼、菱角、荞麦、鹌鹑肉、牛肉同食。食用猪肉后不宜大量饮茶。</p>
                                <p>鸡蛋清:鸡蛋清不能与白糖、豆浆、兔肉同食。</p>
                            </div> 
                        </div>
                        <div style={{width:"100px",height:"20px",marginLeft:"48%",marginTop:"470px"}}>未完待续......</div>
                    </div>
                </Content>
            </div>
        )
    }
}