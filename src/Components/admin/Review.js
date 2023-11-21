import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../styles/table.css'
import AdminNav from './AdminNav'

function Review(props) {
  const [feedback,setFeedback] = useState([]);

   useEffect(()=>{
    axios.get('http://localhost:5003/admin/getAllFeedback')
    .then(users => setFeedback(users.data))
    .catch(err => console.log(err))
   },[])
  return (
    <div>
    <AdminNav updateMode={props.update} modeValue={props.modeValue}  Data={props.Data}/>
    <div className="table-body">
      <table class="table atable">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {
            feedback.map(feed =>{
              return(
                <tr>
                    <td>{feed.name}</td>
                    <td>{feed.email}</td>
                    <td>{feed.message}</td>
                </tr>
              )  
            })
        }
      </tbody>
    </table>
    </div>
    </div>
  )
}

export default Review
