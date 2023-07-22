import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TopDeals from "../../components/Innernav";

function Collection() {
  const[navitem , setNavitem] = useState();
  const [searchParams ,setSearchParams] = useSearchParams();
  const id = searchParams.get('id');


  useEffect(() => {
    const fetchData = async () =>{
      const response = await fetch(`http://localhost/ecommerce_db/ProductController.php?action=fetchcategory&category=${id}`);
      const data = await response.json();
      setNavitem(data); 
        
    };
    fetchData();
  },[id])
  return (
    <div>
      <Header />
      <Navbar />
     <TopDeals data={navitem} />
      <Footer />
    </div>
  );
}

export default Collection;
