import React, { useEffect } from "react";
import "./App.css";
import bag from "./bag.png";
import bag1 from "./bag1.png";
import bag2 from "./bag2.png";
import bag3 from "./bag3.png";
import bag4 from "./bag4.png";
import bag5 from "./bag5.png";
import bag6 from "./bag6.png";
import user from "./user.png";
import bin from "./dustbin.png";
import cart from "./cart.png";

let bags = [bag1, bag2, bag3, bag4, bag5, bag6];
let bagObj = [
  {
    id: 1,
    bagName: "Plume Avenue",
    price: "$19.99",
    bagImage: bag1,
    bg: "#F46430",
  },
  {
    id: 2,
    bagName: "Plume Elegence",
    price: "$19.99",
    bagImage: bag2,
    bg: "#B96672",
  },
  {
    id: 3,
    bagName: "Seince Off",
    price: "$19.99",
    bagImage: bag3,
    bg: "#3F74AC",
  },
  {
    id: 4,
    bagName: "Wild-Craft",
    price: "$19.99",
    bagImage: bag4,
    bg: "#87BBEC",
  },
  {
    id: 5,
    bagName: "American Tour",
    price: "$19.99",
    bagImage: bag5,
    bg: "#D0744D",
  },
  {
    id: 6,
    bagName: "Puma",
    price: "$19.99",
    bagImage: bag6,
    bg: "#D6C33D",
  },
];
function Shop() {
  let getLocal = localStorage.getItem("localData");
  function remove(e) {
    let arr = [];
    arr.push(e);
    let val = [];
    arr.map((data) => {
      bagObj.filter((e) => {  
        if (data.id !== e.id) {
          val.push(e);
        }
      });
    });
    bagObj = val;
    const localData = JSON.stringify(bagObj);
    localStorage.setItem("localData", localData);
    getLocal = localStorage.getItem("localData");
    window.location.reload();
  }
  useEffect(() => {
    if (!getLocal) {
      const localData = JSON.stringify(bagObj);
      localStorage.setItem("localData", localData);
    }
  }, []);
  if (getLocal) {
    bagObj = JSON.parse(getLocal);
  }
  if (Object.keys(bagObj).length) {
    return (
      <>
        <div className="mainContainer">
          {bagObj.map((data) => {
            return (
              <div className="container" style={{ backgroundColor: data.bg }}>
                <div className="col">
                  <div className="toprow">
                    <h2 style={{ fontSize: "12px" }}>{data.bagName}</h2>
                    <img className="userIcon" src={user} alt="profile" />
                    <h5 className="userName">Kate</h5>
                    <img className="userIcon bag" src={bag} alt="profile" />
                    <h5 className="userName">CateGory</h5>
                    <h5 className="rightuserName">Cart</h5>
                    <img className="rightuserIcon" src={cart} alt="profile" />
                    <h5 className="loginName">Login</h5>
                    <img className="loginIcon" src={user} alt="profile" />
                  </div>
                </div>
                <div className="details">
                  <div className="detailsrow">
                    <h5 className="bagDesc">Design Style</h5>
                    <h2 className="bagDetails">{data.bagName}</h2>
                    <h5 className="price">{data.price}</h5>
                    <div className="variation">
                      {bags.map((e) => {
                        if (e !== data.bagImage) {
                          return <img className="varImage" src={e} alt="bag" />;
                        }
                      })}
                    </div>
                    <div className="button">
                      <button className="buyNow">Add to Cart</button>
                      <div onClick={() => remove(data)}>
                        <img className="bin" src={bin} alt="bin" />
                      </div>
                    </div>
                  </div>
                  <div className="imagerow">
                    <img className="mainBag" src={data.bagImage} alt="bag" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    )
  } else {
    return (
      <>
        <h2 style={{textAlign:"center",fontSize:"4em"}}>Opps! Where's Everyone</h2>
        <p style={{textAlign:"center",fontSize:"22px"}}>Delete LocalData in localStorage {"&"} Then Refresh</p>
      </>
    )
  }
}

function App() {
  return (
    <>
      <Shop />
    </>
  );
}

export default App;
