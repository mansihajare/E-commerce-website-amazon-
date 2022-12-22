import React from "react";
import "../componentCss/home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://m.media-amazon.com/images/I/51wUWp8dG3L._SX1500_.jpg"
        />

        <div className="home_rows">
          <Product
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7Y3LNa2QsxGy_YkHUWDo0HaEKZhDF_PuWw&usqp=CAU"
            title="The Lean Startup
                    How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price="999"
            rating={1}
          />

          <Product
            title="Kenwood Chef XLTitanium KVL8472S, For Wet & Dry Grinding"
            price="999"
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYKNvRdT-JfxLDteea2WM26_Bh-KztZAvLw&usqp=CAU"
          ></Product>
        </div>

        <div className="home_rows">
          <Product
            title="M 1 Smart Watch ID115 Plus Bluetooth Smart Fitness Band Watch with Heart Rate Activity Tracker Waterproof Body"
            price={599}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUuSTRpFARLmkSdeyyLZfXdR-9bBH3gFr9w&usqp=CAU"
          ></Product>

          <Product
            title="JBL Flip 4, Black - Waterproof, Portable & Durable Bluetooth Speaker - Up to 12 Hours of Wireless Streaming "
            price={1776}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQqs-4bcSf-jiQcdl85RElI7Gmw5XeiDoYQ&usqp=CAU"
          ></Product>

          <Product
            title="Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (4th Generation)"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfZ1LwMs9atCvslANeGdnpX-EB-3OZHOq1g&usqp=CAU"
            price={44900}
            rating={4}
          ></Product>
        </div>

        <div className="home_rows">
          <Product
            title="Samsung 123.9cm (49) Gaming Monitor with 32:9 Aspect Ratio Display and 240Hz Refresh Rate - LC49G95TSSWXXL"
            price={1098.98}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS88DKL-f5-V_Gm1R3fDJnw8aOy6YPKiVoNUKZsDk-J3jQIEc_fOA4MxHLfnE6rQgUHTkY&usqp=CAU"
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
