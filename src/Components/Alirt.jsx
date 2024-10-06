import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Alirt({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
        <div className="bg-white p-5 rounded shadow-lg">
          <h2 className="text-lg font-bold">Confirm Deletion</h2>
          <p>Are you sure you want to delete this character?</p>
          <div className="flex justify-end mt-4">
            <button className="btn btn-primary mr-2" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-error" onClick={onConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alirt;
