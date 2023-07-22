import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'
import { useEffect , useState} from 'react';
import { useSearchParams } from "react-router-dom";


function About() {
  const [Data , setData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost/ecommerce_db/aboutController.php?action=fetchone&id=${id}`
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [id]);
  return (
    <div>
        <Header/>
        <Navbar/>
        {Data?.map((item) =>(
        <div className="details">
        <h2 className="details-head">
          <u>{item.name}</u>
        </h2>
        <p>{item.content}</p>
        </div>
      ))}
        <Footer/>
    </div>
  )
}

export default About