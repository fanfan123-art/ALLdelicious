import React from "react";
import { Layout } from 'antd';
const { Content } = Layout;

var HuiCss = require('../hui/Hui.css');
export default class Hui extends React.Component {
    render() {
        return (
            <div>
                <Content style={{ marginTop: 64 }}>   
                    <div style={{ width: '95%', background: '#fff',minHeight:800, marginLeft: '2.5%',marginTop:"50px"}}>
                        <div style={{width:"100%",height:"50px"}}>
                            <img src={require('../img/hui.png')} className={HuiCss.biaopian}></img>
                            <h1 style={{marginLeft:'100px',lineHeight:'50px'}}> 徽菜</h1>
                        </div>
                        <div style={{width:"23%",marginLeft:"20px",marginTop:"10px",height:"400px",display: 'inline-block',float:"left"}}>
                        <div style={{ width: "100%", height: "60%" }}>
                                <img src={require('../img/红烧臭鳜鱼.png')}></img>
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px" }} className={HuiCss.menufone} >
                                <h3>红烧臭鳜鱼</h3>
                                <h5>原料:</h5>
                                <p>原料:腌制好的臭鳜鱼600克，肉碎50克。</p>
                                <p>调料:姜米、蒜茸、葱丝各适量，料酒、老抽、白糖、味精、湿淀粉、红油各少许。</p>
                                <h5>做法：</h5>
                                <p>1、腌制：</p>
                                <p>制作黄山"臭"鳜鱼主要是鳜鱼的腌制，因为鳜鱼腌制的好坏，直接影响到成菜质量。腌制黄山"臭"鳜鱼首先要选用新鲜之鳜鱼，去掉鱼鳞及内脏，清洗干净并沥干水分。可选一木桶，先在木桶底部撒上少许精盐，然后逐一将鱼表面抹上适量的精盐，整齐地放入桶内，一层一层往上码，最后在鳜鱼上面压上重物将鳜鱼压紧，每天上、下翻动一次，数日后闻到"臭"味时便可出桶，将鱼清洗干净便可用来烹制，腌制后的"臭"鳜鱼一次用不完可以冷冻保藏。</p>
                                <p>2.先将臭鳜鱼切成块，洗净待用。</p>
                                <p>3.将臭鳜鱼放入开水中稍焯，沥干水分后待用;勺加底油入葱、姜、蒜末及肉碎炒出香味后下入臭鳜鱼，烹入料酒及老抽，并注水适量，调好口味后大火烧开，改小火烧10分钟即可收汁装盘，稍加点缀即可。</p>
                            </div>
                        </div>
                        <div style={{width:"23%",marginLeft:"20px",marginTop:"10px",height:"400px",display: 'inline-block'}}>
                        <div style={{ width: "100%", height: "60%" }}>
                                <img src={require('../img/火腿炖甲鱼.png')}></img>
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px" }} className={HuiCss.menufone} >
                                <h3>火腿炖甲鱼</h3>
                                <h5>健康功效：</h5>
                                <p>滋阴补阳，营养全面。</p>
                                <h5>原料:</h5>
                                <p>甲鱼500克，火腿骨1/2条，绍酒1汤匙，火腿70克，熟猪肉10克，清汤3杯，香油、小葱、姜各适量，冰糖、胡椒粉少许。</p>
                                <h5>做法：</h5>
                                <p>1.将甲鱼头引出齐甲盖处颈部宰杀，流尽血水，放在80℃热水中浸烫，剥去皮膜，用刀沿甲壳四周划开，掀掉甲盖，去内脏(留下甲鱼蛋)、脚爪和尾，洗净，剁成3.3厘米长、2厘米宽的条块放入滚水锅内，煮至水再滚时捞出，再清洗一次。</p>
                                <p>2.选用肥瘦相连的火腿切成4大块。火腿骨洗净滤干。</p>
                                <p>3.取砂锅一只，先整齐地摆入甲鱼块，然后将火腿、葱(打结)、姜(拍松)和火腿骨围在甲鱼四周，加入清汤和绍酒。盖好盖，用大火煮滚撇去浮沫，放冰糖，改用小火炖1小时左右，去葱、姜和火腿骨不用，火腿取出切成片，放回锅中，淋上香油，洒上胡椒粉即可。</p>
                            </div>
                        </div>
                        <div style={{width:"100px",height:"20px",marginLeft:"48%"}}>未完待续......</div>
                    </div>
                </Content>
            </div>
        )
    }
}