import { Fragment } from "react";
import { Link } from "react-router-dom";
import Recommendations from "./Recomendations";
export default function Home() {
  return (
    <Fragment>
      <div className="d-flex flex-column pt-4 pb-5 mt-4 bg-red text-center home">
        <h2 className="h1 pt-5 my-3">Find & track the best <span className="text-info">free-to-play </span>games!</h2>
        <p className="lead mb-3">Track what you've played and search for what to play next! Plus get free premium loot!</p>
        <Link className="text-decoration-none btn btn-outline-info click mx-auto" to="/All">Browse Games</Link>
      </div>
      <Recommendations />
    </Fragment>
  );
}
