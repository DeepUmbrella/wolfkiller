import React from "react";

import "./globalHeader.scss";

export const GlobalHeader = () => {
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
            <a className="menu-item">
              <span>游戏大厅</span>
            </a>
            <a className="menu-item">
              <span>社交广场</span>
            </a>
            <a className="menu-item">
              <span>公告通知</span>
            </a>
            <a className="menu-item">
              <span>联系我们</span>
            </a>
            <a className="menu-item">
              <span>关于我们</span>
            </a>
          </div>
        </nav>
        <nav className="nav-right">
          <div className="header-user-setting">
            <a className="user-setting menu-item">
              <span>夜间模式</span>
            </a>
            <a className="user-setting menu-item">
              <span>设置</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
