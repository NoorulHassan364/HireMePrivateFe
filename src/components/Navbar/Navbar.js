import React from "react";
import { MenuItems } from "./MenuItems";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import UserContext from "../../context/userContext";
import "./Navbar.css";
import {
  LeftSquareFilled,
  MenuOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { UserAPI } from "../../api";
import User from "../../assets/images/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
// import Sidebar from "../Profile/CareGiverProfile/Sidebar";

import {
  Avatar,
  Button,
  PageHeader,
  Typography,
  Dropdown,
  Menu,
  Drawer,
  Form,
  Select,
} from "antd";

const { Option } = Select;

const Navbar = () => {
  const navigate = useNavigate();
  let { emergency } = useParams();
  const [open, setOpen] = React.useState(false);
  const s1 = React.useContext(UserContext);
  const [user, setUser] = React.useState();
  const [searchActive, setSearchActive] = React.useState("");
  const [service, setService] = React.useState();
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (localStorage.getItem("user")) {
      UserAPI.getUser(JSON.parse(localStorage.getItem("user"))?._id).then(
        (res) => {
          setUser(res?.data?.data);
          console.log(res?.data?.data);
        }
      );
    }
  }, []);

  const handleClick = () => {
    setOpen((state) => !state);
  };

  const goToProfile = () => {
    if (user?.role == "careGiver") {
      navigate("/care-giver-profile");
    } else {
      navigate("/profile");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    s1.update();
  };

  const onHandleSearch = () => {
    debugger;
    if (!service && searchActive == "") {
      setSearchActive("active");
    } else if (service && searchActive == "active") {
      debugger;
      emergency = emergency == "true" ? true : false;
      navigate(`/visitor/${emergency}/${service}`);
    } else {
      setSearchActive("");
    }
  };

  const onServiceChange = (e) => {
    setService(e);
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile" onClick={goToProfile}>
        profile
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <nav className="navbar-items">
        <div
          className={
            open ? `navbar-items-part-1 active` : `navbar-items-part-1`
          }
        >
          <h3 className="navbar-logo" onClick={() => navigate("/")}>
            HireMePrivate
          </h3>
          <div className="menu-icon" onClick={handleClick}>
            {open ? <ImCancelCircle /> : <AiOutlineMenu />}
          </div>
        </div>
        <div
          className={
            open ? `navbar-items-part-2 active` : `navbar-items-part-2`
          }
        >
          <ul className={open ? `nav-menu active` : `nav-menu`}>
            {MenuItems?.map((item, index) => {
              return (
                <>
                  <li className="nav-menu-list">
                    <Link className={item?.cName} to={item?.url}>
                      {item?.title}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
          {user && user?.role === "careGiver" ? null : (
            <div className={`search-dropdown ${searchActive}`}>
              <div className={`search-box ${searchActive}`}>
                {/* <input type="text" placeholder="Type to search.." /> */}
                <Form.Item
                  name="service"
                  className={`search-navbar ${searchActive}`}
                >
                  <Select
                    // className={`search-navbar ${searchActive}`}
                    placeholder="Select service do you want"
                    bordered={false}
                    onChange={onServiceChange}
                    allowClear
                  >
                    <Option value="Nanny">Nanny/BabySitter</Option>
                    <Option value="Special Needs Provider">
                      Special Needs Provider
                    </Option>
                    <Option value="Tutor">Tutor</Option>
                    <Option value="Senior Care Provider">
                      Senior Care Provider
                    </Option>
                    <Option value="Pet Care Provider">Pet Care Provider</Option>
                    <Option value="HouseKeeper">HouseKeeper</Option>
                    <Option value="Errands & Odd Jobs Provider">
                      Errands & Odd Jobs Provider
                    </Option>
                  </Select>
                </Form.Item>
                <div className="search-icon" onClick={onHandleSearch}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>

                <div className="search-data"></div>
              </div>
            </div>
          )}
          <div style={{ display: "flex", gap: 8 }}>
            {user ? (
              <Dropdown overlay={menu} trigger={["hover"]}>
                <Avatar
                  size="large"
                  style={{ cursor: "pointer" }}
                  src={user?.profileImg ? user.profileImg : User}
                />
              </Dropdown>
            ) : (
              <>
                <Button type="primary" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button onClick={() => navigate("/get-started")}>
                  Join Now
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// import {
//   Avatar,
//   Button,
//   PageHeader,
//   Typography,
//   Dropdown,
//   Menu,
//   Drawer,
//   Form,
//   Select,
// } from "antd";

// import { useNavigate, Link } from "react-router-dom";
// import UserContext from "../../context/userContext";

// import "./Navbar.css";
// import { MenuOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
// import { UserAPI } from "../../api";
// import User from "../../assets/images/user.png";
// // import Sidebar from "../Profile/CareGiverProfile/Sidebar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

// const { Option } = Select;

// const Navbar = () => {
//   const s1 = React.useContext(UserContext);
//   const [user, setUser] = React.useState();
//   const [open, setOpen] = React.useState(false);
//   const [searchActive, setSearchActive] = React.useState("");
//   const [service, setService] = React.useState();
//   const [form] = Form.useForm();
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     if (localStorage.getItem("user")) {
//       UserAPI.getUser(JSON.parse(localStorage.getItem("user"))?._id).then(
//         (res) => {
//           setUser(res?.data?.data);
//           console.log(res?.data?.data);
//         }
//       );
//     }
//   }, []);

// const goToProfile = () => {
//   if (user?.role == "careGiver") {
//     navigate("/care-giver-profile");
//   } else {
//     navigate("/profile");
//   }
// };

// const handleLogout = () => {
//   localStorage.removeItem("user");
//   navigate("/login");
//   s1.update();
// };

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onHandleSearch = () => {
//     if (!service && searchActive == "") {
//       setSearchActive("active");
//     } else if (service && searchActive == "active") {
//       navigate(`/visitor/${service}`);
//     } else {
//       setSearchActive("");
//     }
//   };

//   const onServiceChange = (e) => {
//     setService(e);
//   };

//   // const menu = (
//   //   <Menu
//   //     items={[
//   //       {
//   //         key: "1",
//   //         label: (
//   //           <a
//   //             target="_blank"
//   //             rel="noopener noreferrer"
//   //             href="https://www.antgroup.com"
//   //           >
//   //             1st menu item
//   //           </a>
//   //         ),
//   //       },
//   //     ]}
//   //   />
//   // );

//   const menu = (
//     <Menu>
//       <Menu.Item key="profile" onClick={goToProfile}>
//         profile
//       </Menu.Item>
//       <Menu.Item key="logout" onClick={handleLogout}>
//         logout
//       </Menu.Item>
//     </Menu>
//   );

//   return (
//     <div className="site-page-header-ghost-wrapper">
//       <PageHeader
//         style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
//         ghost={false}
//         onBack={false}
//         // title={`HireMePrivate`}
//         title={
//           <>
//             {/* <MenuOutlined onClick={showDrawer} /> */}
//             <span style={{ marginLeft: "10px" }}>HireMePrivate</span>
//           </>
//         }
//         extra={[
//           user?.role === "careTaker" ? (
//             <div className={`search-dropdown ${searchActive}`}>
//               <div className={`search-box ${searchActive}`}>
//                 {/* <input type="text" placeholder="Type to search.." /> */}
//                 <Form.Item
//                   name="service"
//                   className={`search-navbar ${searchActive}`}
//                 >
//                   <Select
//                     // className={`search-navbar ${searchActive}`}
//                     placeholder="Select service do you want"
//                     bordered={false}
//                     onChange={onServiceChange}
//                     allowClear
//                   >
//                     <Option value="Nanny">Nanny/BabySitter</Option>
//                     <Option value="Special Needs Provider">
//                       Special Needs Provider
//                     </Option>
//                     <Option value="Tutor">Tutor</Option>
//                     <Option value="Private Lesson Instructor">
//                       Private Lesson Instructor
//                     </Option>
//                     <Option value="Senior Care Provider">
//                       Senior Care Provider
//                     </Option>
//                     <Option value="Pet Care Provider">Pet Care Provider</Option>
//                     <Option value="HouseKeeper">HouseKeeper</Option>
//                     <Option value="Errands & Odd Jobs Provider">
//                       Errands & Odd Jobs Provider
//                     </Option>
//                   </Select>
//                 </Form.Item>
//                 <div className="search-icon" onClick={onHandleSearch}>
//                   <FontAwesomeIcon icon={faMagnifyingGlass} />
//                 </div>

//                 <div className="search-data"></div>
//               </div>
//             </div>
//           ) : null,
//           <Link to="/">
//             <Typography
//               level={"h5"}
//               className="links"
//               // style={{ fontWeight: "bold", color: "gray", marginRight: 6 }}
//             >
//               Jobs
//             </Typography>
//           </Link>,
//           user ? (
//             <Dropdown overlay={menu} trigger={["hover"]}>
//               <Avatar
//                 size="large"
//                 style={{ cursor: "pointer" }}
//                 src={user?.profileImg ? user.profileImg : User}
//               />
//             </Dropdown>
//           ) : (
//             <>
//               <Button key="1" type="primary" onClick={() => navigate("/login")}>
//                 Login
//               </Button>
//               <Button
//                 key="2"
//                 shape="round"
//                 style={{ backgroundColor: "#3EB489", color: "white" }}
//                 onClick={() => navigate("/get-started")}
//               >
//                 Join Now
//               </Button>
//             </>
//           ),
//         ]}
//       />
//       {/* <Sidebar open={open} setOpen={setOpen} /> */}
//     </div>
//   );
// };

// export default Navbar;
