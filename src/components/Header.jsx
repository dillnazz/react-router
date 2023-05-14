import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { Layout, Avatar, Button } from "antd";

const { Header: AntHeader } = Layout;
let user = {
  name:"",
  img:"https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg"
}
user = null;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const menuItems = [
  {
    title:"Home",
    path:'/'
  },
  {
    title:"Meals",
    path:'/meals'
  },
  {
    title:"About",
    path:'/about'
  },
  {
    title:"Info",
    path:'/info'
  },
  {
    title:"Contacts",
    path:'/contacts'
  }
]

const Header = () => {
  const navigate = useNavigate()
  return (
    <AntHeader style={headerStyle}>
      <ul style={{display:"flex", columnGap:"25px"}}>
        {menuItems.map(menu => (
          <li key={menu.title.toLowerCase()}>
            <Link to={menu.path}>{menu.title}</Link>
          </li>
        ))}
        <li>
          {user?.name.length > 0 ?
          <>
           <Avatar src='user.img'/>
          <span style={{marginLeft:"5px"}}>{user.name}</span>
          </>
          :
          <Button onClick={()=>{
            navigate('/auth')
          }}>Sing In</Button>}
        </li>
        </ul>
    </AntHeader>
  );
};

export default Header;
