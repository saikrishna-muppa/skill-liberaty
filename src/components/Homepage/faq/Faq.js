import React from 'react'
import './Faq.css'
import { Tabs, Radio,Collapse } from 'antd';
import 'antd/dist/antd.css';
const { TabPane } = Tabs;
const { Panel } = Collapse;

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'left',
    };
  }

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };
  
  render() {
    const { mode } = this.state;
    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
 function callback(key) {
    console.log(key);
  }

    return (
      <div className="faq-container">
       <h2>FAQ</h2>
        <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          {/* <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button> */}
        </Radio.Group>
        <Tabs defaultActiveKey="0" tabPosition={mode} style={{ height: 220 }}>
          {[...Array.from({ length: 3 }, (v, i) => i)].map(i => (
            <TabPane tab={`Teachig-${i}`} key={i} >
              <div  className="faq-collpase">
      <Collapse accordion>
    <Panel header="This is panel header 1" key="1">
      <p color="">{text + i}</p>
    </Panel>
 
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 4" key="4">
      <p>{text}</p>
    </Panel>
   
  </Collapse></div>
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default Faq