import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/about");
  }
  return (
    <div>
      Homepage
      <div>
        <button onClick={handleNavigate}>Go to About page</button>
      </div>
    </div>
  );
}

export default Homepage;
