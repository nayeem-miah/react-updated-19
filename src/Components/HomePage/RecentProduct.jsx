import { useEffect, useState } from "react";
import ProductCard from "../Card/ProductCard";
import { Link } from "react-router-dom";

function RecentProduct() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            setLoading(true);
            fetch("https://react-tailwind-update-eid-server.vercel.app/cloths")
                .then(res => res.json())
                .then(data => setProducts(data))
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }, [])

    // console.log(products);

    const topProducts = products.filter(product => product.rating >= 4.5);
    const recentProducts = topProducts.sort((a, b) => b.id - a.id).slice(0, 6);
    return (
        <div className="">
            <h3 className="text-center text-3xl from-amber-500 my-4">Eid special products </h3>
            {loading ? <p>loading........</p> : <div className="grid grid-cols-1 md:grid-cols-2
             lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 gap-10">
                {
                    recentProducts?.map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>}
            <div className="my-10 flex justify-center"><Link to={'/eid-offer'}> <button className="bg-transparent text-yellow-500 py-2 px-4 rounded-full border-2 border-yellow-500 font-medium hover:bg-yellow-100 transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400">See All Products</button></Link></div>
        </div>
    );
}

export default RecentProduct;