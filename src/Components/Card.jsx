import axios from "axios";
import React, { useEffect, useState } from "react";
import Alirt from "./Alirt";
import { Link } from "react-router-dom";

function Card(props) {
  const [caracters, setCaracters] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [characterToDelete, setCharacterToDelete] = useState(null);

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
    setCharacterToDelete(id);
    setDialogOpen(true);
  }

  function handleConfirmDelete() {
    axios
      .delete(
        `https://670239e1bd7c8c1ccd3e3b91.mockapi.io/W7-D1-Lap1/${characterToDelete}`
      )
      .then(function (response) {
        fetchApi();
        setDialogOpen(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <Alirt
        isOpen={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={handleConfirmDelete}
      />

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
            <Link to={`/update/${props.id}`} className="btn btn-primary">
              Update
            </Link>
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
