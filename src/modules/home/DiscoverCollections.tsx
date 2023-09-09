import React from "react";
import SubTitles from "../../component/SubTitles";
import { useFilter } from "../../context/filter-context";
import { Link } from "react-router-dom";

function DiscoverCollections() {
  const { handleCheck, resetFilter, filter, onPressCategoryFilters } =
    useFilter();

  return (
    <section className="section">
      <div className="container">
        <SubTitles aboveText="Discover" belowText="The Collections!" />
        <div className="is-flex is-flex-direction-row is-justify-content-center	is-align-items-center">
          <Link
            to={"/shop"}
            className="container is-max-desktop mr-4 img__wrap is-clickable"
            onClick={(e) => onPressCategoryFilters("isWomen")}
            // onClick={(e) => handleCheck(e, onPressCategoryFilters)}
          >
            <img
              src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2730&q=80"
              className="image"
              alt="test1"
              style={{ maxHeight: "3000px" }}
            />
            <div className="img__description is-flex is-justify-content-center	is-align-items-center">
              <p className="title has-text-white">Women</p>
            </div>
          </Link>

          <div className="is-max-desktop mx-4">
            <Link
              to={"/shop"}
              className="mb-4 img__wrap is-clickable"
              onClick={(e) => onPressCategoryFilters("isMen")}
            >
              <img
                src="https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                className="image"
                alt="test2"
              />
              <div className="img__description is-flex is-justify-content-center	is-align-items-center">
                <p className="title has-text-white">Men</p>
              </div>
            </Link>

            <Link
              to={"/shop"}
              className="img__wrap is-clickable"
              onClick={(e) => onPressCategoryFilters("isJewelry")}
            >
              <img
                src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                className="image mt-4"
                alt="test3"
              />
              <div className="img__description is-flex is-justify-content-center	is-align-items-center">
                <p className="title has-text-white">Jewelery</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscoverCollections;
