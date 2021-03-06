import React from "react";
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        发布
      </Button>
    </Form.Item>
  </div>
);

var MinCss = require('../min/Min.css');
export default class Min extends React.Component {
    state = {
        comments: [],
        submitting: false,
        value: '',
      };
    
      handleSubmit = () => {
        if (!this.state.value) {
          return;
        }
    
        this.setState({
          submitting: true,
        });
    
        setTimeout(() => {
          this.setState({
            submitting: false,
            value: '',
            comments: [
              {
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: <p>{this.state.value}</p>,
                datetime: moment().fromNow(),
              },
              ...this.state.comments,
            ],
          });
        }, 1000);
      };
    
      handleChange = e => {
        this.setState({
          value: e.target.value,
        });
      };
    
    render() {
        const { comments, submitting, value } = this.state;
        return (
            <div className={MinCss.Comment}>
                    <div style={{ width: '100%', background: '#fff', minHeight: 500, marginTop: "20px" }}>
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block', float: "left" }}>
                            <div style={{ width: "100%", height: "60%" }}>
                                <img src={require('../img/佛跳墙.jpg')}></img>
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px" }} className={MinCss.menufone} >
                                <h3>佛跳墙</h3>
                                <h5>原料：</h5>
                                <p>主料：水发鱼翅500克、净鸭肫6个、水发刺参250克、鸽蛋12个、净肥母鸡1只、水发花冬菇200克、水发猪蹄筋250克、猪肥膘肉95克、大个猪肚1个、羊肘500克、净火腿腱肉150克</p>
                                <p>调料：姜片75克、葱段95克、桂皮10克、炊发干贝125 克、绍酒2500克、净冬笋500克、味精10克、水发鱼唇250克、冰糖75克、鲂肚125克、上等酱油75克、金钱鲍1000克、猪骨汤1000克、猪蹄尖1000克、熟猪油1000克、净鸭1只。</p>
                                <h5>做法：</h5>
                                <p>1.将水发鱼翅去沙，剔整排在竹箅(音 bi 一种竹制蒸用工具，或圆或方)上，放进沸水锅中加葱段30克、姜片15克 、绍酒100克煮10分钟，支其腥味取出，拣去葱、姜，汁不用，将箅拿出放进碗里，鱼翅上摆放猪肥膘肉，加绍酒50克，上笼屉用旺火蒸2小时取出，拣去肥膘肉，滗(音 bi 过滤的意思)去蒸汁。</p>
                                <p>2.鱼唇切成长2厘米、宽4.5厘米的块，放进沸水锅中，加葱段30克、绍酒100克、姜片15克煮10分钟去腥捞出，拣去葱、姜。</p>
                                <p>3.金钱鲍放进笼屉，用旺火蒸取烂取出，洗净后每个片成两片，剞上十字花刀，盛 入小盆，加骨汤250克、绍酒15克，放进笼屉旺火蒸30分钟取出，滗去蒸汁。鸽蛋煮熟，去壳。</p>
                                <p>4.鸡、鸭分别剁去头、颈、脚。猪蹄尖剔壳，拔净毛，洗净。羊肘刮洗干净。以上四料各切12块，与净鸭肫一并下沸水锅氽一下，去掉血水捞起。猪肚里外翻洗干净，用沸水氽两次，去掉浊味后，切成12块，下锅中，加同有汤250克烧沸，加绍酒85克氽一下捞起，汤汁不用。</p>
                                <p>5.将水发刺参洗净，每只切为两片。水发猪蹄筋洗净，切成2寸长的段。净火腿腱肉加清水150克，上笼屉用旺火蒸30分钟取出，滗去蒸汁，切成厚约1厘米的片。冬笋放沸水锅中氽熟捞出，每条直切成四块，用力轻轻拍扁。锅置旺 火上，熟猪油放锅中烧至七成热时，将鸽蛋、冬笋块下锅炸约2分钟捞起。随后，将鱼高鱼肚下锅，炸至手可折断时，倒进漏勺沥去油，然后放入清水中浸透取出，切成长4.5厘米、宽2.5厘米的块。</p>
                                <p>6.锅中留余油50克，用旺火烧至七成热时，将葱段35克、姜片45克下锅炒出香味 后，放入鸡、鸭、羊肘、猪蹄尖、鸭肫、猪肚块炒几下，加入酱油75克、味精10克、冰糖75克、绍酒2150克、骨汤500克、桂皮，加盖煮20分钟后，拣去葱、姜、桂皮，起锅捞出各料盛于盆，汤汁待用。</p>
                                <p>7.取一个绍兴酒坛洗净，加入清水500克，放在微火上烧热，倒净坛中水，坛底放 一个小竹箅，先将煮过的鸡、鸭、羊、肘、猪蹄尖、鸭肫、猪肚块及花冬菇、冬笋块放入，再把鱼翅、火腿片、干贝、鲍鱼片用纱布包成长方形，摆在鸡、鸭等料上，然后倒入煮鸡、鸭等料的汤汁，用荷叶在坛口上封盖着，并倒扣压上一只小碗。装好后，将酒坛置于木炭炉上，用小火煨2小时后启盖，速将刺参、蹄筋、鱼唇、鱼高肚放入坛内，即刻封好坛口，再煨一小时取出，上菜时，将坛口菜胡倒在大盆内，纱布包打开，鸽蛋放在最上面。同时，跟上蓑衣萝卜一碟、火腿拌豆芽一碟、冬菇炒豆苗一碟、油辣芥一碟以及银丝卷、芝麻烧饼佐食。</p>
                                <h5>注意：</h5>
                                <p>1、泡发干贝: 将干贝洗净，装入碗内，加少许高汤和葱、姜，放入笼屉蒸烂即可。</p>
                                <p>2、花冬菇:即可末春初所产的香菇，面有菊花纹。</p>
                                <p>3、鱼肚要用油泡 发，泡刺参时，刺参不能沾油。</p>
                                <p>4、最后各种原料放入坛内，一定要上小火煨制，不可急躁，否则达不到效果。</p>
                                
                            </div>
                        </div>
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block' }}>
                        <div style={{ width: "100%", height: "60%" }}>
                                <img src={require('../img/荔枝肉.png')}></img>
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px" }} className={MinCss.menufone} >
                                <h3>荔枝肉</h3>
                                <h5>原料：</h5>
                                <p>主料:猪肉(瘦) 300克</p>
                                <p>辅料:荸荠100克</p>
                                <p>调料:大葱15克 红糟50克 白醋 10克 酱油 10克 白砂糖 15克 大蒜 5克 淀粉(蚕豆) 10克 味精3克 香油 5克 花生油 50克 各适量</p>
                                <h5>做法：</h5>
                                <p>1.将精肉洗净，切成10×5×1 厘米的厚片，再剖上十字花刀，然后再切为3片。</p>
                                <p>2.马蹄(荸荠)切小块，每粒2~3 块。</p>
                                <p>3.马蹄块与肉片一起用湿淀粉和剁细的红糟抓匀。</p>
                                <p>4.葱去根须，洗净，取葱白切马蹄葱。</p>
                                <p>5.酱油、白醋、白糖、味精、上汤、湿淀粉调卤汁待用。</p>
                                <p>6.锅置旺火上，下花生油八成热时倒入上浆的肉片和马蹄，用勺扒散，待肉剖花成荔枝状时，用漏勺捞起，沥干油。</p>
                                <p>7.锅留余油，先下蒜末、葱白，煸一下再入卤汁烧沸，随即倒入荔枝肉和马蹄块翻炒几下即成。</p>
                            </div>
                        </div>
                    </div>
                    <div className={MinCss.comment}>
                    {comments.length > 0 && <CommentList comments={comments} />}
                    <Comment
                        avatar={
                          <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                          />
                        }
                        content={
                          <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                          />
                        }
                      />
                      </div>
                      </div>
        )
    }
}