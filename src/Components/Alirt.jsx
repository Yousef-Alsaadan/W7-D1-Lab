import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Alirt(props) {
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
    axios
      .delete(`https://670239e1bd7c8c1ccd3e3b91.mockapi.io/W7-D1-Lap1/${id}`)
      .then(function (response) {
        fetchApi();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <div role="alert" className="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>we use cookies for no reason.</span>
        <div>
          <Link to="/" className="btn btn-sm">
            Deny
          </Link>
          <button className="btn btn-sm btn-primary" onClick={del(props.id)}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default Alirt;
