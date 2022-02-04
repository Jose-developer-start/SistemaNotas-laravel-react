import React from 'react';
import { Link } from 'react-router-dom';

export default function Aside() {
    return (
        <>
        <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
        <aside class="app-sidebar">
            <div class="app-sidebar__user"><img class="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image" />
                <div>
                <p class ="app-sidebar__user-name">José Deodanes</p>
                <p class ="app-sidebar__user-designation">Developer</p>
                </div>
            </div>
            <ul class="app-menu">
                <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fa fa-edit"></i><span class="app-menu__label">Roles</span><i class="treeview-indicator fa fa-angle-right"></i></a>
                    <ul class="treeview-menu">
                        <li><Link class="treeview-item" to="/usuarios"><i class="icon fa fa-circle-o"></i> Agregar</Link></li>
                    </ul>
                </li>
                <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fa fa-th-list"></i><span class="app-menu__label">Usuarios</span><i class="treeview-indicator fa fa-angle-right"></i></a>
                    <ul class="treeview-menu">
                        <li><a class="treeview-item" href="table-basic.html"><i class="icon fa fa-circle-o"></i> Basic Tables</a></li>
                    </ul>
                </li>
                
            </ul>
        </aside>
        </>
    );
}
