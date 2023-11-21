import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../../styles/user.css'

function Signup() {
    const navigate = useNavigate();
    //saving data
    const [login, setLogin] = useState({ fname: "",lname:"",number:"",email:"",dob:new Date(), password:"",cpassword:"" });
  function updateSignUp(event) {
    const { name, value } = event.target;
    setLogin((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  //sending data into database
  let  submitForm = async (event) =>{
    event.preventDefault();
    console.log(login);
    try{
        const response = await axios.post('http://localhost:5003/user/register',login)
        if(response.data.success){
            console.log(`${response.data.message}`)
            {navigate('/plogin')}
        }else{
           console.lof(`${response.data.message}`)
        } 
    }catch(error){
        console.log(error);
        console.log("Something went Wrong")
    }
  }   
  return (
    <div className='bg_signup signup template d-flex justify-content-center align-items-center vh-100 '>
            <div className='form_container_signup p-5 rounded '>
                <form onSubmit={submitForm}>
                <h3 className='text-center'>Sign Up</h3>
                
                <div className='mb-2'>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text' placeholder='Enter First Name' className='form-control' value={login.fname} onChange={updateSignUp} name="fname"/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' placeholder='Enter Last Name' className='form-control' value={login.lname} onChange={updateSignUp} name="lname"/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='number'>Phone no.</label>
                    <input type='number' placeholder='Enter Phone no.' className='form-control' value={login.number} onChange={updateSignUp} name="number"/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control' value={login.email} onChange={updateSignUp} name="email"/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='dob'>Date-of-Birth</label>
                    <input type='date' placeholder='Enter Last Name' className='form-control' value={login.dob} onChange={updateSignUp} name="dob"/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter Password' className='form-control' value={login.password} onChange={updateSignUp} name="password"/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='cpassword'>Confirm Password</label>
                    <input type='password' placeholder='Enter Password' className='form-control' value={login.cpassword} onChange={updateSignUp} name="cpassword"/>
                </div>

                <div className='d-grid'>
                    <button className='btn btn-primary'>Sign UP</button>
                </div>

                <p className='text-end mt-2'>
                    Already have an account<Link to='/plogin' className='ms-2'>Sign in</Link>
                </p>
                  </form>
            </div>
        </div>
  )
}

export default Signup