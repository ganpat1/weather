import { useContext } from "react";
import "../D.css";
import { context } from "./Api";
const Searchbtn = () => {
  const { fetchApi } = useContext(context);

  return (
    <>
      <div class="container mt-3" id="search_Container">
        <div className="row  ">
          <div className="col-12 rounderd-2  my-auto ">
            <form onSubmit={fetchApi}>
              <input
                autoComplete="off"
                type="text "
                id="input"
                placeholder="Search for a  City..."
                name="location"
                style={{
                  background: "transparent",
                  borderBottom: " 3px solid black",
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbtn;
