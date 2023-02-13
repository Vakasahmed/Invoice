import { UploadOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Layout, Upload } from "antd";
import React from "react";
import Container from "./Container";

const { Header, Content, Footer, Sider } = Layout;

const Main = () => {
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "white",
          boxShadow: "5px 2px grey",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "40px",
          paddingInline: "10px",
        }}
      >
        <h3>
          <ArrowLeftOutlined />
          Task 992
        </h3>
        <div>
          <Button
            style={{
              color: "white",
              backgroundColor: "rgb(71, 4, 134)",
              marginRight: "5px",
            }}
          >
            Save
          </Button>
          <Button
            style={{ color: "white", backgroundColor: "rgb(71, 4, 134)" }}
          >
            Submit
          </Button>
        </div>
      </Header>
      <Content
        style={{
          padding: "0 50px",
          marginTop: "3px",
        }}
      >
        <Layout style={{height:'80vh'}}>
          <Sider
            style={{
              background: "rgb(220, 218, 218)",
            }}
            width={"50%"}
          >
            <Upload>
              <Button
                className="uploadInv"
                style={{ backgroundColor: "white" }}
                icon={<UploadOutlined />}
              >
                Click to Upload Invoice
              </Button>
            </Upload>
            <hr />
          </Sider>
          <Content style={{height:'80vh'}} width={"50%"}>
            <Container />
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          display: "flex",
        }}
      >
        <div className="btm">
          Currency:
          <span className="val">NA</span>
        </div>
        <div className="btm">
          Inv Basic Amt:
          <span className="val">NA</span>
        </div>
        <div className="btm">
          Basic Tax Amt:
          <span className="val">NA</span>
        </div>
        <div className="btm">
          Inv Total Amt:
          <span className="val">NA</span>
        </div>
        <div className="btm">
          SRN Amt:
          <span className="val">NA</span>
        </div>
        <div className="btm">
          Basic Amt Diff:
          <span className="val">NA</span>
        </div>
        <div className="btm">
          Net Payable Amt:
          <span className="val">NA</span>
        </div>
      </Footer>
    </Layout>
  );
};
export default Main;
