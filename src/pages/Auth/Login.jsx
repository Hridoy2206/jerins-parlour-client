import { Link } from "react-router-dom";
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleLogin = (data) => {
        console.log(data);
    }
    return (
        <section className="lg:w-[500px] mx-auto lg:px-0 px-4 my-12">
            <form onSubmit={handleSubmit(handleLogin)} className="lg:px-10 px-4 py-6 border border-gray-300">
                <h2 className="text-center text-3xl font-semibold mb-6">Login</h2>
                <div className="flex flex-col space-y-6 text-[#222]">
                    {/*//* Email input*/}
                    <input
                        className="p-2 outline-none border-b border-gray-300"
                        type="email"
                        placeholder="Email"
                        {...register('email', { required: true, pattern: /^[a-z.]+@[a-z]+\.[a-z]+$/ })}
                    />
                    {/*//* Email handle errors*/}
                    {
                        errors?.email?.type === 'required' && <p className="text-red-500">Email is Required</p> || errors?.email?.type === 'pattern' && <p className="text-red-500">Valid a Right email pattern!</p>
                    }


                    {/*//* password input*/}
                    <input
                        className="p-2 outline-none border-b border-gray-300"
                        type="password"
                        placeholder="Password"
                        {...register('password', { required: true, minLength: 6, maxLength: 12 })}
                    />
                    {/*//* Password handle errors*/}
                    {
                        errors?.password?.type === 'required' && <p className="text-red-500">Pawwrod is Required</p> || errors?.password?.type === 'minLength' && <p className="text-red-500">Pasword required atleast 6 character</p> || errors?.password?.type === 'maxLength' && <p className="text-red-500">Pasword required under 12 character</p>
                    }


                    {/*//* Submit button*/}
                    <input
                        className="p-3 outline-none border border-b btn-primary rounded-lg active:scale-95 duration-200 cursor-pointer"
                        type="submit"
                        value="Login"
                    />
                    <div className="text-center font-semibold">
                        <p>Don't have an account? <Link className="underline text-primary" to='/register'>Register</Link></p>
                    </div>
                </div>
            </form>
            {/*//*---- Or field----*/}
            <div className="flex items-center gap-4 lg:px-12 px-4 my-4">
                <div className="w-full border border-b"></div>
                <p>Or</p>
                <div className="w-full border border-b"></div>
            </div>

            {/*//*---- Social Login----*/}
            <div className="lg:px-10 px-4 text-gray-500 font-semibold space-y-4">
                <button className="border border-gray-300  rounded-full w-full p-2 flex items-center active:scale-95 duration-200" >
                    <BsFacebook className="text-3xl text-blue-500" />
                    <span className="flex-1">Continue with facebook</span>
                </button>
                <button className="border border-gray-300 rounded-full w-full p-2 flex items-center active:scale-95 duration-200" >
                    <FcGoogle className="text-3xl text-blue-500" />
                    <span className="flex-1">Continue with google</span>
                </button>
            </div>
        </section>

    );
};

export default Login;