import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function CreateOutwards()
 {

    const [godown_id, setGodown_id]=useState("")
    const [item_name, setItem_name]=useState("")
    const [invoice_no, setInvoice_no]=useState("")
    const [date_of_supply, setDate_of_supply]=useState("")
    const [date_of_del, setDate_of_del]=useState("")
    const [delivered_to, setDelivered_to]=useState("")
    const [quantity, setQuantity]=useState("")
    const [purpose, setPurpose]=useState("")
    const [receipt_no, setReceipt_no]=useState("")
    const [bill_value, setBill_value]=useState("")
    const [checked_by, setChecked_by]=useState("")
    
    const navigate=useNavigate();


    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        console.log({godown_id,item_name,invoice_no,date_of_supply,date_of_del,delivered_to,quantity,purpose,receipt_no,bill_value,checked_by})
         const outward = {
           godown_id : godown_id,
            item_name:item_name,
            invoice_no:invoice_no,
            date_of_supply:date_of_supply,
            date_of_del:date_of_del,
            delivered_to:delivered_to,
            quantity:quantity,
            purpose:purpose,
            receipt_no:receipt_no,
            bill_value:bill_value,
            checked_by:checked_by,
            
        }
        console.log(outward)
        try {
            await axios.post('http://localhost:9002/outwards', outward)
                .then(res => {
                   
                    alert("Data posted successfully!")
                    console.log(res);
                    navigate('/outwards')
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
                    <h2>Add Outwards</h2>
                    <div className='mb-2'>
                        <label htmlFor="godown_id">godown_id</label>
                        <input type="number" placeholder="Enter godown_id" className='form-control'
                        value={godown_id}
                        onChange={e=>setGodown_id(e.target.value)}/>
                    </div>

                    

                    <div className='mb-2'>
                        <label htmlFor="item_name">item_name</label>
                        <input type="text" placeholder="Enter Itemname" className='form-control'
                        value={item_name}
                        onChange={e=>setItem_name(e.target.value)}/>
                    </div>


                    <div className='mb-2'>
                        <label htmlFor="invoice_no">invoice_no</label>
                        <input type="text" placeholder="Enter the Invoice number" className='form-control'
                        value={invoice_no}
                        onChange={e=>setInvoice_no(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="date_of_supply">date_of_supply</label>
                        <input type="date" placeholder="Enter the date of Supply" className='form-control'
                        value={date_of_supply}
                        onChange={e=>setDate_of_supply(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="date_of_del">date_of_del</label>
                        <input type="date" placeholder="Enter the date_of_del" className='form-control'
                        value={date_of_del}
                        onChange={e=>setDate_of_del(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="delivered_to">delivered_to</label>
                        <input type="text" placeholder="Enter delivered_to" className='form-control'
                        value={delivered_to}
                        onChange={e=>setDelivered_to(e.target.value)}/>
                    </div>

                     <div className='mb-2'>
                        <label htmlFor="quantity">phone</label>
                        <input type="number" placeholder="Enter the Quantity " className='form-control'
                        value={quantity}
                        onChange={e=>setQuantity(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="purpose">purpose</label>
                        <input type="text" placeholder="purpose" className='form-control'
                        value={purpose}
                        onChange={e=>setPurpose(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="reciept_no">receipt_no</label>
                        <input type="number" placeholder="Mention the reciept number" className='form-control'
                        value={receipt_no}
                        onChange={e=>setReceipt_no(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="bill_value">bill_value</label>
                        <input type="text" placeholder="bill value" className='form-control'
                        value={bill_value}
                        onChange={e=>setBill_value(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="checked_by">checked_by</label>
                        <input type="text" placeholder="checked by" className='form-control'
                        value={checked_by}
                        onChange={e=>setChecked_by(e.target.value)}/>
                    </div>

                    

                    <div className='form-group'>
                        <button className='btn btn-success' type="submit">Submit</button>
                        <Link to="/outwards" className='btn btn-danger'>Back</Link>
                    </div>
                        
                </form>
            </div>
            
        </div>
    );
}

export default CreateOutwards;