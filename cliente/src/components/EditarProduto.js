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
                    <TextInput source='preco' />
                    <DateInput label='Editado em' source='criadoEm' />
                </SimpleForm>
            </Edit>
        </div>
    )
}

export default EditarProduto

