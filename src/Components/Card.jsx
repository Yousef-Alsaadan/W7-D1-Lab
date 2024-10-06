import axios from "axios";
import React, { useEffect, useState } from "react";
import Alirt from "./Alirt";

function Card(props) {
  const [caracters, setCaracters] = useState([]);
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

  function del(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this character?"
    );

    if (confirmDelete) {
      axios
        .delete(`https://670239e1bd7c8c1ccd3e3b91.mockapi.io/W7-D1-Lap1/${id}`)
        .then(function (response) {
          fetchApi();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={props.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p>
            status: {props.status}, gender: {props.gender}, hair: {props.hair},
            origin:{props.origin}
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-error"
              onClick={() => {
                del(props.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
