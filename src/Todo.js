import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "./action";
import { updateItem } from "./action";

const Todo = (props) => {
  const [obj, setObj] = useState("");
  const [key, setKey] = useState(0);

  const dataObj = {
    job: obj,
    status: "created"
  };

  const actionHandler = (e) => {
    e.preventDefault();
    if (obj !== "") {
      dataHandler(e);
      if (key === 0) {
        props.addItem(dataObj);
      } else {
        props.updateItem(dataObj, key);
      }
      console.log("item added");
      setObj("");
      setKey(0);
    }
  };

  const dataHandler = (e) => {
    dataObj.job = obj;
    if (key !== 0) {
      dataObj.status = "modified";
    }
  };

  return (
    <div>
      <form>
        <label for="id1" color="red">
          <h5> Enter TODO</h5>
        </label>
        <input
          className="form-control"
          type="text"
          id="id1"
          value={obj}
          onChange={(e) => setObj(e.target.value)}
        />
        <button
          className="btn btn-primary "
          type="submit"
          onClick={(e) => {
            actionHandler(e);
          }}
        >
          Add
        </button>
      </form>
      <div>
        {props.itemList.map((item, index) => (
          <>
            <li key={index} className="text-primary text-start">
              {item.job}
              <button
                onClick={() => {
                  setObj(item.job);
                  setKey(index);
                  console.log("item key", index);
                }}
              >
                edit
              </button>
            </li>
          </>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("checkk", state);
  return { itemList: state.itemList };
};

export default connect(mapStateToProps, { addItem, updateItem })(Todo);
