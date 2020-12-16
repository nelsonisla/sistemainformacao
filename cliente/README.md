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

**instalar postman**

https://www.postman.com/downloads/

**verificar se servidor consegue ir buscar dados a BD**

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

**instalar a framework react**

```
npm i create-react-app client
```

**Iniciar cliente no terminal**

entrar na pasta cliente

```
npm run client
```
