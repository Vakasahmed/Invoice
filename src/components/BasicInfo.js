import React from "react";
import alert from "../Images/alert.png";
import { DownOutlined } from "@ant-design/icons";
import { Input } from 'antd';

const { Search } = Input;


class BasicInfo extends React.Component {
  render() {
    return (
      <div style={{padding:'1px', backgroundColor:'white'}}>
        <div className="heading"> <DownOutlined /> BASIC INFORMATION</div>
        <div>
          <div className="detail">
            <div className="alrt">
              <span>Process Type*</span>

              <img className="alert" src={alert} alt="alert" />
            </div>
            <span className="rpl">Project WO</span>
          </div>
          <div className="detail">
            <div className="alrt">
              <span>Order No*</span>

              <img className="alert" src={alert} alt="alert" />
            </div>

            <div className="rpl">
            <Search enterButton />
            </div>
          </div>
          <div className="detail">
            <div className="alrt">
              <span>Order Status</span>

              <img className="alert" src={alert} alt="alert" />
            </div>
            <span></span>
          </div>
          <div className="detail">
            <div className="alrt">
              <span>Tast Status</span>
              <img className="alert" src={alert} alt="alert" />
            </div>
            <span className="rpl">InProcess</span>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicInfo;
