import React from 'react'

const Pagination = ({totalposts,postperpage,setcurrentpage,currentpage}) => {
     page = [];
    for (let i=1; i<= Math.ceil(totalposts/postperpage); i++){
        page.push(i)
    }
  return (
    <div>
        {
            page.map((page, index)=>{
                return(
                    <div>
                    {/* <button key={index} onClick={()=> setcurrentpage(page)}>{page}</button> */}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Pagination