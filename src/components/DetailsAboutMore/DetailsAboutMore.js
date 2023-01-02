import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowDown} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DetailsAboutMore = ({ details }) => {
  const { image, icon, title, description } = details;
  const [click ,setClick]=useState(false);
  const handelMore = e=>{
    setClick(e);
  }
  return (
    <div className="col-md-4 main-card p-3 rounded">
      <div >
        <img className="more-img img-fluid" src={image} alt="" />
        <div className="row mt-4">
            <div className="col-2">
            <img src={icon} alt="" />
            </div>
            <div className="col-10">
                <h5 className="card-title">{title}</h5>
                {
                    click? <p className="card-text text-secondary">{description}</p>:<p className="card-text text-secondary">{description.slice(0,50)}</p>
                }
                
                <div onClick={()=>handelMore(!click)} className="d-flex align-items-center">
                    <Link className="see-more me-2" to='/'>See More</Link>
                    {
                        click? <FontAwesomeIcon className="text-success" icon={ faCircleArrowDown} />:<FontAwesomeIcon className="text-success" icon={ faCircleArrowRight} />
                    }
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsAboutMore;
