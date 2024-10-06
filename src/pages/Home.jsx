import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import Card from "../Components/Card";
import axios from "axios";
import NotFound from "../Components/NotFound";

function Home() {
  const [caracters, setCaracters] = useState([]);
  const [ser, setSer] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  function fetchApi() {
    axios
      .get(`https://670239e1bd7c8c1ccd3e3b91.mockapi.io/W7-D1-Lap1`)
      .then(function (response) {
        setCaracters(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const foundCharacter = caracters.filter(
    (character) =>
      character.name && character.name.toLowerCase().includes(ser.toLowerCase())
  );

  return (
    <div>
      <Nav ser={ser} setSer={setSer} />

      <div className="container mx-auto my-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {foundCharacter.length === 0 ? <NotFound /> : ""}
          {foundCharacter.map((i, index) => {
            return (
              <Card
                key={index}
                image={i.image}
                name={i.name}
                status={i.status}
                gender={i.gender}
                hair={i.hair}
                origin={i.origin}
                id={i.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
