"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/app/context/cartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import SearchBar from "./SearchBar";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  imageUrl?: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"]{
    _id,
    name,
    "imageUrl": image.asset->url,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category
  }`;

  return await client.fetch(query);
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProducts(filtered);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-[#d8c8abdd] w-full h-full py-[10%]">
        <div className="animate-text p-2 bg-gradient-to-r from-[#30635c] via-[#926868] to-[#8b6eda] text-transparent text-5xl font-black bg-clip-text">
          Loading...
        </div>
        <div className="ml-4 h-10 w-10 border-8 border-t-transparent border-[#b88888] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#d8c8abdd] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Our Products
        </h1>
        <SearchBar onSearch={handleSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (

            <div
              key={product._id}
              className="bg-[#83ece7] shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              <div className="p-4">
                {product.imageUrl ? (
                  <Link href={`/product/${product._id}`}>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-80 object-cover"
                  />
                  </Link>
                ) : (
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">
                      No Image Available
                    </span>
                  </div>
                )}
                <h2 className="mt-4 text-base font-semibold text-gray-800 text-center">
                  {product.name}
                </h2>
                <p className="mt-2 text-gray-700 font-medium text-center">
                  Rs. {product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => addToWishlist(product)}
                  className="w-full mt-4 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

