import React from "react";

function NotFound() {
  return (
    <div>
      <div className="h-[80vh] w-[80vw] flex flex-col justify-center items-center gap-4">
        <h1 className="text-6xl">Oops!!</h1>
        <p>Nothing is hare...</p>

        <div className="absolute bottom-0 right-0">
          <img src="https://i.pinimg.com/564x/87/71/06/8771068b771018362268c646e8506ee7.jpg" />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
