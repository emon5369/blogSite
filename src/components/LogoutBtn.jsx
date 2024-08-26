import { useDispatch } from "react-redux"
import authService from "../appwrite/auth";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
    const dispatch= useDispatch();
    const navigate= useNavigate();

    const logoutHandler = async () => {
      try {
        await authService.logout();
        dispatch(logout());
        navigate('/');
      } catch (error) {
        console.error("Logout failed", error);
      }
    };
  
  return (
    <button onClick={logoutHandler} className="inline-block px-6 py-2 duration-200 font-semibold text-red-500 hover:bg-red-200 rounded-full">Logout</button>
  )
}

export default LogoutBtn