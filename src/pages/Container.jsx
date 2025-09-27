import React from "react";
import { useNavigate } from "react-router-dom";

const Container = () => {
  const navigate = useNavigate();
  const categories = [
    {
      id: "mobiles",
      name: "Mobiles",
      image:
        "https://assetscdn1.paytm.com/images/catalog/product/E/ED/EDCIPHONE-17-PRPAYT1152435CC1B20A2/0.jpg",
    },
    {
      id: "laptops",
      name: "Laptops",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=892&hei=820&fmt=jpeg&qlt=90&.v=YnlWZDdpMFo0bUpJZnBpZjhKM2M3VGhTSEZFNjlmT2xUUDNBTjljV1BxWjZkZE52THZKR1lubXJyYmRyWWlhOXZvdUZlR0V0VUdJSjBWaDVNVG95Yk15Y0c3T3Y4UWZwZExHUFdTUC9lN28",
    },
    {
      id: "headphones",
      name: "Headphones",
      image:
        "https://www.apple.com/v/airpods/aa/images/overview/hero_endframe__calpooy4ucr6_large.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center p-10 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-2 text-center tracking-tight">
        Find the Best, Instantly
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 text-center max-w-2xl">
        Effortlessly compare mobiles, laptops, headphones, and more. Make
        smarter buying decisions with side-by-side product insights.
      </p>
      <ul className="flex gap-6 mt-6">
        {categories.map((category) => (
          <li
            onClick={() => navigate(`/category/${category.id}`)}
            key={category.id}
            className="flex flex-col items-center px-5 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors w-32"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-16 h-16 object-contain mb-2 rounded-md bg-white dark:bg-gray-900 shadow"
              loading="lazy"
            />
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Container;
