import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

const ListaProdutos = (props) => {
    return <List {...props}>
        <Datagrid>

            <TextField source='titulo' />
            <TextField source='descricao' />
            <DateField source='criadoEm' />
            <EditButton basePath='/produtos' />
            <DeleteButton basePath='/produtos' />
        </Datagrid>

    </List>
}

export default ListaProdutos

