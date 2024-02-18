import { useQuery } from "@tanstack/react-query";
import fetchDocs from "./fetchDocs";
import PropTypes from "prop-types";
import { Guides } from "./Guides";

export const Overview = () => {
  const { data } = useQuery({
    queryKey: ["docs"],
    queryFn: fetchDocs,
  });

  console.log("data in overview", data);

  return (
    <div className="wrapper-flex">
      <div className={"leftbar"}>
        <Guides />
      </div>
      <div className="doc-wrapper">
        <div className={"nav-wrapper"}>
          <div className={"nav-container"}>
            <h1 className={"subtitle"}></h1>
            <nav className={"navigation"}></nav>
          </div>
        </div>
        <h1>Here be overview</h1>
        <section></section>
      </div>
    </div>
  );
};

Overview.propTypes = {
  documentation: PropTypes.array,
  navigationLinks: PropTypes.array,
  token: PropTypes.string,
};
