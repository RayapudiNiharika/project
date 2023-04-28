import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


function Employees()  
{

    const[employees, setEmployees]=useState([])

    // useEffect(()=>
    // {
    //     axios.get('http://localhost:9002/employees')
    //     .then(res=>setEmployees(res.data))
    //     .then(err=>console.log(err))
    // }, [])

   

    useEffect(()=>
    {
        fetch('http://localhost:9002/employees')
        .then(response=>response.json())
        .then(employees=>setEmployees(employees))
        
    }, [])

    
    function handleDelete(id)
    {
        const confirm=window.confirm("Do you like to delete?");
        console.log(confirm);
        if(confirm){
            axios.delete(`http://localhost:9002/employees/${id}`)
            .then(res=>{
                alert("Record Deleted")
                Navigate('/Welcome')
    
            })

        }
        
    // const handleDelete = async(id)=>
    // {
    //     const confirm=window.confirm("Do you like to delete?");
    //     console.log(confirm,id);
    //     if(confirm){
    //         await axios.delete(`http://localhost:9002/employees/${id}`)
    //         Navigate("/")

    //     }
       
    }



    return (
        <div className='d-flex vh-100 bg-none justify-content-center aligh-items-center my-5 opacity-90 shadow-lg p-3 mb-5  rounded'>
            <div className='w-70 bg-white rounded p-3'>
            <h3 className="p-3 mb-2 bg-secondary text-white">Employees Data</h3>
                <Link to='/createemployee' className='btn btn-success'>Add+</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>employee_id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>password</th>
                            <th>phone</th>
                            <th>godown_id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((data,i)=>(
                                <tr key={i}>
                                    <td>{data.employee_id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    <td>{data.password}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.godown_id}</td>
                                    <td>
                                        <Link to={`/update/${data.id}`} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-2' onClick={()=>handleDelete(data.id)}>Delete</button>
                                        {/* <button className='btn btn-danger ms-2' >Delete</button> */}

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

export default Employees;
