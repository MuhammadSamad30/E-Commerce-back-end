"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/app/context/cartContext";
import { useWishlist } from "@/app/context/WishlistContext";

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

const fetchProductById = async (id: string): Promise<Product | null> => {
  const query = `*[_type == "product" && _id == $id][0]{
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

  return await client.fetch(query, { id });
};

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id as string);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

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

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#d8c8abdd]">
        <p className="text-lg font-medium text-gray-800">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-[#e67c7c]">
      <div className="max-w-6xl mx-auto px-8 sm:px-8 lg:px-12">
        <div className="shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row bg-[#44788165]">
          <div className="lg:w-full flex items-center justify-center border rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out m-10">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-auto object-contain p-4 rounded-md"
              />
            ) : (
              <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">No Image Available</span>
              </div>
            )}
          </div>
  
          <div className="lg:w-1/2 p-8 py-10 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-[#722121] mb-4">
                {product.name}
              </h1>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>
              <div className="text-sm space-y-2 mb-6">
                <p className="text-[#a4cf97] border-2 border-spacing-4 text-center bg-[#97212173] mr-24 p-1 rounded-lg">
                  <span className="font-medium">Stock Level:</span>{" "}
                  <span
                    className={`font-semibold ${
                      product.stockLevel > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {product.stockLevel > 0
                      ? `${product.stockLevel} available`
                      : "Out of Stock"}
                  </span>
                </p>
                <p className="text-[#f3b9b9] mb-2">
                  <span className="font-medium">Category:</span>{" "}
                  {product.category}
                </p>
              </div>
              <p className="text-3xl font-bold text-[#41d433]">
                Rs. {product.price.toFixed(2)}
                {product.discountPercentage > 0 && (
                  <span className="text-red-500 text-base ml-2">
                    -{product.discountPercentage}% Off
                  </span>
                )}
              </p>
            </div>
  
            <div className="mt-8">
              <button onClick={()=> addToCart(product)}
                className={`w-[70%] py-3 rounded-2xl text-white font-bold text-lg ${
                  product.stockLevel > 0
                    ? "bg-[#357d] hover:bg-[#274664dd]"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={product.stockLevel <= 0}
              >
                {product.stockLevel > 0 ? "Add to Cart" : "Out of Stock"}
              </button>
              <br />
              <br />
              <button onClick={()=> addToWishlist(product)}
                className={`w-[70%] py-3 rounded-2xl text-white font-bold text-lg ${
                  product.stockLevel > 0
                    ? "bg-[#357d] hover:bg-[#274664dd]"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              > Add To Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default ProductDetails; 