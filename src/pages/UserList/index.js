import React, { useState, useEffect} from 'react';
import api from '../../services/api';

// import { Container } from './styles';

export default function UserList(){
    // State start as an empty array, setUsers can alternate users values
    const [users, setUsers] = useState([]);

    // the first parameter will be executed, the second is when the effect should be shotted,
    // with an empty array, will be shotted only when the component be mounted
    useEffect( ()=>{
        async function loadUsers(){
            const response = await api.get('/users');

            setUsers(response.data);
        }

        loadUsers();
    }, []);

    console.log(users);

    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</ th>
                    <th>E-mail</ th>
                    <th>Rua</ th>
                    <th>Nº</ th>
                    <th></ th>
                </ tr>    
            </ thead>
            <tbody>
                {users.map(user=>(
                    <tr key={user._id}>
                        <td> {user.name} </ td>
                        <td> {user.email} </ td>
                        <td> {user.address.street} </ td>
                        <td> {user.address.number} </ td>
                        <td> 
                            <a href="" > Editar</ a>
                         </ td>
                    </ tr>
                ))}
            </ tbody>
        </ table>

    );
}