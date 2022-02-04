import React from 'react';
import Aside from '../Aside';
import Header from '../Header';
import Main from '../Main';

export default function Home() {
  return (
    <>
      <Header />
      <Aside />
      <Main title="Incio" description="Bienvenido al panel" >
        <h1>Hola</h1>
      </Main>
    </>
  );
}
