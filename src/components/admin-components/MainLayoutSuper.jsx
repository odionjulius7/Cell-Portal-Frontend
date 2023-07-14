import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const { Header, Sider, Content } = Layout;

//
const MainLayout = () => {
  // role = ["super", "cell-L", "liaison-O", "zonal-L"]
  const roleState = useSelector((state) => state.auth);
  const [collapsed, setCollapsed] = useState(false);

  const { role } = roleState.user;
  console.log(role);
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">LW</span>
            <span className="lg-logo">Loveworld - Cell</span>
          </h2>
        </div>
        {role === "super" && (
          <Menu
            className="pb-2"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[""]}
            onClick={({ key }) => {
              if (key == "signout") {
                // if key is signout, don't navigate
              } else {
                navigate(key);
                // else navigate using key name
              }
            }}
            items={[
              // ant-design sidebar
              {
                // key(route) is used to link page while navigating
                key: "",
                icon: <AiOutlineDashboard className="fs-4" />,
                label: "Dashboard S",
              },
              {
                // key here won't link page becos this a parent menu that has a dropdown to children menu
                key: "report",
                icon: <AiOutlineShoppingCart className="fs-4" />,
                label: "Reports",
                children: [
                  {
                    key: "all-report",
                    icon: <AiOutlineShoppingCart className="fs-4" />,
                    label: "All Reports",
                  },
                  {
                    key: "zone-list",
                    icon: <AiOutlineShoppingCart className="fs-4" />,
                    label: "By Zone",
                  },
                ],
              },
              {
                key: "all-cells",
                icon: <FaClipboardList className="fs-4" />,
                label: "All Cells",
              },
            ]}
          />
        )}
        {role === "cell-L" && (
          <Menu
            className="pb-2"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[""]}
            onClick={({ key }) => {
              if (key == "signout") {
                // if key is signout, don't navigate
              } else {
                navigate(key);
                // else navigate using key name
              }
            }}
            items={[
              // ant-design sidebar
              {
                // key(route) is used to link page while navigating
                key: "cell",
                icon: <AiOutlineDashboard className="fs-4" />,
                label: "Dashboard C",
              },
              {
                // key(route) is used to link page while navigating
                key: "cell-members",
                icon: <AiOutlineUser className="fs-4" />,
                label: "Cell Members",
              },
              {
                key: "submit-report",
                icon: <FaClipboardList className="fs-4" />,
                label: "Submit Report",
              },
            ]}
          />
        )}
        {role === "liaison-O" && (
          <Menu
            className="pb-2"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[""]}
            onClick={({ key }) => {
              if (key == "signout") {
                // if key is signout, don't navigate
              } else {
                navigate(key);
                // else navigate using key name
              }
            }}
            items={[
              // ant-design sidebar
              {
                // key(route) is used to link page while navigating
                key: "liaison",
                icon: <AiOutlineDashboard className="fs-4" />,
                label: "Dashboard L",
              },
              {
                // key(route) is used to link page while navigating
                key: "cell-by-zone",
                icon: <AiOutlineUser className="fs-4" />,
                label: "Cells List By Zone",
              },
              {
                key: "upload-report",
                icon: <FaClipboardList className="fs-4" />,
                label: "Upload Report",
              },
            ]}
          />
        )}
        {role === "regional-L" && (
          <Menu
            className="pb-2"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[""]}
            onClick={({ key }) => {
              if (key == "signout") {
                // if key is signout, don't navigate
              } else {
                navigate(key);
                // else navigate using key name
              }
            }}
            items={[
              // ant-design sidebar
              {
                // key(route) is used to link page while navigating
                key: "region",
                icon: <AiOutlineDashboard className="fs-4" />,
                label: "Dashboard R",
              },
              {
                // key(route) is used to link page while navigating
                key: "cell-members",
                icon: <AiOutlineUser className="fs-4" />,
                label: "Cell Members",
              },
              {
                key: "upload-report",
                icon: <FaClipboardList className="fs-4" />,
                label: "Upload Report",
              },
            ]}
          />
        )}
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: "#7b7b8838",
            // background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  className="rounded-circle"
                  width={35}
                  height={35}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Julius</h5>
                <p className="mb-0">odionjulius7@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "green",
            // background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
