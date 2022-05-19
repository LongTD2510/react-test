import React, { useState } from "react";
import MoreContent from "./moreContent";
import axios from "axios"
import ShowProduct from "./showProduct";

export default function UseStageReactjs(props) {
  const [number, setNumber] = useState(0);
  // useState with array
  const [items, setItems] = useState([]);
  const [isShow, setShow] = useState(false);

  // Get API 
  const [listUser, setListUser] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const getUserAPI = "https://fakestoreapi.com/products?limit=5";
  const getUser = () => {
    setLoading(true);
    axios.get(getUserAPI).then((res) => {
      console.log(res)
      setListUser(res.data);
    }).catch((err) => {
      alert('Connect server fail');
    }).finally(() => {
      setLoading(false)
    })
  }
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        name: Math.round(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <>
      <div style={{ padding: "10%" }}>
        <b>{number}</b>
        <input type="text" onChange={() => {}} value={number} />
        <hr />
        <button
          onClick={(e) => {
            setNumber(Math.round(Math.random() * 100));
          }}
        >
          Random
        </button>
        <hr />
        <p>List API</p>
        <button onClick={addItem} className="btn btn-primary">
          Add Items
        </button>
        <table>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>{item.name}</tr>
            ))}
          </tbody>
        </table>
        <hr />
        <p>Show content</p>
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fuga tempora facilis commodi sequi vero, provident veritatis doloribus voluptas iste! Amet, consequuntur repudiandae! Obcaecati consequuntur excepturi libero ipsam laboriosam neque!</p>
          {isShow === true ? <MoreContent /> : ''}
          {isShow === false ? <a href="/#" onClick={() => {
            //when click on button and it will update state to call function setShow is declare above
            setShow(true)
          }}>Read more...</a> : <a href="/#" onClick={() => {
              setShow(false)
          }}>....</a>}
        </div>
        <hr />
        <p>API get user list</p>
        <code>Get user</code><br/>
        {isLoading ? "loading..." : <button className="btn btn-primary" onClick={getUser}>Get List</button>}
        <ShowProduct listUser={listUser}/>
      </div>
    </>
  );
}
