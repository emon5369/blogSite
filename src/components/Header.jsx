import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Logo, Container, LogoutBtn } from "./index"
import { Link } from "react-router-dom"
import { useState } from "react"

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

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="py-3 shadow bg-[#ECECEA] relative">
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="mr-4">
                        <Link to='/'>
                            <Logo className="sm:w-32 w-24"/>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        {/* Menu Icon*/}
                        <button
                            className="block md:hidden text-[#009B7D] focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>

                        <ul className="hidden md:flex items-center md:ml-auto">
                            {navItem.map((item) =>
                                item.active ? (
                                    <li key={item.name} className="ml-2 text-base font-semibold">
                                        <button onClick={() => navigate(item.slug)}
                                            className="inline-block px-6 py-2 duration-200 text-gray-600 hover:bg-blue-200 rounded-full">
                                            {item.name}
                                        </button>
                                    </li>
                                ) : null
                            )}
                            {authStatus && (
                                <li className="md:ml-4 text-base">
                                    <LogoutBtn />
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </Container>

            {/* Slide Menu for small screens */}
            <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMenuOpen(false)}></div>
            <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-md z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button
                    className="absolute top-4 right-4 text-[#009B7D] focus:outline-none"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <svg className="w-8 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <ul className="flex flex-col pt-10 space-y-4">
                    {navItem.map((item) =>
                        item.active ? (
                            <li key={item.name}>
                                <button onClick={() => { navigate(item.slug); setIsMenuOpen(false); }}
                                    className="inline-block px-6 py-2 duration-200 text-[#009B7D] hover:bg-[#f4a836] rounded-full">
                                    {item.name}
                                </button>
                                <hr />
                            </li>
                        ) : null
                    )}
                    {authStatus && (
                        <li>
                            <LogoutBtn />
                        </li>
                    )}
                </ul>
            </div>
        </header>
    )
}

export default Header