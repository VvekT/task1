import React from 'react';
import { useNavigate } from 'react-router-dom';
import {serviceReqDetails} from './ServiceRequestCategory';
// import { NavLink } from 'react-router-dom';
import Box from "@tds/core-box";

const ServiceRequests = ({details}) => {
        const navigate = useNavigate();
        const navigateToServiceRequestDetails=(sid)=>{
          navigate = (`/serivce-request/categories/${sid}`);
          console.log("navigate")
        }
        const serviceList =  details.map(({sid,name,details}) => {
            return <h6 key={sid} onClick={()=>{navigateToServiceRequestDetails(sid)}}> {sid} {name}  </h6>
        })
  return (
    <>
        {/* <NavLink to="/about">About</NavLink> */}
        <Box>
        {serviceList}
        </Box>
    </>
  )
}

export default ServiceRequests
