import React from 'react';
import { Navbar } from './Components/Navbar';
import { SimpleCard } from './Components/SimpleCard';
import { News } from './Components/News';
import './sass/index.scss';
import 'boxicons';

export const App = () => {

  const Magazines = [
    {
      id: 1,
      name: "Magazine",
      title: "See the enduring power of King Tut as never before",
      footer: "Explore",
      icon: "rocket",
      image: "https://i.natgeofe.com/n/e39085fc-e194-4ae6-aeb6-e83a37e2fccc/STOCKPKG_MM9195_SV_14_4x3.jpg?w=310&h=233"
    },
    {
      id: 2,
      name: "",
      title: "Subscribe to National Geographic",
      footer: "See More",
      icon: "menu",
      image: "https://i.natgeofe.com/n/60aa8e31-f480-447a-af55-12634df93dbf/NGM-January-Cover-Image-Homepage-Promo-730x564_4x3.jpg?w=310&h=233"
    },
  ];

  const News_Magazines = [
    {
      id: 1,
      title: "Magazine",
      subtitle: "",
      text: "Egypt's new billion dollar museum is fit for a pharaoh",
      image: "https://i.natgeofe.com/n/f6ae19d6-f1db-454b-8f91-d8361bcce748/MM9195_210530_000107_square.jpg?w=195&h=195"
    },
    {
      id: 2,
      title: "Magazine",
      subtitle: "",
      text: "Egypt's audacious plan to build a new capital on desert",
      image: "https://i.natgeofe.com/n/2d9449ee-4d25-417e-9067-529a00af771d/STOCK_MM9851_Panos_00317113_square.jpg?w=195&h=195"
    },
    {
      id: 3,
      title: "Magazine",
      subtitle: "The big idea",
      text: "Will plant-based meat ever satisfy U.S hunger for the real deal?",
      image: "https://i.natgeofe.com/n/5ac65736-c339-467b-9faf-97b58a0a4273/MZ3900_NAT_GEO_MEAT_ALTS_2022_square.jpg?w=195&h=195"
    },
    {
      id: 4,
      title: "Magazine",
      subtitle: "",
      text: "Memories are created in wool in this tiny Russian republic",
      image: "https://i.natgeofe.com/n/c0252bb2-8761-4043-a71b-da245e56cc3a/BUS_Isting_Ingushetia_066_square.jpg?w=195&h=195"
    },
    {
      id: 5,
      title: "Magazine",
      subtitle: "Basic instincts",
      text: "Why these seabirds stage a rowdy springtime love-in?",
      image: "https://i.natgeofe.com/n/1f45fd34-a2e9-4f00-a1c5-fffc699f2482/STOCK_DEPARTMETNS_2211_BI_naturepl_01517886_square.jpg?w=195&h=195"
    },
  ];

  return (
    <main className='main'>

      <section className='NavbarContainer'>
        <Navbar/>
      </section>

      <section className='Magazine'>

          <div className="title">
            <span>November 2022 Issue</span>
          </div>
          <div className="information">
            <a href='/#'>Subscribe</a> to see the stories from <br /> National Geographic magazine.
          </div>

          <div className="divider"></div>

          <div className="CardContainer">
              {/* FirstCard */}
              <div className="Card__Yellow">
                <div className="Card">
                  <a href="/#">
                  <img className='Card__Image' src="https://i.natgeofe.com/n/4522e658-0255-432f-b2d3-efcfa3827e3d/STOCK_MM9195_AR6139137_3x4.jpg?w=730&h=973" alt="Magazine Image" />
                  <div className="Header">
                    <h1>Magazine</h1>

                    <div className="Info">
                      <p>How was King Tut's tomb discovered 100 years ago?</p>
                      <br />
                      <div className="btn">
                        <box-icon name='menu' color="white"></box-icon> <span className='btn-info'>Read</span>
                      </div>
                    </div>
                  </div>
                  </a>
                </div>
              </div>

              {
                Magazines.map( (Magazine) => (
                  <SimpleCard key={ Magazine.id } Dates={ Magazine } />
                ))
              }

          </div>

          <div className="Header__new line">
            <div>
              <h2>In This Issue</h2>
            </div>
          </div>

          {
            News_Magazines.map( ( new_magazine ) => (
              <News key={ new_magazine.id } data={ new_magazine }/>
            ))
          }

          <div className="Magazine__button">
            <a href="">See all</a>
          </div>


      </section>

    </main>
  )
}
