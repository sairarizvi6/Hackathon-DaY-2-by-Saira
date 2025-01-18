import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import { product } from "@/sanity/schemaTypes/product";
import Image from "next/image";



type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default async function Home() {
  const products: Product[] = await sanityFetch({ query: allproducts });

  return (
    <div>
      <h1>
        Products
        </h1>
      <div className="grid grid-cols-3 gap-4">

        {
          products.map((product) => (
            <div className="border p-4 rounded-lg shadow-sm flex flex-col items-center" key={product._id}>
              <Image src={product.imageUrl} alt={product.name} className="w-60" height={500} width={500}/>
              <h2 className="text-xl font-bold text-center">
                {product.name}
              </h2>
              <p className="text-center">
                {product.description}
              </p>
              <p className="text-center">
                {product.price}
              </p>
            </div>
          ))

        }        
      </div>
    </div>
  );
}