import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    
    
    
    
    
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/quickstart">
        <NavLink to="/get-started">🚀 Get Started</NavLink>
      </Menu.Item>
      <Menu.Item key="/wallet">
        <NavLink to="/dashboard">👛 Dashboard</NavLink>
      </Menu.Item>
      <Menu.Item key="/1inch">
        <NavLink to="/bounties">🏦 Bounties</NavLink>
      </Menu.Item>
      <Menu.Item key="onramp">
        <NavLink to="/bonds">💵 Bonds</NavLink>
      </Menu.Item>
      <Menu.Item key="/contract">
        <NavLink to="/contract">📄 Contract</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
