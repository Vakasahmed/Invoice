import React from "react";
import alert from '../Images/alert.png';
import { DownOutlined } from "@ant-design/icons";


class CompanyInfo extends React.Component {
  render() {
    return (
      <div style={{padding:'1px',backgroundColor:'white'}}>
        <div className="heading"> <DownOutlined /> COMPANY DETAILS</div>
        <div className="detail">
          <div className="alrt">
            <span>Plant Name(Nusiness Place Name/Ship)</span>
            <img className="alert" src={alert} alt="alert" />
          </div>
        </div>
        <div className="detail">
          <div className="alrt">
            <span>Plant Code</span>

            <img className="alert" src={alert} alt="alert" />
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyInfo;
