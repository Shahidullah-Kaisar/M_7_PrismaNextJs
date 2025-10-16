import Image from "next/image";
import React from "react";
import { IProduct } from "../type";

const ProductCard = ({ product } : {product : IProduct}) => {
    return (
        <div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform"
        >
            <div className="relative w-full h-40">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    {product.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                    {product.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-600 font-bold text-lg">
                        ${product.price}
                    </span>
                    <span className="text-yellow-500 text-sm">
                        ⭐ {product.rating}
                    </span>
                </div>

                <div className="mt-3 text-sm text-gray-500">
                    <p>Category: {product.category}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Stock: {product.stock}</p>
                </div>

                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
