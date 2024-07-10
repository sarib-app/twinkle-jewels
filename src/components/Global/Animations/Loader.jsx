import React from "react";
import Lottie from "react-lottie";
import Loader from '../../../animation/loadinganim.json'
import './Searching.css'
export default function LoaderAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Loader,
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
            Searching......
        </p>
      </div>
    );
  }
  