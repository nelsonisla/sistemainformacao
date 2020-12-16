import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const CriarProduto = (props) => {
    return (
        <div>
            <Create title='Criar Produto' {...props}>
                <SimpleForm>
                    <TextInput source='titulo' />
                    <TextInput multiline source='descricao' />
                    <TextInput source='preco' />
                    <DateInput label='Criado em' source='criadoEm' />
                </SimpleForm>
            </Create>
        </div>
    )
}

export default CriarProduto
