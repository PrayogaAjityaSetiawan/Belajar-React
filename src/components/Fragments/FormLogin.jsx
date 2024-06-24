import { useEffect, useRef, useState } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { login } from "../../services/auth.service";


const FormLogin = () => {
    const [loginFail, setLoginFail] = useState("")
    // Untuk Menangkap inputan dan disimpan kedalam Local Storage
    const handleLogin = (event) => {
        event.preventDefault()
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };
        login(data, (status, res) => {
            if(status){
                localStorage.setItem("token", res)
                window.location.href ="/products"
            }else{
                setLoginFail(res.response.data);
                console.log(res.response.data)
            }
        })
    }
    // UseRef
    const usernameRef = useRef(null);

    // Untuk Membuat Focus di form input
    useEffect(() => {
        usernameRef.current.focus();
    },[])

    return (
        <form onSubmit={handleLogin}>
            <InputForm label = "Username" type="text" placeholder="Jhon Doe" name="username" ref = {usernameRef} />
            <InputForm label = "Password" type="password" placeholder="********" name="password" />
            <Button classname="bg-black w-full" type="submit">Login</Button>
            {loginFail ? <p className="text-red-500 text-center mt-5">{loginFail}</p> : null}
        </form>  
    )
}

export default FormLogin;