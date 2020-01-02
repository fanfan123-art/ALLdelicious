import React from "react";
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import { Empty } from 'antd';
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
var HuiCss = require('../hui/Hui.css');
export default class Hui extends React.Component {
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
            <div className={HuiCss.Comment}>
                    <div style={{ width: '100%', background: '#fff', minHeight: 500, marginTop: "20px" }}>
                        <div style={{ width: "23%", marginLeft: "20px", marginTop: "10px", height: "400px", display: 'inline-block', float: "left"}}>
                            <div style={{ width: "100%", height: "60%" }}>
                            <Empty  />
                            </div>
                            <div style={{ width: "100%", height: "39%", marginTop: "5px" }} className={HuiCss.menufone} >
                                
                            </div> 
                        </div>
                    </div>
                    <div className={HuiCss.comment}>
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