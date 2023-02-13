import React from 'react';
import alert from '../Images/alert.png';
import { DownOutlined } from "@ant-design/icons";


class EmployeeInfo extends React.Component{
render(){
    return(
        <div style={{padding:'1px',backgroundColor:"white"}}>
            <div className='heading'><DownOutlined /> EMPLOYEE DETAILS</div>
            <div>
                <div className='detail'>
                    <div className='alrt'>
                    <span>Employee ID*</span>
                    <img className='alert' src={alert} alt='alert'/>
                    </div>
                    <span className="rpl">9999</span>
                </div>
                <div className='detail'>
                <div className='alrt'>
                <span>Employee Name*</span>

                <img className='alert' src={alert} alt='alert'/>
                </div>
                    <span className="rpl">Shaikh Vakas</span>
                </div>
                <div className='detail'>
                <div className='alrt'>
                <span>Employee Email*</span>

                <img className='alert' src={alert} alt='alert'/>

                </div>
                    <span className="rpl">shaikhvakasahmed@gmail.com</span>
                </div>
            </div>
        </div>
    )
}
}

export default EmployeeInfo;