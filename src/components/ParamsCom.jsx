import { useParams } from "react-router-dom";

function ParamsCom() {
  const { id } = useParams();
  return (
    <div>
      <h1>Params: {id}</h1>
    </div>
  );
}

export default ParamsCom;
