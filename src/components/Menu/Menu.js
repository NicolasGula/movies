import { Menu as MenuTop } from "antd";
import { Link } from "react-router-dom";

import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu-top">
      <div className="menu-top__logo">LOGO</div>

      <MenuTop mode="horizontal" theme="dark" defaultSelectedKeys={["1"]}>
        <MenuTop.Item key="1">
          <Link to="/">HOME</Link>
        </MenuTop.Item>

        <MenuTop.Item key="2">
          <Link to="/new-movies">ULTIMOS LANZAMIENTOS</Link>
        </MenuTop.Item>

        <MenuTop.Item key="3">
          <Link to="/popular">POPULARES</Link>
        </MenuTop.Item>

        <MenuTop.Item key="4">
          <Link to="/search">BUSCADOR</Link>
        </MenuTop.Item>
      </MenuTop>
    </div>
  );
};

export default Menu;
