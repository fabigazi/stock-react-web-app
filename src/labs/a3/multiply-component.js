import { useParams } from "react-router-dom";
function MultiplyComponent() {
  const { xyz, rst } = useParams();
  //   const xyz = parameters.xyz;
  //   const rst = parameters.rst;
  return (
    <div>
      <h1>Multiply Component</h1>
      {/* <pre>{JSON.stringify(parameters, null, 2)}</pre> */}
      <p>
        Multiply({xyz}, {rst}) = {xyz * rst}
      </p>
    </div>
  );
}

export default MultiplyComponent;
