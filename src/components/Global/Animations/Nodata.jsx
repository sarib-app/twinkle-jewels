import React from "react";
import Lottie from "react-lottie";
import Loader from '../../../animation/loadinganim.json'
import nodata from '../../../animation/nodata.json'
// import nodata from '../../../animation/nodatafound.json'
import './Searching.css'
export default function Nodata() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: nodata,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div className="container-search-custom">
        <Lottie 
          options={defaultOptions}
          height={200}
          width={200}
        />
        <p className="anim-text">
            Nothing Found {":("}
        </p>
      </div>
    );
  }
  