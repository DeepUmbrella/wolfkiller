import React, { useState, useMemo } from "react";

import "./globalHeader.scss";
import { UserAvatar } from "@components";
import type { MenuProps, MenuTheme } from "antd";
import { Menu, Switch } from "antd";
import { menuArray } from "@constant";
import { DownCircleOutlined } from "@ant-design/icons";
export const GlobalHeader = () => {
  const [current, setCurrent] = useState("unset");
  const [theme, setTheme] = useState<MenuTheme>("dark");

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  const menuItems: MenuProps["items"] = useMemo(
    () =>
      menuArray.map((item) => {
        return {
          label: (
            <a className="menu-item">
              <span>{item.label}</span>
            </a>
          ),
          key: item.key,
        };
      }),
    [menuArray]
  );

  console.log(menuItems, "menuItems");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <header className="global-header">
      <div className="main-content">
        <a href="/" id="logo" className="header-logo">
          <div className="header-logo-com">
            <img src="/logo.svg" alt="yan family logo" />
          </div>
        </a>
        <nav className="nav-left ">
          <div className="header-menu">
            <Menu
              style={{ minWidth: 0, flex: "auto" }}
              onClick={onClick}
              items={menuItems}
              mode="horizontal"
              theme="dark"
              forceSubMenuRender
              overflowedIndicator={
                <div className="menu-item">
                  <DownCircleOutlined style={{ fontSize: 32, width: "100%" }} />
                </div>
              }
            />
          </div>
        </nav>
        <nav className="nav-right">
          <div className="header-user-setting">
            <Switch
              checked={theme === "dark"}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};
