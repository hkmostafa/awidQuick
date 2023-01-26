import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import './addForms.scss'
function AddRestaurant(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [data, setData] = useState({
        nom : "",
        logo : "",
        banner : "",
        localisation : []

    })
    const onSubmit = data => {
       setData({
            nom : data.nom,
            logo : data.logo[0].name, 
            banner : data.banner[0].name,
            localisation : [
                data.longitude,
                data.latitude
            ]
       })
       console.log(data)
    }
    
    useEffect(()=>{
        console.log(data)
    },[data])
    return(    
    <div className="addRestau">
    <form className='gridform' onSubmit={handleSubmit(onSubmit)} >
        <div className="forminput">
            <label htmlFor="name">Nom restaurant : </label>
            <input type="text" name='name' id='name' defaultValue={''} {...register("nom",{required:true})}/>
            {/* {errors.nom && <span>error</span>} */}
        </div>
            
        <div className="forminput">
            <label htmlFor="">Logo : </label>
            <input type="file" accept="image/*"  name="" id=""  defaultValue={''} {...register("logo",{required:true})}/>
        </div>

        <div className="forminput">
        <label htmlFor="">Banner : </label>
            <input type="file" accept="image/*"  name="" id=""  defaultValue={''} {...register("banner",{required:true})}/>
        </div>
         
        <div className="forminput localisation">
            <label htmlFor="">localisation : </label>
            <div className="forminput">
                <label htmlFor="">Longitude  </label>
                <input type="text" name="longitude" id="latitude" defaultValue={''} {...register("longitude",{required:true})} />
            </div>
            <div className="forminput">
                <label htmlFor="">Latitude </label>
                <input type="text" name="latitude" id="latitude"  defaultValue={''} {...register("latitude",{required:true})}/>
            </div>
        </div>
        <input type="submit" value="Ajouter" />
     </form>     
</div> 
 )

}
export default AddRestaurant