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
    <div className="min-h-screen bg-[#d8c8abdd] py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-96 object-cover"
            />
          )}
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 text-base mb-4">{product.description}</p>
            <p className="text-gray-800 font-medium text-lg mb-2">
              Price: Rs. {product.price.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-red-500 font-medium mb-2">
                Discount: {product.discountPercentage}%
              </p>
            )}
            <p className="text-gray-600 text-sm mb-4">
              Stock Level: {product.stockLevel > 0 ? product.stockLevel : "Out of stock"}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="w-full mb-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => addToWishlist(product)}
              className="w-full px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 