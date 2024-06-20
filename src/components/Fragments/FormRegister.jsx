import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm label = "Fullname" type="text" placeholder="Insert your Name here...." name="fullname" />
            <InputForm label = "Email" type="email" placeholder="example@gmail.com" name="email" />
            <InputForm label = "Passwoard" type="passwoard" placeholder="********" name="passwoard" />
            <InputForm label = "Confirm Passwoard" type="passwoard" placeholder="********" name="confirmPasswoard" />
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>  
    )
}

export default FormRegister;