import React from "react";

var HuiCss = require('../hui/Hui.css');
export default class Hui extends React.Component {
    render() {
        return (
                    <div style={{ width: '95%', background: '#fff', minHeight: 500, marginLeft: '2.5%', marginTop: "20px" }}>
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block', float: "left" }}>
                            <div style={{ width: "100%", height: "60%" }}>
                                <img src={require('../img/清炖鸡孚.jpg')}></img>
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px" }} className={HuiCss.menufone} >
                                <h3>清炖鸡孚</h3>
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
                            </div> 
                        </div>
                    </div>
            
        )
    }
}