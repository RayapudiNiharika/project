import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function CreateEmployee()
 {

    const [employee_id, setEmployee_id]=useState("")
    const [name, setName]=useState("")
    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [phone, setPhone]=useState("")
    const [godown_id, setGodown_id]=useState("")
    const navigate=useNavigate();


    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        console.log({employee_id,name,username,email,password,phone,godown_id})
         const employee = {
            employee_id : employee_id,
            name:name,
            username:username,
            email:email,
            password:password,
            phone:phone,
            godown_id:godown_id
        }
        console.log(employee)
        try {
            await axios.post('http://localhost:9002/employees', employee)
                .then(res => {
                   
                    alert("Data posted successfully!")
                    console.log(res);
                    navigate('/employees')
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
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Employee</h2>
                    <div className='mb-2'>
                        <label htmlFor="employee_id">employee_id</label>
                        <input type="text" placeholder="Enter employee_id" className='form-control'
                        value={employee_id}
                        onChange={e=>setEmployee_id(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="name">name</label>
                        <input type="text" placeholder="Enter name" className='form-control'
                        value={name}
                        onChange={e=>setName(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="username">username</label>
                        <input type="text" placeholder="Enter username" className='form-control'
                        value={username}
                        onChange={e=>setUsername(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="email">email</label>
                        <input type="text" placeholder="Enter email" className='form-control'
                        value={email}
                        onChange={e=>setEmail(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="password">password</label>
                        <input type="password" placeholder="Enter password" className='form-control'
                        value={password}
                        onChange={e=>setPassword(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="phone">phone</label>
                        <input type="text" placeholder="Enter phone" className='form-control'
                        value={phone}
                        onChange={e=>setPhone(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="godown_id">godown_id</label>
                        <input type="text" placeholder="Enter godown_id" className='form-control'
                        value={godown_id}
                        onChange={e=>setGodown_id(e.target.value)}/>
                    </div>

                    <div className='form-group'>
                        <button className='btn btn-success' type="submit">Submit</button>
                        <Link to="/employees" className='btn btn-danger'>Back</Link>
                    </div>
                        
                </form>
            </div>
            
        </div>
    );
}

export default CreateEmployee;
