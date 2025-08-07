import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';

const Login = () => {
  const {axios,setToken} = useAppContext();
  const[email,setEmail] = useState(' ')
  const[password,setPassword] =useState(' ')
 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post('/api/admin/login', { email, password });
    console.log("Login response:", data); // ✅ Should show token

    if (data?.success && data?.token) {
      setToken(data.token); // ✅ Update global context
      localStorage.setItem('token', data.token); // ✅ Save to storage
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`; // ✅ Required prefix

      toast.success("Login successful");
      // Optional: navigate('/admin/dashboard');
    } else {
      toast.error(data.message || "Login failed");
    }
  } catch (error) {
    toast.error(error.response?.data?.message || error.message || "Login error");
  }
};

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
           <div className='w-full py-6 text-center'>
            <h1 className='text-3xl font-bold'><span className='text-primary'>Admin</span></h1>
            <p className='font-light'>Enter your credentials to access the admin panel</p>
           </div>
             <form onSubmit={handleSubmit}
             className='mt-6 w-full sm:max-w-md text-gray-600'
             >
              <div className='flex flex-col'>
                <label htmlFor="email">Email</label>
                <input
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                type="text" required placeholder='Enter Email' 
                className='border-b-2 border-gray-300 p-2 ouline-none mb-6'
                />
              </div>
               <div className='flex flex-col'>
                <label htmlFor="password">Password</label>
                <input 
                 onChange={(e)=>setPassword(e.target.value)}
                 value={password}
                type="password" required placeholder='Enter Password' 
                className='border-b-2 border-gray-300 p-2 ouline-none mb-6'
                />
              </div>
              <button type='submit'
              className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90'
              >Login

                
              </button>
             </form>
        </div>
      </div>
    </div>
  )
}

export default Login