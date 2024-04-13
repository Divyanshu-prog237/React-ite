import React from 'react'
import plan from '../assets/plan.jpg'
import Launch from '../assets/launch.jpg'
import './Services.css';

const Services = () => {
  return (
    <div><>
      <title>Our Services</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />
      <link rel="stylesheet" href="styles.css" />
      <div className="section">
        <div className="title">
          <h1>Our Services</h1>
        </div>
        <div className="services">
          <div className="card">
            <div className="icon">
              <i className="fas fa-calendar" />
            </div>
            <h2>Planning</h2>
            <p>
              You've got a great idea. Now, make a plan to turn it into a great business.  </p>
            <ul class="menu menu--primary-navigation nav">
              <li >
                <a href='ser' >•   Market research and competitive analysis</a>
              </li>
              <li>
                <a href='' > •  Write your business plan</a>
              </li>

              <li>
                <a href=''>•   Calculate your startup costs</a>
              </li>
              <li>
                <a href=''>•   Establish business credit</a>
              </li>
              <li>
                <a href=''>•   Fund your business</a>
              </li>
              <li>
                <a href=''> •  Buy an existing business or franchise</a>
              </li>
            </ul>

            <a href="" className='button"'>
              {" "}
              Read more
            </a>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fas fa-wrench" />
            </div>
            <h2>Launching</h2>
            <p>
              Turn your business into a reality. Register, file, and start doing business from now dfdf fdoe ojsnwmc fed .
            </p>
            <ul class="menu menu--primary-navigation nav">
                  <li class="first">
                    <a href=''>• Pick your business location</a>
                  </li>
                  <li>
                    <a href=''>• Choose a business structure</a>
                  </li>
                  <li>
                    <a href=''>• Choose your business name</a>
                  </li>
                  <li>
                    <a href='' >• Register your business</a>
                  </li>
                  <li>
                    <a href=''>• Get federal and state tax ID numbers</a>
                  </li>
                  <li>
                    <a href=''>• Apply for licenses and permits</a>
                  </li>
                </ul>

            <a href="" className='button"'>
              {" "}
              Read more
            </a>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fas fa-handshake" />
            </div>
            <h2>Managing</h2>
            <p>
              Run your business like a boss. Master day-to-day operations and prepare for success.
            </p>
            <ul class="menu menu--primary-navigation nav">
                  <li >
                    <a href='' >•  Manage your finances</a>
                  </li>
                  <li>
                    <a href=''>•  Hire and manage employees</a>
                  </li>
                  <li>
                    <a href='' >•  Pay taxes        </a>
                  </li>
                  <li>
                    <a href='' >•  Stay legally compliant</a>
                  </li>
                  <li>
                    <a href=''>•  Buy assets and equipment</a>
                  </li>
                  <li>
                    <a href='' >•  Marketing and sales</a>
                  </li>
                  <li>
                    <a href='' >•  Strengthen your cybersecurity</a>
                  </li>
                  <li>
                    <a href=''>• Prepare for emergencies</a>
                  </li>
                  <li>
                    <a href=''>•  Recover from disasters</a>
                  </li>
                </ul>


            <a href="" className='button"'>
              {" "}
              Read more
            </a>
          </div>
        </div>
      </div>
    </>

    </div>
  )
}

export default Services