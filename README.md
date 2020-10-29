# Sistema Informação Produtos

**instalar VSCode**

https://code.visualstudio.com/download

**Instalar nodeJS**

https://nodejs.org/en/download/

**Instalar git**

https://git-scm.com/download/win

**Criar pasta SI-Produtos**

**Abrir no VSCode**

**Iniciar npm no Terminal**

```
npm init -y
```

**Instalar json-server**

```
npm i json-server
```

**Criar script no ficheiro package.json**

```
"server": "json-server --watch db.json --port 5000"
```

**Criar ficheiro db.json**

```
{
    "produtos": [
        {
            "id": "1",
            "titulo":"Produto 1",
            "descricao": "Computador ASUS MF-20",
            "criadoEm": "09-10-2020"
        },
        {
            "id": "2",
            "titulo":"Produto 2",
            "descricao": "Impressora HP",
            "criadoEm": "09-10-2020"
        },
        {
            "id": "3",
            "titulo":"Produto 3",
            "descricao": "Teclado Rock-FX",
            "criadoEm": "09-10-2020"
        }
    ],
    "utilizadores": [
        {
            "id": "1",
            "nome": "Rui Silva",
            "email": "rsilva@exemplo.pt"
        }
    ]
}
```

**Iniciar servidor no terminal**

```
npm run server
```

**Instalar postman**

https://www.postman.com/downloads/

**Verificar se servidor consegue ir buscar dados a BD**

http://localhost:5000/produtos

http://localhost:5000/utilizadores

**Testar a criação de um utilizador pelo Postman**

escolher POST, body, raw e escolher json

```
{
    "nome": "Joana Santos",
    "email": "jsantos@exemplo.com"
}
```

**Instalar a framework react**

```
npx create-react-app client
```

**Adicionar proxy na pasta cliente, ficheiro package.json**

```
"proxy": "http://localhost:5000"
```

**Adicionar no ficheiro package.json da raiz**

```
"scripts": {
    "server": "json-server --watch db.json --port 5000",
    "client": "npm start --prefix client"
  }
```

**Iniciar cliente no terminal**

```
npm run start
```

**Instalar Concurrently para correr o servidor e cliente ao mesmo tempo**

```
npm i concurrently
```

**Adicionar no ficheiro package.json da raiz**

```
"scripts": {
    "server": "json-server --watch db.json --port 5000",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  }
```

**Iniciar servidor e cliente no terminal**

```
npm run dev
```

**Testar a criação de um utilizador pelo Postman**

escolher POST, body, raw e escolher json

```
{
    "nome": "Luís Almeida",
    "email": "luis.almeida@mail.com"
}
```

**Alterar texto na pagina do React**

em client\src\App.js alterar o texto

**Limpar App**

Apagar conteudo de App.css e logo.svg

em App.js apagar "import logo from './logo.svg';"

apagar tudo entre as Divs de abertura e fechamento

Escrever Olá React entre as Divs

## Criar Frontend

**No terminal entrar na pasta cliente e instalar dependencias**

cd cliente

npm i react-admin ra-data-simple-rest @material-ui/core

**Importar Modulos em App.js**

import { Admin, Resource } from 'react-admin'

import restProvider from 'ra-data-simple-rest'

**Editar function App() em App.js**

```
function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='produtos' lista={ListaProdutos}></Resource>
  </Admin>
}
```

**Importar Modulo em App.js**

import ListaProdutos from './components/listaProdutos'

**Criar pasta components e ficheiro ListaProdutos.js dentro da pasta cliente**

**Instalar extensão ES7 React/Redux/GraphQL/React-Native snippets**

**Em ListaProdutos.js escrever rafce para gerar estrutura de função e escrever o seguinte codigo**

```
import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

const ListaProdutos = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='titulo' />
            <TextField source='descricao' />
            <DateField source='criadoEm' />
            <EditButton basePath='/produtos' />
            <DeleteButton basePath='/produtos' />
        </Datagrid>

    </List>
}

export default ListaProdutos
```

**Em App.js importar ListaProdutos.js**

import ListaProdutos from './components/ListaProdutos'

**Criar na raiz do projeto o ficheiro middleware.js**

**No ficheiro middleware.js inserir o codigo:**

```
const newLocal = module.exports = (_req, res, next) => {
    res.header('Content-Range', 'produtos 0-20/20')
    next()
}
```

**acrescentar no ficheiro package.json**

"server": "json-server --watch db.json --port 5000 --middlewares ./middleware.js",

**no ficheiro App.js acrescentar novo componente**

import CriarProduto from './components/CriarProduto'

<Resource name='produtos' list={ListaProdutos} create={CriarProduto}></Resource>

**criar ficheiro CriarProduto na pasta components**

CriarProduto.js

**dentro de CriarProduto**

escrever **race** para criar estrutura do componente

inserir o seguinte codigo:

```
import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const CriarProduto = (props) => {
    return (
        <div>
            <Create title='Criar Produto' {...props}>
                <SimpleForm>
                    <TextInput source='titulo' />
                    <TextInput multiline source='descricao' />
                    <DateInput label='Criado em' source='criadoEm' />
                </SimpleForm>
            </Create>
        </div>
    )
}

export default CriarProduto
```

**Verificar se ja se pode criar produtos na BD**

**no ficheiro App.js acrescentar novo componente**

import EditarProduto from './components/EditarProduto'

<Resource name='produtos' list={ListaProdutos} create={CriarProduto} edit={EditarProduto}></Resource>

**criar novo ficheiro EditarProduto.js e inserir o codigo**

```
import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const EditarProduto = (props) => {
    return (
        <div>
            <Edit title='Editar Produto' {...props}>
                <SimpleForm>
                    <TextInput disabled source='id' />
                    <TextInput source='titulo' />
                    <TextInput multiline source='descricao' />
                    <DateInput label='Editado em' source='criadoEm' />
                </SimpleForm>
            </Edit>
        </div>
    )
}

export default EditarProduto
```
