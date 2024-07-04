import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function TopBanner({topProducts}){

  const owlCarouselOptions = {
    // items: 3,
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1, // Adjust the number of items for smaller screens
        },
        600: {
            items: 1, // Adjust the number of items for medium screens
        },
        700: {
            items: 3, // Number of items for larger screens
        },
    },
};

    return(
        <div className="bg0 p-t-80 p-b-50">
    <div className="container">
      {/* <div style={{flexDirection:'row'}}> */}

      <OwlCarousel {...owlCarouselOptions}>
        {
          topProducts.map((item)=>{
            return(
              <div className="top-card-custom p-b-30 m-lr-auto" style={{height:300}}>
              {/* Block1 */}
              <div className="block1 wrap-pic-w">
                <img src={"https://twinkletreasureimages.alphanitesofts.net/"+item.pictures[0]} alt="IMG-BANNER" />
                <a href="product.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                  <div className="block1-txt-child1 flex-col-l">
                    <span className="block1-name ltext-102 trans-04 p-b-8">
                      {item.title}
                    </span>
                    <span className="block1-info stext-102 trans-04">
                      {item.description}
                    </span>
                  </div>
                  <div className="block1-txt-child2 p-b-4 trans-05"  style={{marginBottom:50}}>
                    <div className="block1-link stext-101 cl0 trans-09">
                      See Details
                    </div>
                  </div>
                </a>
              </div>
            </div>
            )
          })
        }
      
       
        </OwlCarousel>
      </div>
    {/* </div> */}
  </div>
    )
}

export default TopBanner
