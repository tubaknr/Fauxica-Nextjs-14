import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="overlay"></div>
      <div className="wrapper">
  
        <main>
          <div className="left-col">
            <h1>Quality apparel without the price tag</h1>
            <p className="subhead">
              No need to spend $xxx on apparel just for the name’s sake. Our premium apparel is made from the same stuff.
            </p>
            <div className="cta-btns">
              <a href="#" className="primary-cta">Browse our collection</a>
              <a href="#" className="secondary-cta">
                Spring '24 Collection
                <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.3536 4.85355C18.5488 4.65829 18.5488 4.34171 18.3536 4.14645L15.1716 0.964466C14.9763 0.769204 14.6597 0.769204 14.4645 0.964466C14.2692 1.15973 14.2692 1.47631 14.4645 1.67157L17.2929 4.5L14.4645 7.32843C14.2692 7.52369 14.2692 7.84027 14.4645 8.03553C14.6597 8.2308 14.9763 8.2308 15.1716 8.03553L18.3536 4.85355ZM0 5H18V4H0V5Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
            <div className="celebrity">
              <p className="people">50K</p>
              <p className="text">
                We’re proud to announce that we now employ a workforce of over <strong>50,000</strong>. It’s all possible because of you.
              </p>
            </div>
          </div>
          <div className="right-col">
            <div className="card card1">
              <div className="card-details">
                <div className="left-texts">
                  <a href="#">Fauxica sports</a>
                  <p>Running shoes</p>
                </div>
                <div className="price">
                  <p>$49</p>
                </div>
              </div>
            </div>
            <div className="card card2">
              <div className="card-details">
                <div className="left-texts">
                  <a href="#">Fauxica sports</a>
                  <p>Running shoes</p>
                </div>
                <div className="price">
                  <p>$49</p>
                </div>
              </div>
            </div>
            <div className="card card3">
              <div className="card-details">
                <div className="left-texts">
                  <a href="#">Fauxica sports</a>
                  <p>Running shoes</p>
                </div>
                <div className="price">
                  <p>$49</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
