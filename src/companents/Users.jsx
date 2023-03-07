import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Users() {


const [data,setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/users")
    .then(res => setData(res.data))
    .catch(err => console.log(err))

  },[])

    return (
        <div className="container mt-5">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">surname</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(elem => (
                            <tr>
                                <th scope="row">{elem.id}</th>
                                <td>{elem.name}</td>
                                <td>{elem.username}</td>
                                <td>{elem.email}</td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

