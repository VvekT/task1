import React, { useEffect } from "react";
import UiRoutes from '../../routes/routes';
import Layout from "../../common/Layout";
import Box from '@tds/core-box'

const App = (customPageData) => {
	return (<Box><UiRoutes {...customPageData} /></Box>)
}
export default Layout(App);