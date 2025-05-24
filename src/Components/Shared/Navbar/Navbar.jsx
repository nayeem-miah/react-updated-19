import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { API } from "../../../api/Api";
import toast from "react-hot-toast";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { AiOutlineMenu } from "react-icons/ai";
import MenuDropdown from "./MenuDropDrowon";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    // console.log(user);
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const handleLogout = async () => {
        await logout()
        toast.success("Logged out successfully!");
        navigate('/')
    };

    const navLinks = <>
        <NavLink to={'/'} className={({ isActive }) => isActive ? "px-3 py-2 mx-3 mt-2 text-yellow-500 font-bold transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500" : "px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500"}>
            Home
        </NavLink>
        <NavLink to={'/eid-offer'} className={({ isActive }) => isActive ? "px-3 py-2 mx-3 mt-2 text-yellow-500 font-bold transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500" : "px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500"}>
            Special eid offer
        </NavLink>

        <NavLink to={'/contact'} className={({ isActive }) => isActive ? "px-3 py-2 mx-3 mt-2 text-yellow-500 font-bold transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500" : "px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500"}>
            Contact
        </NavLink>



    </>

    return (
        <nav className="fixed z-10 w-full  bg-blue-600 shadow">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Link to={'/'} className="text-xl font-bold text-white lg:text-2xl hover:text-gray-300">
                            <span className="text-amber-400">EID</span> FESTIVAL
                        </Link>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-white hover:text-gray-300 focus:outline-none"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-blue-600 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0"
                            }`}
                    >
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            {navLinks}
                        </div>



                        <div
                            className={`${isOpen
                                ? "translate-x-0 bg-blue-600 opacity-100 "
                                : "opacity-0 -translate-x-full "
                                } absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out   md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
                        >
                            <div className="flex flex-col md:flex-row md:mx-6   ">

                                <span className="block md:hidden">
                                    {user ? (
                                        <div className="space-y-5 font-bold  mt-3">
                                            <div>
                                                <Link to={'/profile'} className="text-white my-2  transition-colors duration-300 transform   md:mx-4 md:my-0">
                                                    profile
                                                </Link>
                                            </div>
                                            <Link to={'/my-added-product'} className=" my-2 text-white transition-colors duration-300 transform   md:mx-4 md:my-0">
                                                my added product
                                            </Link>
                                            <div
                                                onClick={handleLogout}
                                                className="  font-bold my-2  transition-colors duration-300 transform text-red-500  md:mx-4 md:my-0"
                                            >
                                                Logout
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-3 font-bold uppercase mt-3">
                                            <div className=" ">
                                                <NavLink
                                                    to="/login"
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "text-blue-500  font-bold my-2  transition-colors duration-300 transform hover:text-blue-300 dark:hover:text-blue-400 md:mx-4 md:my-0 "
                                                            : " font-bold my-2  transition-colors duration-300 transform hover:text-blue-300 dark:hover:text-blue-400 md:mx-4 md:my-0"
                                                    }
                                                >
                                                    Login
                                                </NavLink>
                                            </div>
                                            <div className=" ">
                                                <NavLink
                                                    to="/signup"
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "text-blue-500  font-bold my-2  transition-colors duration-300 transform hover:text-blue-300 dark:hover:text-blue-400 md:mx-4 md:my-0"
                                                            : " font-bold my-2  transition-colors duration-300 transform hover:text-blue-300 dark:hover:text-blue-400 md:mx-4 md:my-0"
                                                    }
                                                >
                                                    Sign Up
                                                </NavLink>
                                            </div>
                                        </div>
                                    )}
                                </span>
                            </div>

                            <div className="hidden md:block">
                                <MenuDropdown handleLogout={handleLogout}></MenuDropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;