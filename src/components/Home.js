import React from "react";

import Section from "./Section";

const Home = () => {
  return (
    <div className="home">
      <Section
        title="Model S"
        desc="Order Online for Touchless Delivery"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        bgimg="model-s.jpg"
      />
      <Section
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        bgimg="model-y.jpg"
      />
      <Section
        title="Model X"
        desc="Order Online for Touchless Delivery"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        bgimg="model-x.jpg"
      />
      <Section
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        bgimg="model-3.jpg"
      />
      <Section
        title="Lower Cost Solar Panel in India"
        desc="Money-back guarantee"
        leftbtn="Order now"
        rightbtn="Learn More"
        bgimg="solar-panel.jpg"
      />
      <Section
        title="Solar for New Roofs"
        desc="Solar Roof Cost Than a New Roof Plus Solar Panel"
        leftbtn="Order now"
        rightbtn="Learn More"
        bgimg="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        desc=""
        leftbtn="Shop now"
        bgimg="accessories.jpg"
      />
    </div>
  );
};

export default Home;
