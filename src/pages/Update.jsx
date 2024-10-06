import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../Components/Nav";

function Update() {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [hair, setHair] = useState("");
  const [origin, setOrigin] = useState("");
  const [caracters, setCaracters] = useState([]);

  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    fetchApi();
  }, []);

  function fetchApi() {
    axios
      .get(`https://670239e1bd7c8c1ccd3e3b91.mockapi.io/W7-D1-Lap1/${id}`)
      .then(function (response) {
        setCaracters(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function SendCharacter() {
    if (
      photo === "" ||
      name === "" ||
      gender === "" ||
      status === "" ||
      hair === "" ||
      origin === ""
    ) {
      return;
    }

    axios
      .put(`https://670239e1bd7c8c1ccd3e3b91.mockapi.io/W7-D1-Lap1/${id}`, {
        image: photo,
        name: name,
        gender: gender,
        status: status,
        hair: hair,
        origin: origin,
      })
      .then(function (response) {
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <Nav />

      <div className="flex flex-col items-center justify-center h-[90vh] gap-4">
        <h1 className="text-2xl">Add Character</h1>
        <div className="flex flex-col gap-4">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder={caracters.image}
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder={caracters.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder={caracters.gender}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder={caracters.status}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder={caracters.hair}
              value={hair}
              onChange={(e) => setHair(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder={caracters.origin}
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </label>
          <button className="btn btn-primary w-full" onClick={SendCharacter}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update;
