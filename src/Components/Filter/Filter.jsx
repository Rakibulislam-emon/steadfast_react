import axios from "axios";
import { useEffect, useState } from "react";

export default function Filter() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]); // State for selected categories

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://techmart-nine.vercel.app/allProducts");
        setAllProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter products based on input and selected categories
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    filterProducts(value, selectedCategories);
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    const newSelectedCategories = checked 
      ? [...selectedCategories, value] 
      : selectedCategories.filter((category) => category !== value);
    
    setSelectedCategories(newSelectedCategories);
    filterProducts(filter, newSelectedCategories);
  };

  const filterProducts = (searchTerm, categories) => {
    const filtered = allProducts.filter(product => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categories.length === 0 || categories.includes(product.category);

      return matchesSearch && matchesCategory;
    });

    setFilteredProducts(filtered);
  };

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error fetching products: {error.message}</div>;

  // Get unique categories for filtering
  const uniqueCategories = [...new Set(allProducts.map(product => product.category))];

  return (
    <div className="max-w-screen-2xl mx-auto p-5">
      <h1 className="text-4xl  mb-6 text-center font-serif">Find Your Desired Products</h1>
      <input 
        type="text" 
        placeholder="Filter by name or category" 
        value={filter} 
        onChange={handleFilterChange} 
        className="border border-gray-300 p-4 rounded-lg mb-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow duration-300 shadow-md hover:shadow-lg"
      />
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Filter by Category:</h2>
        {uniqueCategories.map(category => (
          <label key={category} className="inline-flex items-center mr-4">
            <input 
              type="checkbox" 
              value={category} 
              onChange={handleCategoryChange} 
              className="mr-2" 
            />
            {category}
          </label>
        ))}
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <li key={product._id} className="border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-3" />
            <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
            <p className="text-lg font-medium text-blue-500 mb-2">Price: ${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-600">{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
