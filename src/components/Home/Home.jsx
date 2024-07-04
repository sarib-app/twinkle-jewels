import React, { useEffect, useState } from 'react'
import FiltersSection from './Filters'
import ProductCard from '../Products/ProductCard'
import TopBanner from './TopProducts'
import useWindowDimensions from '../Dimensions/Dimensions'
import { getAllCategoreis, getAllProducts, getTopProducts } from '../../Global/DataCalls'

const Home = () => {
const data = [
  {
    id:1,
    name:""
  },
  {
    id:1,
    name:""
  },
  {
    id:1,
    name:""
  },
  {
    id:1,
    name:""
  },
  {
    id:1,
    name:""
  },
  {
    id:1,
    name:""
  },
  {
    id:1,
    name:""
  },
  {
    id:1,
    name:""
  },

  
]
const { innerWidth: width, innerHeight: height } = window;

const image = width > 760 ? 'url(images/slide-01.jpg)' : 'url(images/slide-01-s.jpg)'






const [showFilter,setFilter]=useState(false)


const [categories,setCategories]=useState([])
const [Allproducts,setAllProducts]=useState([])
const [topProducts,setTopProcusts]=useState([])


useEffect(()=>{

  onGetTopProducts()
  getCategories()
  
  ongetAllProducts()
},[])


async function getCategories(){
const res = await getAllCategoreis()
if(res != null){
  setCategories(res.Categorys)
}

}

async function ongetAllProducts(){
  const res = await getAllProducts()
  if(res != null){
    setAllProducts(res.Products)
  }
  
  }


  async function onGetTopProducts(){
    const res = await getTopProducts()
    if(res != null){
      setTopProcusts(res.Products)
    }
    
    }

  return (
    <>
  {/* Header */}


  <section className="section-slide">
    <div className="wrap-slick1">
      <div className="slick1">
        <div className="item-slick1" style={{backgroundImage: image}}>
          <div className="container h-full">
            <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
              <div className="layer-slick1 animated visible-false" data-appear="fadeInDown" data-delay={0}>
                <span className="ltext-101 cl2 respon2">
                  Women Collection 2018
                </span>
              </div>
              <div className="layer-slick1 animated visible-false" data-appear="fadeInUp" data-delay={800}>
                <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                  NEW SEASON
                </h2>
              </div>
              <div className="layer-slick1 animated visible-false" data-appear="zoomIn" data-delay={1600}>
                <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  {/* Banner */}

<TopBanner
topProducts={topProducts}
/>

    
  
  {/* Product */}
  <section className="bg0 p-t-23 p-b-140">
    <div className="container">
      <div className="p-b-10">
        <h3 className="ltext-103 cl5">
          Product Overview
        </h3>
      </div>
      <div className="flex-w flex-sb-m p-b-52">
        <div className="flex-w flex-l-m filter-tope-group m-tb-10">
          <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
            All Products
          </button>
          {
            categories?.map((item)=>{
              return(

              <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
              {item.cat_name}
            </button>
              )

})
          }
        
         
        </div>
        <div className="flex-w flex-c-m m-tb-10">
          <div 
          onClick={()=> setFilter((p)=> !p)}
          className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
            <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list" />
            <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
            Filter
          </div>
          <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
            <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
            <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
            Search
          </div>
        </div>
        {/* Search product */}
        <div className="dis-none panel-search w-full p-t-10 p-b-15">
          <div className="bor8 dis-flex p-l-15">
            <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
              <i className="zmdi zmdi-search" />
            </button>
            <input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search" />
          </div>	
        </div>
        {/* Filter */}
        {/* <div className="dis-none panel-filter w-full p-t-10">
          
        </div> */}
        {
          showFilter  &&
     <FiltersSection/>
    }

     </div>

      {/*products */}
      <div className="row isotope-grid" style={{justifyContent:"center"}}>

      {
        Allproducts.map((item)=>{
          return(
           

            <ProductCard item={item}/>

          )
        })
      }
      </div>
  
      {/* Load more */}
      <div className="flex-c-m flex-w w-full p-t-45">
        <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
          Load More
        </a>
      </div>
    </div>
  </section>
  {/* Footer */}

  {/* Back to top */}
  {/* <div className="btn-back-to-top" id="myBtn">
    <span className="symbol-btn-back-to-top">
      <i className="zmdi zmdi-chevron-up" />
    </span>
  </div> */}
  {/* Modal1 */}
  


    </>
  )
}

export default Home