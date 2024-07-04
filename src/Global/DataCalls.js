async function getAllProducts(){
    const requestOptions = {
        
        method: "POST",
        redirect: "follow"

      };
try{
const response = await fetch("https://twinkletreasure.alphanitesofts.net/api/fetch_all_product",requestOptions)
const res = await response.json()
return res
}
catch{
return null
}
}


async function getAllCategoreis(){
  const requestOptions = {
    method: "POST",
    redirect: "follow"
  };
  
try{
const response = await fetch("https://twinkletreasure.alphanitesofts.net/api/fetch_all_category",requestOptions)
const res = await response.json()
return res
}
catch{
return null
}
}




async function getTopProducts(){
  const requestOptions = {
    method: "POST",
    redirect: "follow"
  };
  
try{
const response = await fetch("https://twinkletreasure.alphanitesofts.net/api/fetch_top_product",requestOptions)
const res = await response.json()
return res
}
catch{
return null
}
}
export {getAllProducts,getAllCategoreis,getTopProducts}