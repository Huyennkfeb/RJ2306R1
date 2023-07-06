//thực hành nhúng tên vào react element bằng React.createElement
// import React from "react";
// import ReactDOM from "react-dom/client";
// const name = "Huyennk";
// React.createElement("h1",{style:{textAlign : "center" , color : "yellow" }},name)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render (
//   React.createElement("h1",{style : {textAlign : "center", color : "yellow"}},name)
// );

//thực hành nhúng tên vào react element bằng jsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// const name = "Huyennk";
// <h1 style={{textAlign : "right" , color: "green"}}>{name}</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render (
//   <h1 style={{textAlign : "right" , color: "green"}}>{name}</h1>
// )

//tạo element hiển thị danh sách các loại quả
// import ReactDOM from "react-dom/client";
// const fruits = ["Apple","Banana","Orange","CranBerry"];
// <div>
//   <h1>List of fruits</h1>
//   <ul>
//     { fruits.map((item) => (
//       <li>{item}</li>
//     ))
//     }
//   </ul>
// </div>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//   <h1>List of fruits</h1>
//   <ul>
//     { fruits.map((item) => (
//       <li>{item}</li>
//     ))
//     }
//   </ul>
// </div>
// )

//thực hành hiển thị thời gian hiện tại
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const tick = () => {
  root.render(
    <div>
      <h1>Hello World</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
};
setInterval(tick,1000);
