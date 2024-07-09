import React, { useState, useEffect } from "react";

const FiltersSection = ({ products, onFilter }) => {
  const [filters, setFilters] = useState({
    sortBy: "default",
    priceRange: "all",
    material: "",
    tags: [],
  });

  const handleSortByChange = (value) => {
    setFilters((prevFilters) => ({ ...prevFilters, sortBy: value }));
  };

  const handlePriceRangeChange = (value) => {
    setFilters((prevFilters) => ({ ...prevFilters, priceRange: value }));
  };

  const handleMaterialChange = (value) => {
    setFilters((prevFilters) => ({ ...prevFilters, material: value }));
  };

  const handleTagChange = (tag) => {
    setFilters((prevFilters) => {
      const newTags = prevFilters.tags.includes(tag)
        ? prevFilters.tags.filter((t) => t !== tag)
        : [...prevFilters.tags, tag];
      return { ...prevFilters, tags: newTags };
    });
  };

  const resetFilters = () => {
    setFilters({
      sortBy: "default",
      priceRange: "all",
      material: "",
      tags: [],
    });
  };

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      const matchesPriceRange =
        filters.priceRange === "all" ||
        (filters.priceRange === "$0.00 - $50.00" && product.price <= 50) ||
        (filters.priceRange === "$50.00 - $100.00" && product.price > 50 && product.price <= 100) ||
        (filters.priceRange === "$200.00+" && product.price > 200);
        
      const matchesMaterial = filters.material === "" || product.material.toLowerCase() === filters.material.toLowerCase();
      
      const matchesTags = filters.tags.length === 0 || filters.tags.includes(product.tag);

      return matchesPriceRange && matchesMaterial && matchesTags;
    });

    onFilter(filteredProducts);
  }, [filters, products, onFilter]);

  return (
    <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
      <div className="filter-col1 p-r-15 p-b-27">
        <div className="mtext-102 cl2 p-b-15">
          Sort By
        </div>
        <ul>
          <li className="p-b-6">
            <a href="#" className={`filter-link stext-106 trans-04 ${filters.sortBy === "default" ? "filter-link-active" : ""}`} onClick={() => handleSortByChange("default")}>
              Default
            </a>
          </li>
          <li className="p-b-6">
            <a href="#" className={`filter-link stext-106 trans-04 ${filters.sortBy === "newness" ? "filter-link-active" : ""}`} onClick={() => handleSortByChange("newness")}>
              Newness
            </a>
          </li>
          <li className="p-b-6">
            <a href="#" className={`filter-link stext-106 trans-04 ${filters.sortBy === "priceLowToHigh" ? "filter-link-active" : ""}`} onClick={() => handleSortByChange("priceLowToHigh")}>
              Price: Low to High
            </a>
          </li>
          <li className="p-b-6">
            <a href="#" className={`filter-link stext-106 trans-04 ${filters.sortBy === "priceHighToLow" ? "filter-link-active" : ""}`} onClick={() => handleSortByChange("priceHighToLow")}>
              Price: High to Low
            </a>
          </li>
        </ul>
      </div>
      <div className="filter-col2 p-r-15 p-b-27">
        <div className="mtext-102 cl2 p-b-15">
          Price
        </div>
        <ul>
          <li className="p-b-6">
            <a href="#" className={`filter-link stext-106 trans-04 ${filters.priceRange === "all" ? "filter-link-active" : ""}`} onClick={() => handlePriceRangeChange("all")}>
              All
            </a>
          </li>
          <li className="p-b-6">
            <a href="#" className={`filter-link stext-106 trans-04 ${filters.priceRange === "$0.00 - $50.00" ? "filter-link-active" : ""}`} onClick={() => handlePriceRangeChange("$0.00 - $50.00")}>
              $0.00 - $50.00
            </a>
          </li>
          <li className="p-b-6">
            <a href="#" className={`filter-link stext-106 trans-04 ${filters.priceRange === "$50.00 - $100.00" ? "filter-link-active" : ""}`} onClick={() => handlePriceRangeChange("$50.00 - $100.00")}>
              $50.00 - $100.00
            </a>
          </li>
          <li className="p-b-6">
            <a href="#" className={`filter-link stext-106 trans-04 ${filters.priceRange === "$200.00+" ? "filter-link-active" : ""}`} onClick={() => handlePriceRangeChange("$200.00+")}>
              $200.00+
            </a>
          </li>
        </ul>
      </div>
      <div className="filter-col3 p-r-15 p-b-27">
        <div className="mtext-102 cl2 p-b-15">
          Material
        </div>
        <ul>
          <li className="p-b-6">
            <span className="fs-15 lh-12 m-r-6" style={{color: '#D6AD60'}}>
              <i className="zmdi zmdi-circle" />
            </span>
            <a href="#" className={`filter-link stext-106 trans-04 ${filters.material === "gold" ? "filter-link-active" : ""}`} onClick={() => handleMaterialChange("gold")}>
              Gold
            </a>
          </li>
          <li className="p-b-6">
            <span className="fs-15 lh-12 m-r-6" style={{color: '#C0C0C0'}}>
              <i className="zmdi zmdi-circle" />
            </span>
            <a href="#" className={`filter-link stext-106 trans-04 ${filters.material === "silver" ? "filter-link-active" : ""}`} onClick={() => handleMaterialChange("silver")}>
              Silver
            </a>
          </li>
          <li className="p-b-6">
            <span className="fs-15 lh-12 m-r-6" style={{color: '#e5e4e2'}}>
              <i className="zmdi zmdi-circle" />
            </span>
            <a href="#" className={`filter-link stext-106 trans-04 ${filters.material === "platinum" ? "filter-link-active" : ""}`} onClick={() => handleMaterialChange("platinum")}>
              Platinum
            </a>
          </li>
          <li className="p-b-6">
            <span className="fs-15 lh-12 m-r-6" style={{color: '#b9f2ff'}}>
              <i className="zmdi zmdi-circle" />
            </span>
            <a href="#" className={`filter-link stext-106 trans-04 ${filters.material === "diamond" ? "filter-link-active" : ""}`} onClick={() => handleMaterialChange("diamond")}>
              Diamond
            </a>
          </li>
        </ul>
      </div>
      <div className="filter-col4 p-b-27">
        <div className="mtext-102 cl2 p-b-15">
          Tags
        </div>
        <div className="flex-w p-t-4 m-r--5">
          {["Fashion", "Lifestyle", "Denim", "Streetstyle", "Crafts"].map((tag) => (
            <a
              href="#"
              key={tag}
              className={`flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5 ${filters.tags.includes(tag) ? "filter-link-active" : ""}`}
              onClick={() => handleTagChange(tag)}
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
      <div className="filter-reset p-t-27">
        <button onClick={resetFilters} className="reset-button">
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FiltersSection;









// import React from "react";
// function FiltersSection(){
//     return(
//         <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
//         <div className="filter-col1 p-r-15 p-b-27">
//           <div className="mtext-102 cl2 p-b-15">
//             Sort By
//           </div>
//           <ul>
//             <li className="p-b-6">
//               <a  className="filter-link stext-106 trans-04">
//                 Default
//               </a>
//             </li>
       
//             <li className="p-b-6">
//               <a href="#" className="filter-link stext-106 trans-04 filter-link-active">
//                 Newness
//               </a>
//             </li>
//             <li className="p-b-6">
//               <a href="#" className="filter-link stext-106 trans-04">
//                 Price: Low to High
//               </a>
//             </li>
//             <li className="p-b-6">
//               <a href="#" className="filter-link stext-106 trans-04">
//                 Price: High to Low
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="filter-col2 p-r-15 p-b-27">
//           <div className="mtext-102 cl2 p-b-15">
//             Price
//           </div>
//           <ul>
//             <li className="p-b-6">
//               <a href="#" className="filter-link stext-106 trans-04 filter-link-active">
//                 All
//               </a>
//             </li>
//             <li className="p-b-6">
//               <a href="#" className="filter-link stext-106 trans-04">
//                 $0.00 - $50.00
//               </a>
//             </li>
//             <li className="p-b-6">
//               <a href="#" className="filter-link stext-106 trans-04">
//                 $50.00 - $100.00
//               </a>
//             </li>
        
//             <li className="p-b-6">
//               <a href="#" className="filter-link stext-106 trans-04">
//                 $200.00+
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="filter-col3 p-r-15 p-b-27">
//           <div className="mtext-102 cl2 p-b-15">
//             Material
//           </div>
//           <ul>
//             <li className="p-b-6">
//               <span className="fs-15 lh-12 m-r-6" style={{color: '#D6AD60'}}>
//                 <i className="zmdi zmdi-circle" />
//               </span>
//               <a href="#" className="filter-link stext-106 trans-04">
//                 Gold
//               </a>
//             </li>
          
//             <li className="p-b-6">
//               <span className="fs-15 lh-12 m-r-6" style={{color: '#C0C0C0'}}>
//                 <i className="zmdi zmdi-circle" />
//               </span>
//               <a href="#" className="filter-link stext-106 trans-04">
//                 Silver
//               </a>
//             </li>
//             <li className="p-b-6">
//               <span className="fs-15 lh-12 m-r-6" style={{color: '#e5e4e2'}}>
//                 <i className="zmdi zmdi-circle" />
//               </span>
//               <a href="#" className="filter-link stext-106 trans-04">
//                 Platinum
//               </a>
//             </li>

//             <li className="p-b-6">
//               <span className="fs-15 lh-12 m-r-6" style={{color: '#b9f2ff'}}>
//                 <i className="zmdi zmdi-circle" />
//               </span>
//               <a href="#" className="filter-link stext-106 trans-04">
//                 Diamond
//               </a>
//             </li>
         
//           </ul>
//         </div>
//         <div className="filter-col4 p-b-27">
//           <div className="mtext-102 cl2 p-b-15">
//             Tags
//           </div>
//           <div className="flex-w p-t-4 m-r--5">
//             <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
//               Fashion
//             </a>
//             <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
//               Lifestyle
//             </a>
//             <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
//               Denim
//             </a>
//             <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
//               Streetstyle
//             </a>
//             <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
//               Crafts
//             </a>
//           </div>
//         </div>
//       </div>
//     )
// }
// export default FiltersSection