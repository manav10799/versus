import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  removeCompareItem,
  clearCompareItems,
} from "../slices/productCompareSlice";

const CompareView = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const compareItems = useSelector((store) => store?.addCompareProducts);
  const dispatch = useDispatch();

  if (!compareItems || compareItems.length < 2) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <p className="text-lg mb-4">Select at least 2 products to compare.</p>
        <button
          onClick={() => navigate(`/category/${categoryId}`)}
          className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const featureKeys = Object.keys(compareItems[0].features || {});

  // checking the difference
  const isDifferent = (key) =>
    new Set(compareItems.map((item) => item.features[key])).size > 1;

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(`/category/${categoryId}`)}
          className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 cursor-pointer"
        >
          ← Back to Products
        </button>
        <button
          onClick={() => {
            dispatch(clearCompareItems());
          }}
          className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 cursor-pointer"
        >
          Clear All
        </button>
      </div>

      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
        Compare Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {compareItems.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow relative"
          >
            <button
              className="absolute top-3 right-3 text-red-500 hover:text-red-700 cursor-pointer"
              onClick={() => {
                dispatch(removeCompareItem(item.id));
              }}
            >
              ✕
            </button>
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 mx-auto object-contain mb-3"
            />
            <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white">
              {item.name}
            </h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              {item.brand}
            </p>
            <p className="text-center text-blue-600 dark:text-blue-400 font-semibold">
              {item.price}
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left text-gray-900 dark:text-white">
                Feature
              </th>
              {compareItems.map((item) => (
                <th
                  key={item.id}
                  className="border px-4 py-2 text-gray-900 dark:text-white"
                >
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureKeys.map((key) => (
              <tr
                key={key}
                className={
                  isDifferent(key) ? "bg-amber-100 dark:bg-amber-700" : ""
                }
              >
                <td className="border px-4 py-2 font-medium capitalize text-gray-800 dark:text-gray-200">
                  {key}
                </td>
                {compareItems.map((item) => (
                  <td
                    key={item.id + key}
                    className="border px-4 py-2 text-center text-gray-800 dark:text-gray-200"
                  >
                    {item.features[key] ? item.features[key] : "Not Available"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompareView;
