import React, { useState } from "react";
import Nav from "../Components/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Add() {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  function SendCharacter() {
    if (photo === "" || name === "" || gender === "") {
      return;
    }

    axios
      .post("https://670239e1bd7c8c1ccd3e3b91.mockapi.io/W7-D1-Lap1", {
        image: photo,
        name: name,
        gender: gender,
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
              placeholder="Character photo (url)"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Character name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Gender (male, female)"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
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

export default Add;
