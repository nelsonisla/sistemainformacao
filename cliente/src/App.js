import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import ListaProdutos from './components/ListaProdutos'
import CriarProduto from './components/CriarProduto'
import EditarProduto from './components/EditarProduto'

function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='produtos' list={ListaProdutos} create={CriarProduto} edit={EditarProduto}></Resource>
  </Admin>
}

export default App;
