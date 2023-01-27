import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import './addForms.scss'
function AddSection(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [restaurants, setRestaurants] = useState();

    const [data, setData] = useState({
        nom : "",
        logo : "",
        banner : "",
        localisation : []

    })

    async function getRestaurants(){
        const restaurants =  await axios.get('http://165.22.116.57:3000/restaurant/restaurantVitrine');
        setRestaurants(restaurants.data);
    }
    

    const onSubmit = data => {
       setData({
            restau : data.idRestau,
            nom : data.nom,
            image : data.image[0].name, 
  
          
       })
 
    }
    
    useEffect(()=>{
        getRestaurants();
        console.log(data)
    },[data])
    return(    
    <div className="addRestau">
    <form className='gridform' onSubmit={handleSubmit(onSubmit)} >
    <div className="forminput">
            <label htmlFor="name">Choisir restaurant : </label>
            <select  name='name' id='name' defaultValue={''} {...register("idRestau",{required:true})}>
                <option value="
                "></option>
                {restaurants && restaurants.map((restau)=>{ return <option value={restau.id} key={restau.id}>{restau.nom}</option>}) }
            </select>
            {/* {errors.nom && <span>error</span>} */}
        </div>
        <div className="forminput">
            <label htmlFor="name">Nom section : </label>
            <input type="text" name='name' id='name' defaultValue={''} {...register("nom",{required:true})}/>
            {/* {errors.nom && <span>error</span>} */}
        </div>
            
        <div className="forminput">
            <label htmlFor="">Image : </label>
            <input type="file" accept="image/*"  name="" id=""  defaultValue={''} {...register("image",{required:true})}/>
        </div>

     
        <input type="submit" value="Ajouter" />
     </form>     
</div> 
 )

}
export default AddSection