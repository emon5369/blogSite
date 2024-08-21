import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Logo, Container, LogoutBtn } from "./index"
import { Link } from "react-router-dom"

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const navItem = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus
        },

    ]
    return (
        <header className="py-3 shadow bg-[#ECECEA]">
            <Container>
                <nav className="flex items-center">
                    <div className="mr-4"> <Link to='/'> <Logo /> </Link> </div>
                    <ul className="flex ml-auto">
                        {navItem.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button onClick={() => navigate(item.slug)}
                                        className="inline-block px-6 py-2 duration-200 text-[#009B7D] hover:bg-[#f4a836] rounded-full">
                                        {item.name}
                                    </button>
                                </li>
                            ) : null)}
                        {authStatus && (
                            <li> <LogoutBtn /> </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header