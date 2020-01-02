import React from 'react';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
var ChuanCss = require('./Chuan.css');
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
export default class Chuan extends React.Component {
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
            <div className={ChuanCss.Comment}>
            <div style={{ width: '100%', background: '#fff', minHeight: 500, marginTop: "20px"}}>
                <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block', float: "left" }}>
                    <div style={{ width: "100%", height: "60%" }}>
                        <img src={require('../img/清炖鸡孚.jpg')}></img>
                    </div>
                    <div style={{ width: "100%", height: "39%", marginTop: "5px" }} className={ChuanCss.menufone} >
                        <h3>清炖鸡孚</h3>
                        <h5>原料：</h5>
                        <p>主料:鸡腿(185克) 猪肉(肥瘦)(185克)<br/>
                        辅料:香菇(鲜)(60克) 火腿(60克) 鸡蛋清(100克)<br/>
                        调料:姜(5克) 黄酒(15克) 小葱(3克) 淀粉(蚕豆)(30克) 盐(2克) 猪油(炼制)(60克)</p>
                        <h5>做法：</h5>
                        <p>1. 香菇去蒂，洗净;<br/>
                        2. 葱姜分别洗净，均切成末;<br/>
                        3. 熟火腿切片;<br/>
                        4. 将猪肉切细，剁成米粒状，放入碗内，加葱末、姜末、精盐少量拌匀;<br/>
                        5. 将鸡肉皮朝下，平摊在砧板上，用刀在鸡肉上轻轻排剁一次;<br/>
                        6. 再将肉茸均匀地平铺在鸡肉上;<br/>
                        7. 仍用刀在肉茸上横竖交叉剁两遍，使猪肉、鸡肉紧密粘在一起，再将鸡肉切成边长3 厘米的菱形块;<br/>
                        8. 将鸡蛋清倒入盘中，用竹筷3 支，搅打成蛋泡糊，加干淀粉拌匀;<br/>
                        9. 再将鸡肉块放入蘸满蛋泡糊;<br/>
                        10. 炒锅置旺火烧热，放入熟猪油烧至五成热时，将鸡块分3 次逐块放入，炸约1 分钟，使鸡块稍起软壳，呈白色，用漏勺捞出，沥油;<br/>
                        11. 放入炒锅内，加鸡清汤600毫升、火腿片、黄酒、精盐少量，盖上锅盖，用旺火烧沸后，再用小火焖约25 分钟，待鸡肉酥烂，放入香菇，再焖5 分钟即成。</p>
                    </div> 
                </div>
                <div>
        
        
      </div>
      
            </div >
            
            <div className={ChuanCss.comment}>
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
