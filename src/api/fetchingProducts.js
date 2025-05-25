export const getProducts = async (debouncedSearch) => {
    try {
        const response = await fetch(
            `https://react-tailwind-update-eid-server.vercel.app/cloths/all-products${debouncedSearch ? `?search=${debouncedSearch}` : ""}`
        );
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};



export const getSingleProduct = async (id) => {
    try {
        const response = await fetch(`https://react-tailwind-update-eid-server.vercel.app/cloths/single-product/${id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        return data;
                
    } catch (error) {
        console.log(error.message);
    }
};