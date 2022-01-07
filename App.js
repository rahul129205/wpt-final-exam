import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);

  const handleMsgChange = (e) => {
    setMsg(e.target.value);
  };
  const addUser = async () => {
    if (msg == "") {
      alert("validation failed please type again");
      return;
    }

    const url = "http://localhost:5050/adddetails";
    const data = {
      msg: msg,
    };

    await axios.post(url, data);
    const newList = [data, ...list];
    setList(newList);
    setMsg("");
  };

  const getUser = async () => {
    const url = "http://localhost:5050/userdetails";
    const result = await fetch(url);
    const list = await result.json();
    const newList = [...list];
    setList(newList);
  };

  useEffect(() => getUser(), []);

  return (
    <div>
      <h2 className="bg-dark text-light p-1 mb-0">ChatApp</h2>
      <h6 className="bg-dark text-light p-1 mb-3">
        By Shrikant Bankar,ID:210940520092
      </h6>

      <div className="row">
        <div className="col-10">
          <input
            className="form-control form-control-lg m2"
            type="text"
            name=""
            id=""
            value={msg}
            onChange={handleMsgChange}
            placeholder="lets chat here........"
          />
        </div>
        <div className="col-2">
          <input
            className="form-control form-control-lg m2"
            type="button"
            name=""
            id=""
            value="SEND"
            onClick={addUser}
          />
        </div>
        <div className="col-9">
          <input
            className="form-control form-control-lg mt-5"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="col-9">
          <input
            className="form-control form-control-lg mt-5"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="col-9">
          <input
            className="form-control form-control-lg mt-5"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="col-9">
          <input
            className="form-control form-control-lg mt-5"
            type="text"
            name=""
            id=""
          />
        </div>

        {list.map((item, index) => (
          <div key={index} className="alert alert-secondary fs-3">
            {item.msg}
          </div>
        ))}
      </div>
    </div>
  );
}
