import React , {useState, useEffect} from 'react';
import { Form, Input, Scope } from 'unform';
import api from '../../services/api';

// import { Container } from './styles';
// History is from react router dom, history.push is to redirect
export default function UserForm({history, match}){
    const [data, setData] = useState({})

  async   function handleSubmit(data){
       await api.postOrPut('/users', match.params.id, data);

       history.push('/users');
    }

    useEffect(() =>{

        async function loadData( ){
            const { id } = match.params;
            const response =  await api.get(`/users/${id}`);
            setData(response.data);
        }

        if (match.params.id){
            loadData();
        }
    }, [ match.params.id , match.params.id] );

    return (
        <Form initialData={data} onSubmit={handleSubmit}>
            <Input name="name" label="Nome"></Input>
            <Input name="email" label="E-mail"></Input>

            <Scope path="address">
                <Input name="street" label="Rua"></Input>
                <Input name="number" label="Número"></Input>
            </Scope>

            <button type= "submit">Enviar</button>
        </Form>
    );
}