import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import avatar from "../../../assets/placeholder.jpg";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { API } from "../../../api/Api";
import toast from "react-hot-toast";

const MenuDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = async () => {
        await API.post("/api/auth/logout");
        toast.success("Logged out successfully!");
        navigate('/')
    };

    return (
        <div className="relative " ref={dropdownRef}>
            <div className="flex flex-row items-center gap-3">
                {/* Dropdown button */}
                <div
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="p-4 md:py-1 md:px-2 border border-black flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <img
                            className="rounded-full"
                            referrerPolicy="no-referrer"
                            //   src={user && user.photoURL ? user.photoURL : avatar}
                            src={avatar}
                            alt="profile"
                            height={30}
                            width={30}
                        />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-40 md:w-56 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        {user ? (
                            <>
                                <Link
                                    to="/profile"
                                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                                >
                                    profile
                                </Link>
                                <Link
                                    to="/my-added-product"
                                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                                >
                                    My added product
                                </Link>

                                <div
                                    onClick={handleLogout}
                                    className="px-4 py-3 hover:bg-neutral-100 hover:text-red-500 transition font-semibold cursor-pointer"
                                >
                                    Logout
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/sign-up"
                                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuDropdown;