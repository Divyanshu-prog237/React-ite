import React from 'react'
import plan from '../assets/planning.gif'
import manage from '../assets/management.mp4'
import Launch from '../assets/launch2.gif'
import { Link } from 'react-router-dom'


const Services = () => {
    return (
        <div>
            <header className='head-img'>
                
            </header>
            <section className='d-flex justify-content-center mt-5'>
                <div className="card-shadow w-75 p-2">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 d-flex mx-auto flex-column">
                            <h1 className="plan">Planning</h1>
                            <h4 className=" text-justify">
                                You've got a great idea. Now, make a plan to turn it into a great business.
                            </h4>

                            <Link className='btn btn-outline-primary w-25 mt-3' to=''> Read more </Link>

                        </div>
                        <div className=''>
                            <div className="col-md-6">
                                <img src={plan} alt='' className='img-fluid1' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex justify-content-center' style={{ marginTop: '100px' }}>
                <div className="card-shadow w-75 p-2">
                    <div className="row d-flex align-items-center">
                        <div className=''>
                            <div className="col-md-6">
                                <img height={10} src={Launch} alt='' className='img-fluid1' />
                            </div>
                        </div>
                        <div className="col-md-6 d-flex mx-auto flex-column">
                            <h1 className="plan">Launching</h1>
                            <h4 className="text-justify">
                                Turn your business into a reality. Register, file, and start doing business.
                            </h4>
                            <Link className='btn btn-outline-primary w-25 mt-3' to=''> Read more </Link>


                        </div>
                    </div>
                </div>
            </section>


            <section className='d-flex justify-content-center' style={{ marginTop: '100px' }}>
                <div className="card-shadow w-75 p-2">
                    <div className="row d-flex align-items-center">


                        <div className="col-md-6 d-flex mx-auto flex-column">
                            <h1 className="plan">Managing</h1>
                            <h4 className="text-justify">
                                Run your business like a boss. Master day-to-day operations and prepare for success.
                            </h4>
                            <Link className='btn btn-outline-primary w-25 mt-3' to=''> Read more </Link>

                        </div>
                        <div className="col-md-6">
                            <video src={manage} alt='plan' className='m-vid' loop autoPlay muted />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services