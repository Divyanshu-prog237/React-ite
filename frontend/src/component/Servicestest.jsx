import React from 'react'
import plan from '../assets/plan.jpg'
import manage from '../assets/manage.jpg'
import Launch from '../assets/launch.jpg'


const Servicestest = () => {
    return (
        <div><section className='d-flex justify-content-center'>
            <div className="card-shadow w-75 p-2">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <h1 className="plan">Planning</h1>
                        <h3 className="txt1 text-justify" style={{ fontFamily: "calibri" }}>
                            You've got a great idea. Now, make a plan to turn it into a great business.
                        </h3>
                        <ul class="menu ">
                            <li >
                                <a>   Market research and competitive analysis</a>
                            </li>
                            <li>
                                <a >  Write your business plan</a>
                            </li>

                            <li>
                                <a>   Calculate your startup costs</a>
                            </li>
                            <li>
                                <a >   Establish business credit</a>
                            </li>
                            <li>
                                <a>   Fund your business</a>
                            </li>
                            <li>
                                <a>   Buy an existing business or franchise</a>
                            </li>
                        </ul>
                        <a href=''> <button>Read more</button></a>

                    </div>
                    <div className='iin'>
                    <div className="col-md-6">
                        <img src={plan} alt='' className='img-fluid1' />
                    </div>
                    </div>
                </div>
            </div>
        </section>
            <section className='d-flex justify-content-center mt-5'>
                <div className="card-shadow w-75">
                    <div className="row d-flex align-items-center">
                    
                        <div className="col-md-4">
                            <img src={manage} alt='' className='img-fluid3' />
                        </div>

                        <div className="col-md-8">
                            <h1 className="plan">Managing</h1>
                            <h3 className="txt1 text-justify  mb-5" style={{ fontFamily: "calibri" }}>
                                Run your business like a boss. Master day-to-day operations and prepare for success.
                            </h3>
                            <ul class="menu">
                                <li >
                                    <a >  Manage your finances</a>
                                </li>
                                <li>
                                    <a >  Hire and manage employees</a>
                                </li>
                                <li>
                                    <a >  Pay taxes</a>
                                </li>
                                <li>
                                    <a >  Stay legally compliant</a>
                                </li>
                                <li>
                                    <a >  Buy assets and equipment</a>
                                </li>
                                <li>
                                    <a >  Marketing and sales</a>
                                </li>
                            </ul>
                            <a href=''> <button>Read more</button></a>

                        </div>
                    </div>
                </div>
            </section>
            <section className='d-flex justify-content-center'>
                <div className="card-shadow w-75 p-2">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <h1 className="plan">Launching</h1>
                            <h3 className="txt1 text-justify" style={{ fontFamily: "calibri" }}>
                                Turn your business into a reality. Register, file, and start doing business.
                            </h3>
                            <ul class="menu">
                                <li >
                                    <a>   Market research and competitive analysis</a>
                                </li>
                                <li>
                                    <a >   Write your business plan</a>
                                </li>

                                <li>
                                    <a>  Calculate your startup costs</a>
                                </li>
                                <li>
                                    <a >   Establish business credit</a>
                                </li>
                                <li>
                                    <a>   Fund your business</a>
                                </li>
                                <li>
                                    <a>   Buy an existing business or franchise</a>
                                </li>
                            </ul>
                            <a href=''> <button>Read more</button></a>


                        </div>
                        <div className='iin'>
                        <div className="col-md-6">
                            <img height={10} src={Launch} alt='' className='img-fluid1' />
                        </div>
                    </div>
                </div>
                </div>
            </section></div>
    )
}

export default Servicestest