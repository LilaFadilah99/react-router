import React from "react";
import { useParams } from "react-router-dom";

function ServiceInfo() {
  let { id } = useParams();

  return (
    <div>
      <h3>Student info {id}</h3>
    </div>
  );
}

export default ServiceInfo;
