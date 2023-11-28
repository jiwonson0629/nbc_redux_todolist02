import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Todo from "../components/Todo";

const Home = () => {
  return (
    <div>
      <Header />
      <Input />
      <Todo isActive={false} />
      <Todo isActive={true} />
    </div>
  );
};

export default Home;
