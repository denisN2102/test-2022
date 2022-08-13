import { useState } from "react";
import "./App.css";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };
  const handleClick2 = () => {
    setIsActive2((current) => !current);
  };
  const handleClick3 = () => {
    setIsActive3((current) => !current);
  };
  const handleClick4 = () => {
    setIsActive4((current) => !current);
  };
  const handleClick5 = () => {
    setIsActive5((current) => !current);
  };
  const handleClick6 = () => {
    setIsActive6((current) => !current);
  };

  let FuncCalls = 0;
  function func1() {
    FuncCalls++;
    console.log(`function called ${FuncCalls} times`);
  }
  func1(); //1
  func1(); //2
  func1(); //3
  //       1

  const d = {
    left: {
      left: {
        left: 1,
        right: {
          left: 0,
          right: 1,
        },
      },
      right: {
        left: 0,
        right: 1,
      },
    },
    right: 1,
  };

  const foo = (node) => {
    for (let key in node) {
      if (typeof node[key] == "number") {
        node[key] = 1 - node[key];
      }
    }
    if (node.right) {
      foo(node.right);
    }
    if (node.left) {
      foo(node.left);
    }

    return node;
  };

  console.log(foo(d));

  // 2

  // const d = {
  //   left: {
  //     left: {
  //       left: 1,
  //       right: {
  //         left: 0,
  //         right: 1,
  //       },
  //     },
  //     right: {
  //       left: 0,
  //       right: 1,
  //     },
  //   },
  //   right: 1,
  // };

  // function calculateAddedValue(number) {
  //   if (number.left === 0) {
  //     return 1;
  //   }
  //   while (number > 0) {
  //     if (number % 10 === 0) {
  //       return 1;
  //     }
  //   }
  //   return number;
  // }

  // function replace0with1(number) {
  //   return (number += calculateAddedValue(number));
  // }
  // console.log(replace0with1(d));
  // function replaceZero(node) {
  //   let left = node.left;
  //   node.left = node.right;
  //   node.right = left;
  //   replaceZero(node.left);
  //   replaceZero(node.right);
  //   if (node.left === 0) {
  //     return 1;
  //   } else if (node.right === 1) {
  //     return 0;
  //   }
  // }

  // console.log(replaceZero(d));

  const bar = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push([]);
      for (let j = 0; j < n; j++) {
        if (i === j || i + j === n - 1) {
          arr[i].push(2);
        } else if ((j > i && i + j < n - 1) || (i > j && i + j > n - 1)) {
          arr[i].push(1);
        } else {
          arr[i].push(0);
        }
      }
    }
    return arr;
  };

  console.log(bar(5));

  // 3

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "200px",
          height: "180px",
          backgroundColor: isActive ? "yellow" : "red",
          color: "white",
          cursor: "pointer",
        }}
        onClick={handleClick}
      ></div>
      <div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "400px",
              height: "40px",
              backgroundColor: isActive2 ? "black" : "blue",
              cursor: "pointer",
            }}
            onClick={handleClick2}
          ></div>
          <div
            style={{
              width: "400px",
              height: "40px",
              backgroundColor: isActive3 ? "pink" : "green",
              cursor: "pointer",
            }}
            onClick={handleClick3}
          ></div>
        </div>
        <div style={{ height: "100px" }}>
          <div
            style={{
              width: "800px",
              height: "120px",
              backgroundColor: isActive4 ? "orange" : "purple",
              cursor: "pointer",
            }}
            onClick={handleClick4}
          ></div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "400px",
              height: "40px",
              backgroundColor: isActive5 ? "grey" : "brown",
              cursor: "pointer",
            }}
            onClick={handleClick5}
          ></div>
          <div
            style={{
              width: "400px",
              height: "40px",
              backgroundColor: isActive6 ? "teal" : "beige",
              cursor: "pointer",
            }}
            onClick={handleClick6}
          ></div>
        </div>
      </div>
    </div>
  );
};
// 4

export default App;
