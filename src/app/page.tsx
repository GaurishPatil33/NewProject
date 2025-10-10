"use client";
import CategoryList, { CategoryListType2 } from "@/components/CategoryList";
import CategoryStories from "@/components/CategoryStories";
import FeatureStrip from "@/components/FeaturesStrip";
import { ImageBanner2 } from "@/components/ImageBanner";
import {
  ProductList,
  ProductList3,
  ProductListType2,
  ProductsGrid,
} from "@/components/ProductList";
import { Categories, occasions } from "@/lib/data";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { fetchAllProducts } from "@/lib/productfetching";
import { Product } from "@/lib/types";
import { useState, useEffect } from "react";

// Parent container animation (controls stagger effect)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, // 👈 children animate one after another
  },
};

// Child card animation
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const sarees = products.filter((s) => s.category.includes("sarees"));
  const kurtas = products.filter((s) =>
    ["kurtas", "salwar"].some((key) => s.category.includes(key))
  );
  // const [isMobile, setIsMobile] = useState(false);
  const isMobile = useIsMobile();
  const selectedType = isMobile ? "grid" : "slider";

  // useEffect(() => {
  //   setIsMobile(window.innerWidth < 768);
  // }, []);

  useEffect(() => {
    const fetch = () => fetchAllProducts();
    console.log(fetch);
    setProducts(fetch);
  }, []);
  const randomProducts = products.sort(() => Math.random() - 0.5);

  return (
    <div className="flex flex-col h-full pt-4 gap-3 md:gap-6">
      <div className="">
        <CategoryStories />
      </div>
      <ImageBanner2 />

      <FeatureStrip />

      {/* Shop by Category */}
      <CategoryListType2
        data={Categories}
        title="Shop by Category"
        // displayType={selectedType}
        displayType="grid"
      />

      {/* <ProductListType2 products={sarees} title="Best Seller - Sarees" /> */}
      <ProductList3 products={sarees} title="Best Seller - Sarees" />
      {/* Shop by Occasion */}
      <CategoryListType2
        data={occasions}
        title="Shop by Occasion"
        displayType="grid"
      />

      {/* products */}
      {/* <ProductList products={kurtas} title="Best Seller - Kurtas/Salwars" /> */}
      <ProductList3 products={kurtas} title="Best Seller - Kurtas/Salwars" />

      <ProductsGrid
        products={randomProducts}
        title="Checkout our other products"
      />

      {randomProducts.length}
    </div>
  );
}
