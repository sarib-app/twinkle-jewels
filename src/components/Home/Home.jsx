import React, { useEffect, useState } from 'react'
import FiltersSection from './Filters'
import ProductCard from '../Products/ProductCard'
import TopBanner from './TopProducts'
import useWindowDimensions from '../Dimensions/Dimensions'
import { getAllCategoreis, getAllProducts, getTopProducts } from '../../Global/DataCalls'
import ProductListing from './ProductListing'

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


const [selectedId,setSelectedCat]=useState(0)

 function SetCateory(val){
  setSelectedCat(val)
 }
 const [filteredProducts, setFilteredProducts] = useState([]);

 const [categorizedData, setCategorizedData] = useState([]);


 useEffect(()=>{
  const filteredProduct = Allproducts?.filter((item) => item.category_id == selectedId)
  const finalProdData = selectedId === 0 ? Allproducts: filteredProduct
  setFilteredProducts(finalProdData)
  setCategorizedData(finalProdData)
 },[selectedId,Allproducts])

 const handleFilter = (filtered) => {
  console.log(filtered)
   setFilteredProducts(filtered);
 };



const dataList = filteredProducts.length > 0 ? filteredProducts : categorizedData

const [resetFilter,setResetFilter] = useState(false)

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
                  Shop Noww
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  {/* Banner */}


{
topProducts &&
<TopBanner
topProducts={topProducts}
/>
  
}


    
  
  {/* Product */}
  
     <ProductListing/>
    
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