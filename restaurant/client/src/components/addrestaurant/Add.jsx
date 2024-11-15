import React,{useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {Link,useNavigate} from'react-router-dom';
import "./add.css";


const Add=()=>{
    const restaurents = {
        name:"",
        Type:"",
        Location:"",
        Rating:"",
        Top_food:""
    };
    const [Restaurent,setRestaurent] = useState(restaurents)
    const navigate=useNavigate();

    const inputHandler = (e)=>{
        const {name,value}=e.target;
        setRestaurent({...Restaurent,[name]:value})
    }

    const submitForm = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create",Restaurent)
            .then((response)=>{
                toast.success(response.data.msg,{position:"top-right"});
                navigate("/")
            })
            .catch((error) => console.log(error));
    }


    return(
        
        <div>
            <Link to={"/"}>Back</Link>
            <h3>Add new Restaurent</h3>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' onChange={inputHandler} id='name' name='name' placeholder='Enter the Name of restaurent'/>
                </div>
                <div>
                    <label htmlFor='type'>Type</label>
                    <input type='text' onChange={inputHandler} id='type' name='type' placeholder='Type'/>
                </div>
                <div>
                    <label htmlFor='location'>Location</label>
                    <input type='text' onChange={inputHandler} id='location' name='location' placeholder='Location'/>
                </div>
                <div>
                    <label htmlFor='rating'>Rating</label>
                    <input type='Number' onChange={inputHandler} id='rating' name='rating' placeholder='Rating'/>
                </div>
                <div>
                    <label htmlFor='top_food'>Top_food</label>
                    <input type='text' onChange={inputHandler} id='top_food' name='top_food' placeholder='Top_food'/>
                </div>
                <div>
                    <button type='submit'>Add Restaurant</button>
                </div>
            </form>
        </div>
    );
}

export default Add;