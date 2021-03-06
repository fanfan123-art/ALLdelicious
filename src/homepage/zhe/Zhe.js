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
var ZheCss = require('../zhe/Zhe.css');
export default class Zhe extends React.Component {
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
            <div className={ZheCss.Comment}>
                    <div style={{ width: '100%', background: '#fff', minHeight: 500, marginTop: "20px" }}>
                        
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block', float: "left" }}>
                            <div style={{ width: "100%", height: "60%" }}>
                                <img src={require('../img/西湖醋鱼.jpg')}></img>
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px" }} className={ZheCss.menufone} >
                                <h3>西湖醋鱼</h3>
                                <h5>原料：</h5>
                                <p>鳊鱼 一条(约重700克) 绍兴陈酒25毫升、酱油75毫升 姜末2.5克、白糖60克 湿淀粉50克、米醋50毫升 胡椒粉适量</p>
                                <h5>做法：</h5>
                                <p>(1)将草鱼饿养两天，促其排尽草料及泥土味，使鱼肉结实，宰杀去掉鳞、鳃、内脏，洗净。</p>
                                <p>(2)把鱼身劈成雌雄两片(连背脊骨一边称雄片，另一边为雌片)，斩去牙齿，在雄片上，从颔下4.5厘米处开始每隔4.5厘米斜片一刀(刀深约5厘米)，刀口斜向头部(共片五刀)，片第三刀时，在腰鳍后处切断，使鱼分成两段。再在雌片脊部厚肉处向腹部斜剞一长刀(深约4至5厘米)，不要损伤鱼皮。</p>
                                <p>(3)将炒锅置旺火上，舀入清水1000克，烧沸后将雄片前后两段相继放入锅内，然后，将雌片并排放入，鱼头对齐，皮朝上(水不能淹没鱼头，胸鳍翘起)盖上锅盖。待锅水再沸时，揭开盖，撇去浮沫，转动炒锅，继续用旺火烧煮，前后共烧约3分钟，用筷子轻轻地扎鱼的雄片颔下部，如能扎入，即熟。炒锅内留下250克清水(余汤撇去)，放入酱油、绍酒和姜末调味后，即将鱼捞出，装在盘中(要鱼皮朝下，两片鱼的背脊拼连，鱼尾段拼接在雄片的切断处)。</p>
                                <p>(4)把炒锅内的汤汁，加入白糖、湿淀粉和醋，用手勺推搅成浓汁，见滚沸起泡，立即起锅，徐徐浇在鱼身上，即成。烹调技巧必须用活草鱼烹制，入开水锅中氽至断生捞出，保持整条不碎，肉质不糊烂。浇鱼卤汁要薄而浓，其味才美。</p>
                            </div>
                        </div>
                    </div>
                    <div className={ZheCss.comment}>
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