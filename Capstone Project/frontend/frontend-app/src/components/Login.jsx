import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../features/login/authThunk";
import { useNavigate } from "react-router-dom";

function Login() {
let [emailId,setEmailId]=useState("")
let [password,setPassword]=useState("")
let [typeOfUser,setTypeOfUser]=useState("")
let dispatch = useDispatch();
let message = useSelector(gs=>gs.auth.message)
let userType = useSelector(gs=>gs.auth.typeOfUser)
let navigate = useNavigate();
let signIn = async (event)=> {
    event.preventDefault();
    let login = {emailId,password,typeOfUser}
    console.log(message+" "+userType);
    let result = await dispatch(signInUser(login));
    console.log(result)
    let msg = result.payload.message;
    let user = result.payload.user.typeOfUser
    if(msg=="Signin successful" && user=="ADMIN"){
        navigate("/admin")
    }else if(msg=="Signin successful" && user=="CUSTOMER"){
        navigate("/customer")
    }else {

    }
}
    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 relative z-10">
                {/* Logo/Icon Area */}
                <div className="flex justify-center mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                </div>

                <h2 className="text-4xl font-bold text-center text-white mb-2 tracking-tight">Welcome Back</h2>
                <p className="text-center text-gray-300 text-sm mb-8">Sign in to your account to continue</p>
                
                {message && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-400/50 text-red-200 rounded-xl backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium">{message}</span>
                        </div>
                    </div>
                )}

                <form onSubmit={signIn} className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-3.5 text-gray-400">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.94 6.412A2 2 0 002 8.126V16a2 2 0 002 2h12a2 2 0 002-2V8.126a2 2 0 00-.94-1.714M.458 6.882A2 2 0 002 6h16a2 2 0 011.94 2.824l-8.061 5.674a2 2 0 01-2.357 0L.46 6.882z" />
                                </svg>
                            </span>
                            <input
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                                value={emailId}
                                onChange={(event) => setEmailId(event.target.value)}
                                required
                                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition backdrop-blur-sm hover:bg-white/15"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-200 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-3.5 text-gray-400">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition backdrop-blur-sm hover:bg-white/15"
                            />
                        </div>
                    </div>

                    {/* User Type Selection */}
                    <div className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-sm">
                        <label className="block text-sm font-semibold text-gray-200 mb-4">
                            Login as
                        </label>
                        <div className="space-y-3">
                            <div className="flex items-center p-3 rounded-lg hover:bg-white/10 transition cursor-pointer">
                                <input
                                    type="radio"
                                    id="admin"
                                    name="typeOfUser"
                                    value="ADMIN"
                                    onChange={(event) => setTypeOfUser(event.target.value)}
                                    className="w-5 h-5 text-blue-400 cursor-pointer accent-blue-400"
                                />
                                <label htmlFor="admin" className="ml-3 text-sm font-medium text-gray-200 cursor-pointer flex-1">
                                    <span className="font-semibold">Admin</span>
                                    <span className="block text-xs text-gray-400 mt-0.5">Full system access</span>
                                </label>
                            </div>
                            <div className="flex items-center p-3 rounded-lg hover:bg-white/10 transition cursor-pointer">
                                <input
                                    type="radio"
                                    id="customer"
                                    name="typeOfUser"
                                    value="CUSTOMER"
                                    onChange={(event) => setTypeOfUser(event.target.value)}
                                    className="w-5 h-5 text-blue-400 cursor-pointer accent-blue-400"
                                />
                                <label htmlFor="customer" className="ml-3 text-sm font-medium text-gray-200 cursor-pointer flex-1">
                                    <span className="font-semibold">Customer</span>
                                    <span className="block text-xs text-gray-400 mt-0.5">Standard user access</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2">
                        <button
                            type="submit"
                            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg"
                        >
                            Sign In
                        </button>
                        <button
                            type="reset"
                            className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-xl transition duration-300 border border-white/20 hover:border-white/40"
                        >
                            Clear
                        </button>
                    </div>
                </form>

                {/* Sign Up Link */}
                <div className="mt-8 text-center border-t border-white/10 pt-8">
                    <p className="text-sm text-gray-300">
                        Don't have an account?{" "}
                        <a href="signup" className="font-bold text-blue-400 hover:text-blue-300 transition relative group">
                            Sign up
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Login;