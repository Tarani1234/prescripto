import { useState } from "react"


const Login = () => {
   const[state, setState] = useState('Sign Up');
    const[email, setEmail] = useState<string>("");
    const[name, setName] = useState<string>('');
    const[password, setPassword] = useState<string>("");

     const onSubmitHandler = async(e) =>{
         e.preventDefault();
     }

  return (
    
        <form className="min-h-[80vh] flex items-center" onChange={onSubmitHandler}>
           <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96  rounded-xl
            text-zinc-600 text-sm shadow-lg">
             <p className="text-2xl font-semibold mb-1">{state === 'Sign Up'? "Create Account" : "Login"}</p>
             <p className="text-base">Please {state === "Sign Up"? "sign up" : "login"}  to book appointment</p>
             {
               state === "Sign Up" && <div className="w-full">
                <p className="w-full">Full Name</p>
                 <input className="border border-zinc-300 rounded w-full p-2 mt-2 outline-none" type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>
             }
             <div className="w-full">
               <p>Email</p>
                 <input className="border border-zinc-300 rounded w-full p-2 mt-2 outline-none" type="text" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                 <p>Password</p>
                 <input className="border border-zinc-300 rounded w-full p-2 mt-2 outline-none" type="text" onChange={(e)=> setPassword(e.target.value)} value={password}/>
             </div>
             <button className="bg-primary w-full text-white py-2 px-3 rounded-md text-base cursor-pointer"> {state === 'Sign Up' ? "create a account" : 'login'} </button>
             {
               state === "Sign Up" ? <p>Already have an account? <span onClick={()=> setState('Login')} className="text-primary underline cursor-pointer"> Login here</span></p>
               : <p>Create an new account? <span onClick={() => setState('Sign Up')} className="text-primary underline cursor-pointer">click here</span></p>
             }
           </div>
        </form>
  )
}

export default Login
