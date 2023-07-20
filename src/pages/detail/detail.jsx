import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/navbar";

export default function info() {
  return (
    <>
      <Header />
      <Navbar />
      
      <div className="details">
        <h2 className="details-head">
          <u>Information</u>
        </h2>
        <p>
          As an equal opportunity employer, the Shopindeed group of companies is
          committed to a diverse workforce and is also committed to a
          barrier-free employment process. In order to ensure reasonable
          accommodations for individuals protected by Section 503 of the
          Rehabilitation Act of 1973, the Vietnam Era Veterans' Readjustment
          Assistance Act of 1974, and Title I of the Americans with Disabilities
          Act of 1990, as amended, individuals that require accommodation in the
          job application process for a posted position may contact us at
          866-437-9078 for assistance.
        </p>
      </div>
    
      <Footer />
    </>
  );
}
