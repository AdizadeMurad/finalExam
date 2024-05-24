import React from 'react'
import './Home.scss'
function Home() {
    return (
        <>
            <section className='overlay'>

                <div className='container'>
                    <div className='overlay-text'>
                        <p>FRESH FLOWER & GIFT SHOP</p>
                        <h1>Making beautiful flowers a part of your life.</h1>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </section>

            <section className='section-freshness'>
                <div className='container'>
                   <div className='all-freshness'>
                   <div className='general-freshness'>
                        <div className='freshness'>
                          <div>  <i class="fa-brands fa-canadian-maple-leaf"></i></div>
                           <div>
                           <p>100% Freshness</p>
                            <p>Most people are unaware of the less common flower</p>
                           </div>
                        </div>
                        <div className='freshness'>
                          <div>  <i class="fa-brands fa-canadian-maple-leaf"></i></div>
                          <div>  <p>Made by artist</p>
                            <p>Most people are unaware of the less common flower</p></div>
                        </div>
                        <div className='freshness'>
                          <div>  <i class="fa-brands fa-canadian-maple-leaf"></i></div>
                            <div><p>Own courier</p>
                            <p>Most people are unaware of the less common flower</p>    </div>
                        </div>
                        <div className='freshness'>
                          <div>  <i class="fa-brands fa-canadian-maple-leaf"></i></div>
                          <div>  <p>100% Freshness
                            </p>
                            <p>Most people are unaware of the less common flower</p></div>
                        </div>
                    </div>
                    <div className='img-freshness'>
                        <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-1.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-2.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-3.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-4.jpg" alt="" />
                    </div>
                   </div>
                </div>
            </section>
        </>
    )
}

export default Home