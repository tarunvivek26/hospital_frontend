import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../styles/table.css'
import AdminNav from './AdminNav'


function Doctors(props) {
  const [doctor,setDoctor] = useState([]);

  useEffect(()=>{
   axios.get('http://localhost:5003/admin/getAllDoctors')
   .then(users => setDoctor(users.data))
   .catch(err => console.log(err))
  },[])
  return (
    <div>
    <AdminNav updateMode={props.update} modeValue={props.modeValue}  Data={props.Data}/>
    <div className="table-body">
      <table class=" table atable">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope = "col"> Delete</th>
        </tr>
      </thead>
      <tbody>
        {
            doctor.map(doc =>{
              return(
                <tr>
                    <td>{doc.name}</td>
                    <td>{doc.email}</td>
                    <td>
                  <button style={{backgroundColor:"red",color:"white",borderRadius:"7px"}} onClick={() =>{
                        let url = "http://localhost:5003/doctors/delete-doctor/";
                        const response =   axios
                           .delete(url + doc._id)
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

export default Doctors
