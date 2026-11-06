export default async function getProducts() {
    const responses = await Promise.all([
        fetch('https://dummyjson.com/products/category/mens-shirts'), 
        fetch('https://dummyjson.com/products/category/womens-dresses')
    ]);
        if (!responses[0].ok) {
    throw new Error(`Failed to fetch men's products: ${responses[0].status}`);
    }

    if (!responses[1].ok) {
    throw new Error(`Failed to fetch women's products: ${responses[1].status}`);
    }

    const products = await Promise.all([
        responses[0].json(),
        responses[1].json()
    ]);
    const allProducts = [...products[0].products, ...products[1].products];
    return allProducts;
}