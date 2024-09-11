import Productcard from "../Productcard/Productcard";
import "./productlist.css"

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
