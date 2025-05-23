/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import photoURL from '../../assets/placeholder.jpg'
import { motion } from 'framer-motion';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto bg-white shadow-xl my-10 rounded-2xl p-6 mt-10 border border-gray-200"
        >
            <div className="flex flex-col items-center">
                <img
                    src={photoURL}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
                />
                <h2 className="text-2xl font-bold text-gray-800 mt-3">{user?.username}</h2>
                <p className="text-gray-500">{user?.email}</p>
            </div>

            <div className="mt-6 space-y-3">
                <p className="text-gray-700 text-center">
                    <strong>Member Since:</strong> {user?.createdAt || "N/A"}
                </p>
                <p className="text-gray-700 text-center">
                    <strong>Role:</strong> {user?.role || "User"}
                </p>
            </div>

            {/* <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all">
                Edit Profile
            </button> */}
        </motion.div>
    );
};

export default Profile;