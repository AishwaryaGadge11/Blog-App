import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import { assets } from '../../assets/assets';
import Sidebar from '../../components/Admin/Sidebar';
import { useAppContext } from '../../context/AppContext';

const Layout = () => {
 // const navigate = useNavigate();

  const{axios,setToken,navigate} = useAppContext();
  const logout=()=>{
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer null`; // ✅ Required prefix
    setToken(null)
    navigate('/')
  }
  return (
    <>
    <div className='flex items-center justify-between py-2 h-[150px] px-4 sm:px-12 border-b border-gray-200'>
      <img src={assets.logo} alt="" className='w-32 sm:w-40 cursor-pointer'
      onClick={()=>navigate('/')}
      />
      <button className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'
      onClick={logout}
      >
        Logout 
      </button>
    </div>
    <div className='flex h-[calc(100vh-100px)]'>
    <Sidebar/>
     <Outlet/>
    </div>
    </>
  )
}

export default Layout