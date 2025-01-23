"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";

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

const CategoryProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
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

      try {
        const data: Product[] = await client.fetch(query);
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center py-8">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 py-8">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-500 text-sm">{product.category}</p>
              <p className="mt-2 text-gray-800">
                {product.discountPercentage > 0 ? (
                  <>
                    <span className="line-through text-gray-500">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="ml-2 text-red-600 font-bold">
                      $
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}
                    </span>
                  </>
                ) : (
                  `$${product.price.toFixed(2)}`
                )}
              </p>
              <p className="mt-2 text-sm text-gray-700">
                {product.description.length > 100
                  ? `${product.description.slice(0, 100)}...`
                  : product.description}
              </p>
              {product.stockLevel > 0 ? (
                <p className="mt-2 text-green-500">In Stock</p>
              ) : (
                <p className="mt-2 text-red-500">Out of Stock</p>
              )}
              {product.isFeaturedProduct && (
                <p className="mt-2 text-blue-500 font-semibold">
                  Featured Product
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
