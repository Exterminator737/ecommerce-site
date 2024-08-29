import { useState } from "react";


const Data = () => {
  const [a, setA] = useState({})
  const url = "https://dummyjson.com/products?limit=0";

  fetch(url)
    .then((res) => res.json())
    .then((data) => setA(data));

    console.log(a)
  return <div>Data</div>;
};

export default Data;
