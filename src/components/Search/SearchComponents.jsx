import React from "react";
import './SearchhComponents.css'
import LoaderAnimation from "../Global/Animations/Loader";
import Nodata from "../Global/Animations/Nodata";
import SearchhProductListing from "../Home/SearchProductListing";

function SearchComponents(){
    return(
<div className="container-custom">
    <p className="title">
        Search Product By Letter
    </p>
    
        <input
        placeholder="Type here..."
        className="searchinput-wrapper"
        />
        <SearchhProductListing/>
    <Nodata/>
</div>
    )   
}
export default SearchComponents