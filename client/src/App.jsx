import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  // Fetch data loop from the server
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = "http://localhost:5000/api/product";
    const res = await axios.get(url);

    console.log(res.data);
    setData(res.data);
  };

  return (
    <div>
      {data.map((item, index) => {
        console.log(item);
        return (
          <div key={index} style={{ marginBottom: "10px" }}>
            <div>Product: {item.name}</div>
            <div>Price: {item.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
