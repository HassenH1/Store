import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../layout/Loading";
import { useFilter } from "../../context/filter-context";

interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

interface IContent {
  products?: IProduct[];
  onPressCategoryFilters: (option?: string) => void;
}

/**
 * @todo - separate this component
 * @param props
 * @returns {JSX.Element}
 */
const Content = (props: IContent) => {
  const { products, onPressCategoryFilters } = props;

  const CategoryFilter = () => {
    const { handleCheck, resetFilter, filter } = useFilter();

    return (
      <>
        <div className="column is-one-fifth">
          <nav className="panel">
            <p className="panel-heading">Categories</p>
            <label className="panel-block">
              <input
                type="checkbox"
                onChange={(e) => handleCheck(e, "isWomen")}
                checked={filter.isWomen}
                name="isWomen"
              />
              Women
            </label>
            <label className="panel-block">
              <input
                type="checkbox"
                onChange={(e) => handleCheck(e, "isMen")}
                checked={filter.isMen}
                name="isMen"
              />
              Men
            </label>
            <label className="panel-block">
              <input
                type="checkbox"
                onChange={(e) => handleCheck(e, "isJewelery")}
                checked={filter.isJewelry}
                name="isJewelry"
              />
              Jewelery
            </label>
            <div className="panel-block">
              <button
                className="button is-link is-outlined is-fullwidth"
                onClick={() => resetFilter(onPressCategoryFilters)}
              >
                Reset all filters
              </button>
            </div>
          </nav>
        </div>
      </>
    );
  };

  const ListOfItems = () => {
    if (!products) return <Loading size="large" />;

    return (
      <div className="column px-6">
        <div className="columns is-flex-wrap-wrap">
          {products.map((product, i) => {
            return (
              <div
                className="column is-12-mobile is-6-tablet is-4-desktop"
                key={"row" + i}
              >
                <Link
                  className="card is-clickable"
                  style={{ height: "400px" }}
                  to={`/product/${product.id}`}
                >
                  <div className="card-image">
                    <div
                      style={{
                        maxWidth: "100%",
                        height: "250px",
                        backgroundImage: `url(${product.image})`,
                        backgroundPosition: "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="subtitle is-6 has-text-weight-semibold">
                          ${Number(product.price).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="content has-text-weight-light	">
                      {product.title}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="section">
      <h1 className="title">Shop All</h1>
      <div className="container">
        <div className="columns">
          <CategoryFilter />
          <ListOfItems />
        </div>
      </div>
    </section>
  );
};

export default Content;
