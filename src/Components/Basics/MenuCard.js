import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      {menuData.map((curElem) => {
        return (
          <>
            <section className="main-card--container">
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">1</span>
                    <span className="card-author subtle">Breakfast</span>
                    <h2 className="card-title">Maggi</h2>
                    <span className="card-description subtle">
                      Loremdjhckjsdhfijkdcnkwudhs
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  {/* <img src={} alt ="images" className="card-media"></img> */}

                  <span className="card-tag subtle">Order now</span>
                </div>
              </div>
            </section>
          </>
        );
      })}
    </>
  );
};

export default MenuCard;
