import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function CreateInwards()
 {

    const [godown_id, setGodown_id]=useState("")
    const [supplier_name, setSupplier_name]=useState("")
    const [item_name, setItem_name]=useState("")
    const [date_of_supply, setDate_of_supply]=useState("")
    const [invoice_no, setInvoice_no]=useState("")
    const [quantity, setQuantity]=useState("")
    const [received_by, setReceived_by]=useState("")
    const [receipt_no, setReceipt_no]=useState("")
    const [checked_by, setChecked_by]=useState("")
    const [item_id, setItem_id]=useState("")
    const navigate=useNavigate();


    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        console.log({godown_id,supplier_name,item_name,date_of_supply,invoice_no,quantity,received_by,receipt_no,checked_by,item_id})
         const inward = {
           godown_id : godown_id,
            supplier_name:supplier_name,
            item_name:item_name,
            date_of_supply:date_of_supply,
            invoice_no:invoice_no,
            quantity:quantity,
            received_by:received_by,
            receipt_no:receipt_no,
            checked_by:checked_by,
            item_id:item_id
        }
        console.log(inward)
        try {
            await axios.post('http://localhost:9002/inwards', inward)
                .then(res => {
                   
                    alert("Data posted successfully!")
                    console.log(res);
                    navigate('/inwards')
                })

        }
        catch(error){
            console.log(error.response.data)
        }

        

        // fetch("http://localhost:9090/employees",
        // {
        //     method:"POST",
        //     headers:{"content-type":"application/json"},
        //     body:JSON.stringify(employeedata)
        // }).then((res)=>{
        //     alert('saved successfully')
        //     navigate("/")
        // }).catch((err)=>{
        //     console.log(err.message)
        // })
    }
        
    
    
    return (
        <div className='d-flex vh-50 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Inwards</h2>
                    <div className='mb-2'>
                        <label htmlFor="godown_id">godown_id</label>
                        <input type="number" placeholder="Enter godown_id" className='form-control'
                        value={godown_id}
                        onChange={e=>setGodown_id(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="supplier_name">name</label>
                        <input type="text" placeholder="Enter Supplier name" className='form-control'
                        value={supplier_name}
                        onChange={e=>setSupplier_name(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="itemname">item_name</label>
                        <input type="text" placeholder="Enter Itemname" className='form-control'
                        value={item_name}
                        onChange={e=>setItem_name(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="date_of_supply">date_of_supply</label>
                        <input type="date" placeholder="Enter the date of Supply" className='form-control'
                        value={date_of_supply}
                        onChange={e=>setDate_of_supply(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="invoice_no">invoice_no</label>
                        <input type="text" placeholder="Enter the Invoice number" className='form-control'
                        value={invoice_no}
                        onChange={e=>setInvoice_no(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="quantity">phone</label>
                        <input type="number" placeholder="Enter the Quantity " className='form-control'
                        value={quantity}
                        onChange={e=>setQuantity(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="recieved_by">received_by</label>
                        <input type="text" placeholder="Mention who recieved the product" className='form-control'
                        value={received_by}
                        onChange={e=>setReceived_by(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="reciept_no">receipt_no</label>
                        <input type="number" placeholder="Mention the reciept number" className='form-control'
                        value={receipt_no}
                        onChange={e=>setReceipt_no(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="checked_by">checked_by</label>
                        <input type="text" placeholder="Mention who checked the product" className='form-control'
                        value={checked_by}
                        onChange={e=>setChecked_by(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="item_id">item_id</label>
                        <input type="text" placeholder="Mention the item ID" className='form-control'
                        value={item_id}
                        onChange={e=>setItem_id(e.target.value)}/>
                    </div>

                    <div className='form-group'>
                        <button className='btn btn-success' type="submit">Submit</button>
                        <Link to="/inwards" className='btn btn-danger'>Back</Link>
                    </div>
                        
                </form>
            </div>
            
        </div>
    );
}

export default CreateInwards;