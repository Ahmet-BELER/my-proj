import React, { Component, useEffect } from 'react'


const Book = ({ book }) => {

    console.log(`./${book.imageLink}`)

    // useEffect()

    return (
        <div className="book card">

            <div id="card__img" className="card__img">
                <img className="" src="https://picsum.photos/300/400" alt="Card" />
                {/* <img className="" src={`./${book.imageLink}`} alt="Card" /> */}
            </div>

            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p>{book.imageLink}</p>
                <p className="card-text">{book.author}</p>
                <a href="#" className="btn btn-primary">{book.year}</a>
            </div>

        </div>

    )

}

export default Book;
