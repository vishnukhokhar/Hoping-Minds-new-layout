import React from 'react'
import { Link } from 'react-router-dom'

const GetStarted = () => {
    return (
        <div>
            <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
                <h1 className='text-4xl text-white font-bold text-center mb-6'>Login</h1>
                <form action="">
                    <div className='relative my-4'>
                        <input type='email' className='block w-72 py-2.3 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' />

                        <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>Your Email</label>
                    </div>
                    <div className='relative my-4'>
                        <input type='password' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' />
                        <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '> Password</label>
                    </div>
                    <div className='relative my-4'>
                        <input type='number' className='block w-72 py-2.3 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' />

                        <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>Phone Number</label>
                    </div>
                    <div className="flex items-center my-4">
                        <input type='checkbox' name='' id="rememberMe" />
                        <label htmlFor='rememberMe' className="ml-2 text-white">Remember Me</label>
                    </div>
                    <span className="text-white">Forgot Password?</span>
                    <button type='submit' className="block bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Login</button>
                    <div className="mt-4">
                        <span className="text-white">New Here? <Link to='/register' className="text-blue-500">Sign Up</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GetStarted


// import React from 'react'

// const GetStarted = () => {
//     return (
//         <>

//             <div className="min-h-screen bg-purple-600 flex items-center justify-center py-12 px-4">
//                 <div className="w-full max-w-md rounded-lg bg-white backdrop-blur-sm bg-clip-pad shadow-lg px-5 py-7">
//                     <div className="text-center text-2xl font-bold mb-6">
//                         Sign In
//                     </div>
//                     <div className="text-gray-700 text-base mb-4">
//                         Welcome back, you've been missed.
//                     </div>
//                     <div className="flex flex-col space-y-4">
//                         <div>
//                             <label htmlFor="email" className="text-gray-700 font-medium">
//                                 Username
//                             </label>
//                             <input
//                                 id="email"
//                                 type="email"
//                                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
//                                 placeholder="gtech.official08"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="password" className="text-gray-700 font-medium">
//                                 Password
//                             </label>
//                             <input
//                                 id="password"
//                                 type="password"
//                                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
//                                 placeholder="Enter your password"
//                             />
//                         </div>
//                         <div className="flex items-center justify-between">
//                             <label className="flex items-center space-x-2">
//                                 <input type="checkbox" className="w-4 h-4 rounded" />
//                                 <span className="text-gray-700 text-sm">Remember me</span>
//                             </label>
//                             <a href="#" className="text-blue-500 text-sm underline hover:text-blue-700">
//                                 Forgot Password?
//                             </a>
//                         </div>
//                     </div>
//                     <button className="w-full py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-400">
//                         Sign In
//                     </button>
//                     <div className="text-center mt-4 text-gray-500 text-sm">
//                         Don't have an account?{' '}
//                         <a href="#" className="text-blue-500 underline hover:text-blue-700">
//                             Create New Account
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default GetStarted