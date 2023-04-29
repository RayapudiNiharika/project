import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Return()  
{

    const[returns, setReturn]=useState([])
    const navigate=useNavigate();

    // useEffect(()=>
    // {
    //     axios.get('http://localhost:9002/employees')
    //     .then(res=>setEmployees(res.data))
    //     .then(err=>console.log(err))
    // }, [])

   

    useEffect(()=>
    {
        fetch('http://localhost:9002/returns')
        .then(response=>response.json())
        .then(returns=>setReturn(returns))
        
    }, [])

    
    function handleDelete(id)
    {
        const confirm=window.confirm("Do you like to delete?");
        console.log(confirm);
        if(confirm){
            axios.delete(`http://localhost:9002/returns/${id}`)
            .then(res=>{
                alert("Record Deleted")
                // navigate('/Welcome')
    
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
            <h3 className="p-3 mb-2 bg-secondary text-white">Returns Data</h3>
                {/* <Link to='/createreturn' className='btn btn-success'>Add+</Link> */}
                <table className='table'>
                    <thead>
                        <tr>
                            <th>item_name</th>
                            <th>capacity</th>
                            <th>manager</th>
                            <th>date_of_del</th>
                            <th>date_of_return</th>
                            <th>godown_id</th>
                            <th>quantity</th>
                            <th>invoice_no</th>
                            <th>return_by</th>
                            <th>receipt_no</th>
                            <th>bill_value</th>
                            <th>checked_by</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            returns.map((data,i)=>(
                                <tr key={i}>
                                    <td>{data.item_name}</td>
                                    <td>{data.capacity}</td>
                                    <td>{data.manager}</td>
                                    <td>{data.date_of_del}</td>
                                    <td>{data.date_of_return}</td>
                                    <td>{data.godown_id}</td>
                                    <td>{data.quantity}</td>
                                    <td>{data.invoice_no}</td>
                                    <td>{data.return_by}</td>
                                    <td>{data.receipt_no}</td>
                                    <td>{data.bill_value}</td>
                                    <td>{data.checked_by}</td>
                                    <td>
                                        {/* <Link to={`/update/${data.id}`} className='btn btn-primary'>Update</Link> */}
                                        {/* <button className='btn btn-danger ms-2' onClick={()=>handleDelete(data.id)}>Delete</button> */}
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

export default Return;