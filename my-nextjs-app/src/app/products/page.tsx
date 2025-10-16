import ProductCard from "../components/ProductCard";
import { IProduct } from "../type";

const res = await fetch("http://localhost:5000/products", {
    cache: "force-cache",
});
const products = await res.json();

const ProductsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-10 mt-16">
            <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
                🛍️ Our Products
            </h1>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product: IProduct) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
