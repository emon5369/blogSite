import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header, Container } from "./components";
import { Outlet } from "react-router-dom"

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setloading(false))
  })

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-[#009B7D]'>
      <div className='w-full block'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  ) : <div className="w-full py-8 text-center">
    <Container>
      <div className="flex flex-wrap">
        <div className="p-2 w-full">
          <h1 className="text-2xl text-white font-bold">Loading...</h1>
        </div>
      </div>
    </Container>
  </div>
}

export default App
