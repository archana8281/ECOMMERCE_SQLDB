import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import axios from "axios";
import TopDeals from "../../components/Innernav";

function Collection() {
  const [categoryData, setCategoryData] = useState({});
  const [productsData, setproductsData] = useState([]);
  const [Topproduct, setTopproduct] = useState();
  let updatedData;
  let [searchParams, setSearchParams] = useSearchParams();
  const idValue = searchParams.get("id");
  // useEffect(() => {
  //   const productFetch = async () => {
  //     // const idValue = searchParams.get("id");

  //     const response = await axios.post(
  //       "https://firestore.googleapis.com/v1/projects/ecommerce-79a2b/databases/(default)/documents:runQuery",

  //       {
  //         structuredQuery: {
  //           from: [
  //             {
  //               collectionId: "categories",
  //             },
  //           ],

  //           where: {
  //             compositeFilter: {
  //               filters: [
  //                 {
  //                   fieldFilter: {
  //                     field: {
  //                       fieldPath: "id",
  //                     },
  //                     op: "EQUAL",
  //                     value: {
  //                       integerValue: `${idValue}`,
  //                     },
  //                   },
  //                 },
  //               ],
  //               op: "AND",
  //             },
  //           },

  //           limit: 4,
  //         },
  //       }
  //     );

  //     const data = response?.data[0];
  //     setCategoryData(data);
  //     setTopproduct(data?.documents);
  //   };
  //   const data1 = productFetch();
  // }, []);

  useEffect(() => {
    const products2Fetch = async () => {
      const idValue = searchParams.get("id");

      const response2 = await axios.post(
        "http://localhost/ecommerce_db/documents:runQuery",

        {
          structuredQuery: {
            from: [
              {
                collectionId: "products",
              }, 
            ],

            where: {
              compositeFilter: {
                filters: [
                  {
                    fieldFilter: {
                      field: {
                        fieldPath: "category",
                      },
                      op: "EQUAL",
                      value: {
                        integerValue: `${idValue}`,
                      },
                    },
                  },
                ],
                op: "AND",
              },
            },
          },
        }
      );

      const data = response2?.data;
       updatedData = data.map((a) => {
        return a.document.fields; 
      });
      setproductsData(updatedData);
      console.log({updatedData});
    };
console.log({productsData});
    const data1 = products2Fetch();
   
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
     <TopDeals data={productsData}/>
      <Footer />
    </div>
  );
}

export default Collection;
