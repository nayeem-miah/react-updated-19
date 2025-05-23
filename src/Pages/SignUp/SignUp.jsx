
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../api/Api";
import toast from "react-hot-toast";


function SignUp() {
    const [user, setUser] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // console.log(user);
        // Make API call to register user
        try {
            await API.post("/api/auth/signup", user)
            toast.success("sign up success")
            // console.log("sign up success")
            navigate("/login");
            setLoading(false);
        } catch (error) {
            console.error("Something went wrong. Please try again.", error);
            toast.error(error.message)
            setError(error)
            setLoading(false);
        }
    };

    return (
        <div className="flex  justify-center items-center h-full py-32  bg-gray-100 text-black">
            <div className=" rounded-lg shadow-lg w-96 p-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={user.username}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded"
                    />
                    <button type="submit" className=" py-3  text-lg font-semibold rounded bg-yellow-500 text-white shadow-lg hover:bg-yellow-600">{
                        loading ? "Loading..." : "Sign Up"
                    }</button>
                </form>
                <div className="text-center mt-2 py-4">
                    <Link to="/login" className="text-center mt-2 py-2text-blue-500 hover:text-blue-600">Already have an account? Login</Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;