export const getProducts = async (debouncedSearch) => {
    try {
        const response = await fetch(
            `http://localhost:5000/cloths/all-products${debouncedSearch ? `?search=${debouncedSearch}` : ""}`
        );
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};



export const getSingleProduct = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/cloths/single-product/${id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        return data;
                
    } catch (error) {
        console.log(error.message);
    }
};