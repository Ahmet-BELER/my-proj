import React, { useState } from 'react'
import "./home.css"

 const Home = () => {

     const cards = [
             {
                image: "https://picsum.photos/200/300",
                title: "başlık 1",
                desc: "Buraya uzun bir açıklama gelebilir",
                b1: "1",
                b2: "2",
                b3: "3"
            },
            {
                image: "https://picsum.photos/200/300",
                title: "başlık 2",
                desc: "Buraya uzun bir açıklama gelebilir",
                b1: "1",
                b2: "2",
            },
            {
                image: "https://picsum.photos/200/300",
                title: "başlık 3",
                desc: "Buraya uzun bir açıklama gelebilir",
                b1: "1",
                b3: "3"
            },
            {
                image: "https://picsum.photos/200/300",
                title: "başlık 4",
                desc: "Buraya uzun bir açıklama gelebilir",
                b2: "2",
                b3: "3"
            },
        ]
    

    const [kartlar, setKartlar] = useState(cards)

    
    
        return (

            <div className="main home">

                <section className="home__section">

                    <div className="icon__container">
                        <span className="fas fa-user"></span>
                    </div>

                    <div className="section__info">
                        <h2>Welcome!</h2>
                        <p>lorem ipsum, lorem</p>
                        <button className="btn btn-danger">Start</button>
                    </div>

                </section>

                <section className="home__section bg-light">
                    {
                        kartlar.map((card, index) => (
                            <article className="home__card" key={index}>

                                <div className="card__img">
                                    <img src={card.image} />
                                </div>

                                <div className="card__info">
                                    <h2>{card.title}</h2>
                                    <p>{card.desc}</p>
                                    <div className="badge__container">
                                        {card.b1 ? <span className="badge green">{card.b1}</span> : ""}
                                        {card.b2 ? <span className="badge blue">{card.b2}</span> : ""}
                                        {card.b3 ? <span className="badge red">{card.b3}</span> : ""}
                                    </div>
                                </div>

                            </article>
                        ))
                    }


                </section>
            </div>
        )
    
}

export default Home;