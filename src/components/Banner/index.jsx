import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function Banner() {
  return (
    <section class="regular slider">
      <Carousel   autoPlay={true} showThumbs={false}>
        <div className="banner">
          <img src="images/banner.png" alt="" className="ban" />
          <div className="ban-con">
            <div className="bans">Starting 99</div>
            customer most loved home range
          </div>
        </div>
        <div className="banner">
          <img src="images/banner.png" alt="" className="ban" />
          <div className="ban-con">
            <div className="bans">Starting 99</div>
            customer most loved home range
          </div>
        </div>
        <div className="banner">
          <img src="images/banner.png" alt="" className="ban" />
          <div className="ban-con">
            <div className="bans">Starting 99</div>
            customer most loved home range
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default Banner;
