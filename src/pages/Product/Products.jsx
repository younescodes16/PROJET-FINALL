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
      <div className="search-container">
        <FaSearch />
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
            <option value="electronics">Electronics</option>
          </select>
        </div>
      </div>
      <Productlist products={filteredProducts} />
    </>
  );
};

export default App;





// import { useState } from "react";
// import { useEffect } from "react";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((json) => setTodos(json));
//   }, []);
//   const handleDelete = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };
//   return (
//     <div>
//       {todos.map((todo) => (
//         <>
//           <h1>todo : </h1>
//           <p key={todo.id}>{todo.title}</p>
//           <button onClick={() => handleDelete(todo.id)}>remove</button>
//         </>
//       ))}
//     </div>
//   );
// };

// export default App;

// import { useState } from 'react';
// import './App.css'
// import { FaSearch } from "react-icons/fa";
// import axios from 'axios';
// import './Moviecard.jsx'
// const App = () => {
//   const [input, setInput] = useState("")
//   const apikey = "http://www.omdbapi.com/?i=tt3896198&apikey=d47e243a"
//   const Posts = () => {
//     axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=d47e243a")
//       .then(res => {
//          console.log(res) })

//   };
//   return (
//     <>
//       <div className='card'>
//         <div className='nav'>
//           <h1 className='container1'>Movieland</h1>
//         </div>
//         <br /><br /><br />
//         <input type="text" className='container2' onChange={(e) => setInput(e.target.value)} />
//         <div className='container3'>
//           <FaSearch />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
