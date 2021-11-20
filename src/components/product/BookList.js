import React from "react"
import Book from "./Book"

const BookList = ({books}) => {
  
      return(
          <div className="product__list">
             { books.map(
                 (book,index)=>(
                     <Book book ={book} key={index}/>
                 )
             )
             
             }

          </div>
      )


}
export default BookList;