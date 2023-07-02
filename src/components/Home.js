import React from "react";

function Home()
{
    return(
        <div className="App">
            <div className="add-to-cart">
               <img src="https://cdn.vectorstock.com/i/preview-1x/62/87/flat-design-shopping-cart-vector-13576287.webp" alt="cart"/>
            </div>
            <h1>home component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                   <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios13-iphone-xs-home-assistive-touch.png" alt="mobile"/>
                </div>
                <div className="text-wrapper item">
                     <span>
                        I-PHONE
                     </span>
                     <h4>
                        Price:$1000.00
                     </h4>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;