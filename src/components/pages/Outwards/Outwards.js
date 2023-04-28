import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom';



function Outwards()  
{

    const[outwards, setOutwards]=useState([])

    // useEffect(()=>
    // {
    //     axios.get('http://localhost:9002/outwards')
    //     .then(res=>setOutwards(res.data))
    //     .then(err=>console.log(err))
    // }, [])

    useEffect(()=>
    {
        fetch('http://localhost:9002/outwards')
        .then(response=>response.json())
        .then(outwards=>setOutwards(outwards))
        
    }, [])


    const  handleDelete=(id)=>
    {
        const confirm=window.confirm("Do you like to delete?");
        console.log(confirm);
        if(confirm){
            axios.delete(`http://localhost:9002/outwards/${id}`)
            .then(res=>{
                alert("Record Deleted")
                Navigate('/Welcome')
    
            })

        }
    }    


    return (
        <div className='d-flex vh-100 bg-none justify-content-center aligh-items-center my-5 opacity-90 shadow-lg p-3 mb-5  rounded'>
            <div className='w-70 bg-white rounded p-3'>
                <h3 className="p-3 mb-2 bg-secondary text-white">Outwards Data</h3>
                <Link to='/createoutwards' className='btn btn-success'>Add+</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>godown_id</th>
                            <th>item_name</th>
                            <th>invoice_no</th>
                            <th>date_of_supply</th>
                            <th>date_of_del</th>
                            <th>delivered_to</th>
                            <th>quantity</th>
                            <th>purpose</th>
                            <th>receipt_no</th>
                            <th>bill_value</th>
                            <th>checked_by</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            outwards.map((data,i)=>(
                                <tr key={i}>
                                    <td>{data.godown_id}</td>
                                    <td>{data.item_name}</td>
                                    <td>{data.invoice_no}</td>
                                    <td>{data.date_of_supply}</td>
                                    <td>{data.date_of_del}</td>
                                    <td>{data.delivered_to}</td>
                                    <td>{data.quantity}</td>
                                    <td>{data.purpose}</td>
                                    <td>{data.receipt_no}</td>
                                    <td>{data.bill_value}</td>
                                    <td>{data.checked_by}</td>
                                    
                                    <td>
                                        {/* <Link to={`/update/${data.employee_id}`} className='btn btn-primary'>Update</Link> */}
                                        <button className='btn btn-danger ms-2' onClick={()=>handleDelete(data.id)}>Delete</button>
                                        <button className='btn btn-primary'>Update</button>
                                        {/* <button className='btn btn-danger'>Delete</button> */}
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

export default Outwards;
