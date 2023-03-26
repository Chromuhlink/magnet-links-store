import React, { useState } from "react";
import Head from "next/head";
import '../styles/tailwind.css';
import Layout from "./components/Layout";
import GoerliRatsProduct from "./components/GoerliRatsProduct";
import WrappedCheckoutForm from "./components/CheckoutForm";

const HomePage = () => {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleBuyClick = () => {
    setShowCheckout(true);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4"> 
      {showCheckout ?  (
        <WrappedCheckoutForm /> 
      ) : (
        <GoerliRatsProduct onBuyClick={handleBuyClick} />
      )}
      </div> 
      </Layout>
  );
};

export default HomePage;
