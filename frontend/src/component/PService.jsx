import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Fade from 'react-reveal/Fade';


const PServices = () => {
  const [services, setServices] = useState([]);


  const { category } = useParams();

  const fetchPlanningServices = async () => {
    const res = await fetch("http://localhost:3000/services/getbycategory/planning");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    if (category) {
      setServices(data.filter((ser) => ser.category === category));
    } else {
      setServices(data);
    }
  };

  useEffect(() => {
    fetchPlanningServices();
  }, []);

  const displayServices = () => {
    return services.map((service) => (
      <div className="conatainer">
        <div className="">
          <div className="card p-3 mb-5 p-card">
            <div className="row d-flex align-items-center">
              <div className="col-md-4">
                <img
                  className="img-fluid p-card-img"
                  src={"http://localhost:3000/" + service.simage}
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <h3 style={{ paddingLeft: "20px" }} className="mt-3">{service.sname}</h3>
                <p style={{ paddingLeft: "20px" }} className="">{service.sdescription}</p>
                {/* <Link to={'/ViewService/' + service._id} className="btn btn-outline-primary m-2">Know More</Link> */}
                <Link to={'/ViewService/' + service._id} className="btn btn-outline-primary m-2">Know More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className=''>
      <Fade bottom>
      <header className='ps-head mt-3'>
        {/* <div className='container py-5'>
            <input type="text" placeholder='Search Items' className='form-control w-50 m-auto ps-search'  />
          </div> */}
      </header>
      <div className='container mb-5 '>
        <div className='row p-5'> {displayServices()} </div>
      </div>
      </Fade>
    </div>
  );
};

export default PServices;
