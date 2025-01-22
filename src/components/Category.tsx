"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

interface Category {
  _id: string;
  name: string;
}

const CategoryProduct = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        const categoryQuery = `*[_type == "category"]{
          _id,
          name
        }`;
        const categoriesData: Category[] = await client.fetch(categoryQuery);
        setCategories(categoriesData);

        const productQuery = `*[_type == "product"]{
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
        const productsData: Product[] = await client.fetch(productQuery);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategoriesAndProducts();
  }, []);

  const filterProductsByCategory = (categoryId: string) => {
    const filteredProducts = products.filter(
      (product) => product.category === categoryId
    );
    setProducts(filteredProducts);
    setSelectedCategory(categoryId);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-wrap gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category._id}
            className={`py-2 px-4 rounded-lg border-2 text-sm transition duration-300 
              ${selectedCategory === category._id ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            onClick={() => filterProductsByCategory(category._id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md p-4">
            <Image
              src={product.imageUrl || "/default-image.png"}
              width={300}
              height={200}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-xl font-bold text-blue-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
