import axios from "axios";
import { useEffect, useState } from "react";
import Productlist from "../../components/Productlist/Productlist";
import "./products.css";
import { FaSearch } from "react-icons/fa";

const App = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const productTitle = product.title ? product.title.toLowerCase() : ""; 
      const productCategory = product.category ? product.category.toLowerCase() : "";
      const searchLower = input.toLowerCase();
      const matchesSearch = productTitle.includes(searchLower);
      const matchesCategory = categoryFilter ? productCategory === categoryFilter.toLowerCase() : true;
      return matchesSearch && matchesCategory;
    });

    setFilteredProducts(filtered);
    console.log('Filtered Products:', filtered); 
  }, [input, categoryFilter, products]);

  const handleSearch = (e) => {
    setInput(e.target.value);
    console.log('Search Input Changed:', e.target.value); 
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
    console.log('Category Filter Changed:', e.target.value); 
  };

  return (
    <>
    <div className="products-container">
      <div className="search-container">
        <FaSearch className="icons-serch" />
        <input
          type="text"
          className="input-search-products"
          placeholder="Search by product title..."
          value={input}
          onChange={handleSearch}
        />
        <div className="category-filter">
          <select onChange={handleCategoryChange} value={categoryFilter}>
            <option value="">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">ELectronics</option>
          </select>
        </div>
      </div>
      <Productlist products={filteredProducts} />
      </div>
    </>
  );
};

export default App;




