import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Posts() {


const [data,setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/post")
    .then(res => setData(res.data))
    .catch(err => console.log(err))

  },[])

    return (
        <div className="container mt-5">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(elem => (
                            <tr>
                                <th scope="row">{elem.id}</th>
                                <td>{elem.name}</td>
                                <td>{elem.surname}</td>
                                <td>{elem.age}</td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

