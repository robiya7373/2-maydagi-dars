import React from "react";
import Header from "./Header";
import Component from "./Component";
import LeftHeader from "./LeftHeader"; 

const Container = () => {
  return (
    <div className="container mx-auto flex h-screen">
      <LeftHeader/>
      <div className="flex flex-col">
        <Header />
        <Component />
      </div>
    </div>
  );
};

export default Container;
