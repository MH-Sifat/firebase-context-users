import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Registation from './components/Registation/Registation'
import Login from './components/Login/Login'
import Orders from './components/Orders/Orders'
import PrivateRoute from './route/PrivateRoute'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Registation></Registation>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/orders',
          element:<PrivateRoute><Orders></Orders></PrivateRoute>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
