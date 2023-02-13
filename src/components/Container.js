import { Anchor } from "antd";
import EmployeeInfo from "./EmployeeInfo";
import BasicInfo from "./BasicInfo";
import CompanyInfo from "./CompanyInfo";
const Container = () => (
  <>
    <div
      style={{
        marginBottom:'10px'
      }}
    >
      <Anchor
        direction="horizontal"
        items={[
          {
            key: "part-1",
            href: "#part-1",
            title: "Invoice Details",
          },
          {
            key: "part-2",
            href: "#part-2",
            title: "Vendor Evaluation",
          },
          {
            key: "part-3",
            href: "#part-3",
            title: "Checklist",
          },
          {
            key: "part-4",
            href: "#part-4",
            title: "PD Details",
          },
        ]}
      />
    </div>
    <div>
      <div id="part-1">
        <EmployeeInfo />
        <BasicInfo />
        <CompanyInfo />
      </div>
    </div>
  </>
);
export default Container;
