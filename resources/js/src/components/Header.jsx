import React from 'react';

export default function Header() {
  return (
    <header className="app-header"><a className="app-header__logo" href="index.html">EduSys</a>
      <a className="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>

      <ul className="app-nav">
        <li className="dropdown"><a className="app-nav__item" href="#" data-toggle="dropdown" aria-label="Open Profile Menu"><i className="fa fa-user fa-lg"></i></a>
          <ul className="dropdown-menu settings-menu dropdown-menu-right">
            <li><a className="dropdown-item" href="page-user.html"><i className="fa fa-cog fa-lg"></i> Settings</a></li>
            <li><a className="dropdown-item" href="page-user.html"><i className="fa fa-user fa-lg"></i> Profile</a></li>
            <li><a className="dropdown-item" href="page-login.html"><i className="fa fa-sign-out fa-lg"></i> Logout</a></li>
          </ul>
        </li>
      </ul>
    </header>
  );
}
