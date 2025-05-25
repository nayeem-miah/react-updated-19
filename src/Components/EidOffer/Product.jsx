import { useEffect, useState } from "react";
import ProductCard from "../Card/ProductCard";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { fetchingProducts } from "../../features/productsSlice/productsSlice";

const Products = () => {
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const dispatch = useDispatch();
    const { isError, isLoading, products } = useSelector(state => state.productsReducer);
    // console.log(products);

    // Debounce search input
    useEffect(() => {
        const handler = debounce((value) => {
            setDebouncedSearch(value);
        }, 300);

        handler(search);

        return () => {
            handler.cancel && handler.cancel();
        };
    }, [search]);

    useEffect(() => {
        dispatch(fetchingProducts(debouncedSearch))
    }, [dispatch, debouncedSearch]);


    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    if (isError) return <div>fetching data error : {isError}</div>;

    return (
        <div className="py-10 px-4">

            {/* search implementation */}
            <div className="mb-6">
                <div className="w-full h-auto mx-auto p-4 
             border my-2 shadow">
                    {/* Heading Section */}
                    <div className="text-center mb-4">
                        <h2 className="text-2xl   font-semibold">Search and filter Products</h2>
                        <p className="text-xl">
                            Find your desired products by brand, category, or title
                        </p>
                    </div>

                    {/* Search Box Section */}
                    <form className="flex md:flex-row items-center justify-center gap-2 w-full">
                        <input
                            type="text"
                            required
                            placeholder="Search by brand, category, or title"
                            name="search"
                            value={search}
                            onChange={handleSearchChange}
                            className="input input-bordered w-full md:w-full max-w-screen-sm bg-white"
                        />
                        <button
                            type="button"
                            className="px-4 py-2 bg-amber-500 text-white rounded-md"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>

            {isLoading ? (
                <p className="text-center text-gray-600">Loading products...</p>
            ) : (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                    {products?.length > 0 ? (
                        products.map(product => <ProductCard key={product._id} product={product} />)
                    ) : (
                        <p className="text-center text-gray-500 col-span-full text-3xl">No products found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Products;