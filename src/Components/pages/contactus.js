import React,{useState} from 'react'
import '../styles/form.css'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

const Form = () => {
  const navigate = useNavigate()

  const [feedback,setFeedback] = useState({name:"",email:"",message:""});
  function updateFeedback(event) {
    const { name, value } = event.target;
    setFeedback((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  //sending data into database
  let  submitFeedback = async (event) =>{
    event.preventDefault();
    try{
        const response = await axios.post('http://localhost:5003/admin/feedback',feedback)
        if(response.data.success){
          {navigate('/')}
        }else{
          console.log(`${response.data.message}`)
        } 
    }catch(error){
      console.log(error);
      console.log("Something went Wrong")
    }
  }
  return (
    <div className='form'>
    <form className='form-form' onSubmit={submitFeedback}>
        <h1>ContactUs<span>  Here!</span></h1>
        <input type='text' name='name' id=''placeholder='Enter Name' value={feedback.name} onChange={updateFeedback}/>
        <input type='email' name='email' id=''placeholder='example@gmail.com' value={feedback.email} onChange={updateFeedback}/>
        <textarea type='message' id='' cols='30' rows='10'placeholder='Type here...' name="message" value={feedback.message} onChange={updateFeedback}/>
        <div > 
          <button className='btn btn-primary' >Submit</button>
        </div>
    </form>
    </div>
    
  )
}

export default Form