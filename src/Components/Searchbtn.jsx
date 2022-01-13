import { useContext } from "react";
import "../D.css"
import { context } from "./Api";
const Searchbtn = () => {



 const {fetchApi}=  useContext(context)


 return (
    <>

      <div class="container mt-3" id="search_Container">
        <div className="row  ">
          <div className="col-12 text-center   border d-flex justify-content-center align-items-center">

            <form onSubmit={fetchApi}>
            <input
            autoComplete="off"
              type="text "
              id="input"
              placeholder="Search for a  City..."
              name='location'

              />
            <button className="btn" id="btn"><i className="fas fa-search"></i></button>
                </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbtn;
