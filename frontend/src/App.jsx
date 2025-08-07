import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/Admin/Layout'
import AddBlog from './pages/Admin/AddBlog'
import Dashboard from './pages/Admin/Dashboard'
import ListBlog from './pages/Admin/ListBlog'
import Comments from './pages/Admin/Comments'
import Login from './components/Admin/Login'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

function App() {
  const {token} = useAppContext()
 console.log(token);
 
  return (
   <div>
  <Toaster/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/blog/:id' element={<Blog/>}></Route>
    <Route path='/admin' element={token ? <Layout/> : <Login/>}>
     <Route index element={<Dashboard/>}/>
     <Route path='addBlog' element={<AddBlog/>}/>
     <Route path='listBlog' element={<ListBlog/>}/>
     <Route path='comments' element={<Comments/>}/>
    </Route>
   </Routes>
   </div>
  
  )
}

export default App
