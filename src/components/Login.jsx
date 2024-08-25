import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Input, Button } from './index'
import { login as authLogin } from '../store/authSlice'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin({ userData }));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div
            className='flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>

                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        <span className="text-[#f4a836]">Sign Up</span>
                    </Link>
                </p>

                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email:"
                            placeholder="Enter your mail"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address"
                                }
                            })}
                            error={errors.email?.message}
                        />
                        <div className="relative">
                            <Input
                                label="Password:"
                                placeholder="Enter your password"
                                type={showPassword? "text" : "password"}
                                {...register("password", { required: "Password is required" })}
                                error={errors.password?.message}
                            />
                            <button
                                type="button"
                                onClick={()=> {
                                    setShowPassword(!showPassword);
                                }}
                                className="absolute inset-y-0 top-7 right-0 pr-3 flex items-center text-sm leading-5"
                            >
                                {showPassword ? <span className='text-blue-500 text-base font-mono font-extrabold'>Hide</span> : <span className='text-red-500 text-base font-mono font-extrabold'>Show</span>}
                                
                            </button>
                        </div>
                        <Button type='submit' className='w-full'>Sign In</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login