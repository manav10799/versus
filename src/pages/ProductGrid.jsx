import { useDispatch, useSelector } from "react-redux";
import DATA from "../productData/data.json";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addCompareItems } from "../slices/productCompareSlice";
import { useEffect, useState } from "react";

const filterRange = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1500, 2000, 2500,
];

const ProductGrid = () => {
  const params = useParams();
  const navigate = useNavigate();
  const products = DATA.filter((p) => p.category === params.categoryId);
  const dispatch = useDispatch();
  const selector = useSelector((store) => store?.addCompareProducts);
  const [filteredProducts, setFilterProducts] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(100);

  const handleSelectPrice = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleAddProduct = (id) => {
    const filterData = DATA.find((d) => d.id === id);
    dispatch(addCompareItems(filterData));
  };

  useEffect(() => {
    const filterData = products.filter(
      (p) => Number(p.price.slice(1)) > selectedPrice
    );
    setFilterProducts(filterData);
  }, [selectedPrice]);
  return (
    <div className="flex justify-center min-h-screen bg-gray-50 dark:bg-gray-900 items-start">
      <div className="w-full max-w-6xl px-4 py-8 flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-8 gap-4 mt-6">
          <button
            className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 cursor-pointer order-1 sm:order-none"
            onClick={() => navigate("/")}
          >
            <span className="text-lg">←</span> Back to Categories
          </button>
          <Link to="compare">
            <div className="relative order-2 sm:order-none">
              <p className="text-blue-600 dark:text-blue-400 cursor-pointer flex items-center">
                Compare
                <i className="text-gray-900 dark:text-white bi bi-bar-chart-line ml-2"></i>
                <span className="absolute text-xs -top-3 -right-4 rounded-full bg-amber-400 w-5 h-5 flex items-center justify-center">
                  {selector?.length}
                </span>
              </p>
            </div>
          </Link>
        </div>
        <h2 className="text-4xl font-extrabold mb-2 capitalize text-gray-900 dark:text-white tracking-tight text-center">
          {params.categoryId}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
          Browse and compare the best options in this category.
        </p>
        <div>
          <label
            htmlFor="priceRange"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-white"
          >
            Select Price Range:
          </label>
          <select
            name="prices"
            id="priceRange"
            value={selectedPrice}
            onChange={handleSelectPrice}
            className="block w-[200px] px-4 py-2 mb-2 border dark:text-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {filterRange.map((price) => (
              <option
                key={price}
                id="priceRange"
                value={price}
              >{`>> ${price}$`}</option>
            ))}
          </select>
        </div>
        {filteredProducts.length === 0 ? (
          <h1 className="flex items-center justify-center text-4xl mt-20 font-bold text-gray-600 dark:text-gray-300">
            No Results Found
          </h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="group p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow flex flex-col items-center text-center relative"
              >
                <i
                  className="bi bi-plus-circle-dotted text-gray-900 dark:text-white absolute top-4 right-4 text-2xl cursor-pointer 
             hover:text-blue-600 active:scale-90 transition-transform duration-150 ease-in-out"
                  onClick={() => handleAddProduct(p.id)}
                ></i>
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-28 h-28 object-contain mb-4 rounded-lg bg-gray-50 dark:bg-gray-900 shadow-sm"
                  loading="lazy"
                />
                <h3
                  className="text-xl font-bold text-gray-900 dark:text-white mb-1 truncate w-full"
                  title={p.name}
                >
                  {p.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                  {p.brand}
                </p>
                <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {p.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
