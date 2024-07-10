import React, { useEffect, useState } from 'react'
import FiltersSection from './Filters'
import ProductCard from '../Products/ProductCard'
import { getAllCategoreis, getAllProducts, getTopProducts } from '../../Global/DataCalls'

const ProductListing = () => {



const [showFilter,setFilter]=useState(false)


const [categories,setCategories]=useState([])
const [Allproducts,setAllProducts]=useState([])



useEffect(()=>{

 
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
          <button 
          onClick={()=> SetCateory(0)}
          style={ selectedId === 0 ? {color:"#333",borderColor:"#797979"}:{}}
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 " >
            All Products
          </button>
          {
            categories?.map((item)=>{
              return(

              <button 
              onClick={()=>{
                SetCateory(item.id)
              }}
              className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" 
              style={ item.id === selectedId ? {color:"#333",borderColor:"#797979"}:{}}
              >
              {item.cat_name}
            </button>
              )

})
          }
        
         
        </div>
        <div className="flex-w flex-c-m m-tb-10">
          <div 
          onClick={() => setFilter((p)=> !p)}
          className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
            <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list" />
            <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
            Filter
          </div>
          <div 
          onClick={() => setResetFilter((p)=> !p)}
          className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter" style={{padding:10}}>
            <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list" />
            <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
            Reset Filter
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
          <FiltersSection products={categorizedData} onFilter={handleFilter} resetFilter={resetFilter} />

}

     </div>

      {/*products */}
      <div className="row isotope-grid" style={{justifyContent:"center"}}>

      {
        filteredProducts.length>0 ? 
        filteredProducts?.map((item)=>{
          return(
           

            <ProductCard item={item}/>

          )
        }):
        filteredProducts?.map((item)=>{
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

export default ProductListing