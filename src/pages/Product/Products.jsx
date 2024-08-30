import axios from "axios";
import { useEffect, useState } from "react";
import Productlist from "../../components/Productlist/Productlist";
var api_url = import.meta.env.VITE_API_URL;
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => {
        setProducts(res.data);
        
      })
     
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Productlist products={products}></Productlist>
    </>
  );
};

export default App;
