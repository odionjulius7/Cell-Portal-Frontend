import React, { useEffect } from "react";
import { Column } from "@ant-design/plots";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Dropdown,
  Space,
  Switch,
  Table,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import PieChart from "../components/Charts/PieChart";

import SVG from "../IMG/SVGImg.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

/* ant design table header */
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Cell Name",
    dataIndex: "name",
  },
  {
    title: "Cell Count",
    dataIndex: "product",
  },
  {
    title: "Zone",
    dataIndex: "status",
  },
];

/* ant design table data */
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i + 1,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

const CellLeader = () => {
  const roleState = useSelector((state) => state.auth);
  const { role } = roleState.user;

  const items = [
    {
      key: "1",
      label: <Link to="/cell/1">view user</Link>,
    },
    {
      key: "2",
      // danger: true,
      label: (
        <Space direction="vertical">
          <Switch
            checkedChildren="marked"
            unCheckedChildren="unmarked"
            defaultChecked
          />
        </Space>
      ),
    },
  ];

  const navigate = useNavigate();
  useEffect(() => {
    // role = ["super", "cell-L", "liaison-O", "zonal-L"]
    if (role === "super") {
      navigate("/admin");
    }
    if (role === "regional-L") {
      navigate("/admin/region");
    }
    if (role === "liaison-O") {
      navigate("/admin/liaison");
    }
  }, []);
  return (
    <div>
      <h3 className="mb-4 title">Cell Dashboard Placeholder</h3>
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col mb-4">
              <Card
                // title="Card title"
                bordered={false}
                style={{
                  width: "100%",
                  background: "#6259ca",
                  color: "white",
                  // padding: "1rem",
                  // textAlign: "center",
                }}
              >
                <div className="row">
                  <div className="col-4 align-self-lg-stretch">
                    <img
                      src={SVG}
                      alt=""
                      width={150}
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="col-8">
                    <h4>Announcement </h4>
                    <div className="row">
                      <p className="col">
                        Julius vel eius accusantium est harum quisquam nobis
                        voluptatibus content content .
                      </p>
                      <p className="col">
                        Julius vel eius accusantium est harum quisquam nobis
                        voluptatibus content content . .
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-3">
            <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
              <div>
                <p className="desc">Cell Metric</p>
                <h4 className="mb-0 sub-title">1100</h4>
              </div>
              <div className="d-flex flex-column align-items-end">
                <h6>
                  {/* <BsArrowDownRight /> */}
                  32% increase
                </h6>
                <p className="mb-0  desc"> As at April 2022</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
              <div>
                <p className="desc">Cell Metric</p>
                <h4 className="mb-0 sub-title">1100</h4>
              </div>
              <div className="d-flex flex-column align-items-end">
                <h6>
                  {/* <BsArrowDownRight /> */}
                  32%
                </h6>
                <p className="mb-0  desc"> April 2022</p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="mb-3 title">Members Table</h3>
            <div>
              <Table columns={columns} dataSource={data1} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <Card
            // title="Card title"
            bordered={false}
            style={{
              width: "100%",
            }}
          >
            <div className="row" style={{ gap: "1.9rem" }}>
              <div>
                <h4>Top Members</h4>
              </div>
              <div className="d-flex flex-row justify-content-between bg-muted  border-bottom py-1">
                <Space size={24}>
                  <Badge dot={false}>
                    <Avatar
                      shape="circle"
                      src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                    />
                  </Badge>
                  <div className="d-flex flex-column gap-1">
                    <h6 className="p-0 m-0">UserName</h6>
                    <span>Position</span>
                  </div>
                </Space>
                <div>
                  <Dropdown menu={{ items }} className="py-1 my-2">
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Mark Cell Leader
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>

                  {/* <p className="text-info p-0 m-0">Mark as leader</p> */}
                  <p className=" p-0 m-0">
                    status: <em className="text-warning">Not Active</em>{" "}
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between bg-muted  border-bottom py-1">
                <Space size={24}>
                  <Badge dot={false}>
                    <Avatar
                      shape="circle"
                      src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                    />
                  </Badge>
                  <div className="d-flex flex-column gap-1">
                    <h6 className="p-0 m-0">UserName</h6>
                    <span>Position</span>
                  </div>
                </Space>
                <div>
                  <Dropdown menu={{ items }} className="py-1 my-2">
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Mark Cell Leader
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>

                  {/* <p className="text-info p-0 m-0">Mark as leader</p> */}
                  <p className=" p-0 m-0">
                    status: <em className="text-warning">Not Active</em>{" "}
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between bg-muted  border-bottom py-1 pb-2">
                <Space size={24}>
                  <Badge dot={false}>
                    <Avatar
                      shape="circle"
                      src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                    />
                  </Badge>
                  <div className="d-flex flex-column gap-1">
                    <h6 className="p-0 m-0">UserName</h6>
                    <span>Position</span>
                  </div>
                </Space>
                <div>
                  <Dropdown menu={{ items }} className="py-1 my-2">
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Mark Cell Leader
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>

                  {/* <p className="text-info p-0 m-0">Mark as leader</p> */}
                  <p className=" p-0 m-0">
                    status: <em className="text-warning">Not Active</em>{" "}
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <div className=" mt-4 bg-white py-2 px-4">
            <h4 className="mb-4 mt-2 ml-2 title">Register Your Members</h4>
            <span className="mb-4 ml-2 title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              repellendus
            </span>
            <Button className="my-4">Copy Link</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CellLeader;
