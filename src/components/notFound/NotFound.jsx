import React, { Fragment } from "react";
import notFound from "../../assests/notFound.webp";
export default function NotFound() {
  return (
    <Fragment>
      <div className="container w-75">
        <img src={notFound} alt="" className="w-100"></img>
      </div>
    </Fragment>
  );
}
