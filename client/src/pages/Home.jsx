import React from 'react'; 
import { CartTable, DiscountTable, ProductTable } from '../components';
import './Home.css'; 

const Home = () => {
    return(
        <div className="home">
        <DiscountTable />
        <ProductTable />
        <CartTable />

        </div>
    )

}

export default Home; 