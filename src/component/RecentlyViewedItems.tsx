import React from "react";
import SubTitles from "./SubTitles";

/**
 * @todd - NEED TO FIX IMAGE RESPONSIVENESS
 * @todo - NEED TO LIMIT SESSION AND REPLACE OLD WITH NEW
 * @returns
 */
const RecentlyViewedItems = () => {
  const recentlyViewedItemIds = Object.values(sessionStorage);

  console.log(
    recentlyViewedItemIds,
    "<=============does this get all the dididididi?"
  );

  return (
    <section className="section is-medium mb-5">
      <SubTitles aboveText="Recently Viewed - NOT FINISHED" />
      <div className="is-flex is-flex-direction-row is-justify-content-start	is-align-items-start is-align-content-center">
        {recentlyViewedItemIds.map((product: any) => {
          const jsonifiedProduct = JSON.parse(product);
          return (
            <div
              style={{
                display: "grid",
                border: "1px solid whitesmoke",
                width: "20%",
                height: "300px",
                margin: "0 10px",
              }}
              className="is-clickable"
            >
              <img
                src={jsonifiedProduct.image}
                alt={jsonifiedProduct.title}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "50%",
                  objectFit: "scale-down",
                }}
                className="image m-auto px-3"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentlyViewedItems;
