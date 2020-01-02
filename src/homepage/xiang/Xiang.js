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
var XiangCss = require('../xiang/Xiang.css');
export default class Xiang extends React.Component {
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
        return (<div className={XiangCss.Comment}>
                    <div style={{ width: '100%', background: '#fff', minHeight: 500, marginTop: "20px" }}>
                    <div style={{ width: "100%", height: "50px" }}>
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block', float: "left" }}>
                            <div style={{ width: "100%", height: "60%" }}>
                                <img src={require('../img/牛肉粉.jpg')}></img>
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px", background: "gry" }} className={XiangCss.menufone} >
                                <h3>牛肉粉</h3>
                                <h5>原料:</h5>
                                <p>新鲜黄牛肉1000克，米粉按人配需要量、泡酸莲白、酸萝卜、酸菜(用青菜制成)、牛油、葱、花椒、八角、山奈、草果、沙仁、香叶、茴香、桂皮、盐、干辣椒、高汤、芜荽、味精等适量。</p>
                                <h5>做法：</h5>
                                <p>1、黄牛肉洗净切成大块下锅煮，锅开后反复打去血沫，用纱布把适量的花椒、八角、山奈、草果、沙仁、香叶、茴香、桂皮、干辣椒(整个)包好还有姜块一起放进锅中和牛肉一起小火炖，炖至牛肉基本上熟了捞出一半切成1厘米见方大小的肉丁，如有牛筋也切成丁一起再放到另一个锅中继续炖，直至炖酥烂为止，另一半待凉透了(4个小时以上)切成3厘米宽5厘米长的肉片备用。牛板油炼成牛油单独用容器盛出。</p>
                                <p>2、米粉，用清水漂过;糊辣椒面，用干辣椒烤脆微糊打成面(不要太碎);泡酸莲白，食用时从泡菜坛里捞出切成小片用小碟装好当做配菜;酸菜，切成1.5-2厘米长段;芜荽节成8毫米左右的段;</p>
                                <p>3、食用时按下列顺序操作:米粉(一般一碗牛肉粉约150克-200克)放入开 水锅中烫透，捞入汤碗里，在米粉上铺上牛肉片(25克)，盖上炖熟的牛肉丁(25克)或牛筋丁，放上适量的酸菜，加上少许牛油，最后浇上滚烫的原汤，洒上芫荽节即可。</p>
                            </div>
                        </div>
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block' }}>
                            <div style={{ width: "100%", height: "60%" }}>
                                <img src={require('../img/组庵鱼翅.png')}></img>
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px", background: "gry" }} className={XiangCss.menufone} >
                                <h3> 组庵鱼翅</h3>
                                 <h5>原料:</h5>
                                <p>水发玉结鱼翅2000克 精盐8克 味精2.5克干贝50克 胡椒盐1克 肥母鸡肉1500克 葱结50克 猪肘肉1000克 姜片50克 绍酒150克 熟鸡油25克 </p>
                                <h5>做法：</h5>
                                <p>1、将鸡宰杀去净毛，开膛去内脏洗净，砍成大块，猪肘肉刮洗干净后砍成块，一起下入开水锅内煮过捞出，用清水洗净血沫。葱、姜拍破。干贝掰去边上老筋，洗净后放入葱、姜、料酒和水，上笼蒸发待用。</p>
                                <p>2.取大瓦钵一只，用竹箅子垫底，放入用白稀纱布包好的鱼翅。用鸡汤，加入料酒和葱、姜，在旺火上烧开后移到小火煨约半小时。从锅内取出鱼翅，这道汤倒掉不要，铺上猪肘肉、葱结、姜片、重新产入鱼翅、鸡块，再加入干贝汤、绍酒、精盐、清水1500克用盘盖上，在旺火上烧开，再移至小火上煨约4小时，直至鱼翅软烂、浓香、柔软。然后离火去掉鸡肉、肘肉和葱、姜。将鱼翅从白布中取出，摆放盘中。</p>
                                <p>3.在炒锅内放入熟鸡油，烧至八成热，倒入大瓦钵内的原汤，放入味精，烧开成浓汁，浇在鱼翅上，撒上胡椒粉淋鸡油即成。</p>
                            </div>
                        </div>
                    </div>
                    </div>
                     <div className={XiangCss.comment}>
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