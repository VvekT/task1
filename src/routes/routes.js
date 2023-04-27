import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
// import MyCases from '../components/dashboard/Mycases';

const Home = lazy(() => import("../components/home"));
const ServiceRequest = lazy(() => import("../components/service-request"));
const NotFound = lazy(() => import("../common/NotFound"));
const Cases = lazy(() => import("../components/service-request/Cases")); //AWS page
const Scase = lazy(() => import("../components/service-request/Scase")); //Submit case

const ComingSoon = lazy(() => import("../common/ComingSoon"));

const Profile = lazy(() => import("../components/profile/Profile"));

const ServiceRequestDetails = lazy(() => import("../components/service-request/ServiceRequestDetails"));


const UiRoutes = (props) => {
	

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				
				<Route exact path="/" element={<Home {...props} />} />


				<Route exact path="/service-request" element={<ServiceRequest {...props} />} />
				{/* <Route exact path="/login" element={<Login {...props}/>} /> */}
				{/* <Route exact path="/case" element={<Case {...props}/>} /> */}

				<Route exact path="/cases" element={<Cases {...props}/>} />
				<Route exact path="/scase" element={<Scase {...props}/>} />

				<Route exact path="/coming-soon" element={<ComingSoon {...props}/>} />
				<Route exact path="/profile" element={<Profile {...props}/>} />

				<Route exact path="/service-request/catalogue/:sid" element={<ServiceRequestDetails {...props}/>} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	)
}

UiRoutes.propTypes = {
  props: PropTypes.object,
};

export default UiRoutes;
