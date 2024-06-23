import { Link } from "react-router-dom";
const AuthLayouts = (props) => {
    const {children, title, type} = props;
    return(
      <div className="flex items-center justify-center gap-3 min-h-screen">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
          <p className="font-medium text-slate-500 mb-8">
            Welcome, Please enter your details
          </p>
          {children}
          <Navigation type={type}/>
        </div>
      </div>
    );
};

// Membuat components Navigasi untuk Conditional Rendering menggunakan IF ELSE
const Navigation = ({type}) => {
  if(type === 'login'){
    return(
        <p className="text-sm text-center w-full my-3">
          Don`t have an account?
          <Link to= "/register" className="text-blue-600 font-bold"> Register </Link>
        </p>
    )
  }else{
    return(
      <p className="text-sm text-center w-full my-3">
        Alredy have an account?
        <Link to= "/" className="text-blue-600 font-bold"> Login </Link>
      </p>
    )
  }
}

export default AuthLayouts;