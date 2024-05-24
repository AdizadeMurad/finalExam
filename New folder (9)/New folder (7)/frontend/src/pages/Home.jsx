import React from 'react'
import './Home.scss'
import { useState, useEffect } from 'react'
function Home() {



    const [mydata, setmydata] = useState([])
    useEffect(() => {
        getAlldata()
    }, [])

    async function getAlldata() {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        setmydata(data)
    }





    return (
        <>
            <section className='section-top'>
                <div className='general-top'>
                    <div>
                        <p className='top-head'>Get your Education today!</p></div>
                    <div className='top-card-general'>
                        <div className='top-card'>
                            <div><i class="fa-solid fa-earth-americas"></i></div>
                            <div>
                                <p className='top-title'>Online Courses</p>
                                <p className='top-desc'>VIEW MORE</p>
                            </div>
                        </div>
                        <div className='top-card'>
                            <div>
                                <i class="fa-solid fa-book"></i></div>
                            <div>
                                <p className='top-title'>Online library</p>
                                <p className='top-desc'>VIEW MORE</p>
                            </div>
                        </div>
                        <div className='top-card'>
                            <div><i class="fa-solid fa-user"></i></div>
                            <div>
                                <p className='top-title'>Online Teacher</p>
                                <p className='top-desc'>VIEW MORE</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>




            <section className='popular-section'>
                <div>
                    <p className='popularcourses'>Popular Courses</p>
                </div>
                <div className='cards-general-fetch'>

                    {
                        mydata.map((x) => {
                            return <>
                                <div className='card-general-fetch'>

                                    <div>

                                        <div className='card-img-fetch '>
                                            <img className='img' src={x.image} alt="" />
                                        </div>
                                        <div className='card-text-fetch'>
                                            <p>{x.text}</p>
                                            <p>Adobe Guide, Layes, Smart Objects etc...</p>
                                        </div>
                                        <div>
                                            <div>
                                                <p>Michael Smith, Author</p>
                                            </div>
                                            <div>
                                                <p>${x.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </section>

            <section>
                <div className='general-register'>
                    <div className='left-registernow'>
                        <div className='registernow'>
                            <p>Register now and get a discount 50% discount until 1 January</p>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
                            <button>REGISTER NOW</button>
                        </div>
                    </div>


                    <div className='right-register'>

                        <div>
                            <p>Search for your course</p>
                        </div>
                        <div className='inp-registernow'>
                            <input type="text" name="" id="" placeholder=' Course Name' />
                            <input type="text" name="" id=""  placeholder=' Category'/>
                            <input type="text" name="" id=""  placeholder= ' Degree'/>
                            <button className='searchcourse'>SEARCH COURSE</button>
                        </div>


                    </div>
                </div>
            </section>


            <section className='section-oursevices'>

                <div className='general-ourservices'>
                    <div>
               <p className='ourservices-head'>Our Services</p>
                    </div>
                    <div className='ourservices-cards'>
                        <div className='ourservices-card'>
                        <i class="fa-solid fa-earth-americas"></i>
                        <p>Online Courses</p>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>
                        <div className='ourservices-card'>
                        <i class="fa-solid fa-earth-americas"></i>
                        <p>Online Courses</p>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>
                        <div className='ourservices-card'>
                        <i class="fa-solid fa-earth-americas"></i>
                        <p>Online Courses</p>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>
                        <div className='ourservices-card'>
                        <i class="fa-solid fa-earth-americas"></i>
                        <p>Online Courses</p>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>
                        <div className='ourservices-card'>
                        <i class="fa-solid fa-earth-americas"></i>
                        <p>Online Courses</p>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>
                        <div className='ourservices-card'>
                        <i class="fa-solid fa-earth-americas"></i>
                        <p>Online Courses</p>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div>
                   <div className='general-card-events'>
                   <div>
                        <p>Upcoming Events</p>
                    </div>
                    <div>
                  <div>
                    <p>07</p>
                    <p>January</p>
                  </div>
                  <div>
                    <p>Student Festival</p>
                    <p>Grand Central Park</p>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                  </div>
                  <div>
                    <img className='img' src="https://preview.colorlib.com/theme/course/images/event_1.jpg" alt="" />
                  </div>
                    </div>
                   </div>
                </div>
            </section>

        </>)
}

export default Home