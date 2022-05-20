import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Post = () => {
    const [id,setId] =useState();
    const navigate=useNavigate();
    const handleFetchData=(e)=>{
        e.preventDefault();
        console.log(id)
    }
  return (
    <>
     <div className="row mt-4 d-flex align-items-center justify-content-center">
         <div className="col-md-8">
         <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Search by Id</label>
    <input type="number" value={id} onChange={e=>setId(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <button type="submit" onClick={()=>handleFetchData('/createPost')} class="btn mt-4 btn-primary">Fetch Post</button>
    <button type="submit" onClick={()=>navigate('/createPost')} class="btn mt-4 ms-4 btn-warning">Create Post</button>
  </div>
  
</form>
         </div>
     </div>
    
    </>
  )
}

export default Post