import React, { useEffect, useState } from "react";
import ShowProduct from "../useStage/showProduct";
import axios from "axios";
export default function UseEffectReactjs(props) {
  // Get API
  const [listUser, setListUser] = useState([]);
  const [count, setCount] = useState(1);
  const [mounted, setMounted] = useState(true);
  const toggle = () => setMounted(!mounted);
  //   const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const getUserAPI = "https://fakestoreapi.com/products?limit=5";
    axios
      .get(getUserAPI)
      .then((res) => {
        console.log(res);
        setListUser(res.data);
      })
      .catch((err) => {
        alert("Connect server fail");
      });
  }, []);
  useEffect(() => {
    document.title = `(${count} lần click)`;
  });
  function LifecycleDemo() {
    useEffect(() => {
      //Được call when component render
      console.log("render!");
      //useEffect trả về 1 hàm , hàm này có vai trò như 1 componentWillUnmount
      return () => console.log("unmounting...");
    });
    return <code>Test LifecycleDemo</code>;
  }
  return (
    <>
      <div style={{ padding: "10%" }}>
        <p>API get user list</p>
        <code>Get user</code>
        <br />
        <ShowProduct listUser={listUser} />
        <hr></hr>
        <h1>Bạn đã Click {count} lần</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click Me
        </button>
        <hr />
        <h1>LifeCycle Demo</h1>
        {mounted && <LifecycleDemo />}<br/>
        <button className="btn btn-primary" onClick={toggle}>Show/Hide LifecycleDemo</button>
      </div>
    </>
  );
}
