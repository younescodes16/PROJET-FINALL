import Productcard from "../Productcard/Productcard";
import "./Productlist.css"

const Productlist = ({products}) => {



    
    return (
        <>
        
           <div className="product-list">
             {products.map((product)=>(
                <Productcard key={product.id} product={product}></Productcard>
            ))}
           </div>
        </>
    );
}

export default Productlist;
