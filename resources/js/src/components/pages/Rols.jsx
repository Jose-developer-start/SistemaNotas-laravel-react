import React from 'react';
import Aside from '../Aside';
import AddRols from '../rols/AddRols';
import Header from '../Header';
import Main from '../Main';

export default function Rols() {
  return (
    <>
      <Header />
      <Aside />
      <Main title="Roles" description="Administra los roles del sistema" >
        <AddRols />
      </Main>
    </>
  );
}
