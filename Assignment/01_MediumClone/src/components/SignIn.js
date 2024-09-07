// import React from 'react'
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import email from "../assets/email.png"
import close from "../assets/close.png"

// function Area() {
//   return (
//     <div className='flex flex-col'>
//       <h1 className="text-3xl font-bold">Create an account to start writing.</h1>
//       <br />
//       <button className='flex flex-initial items-center justify-center mb-5'>
//         <img src={google} alt="" className="w-10 h-10" />
//         <h1>Sign up with Google</h1>
//       </button>

//       <button className='flex flex-shrink items-center justify-center mb-5'>
//         <img src={facebook} alt="" className="w-10 h-10"/>
//         <h1>Sign up with Facebook</h1>
//       </button>

//       <button className='text-white bg-blue-400 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 fond-medium rounded-lg text-sm px-5 py-2.5 text-center w-5px'>
//         <img src={email} alt="" className="w-10 h-10 border-black"/>
//         <h1>Sign up with email</h1>
//       </button>

//       <button type="button" className='border-b-teal-50'>hello</button>

//     </div>
//   )
// }

// export default Area


import React from 'react';

function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen border-violet-400">

      <div className="mb-20"><img src={close} alt="" className="w-5 h-5 mr-3"/></div>

      <h1 className="text-3xl font-semibold mb-20">Create an account to start writing.</h1>
      
      <button className="flex items-center justify-between w-64 p-3 mb-4 border rounded-full">
        <img src={google} alt="Google" className="w-6 h-6 mr-3" />
        <h4 className="mr-6">Sign up with Google</h4> 
      </button>
      
      <button className="flex items-center justify-between w-64 p-3 mb-4 border rounded-full">
        <img src={facebook} alt="Facebook" className="w-6 h-6 mr-3" />
        <h4 className="mr-6">Sign up with Facebook</h4>
      </button>
      
      <button className="flex items-center justify-between w-64 p-3 mb-10 border rounded-full">
        <img src={email} alt="Email" className="w-6 h-6 mr-3" />
        <h4 className="mr-6">Sign up with email</h4>
      </button>
      
      <p className="mt-4 mb-20">
        Already have an account? <a href="/signin" className="text-green-600">Sign in</a>
      </p>
      
      <p className="text-sm mt-4 text-gray-500 text-center">
        Click “Sign up” to agree to Medium’s <a href="/" className="underline">Terms of Service</a> and acknowledge that Medium’s <a href="/" className="underline">Privacy Policy</a> applies to you.
      </p>
    </div>
  );
}

export default SignIn;
