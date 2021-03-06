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
var YueCss = require('../yue/Yue.css');
export default class Yue extends React.Component {
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
            <div className={YueCss.Comment}>
                    <div style={{ width: '100%', background: '#fff', minHeight: 500, marginTop: "20px" }}>
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block', float: "left" }}>
                            <div style={{ width: "100%", height: "60%" }}>
                                <img src={require('../img/白切鸡.jpg')}></img>
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px" }} className={YueCss.menufone} >
                                <h3>白切鸡</h3>
                                <p>原料:净肥嫩雏母鸡1只(重约0.8～1.2公斤为好)、白切鸡成品照片(20张)、葱120克、姜40克、植物油120克、盐15克、香菜：100克</p>
                                <p>调料做法：盐焗味姜葱(原料：生姜20克，盐、糖各少许，葱白30克，盐焗鸡粉1茶匙，油1勺。)</p>
                                <p>做法:</p>
                                <p>1、首先要把姜去皮和葱白洗净，晾干水分。</p>
                                <p>2、把姜、葱、香菜切成碎末、拌匀。</p>
                                <p>3、将姜葱末拿去微波炉加热30秒钟，使它们的香味飘出来后，放盐、糖和盐锔鸡调匀。</p>
                                <p>4、最后锅中烧热一汤勺油，浇在姜葱上即成。</p>
                                <p>(贴士：喜欢口味浓的话，可以加点酱油，味道也是不错的。)</p>
                                <h5>白切鸡做法：</h5>
                                <p>1、将鸡在滚开汤锅内浸烫熟(不宜过熟，一般15分钟左右即可)，取出晾凉后切成块(晾凉再切鸡肉不会散)，装在盘中；</p>
                                <p>(注：为了使鸡皮爽滑生鸡要在热水中烫一下，紧接着用冷水冲凉。 在煮鸡的过程中要几次控净鸡肚子里的水，为的是使鸡肉受热均匀。 浸鸡时要提出水面两次，即每隔5分钟一次，提出后立即倒出鸡腔内的水，复放锅中，以保持腔内外温度一致，使之均匀致熟。然后用铁钩钩起，立即放入冷开水浸没，使之迅速冷却，从而皮爽肉滑，并洗去绒毛黄衣。（如有条件最好用冰冻了的开水，提前将冷却的开水放冰箱里面冻起来，温度越低越好，只要不结冰就行）</p>
                                <p>2、葱，姜切成末；分别装在小碗中，碗内在加少许的盐（姜葱是同放一起调味的，出来只有一个味碟，另外还有姜葱里加少许香菜也可，口味更好）</p>
                                <p>3、炒勺内倒入油，在旺火上烧开，浇在葱末和姜末上。作成两个粘料。</p>
                                <p>4、切好的鸡和粘料一切上桌。</p>
                            </div>
                        </div>
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block' }}>
                            <div style={{ width: "100%", height: "60%" }}>
                                <img src={require('../img/烤乳猪.jpg')}></img>
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px" }} className={YueCss.menufone} >
                                <h3>烤乳猪</h3>
                                <h5>原料:</h5>
                                <p>小乳猪一只（3000克），精盐200克，白糖100克，八角粉5克，五香粉10克，南乳25克，芝麻酱25克，白糖50克，蒜5克，生粉25克，汾酒7克，糖水适量。</p>
                                <p>做法:</p>
                                <p>1.将净光乳猪从内腔劈开，使猪身呈平板状，然后斩断第三、四条肋骨，取出这个部位的全部排骨和两边扇骨，挖出猪脑，在两旁牙关各斩一刀。</p>
                                <p>2.取125克香料匀涂猪内腔，腌30分钟即用铁钩挂起，滴干水分后取下，将除香味料及糖水外的全部调料拌和，匀抹内腔，腌20分钟后叉上，用沸水遍淋猪身使皮绷紧、肉变硬。</p>
                                <p>3.将烫好的猪体头朝上放，用排笔扫刷糖水，用木条在内腔撑起猪身，前后腿也各用一条木条横撑开，扎好猪手。</p>
                                <p>4.点燃炭火，拨作前后两堆，将猪头和臀部烤成嫣红色后用针扎眼排气，然后将猪身遍刷植物油，将炉炭拨成长条形通烤猪身，同时转动叉位使火候均匀，至猪通身成大红色便成。上席时一般用红绸盖之，厨师当众揭开片皮。</p>
                            </div>
                        </div>
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block' }}>
                            <div style={{ width: "100%", height: "60%" }}>
                                <img src={require('../img/糯米鸡.png')}></img>
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px" }} className={YueCss.menufone} >
                                <h3>糯米鸡</h3>
                                <h5>原料:</h5>
                                <p>新鲜大荷叶一片，糯米适量，鸡肉适量，白果、板栗适量，绵线、味精、盐、香葱、大蒜、食用油、酱油少许。</p>
                                <h5>做法：</h5>
                                <p>1、首先将糯米浸泡两个小时左右，再取出滤干，放入蒸锅中蒸熟。</p>
                                <p>2、将鸡肉切成块状，将食用油烧热后将鸡丁放入爆炒，五分熟后将鸡丁取出。</p>
                                <p>3、将辣椒、大蒜炒熟后加入鸡丁，再把鸡丁完全炒熟，同时放入适量味精、盐、香葱。白果和板栗先用白水煮熟。</p>
                                <p>4、做好准备工作后，取出适量蒸好的糯米，在其中夹入炒好的鸡丁、白果和板栗，再加入少许胡椒、味精、盐，用荷叶将糯米包好，外用绵线捆扎，使糯米完全包裹在荷叶中。</p>
                                <p>5、最后将其置于小火上清蒸，到荷叶颜色变暗，荷叶香味已可闻到时，即可取出食用。</p>
                        
                            </div>
                        </div>
                    </div>
            
            <div className={YueCss.comment}>
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