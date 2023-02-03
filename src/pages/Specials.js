import React from "react";
import CallToAction2 from "../components/CallToAction2";
import CardImg1 from "../assets/img/greek salad.jpg";
import CartIcon from "../assets/img/basket.svg";

export default function Specials() {
  return (
    <div className="Specials">
      <div className="row Specials--row d-flex space-between text-align-left align-items-center">
        <div className="col Specials--col">
          <h2 className="Subheading Specials--Subheading">
            This Weeks Specials!
          </h2>
        </div>
        <div className="col Specials--col">
          <CallToAction2 />
        </div>
      </div>
      <div className="row Specials--card-row d-flex space-between text-align-left align-items-center">
        <div className="col Specials--card-col">
          <img
            className="card-img Specials--card-img"
            src={CardImg1}
            alt="Greek Salad"
          />
          <div className="card-title Specials--card-title d-flex space-between text-align-left align-items-center">
            <h3 className="card-title--title">Greek Salad</h3>
            <h3 className="card-title--price">$12.99</h3>
          </div>
          <p className="card-descriptions">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <a
            className="card--add-cart d-flex text-align-left"
            href="/reservation"
          >
            Order a delivery{" "}
            <span>
              <img className="card--cart-icon" src={CartIcon} alt="Cart Logo" />
            </span>
          </a>
        </div>
        <div className="col Specials--card-col">
          <img
            className="card-img Specials--card-img"
            src={CardImg1}
            alt="Greek Salad"
          />
          <div className="card-title Specials--card-title d-flex space-between text-align-left align-items-center">
            <h3 className="card-title--title">Greek Salad</h3>
            <h3 className="card-title--price">$12.99</h3>
          </div>
          <p className="card-descriptions">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <a
            className="card--add-cart d-flex text-align-left"
            href="/reservation"
          >
            Order a delivery{" "}
            <span>
              <img className="card--cart-icon" src={CartIcon} alt="Cart Logo" />
            </span>
          </a>
        </div>
        <div className="col Specials--card-col">
          <img
            className="card-img Specials--card-img"
            src={CardImg1}
            alt="Greek Salad"
          />
          <div className="card-title Specials--card-title d-flex space-between text-align-left align-items-center">
            <h3 className="card-title--title">Greek Salad</h3>
            <h3 className="card-title--price">$12.99</h3>
          </div>
          <p className="card-descriptions">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <a
            className="card--add-cart d-flex text-align-left"
            href="/reservation"
          >
            Order a delivery{" "}
            <span>
              <img className="card--cart-icon" src={CartIcon} alt="Cart Logo" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
