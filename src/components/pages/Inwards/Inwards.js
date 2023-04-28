import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom';



function Inwards()  
{

    const[inwards, setInwards]=useState([])

    // useEffect(()=>
    // {
    //     axios.get('http://localhost:9002/inwards')
    //     .then(res=>setInwards(res.data))
    //     .then(err=>console.log(err))
    // }, [])

    useEffect(()=>
    {
        fetch('http://localhost:9002/inwards')
        .then(response=>response.json())
        .then(inwards=>setInwards(inwards))
        
    }, [])


    const  handleDelete=(id)=>
    {
        const confirm=window.confirm("Do you like to delete?");
        console.log(confirm);
        if(confirm){
            axios.delete(`http://localhost:9002/inwards/${id}`)
            .then(res=>{
                alert("Record Deleted")
                Navigate('/Welcome')
    
            })

        }
    }    


    return (
        <div className='d-flex vh-100 bg-none justify-content-center aligh-items-center my-5 opacity-90 shadow-lg p-3 mb-5  rounded'>
            <div className='w-70 bg-white rounded p-3'>
                <h3 className="p-3 mb-2 bg-secondary text-white">Inwards Data</h3>
                <Link to='/createinwards' className='btn btn-success'>Add+</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>godown_id</th>
                            <th>supplier_name</th>
                            <th>item_name</th>
                            <th>date_of_supply</th>
                            <th>invoice_no</th>
                            <th>quantity</th>
                            <th>received_by</th>
                            <th>receipt_no</th>
                            <th>checked_by</th>
                            <th>item_id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            inwards.map((data,i)=>(
                                <tr key={i}>
                                    <td>{data.godown_id}</td>
                                    <td>{data.supplier_name}</td>
                                    <td>{data.item_name}</td>
                                    <td>{data.date_of_supply}</td>
                                    <td>{data.invoice_no}</td>
                                    <td>{data.quantity}</td>
                                    <td>{data.received_by}</td>
                                    <td>{data.receipt_no}</td>
                                    <td>{data.checked_by}</td>
                                    <td>{data.item_id}</td>
                                    <td>
                                        {/* <Link to={`/update/${data.employee_id}`} className='btn btn-primary'>Update</Link> */}
                                        <button className='btn btn-danger ms-2' onClick={()=>handleDelete(data.id)}>Delete</button>
                                        {/* <button className='btn btn-primary'>Update</button>
                                        <button className='btn btn-danger'>Delete</button> */}
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

export default Inwards;
