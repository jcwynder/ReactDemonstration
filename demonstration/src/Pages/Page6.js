import React, { useState, useEffect } from "react";

function Page6() {
  const [name, setName] = useState([]);

  // Run names Function when page Loads

  useEffect(() => {
    names();
  }, []);

  // Use async/await to fetch data

  const names = async () => {
    const responce = await fetch(
      "https://jsonplaceholder.typicode.com/albums/"
    );
    console.log(responce);

    // Store the data into setName variable

    setName(await responce.json());
  };

  return (
    <div>
      <h1>Group List</h1>
      <ol className="list-group list-group-numbered">
        {name.map((data) => {
          return (
            <li className="list-group-item" key={data.id}>
              {" "}
              {data.title}{" "}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Page6;
