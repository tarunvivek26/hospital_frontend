import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../styles/table.css'
import AdminNav from './AdminNav'

function Users(props) {
    const [user,setUser] = useState([]);

   useEffect(()=>{
    axios.get('http://localhost:5003/admin/getAllUsers')
    .then(users => setUser(users.data))
    .catch(err => console.log(err))
   },[])
  return (
    <div>
    <AdminNav updateMode={props.update} modeValue={props.modeValue}  Data={props.Data}/>
    <div className="table-body">
    <table class="table  atable">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col"> Delete Button</th>
        </tr> 
      </thead>
  <tbody>
    {
        user.map(pat =>{
          return(
            <tr>
                <td>{pat.fname}</td>
                <td>{pat.lname}</td>
                <td>{pat.email}</td>
                <td>
                  <button style={{backgroundColor:"red",color:"white",borderRadius:"7px"}} onClick={() =>{
                        let url = "http://localhost:5003/user/delete-user/";
                        const response =   axios
                           .delete(url + pat._id)
                           .then((res) => {
                             console.log(res)
                             if (res.status === 204) {
                               window.location.reload();
                             } 
                           })
                           .catch((err) => {
                             console.log(err);
                           });
                  }}>
                    delete
                  </button>
                </td>
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

export default Users
