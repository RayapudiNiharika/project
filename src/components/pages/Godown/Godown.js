import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom';



function Godown()  
{

    const[godown, setGodown]=useState([])

    // useEffect(()=>
    // {
    //     axios.get('http://localhost:9002/godown')
    //     .then(res=>setGodown(res.data))
    //     .then(err=>console.log(err))
    // }, [])

    useEffect(()=>
    {
        fetch('http://localhost:9002/godown')
        .then(response=>response.json())
        .then(godown=>setGodown(godown))
        
    }, [])


    return (
        <div className='d-flex vh-100 bg-none justify-content-center aligh-items-center'>
            <div className='w-70 bg-white rounded p-3'>
            <h3 className="p-3 mb-2 bg-secondary text-white">Godown Data</h3>
                <Link to='/creategodown' className='btn btn-success'>Add+</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>godown_id</th>
                            <th>location</th>
                            <th>capacity</th>
                            <th>manager</th>
                            <th>start_date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            godown.map((data,i)=>(
                                <tr key={i}>
                                    <td>{data.godown_id}</td>
                                    <td>{data.location}</td>
                                    <td>{data.capacity}</td>
                                    <td>{data.manager}</td>
                                    <td>{data.start_date}</td>
                                    <td>
                                        <button className='btn btn-danger ms-2' >Delete</button>
                                        <button className='btn btn-primary'>Update</button>
                                        {/* <Link to={`/update/${data.employee_id}`} className='btn btn-primary'>Update</Link> */}
                                        {/* <button className='btn btn-danger ms-2' onClick={handleDelete(data.employee_id)}>Delete</button> */}
                                    </td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );

    
}

export default Godown;
