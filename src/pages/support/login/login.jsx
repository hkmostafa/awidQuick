import { useForm } from "react-hook-form";
import './login.scss'
function Login() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="logincontainer">
            <div className="login">
            <img src={'images/greenlogo.png'} width={120}/>

                <form onSubmit={handleSubmit(onSubmit)} className='loginform'>
                    <div className="forminput">
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input type="text" name="username" defaultValue="test" {...register("example")}/>
                    </div>
                    <div className="forminput">  
                    <label htmlFor="username">Mot de passe</label>
                    <input type="password" name="password" {...register("a",{ required: true })}/>
                    </div>
                   
                    <input type="submit" value="Se connecter" />
                </form>
                {errors.exampleRequired && <span>This field is required</span>}
            </div>
        </div>
    )
    
}
export default Login