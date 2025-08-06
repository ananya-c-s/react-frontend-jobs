import { useState } from "react";
import { BarLoader } from "react-spinners";

const override = {
  display: "block",
  borderColor: "red",
};

function Spinner() {


  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center space-y-4 p-4">
        <h2 className="text-white text-xl">Go get some coffee ☕ ...</h2>
        <BarLoader
          color="#ffffff"
          loading={true}
          height={6}
          width={200}
          speedMultiplier={1}
          cssOverride={override}
          aria-label="Bar Loader"
        />
      </div>
    </div>
  );
}

export default Spinner;
