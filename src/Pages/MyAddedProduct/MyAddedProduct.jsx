import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { showProduct } from "../../features/addToCartSlice/addToCartSlice";

function MyAddedProduct() {
    const { user } = useContext(AuthContext);
    const [Loading, setLoading] = useState(false);
    const { products } = useSelector(state => state.addProductReducer);
    const dispatch = useDispatch()

    // fetching product
    const fetchingMyProduct = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`http://localhost:5000/add-cart/get-product/${user?.email}`);
            dispatch(showProduct(res.data.data));
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    };



    const handleDelete = () => {

    };
    useEffect(() => {
        fetchingMyProduct()
    }, [dispatch]);
    if (Loading) return <h3 className="text-center">loading......</h3>
    return (
        <div className="container mx-auto p-6 my-5">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Product List</h2>
            {
                products.length > 0 ? <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                        <thead className="bg-yellow-400 text-white text-lg font-semibold border-b border-yellow-400">
                            <tr>
                                <th className="p-4 text-left">Product Name</th>
                                <th className="p-4 text-left">Price (৳)</th>
                                <th className="p-4 text-left">Email</th>
                                <th className="p-4 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index} className="border-b hover:bg-gray-100 transition-all">
                                    <td className="p-4 flex items-center gap-4">
                                        <img src={product.product_img} alt={product.name} className="w-12 h-12 object-cover rounded-md shadow" />
                                        {product.name}
                                    </td>
                                    <td className="p-4 font-semibold">{product.price}</td>
                                    <td className="p-4 text-gray-700">{product.email}</td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => handleDelete(product._id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> : <h2 className="text-3xl my-6 font-bold text-center mb-6 text-red-800">No product found......</h2>
            }
        </div>
    );
}

export default MyAddedProduct;