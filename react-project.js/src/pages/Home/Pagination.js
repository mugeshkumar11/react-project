import React from 'react'
import { Pagination } from '@mui/material';


const Paginat = ({totalposts,postperpage,setcurrentpage}) => {
   let  page = [];
    for (let i=1; i<= Math.ceil(totalposts/postperpage); i++){
        page.push(i)
    }
  return (
    <div> 
        {
            page.map((pages, index)=>{
                return(
                    <Pagination count={10} color="secondary" key={index} onClick={()=> setcurrentpage(pages)} />
                    // <Pagination  >{}</button> 
                )
            })
        }
    </div>
  )
}

export default Paginat