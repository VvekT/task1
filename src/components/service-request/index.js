import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import Tabs from '@tds/community-tabs'
import Link from '@tds/core-link'
import Text from '@tds/core-text'
import FlexGrid from '@tds/core-flex-grid'
import Button from '@tds/core-button'
import { CaretDown } from '@tds/core-interactive-icon';



import * as HomeAction from '../../store/home/home.action';
import Greeting from '../../common/Greeting';
const Dashboard = lazy(() => import('../service-request/Dashboard'));
const MyCases = lazy(() => import('../service-request/Mycases'));

import './index.scss'
import ResponsiveWithResize from '../../utils/responsiveWithResize';
import { MobileTableEndorsement } from '../../utils/tableStyle';
const ServiceRequest = (props) => {

	const [showGreeting, setShowGreeting] = useState(true)
	const { contentFullData, home, dispatch } = props

	const initFetch = useCallback(() => {
		dispatch(HomeAction.showMessage())
	})
	// useEffect(() => {
	// 	initFetch()
	// }, [])
	const [open, setOpen] = useState('dashboard')

	const handleOpen = id => {
		setOpen(id)
	}

	return (
		<>
			<div className='dashboard-middle-section'>
				<Suspense fallback={<div>Loading...</div>}>
					<FlexGrid limitWidth={false}>
						{/* {showGreeting &&
							<Greeting showModal={setShowGreeting} />
						} */}

						<FlexGrid.Row>
							<FlexGrid.Col horizontalAlign="right">
								<div className='dashboard-counter-button'>
									<span className='count-view-text'>View:</span> <Button variant="brand">Last 24 hours&nbsp;&nbsp;&nbsp;<CaretDown /></Button>
								</div>
							</FlexGrid.Col>
						</FlexGrid.Row>
						<Tabs copy="en" open={open} onOpen={handleOpen}>
							<Tabs.Panel id="dashboard" heading="DASHBOARD" />
							<Tabs.Panel id="my-request" heading="MY REQUEST" />
							<Tabs.Panel id="my-incident" heading="MY INCIDENT" />
						</Tabs>
						{open === 'dashboard' &&
							<Dashboard {...props} />
						}
						{open === 'my-request' && (
							<>
								<MyCases {...props} />
								{/* <ResponsiveWithResize
						maxWidth="md"
						render={() => (
							<MobileTableEndorsement>
								<MyCases {...props} />
							</MobileTableEndorsement>
						)} */}
								{/* /> */}
								{/* <ResponsiveWithResize minWidth="md" render={() => <MyCases {...props} />} /> */}
							</>
						)
						}
						{/*home && home.title ? (
						<>
							<h1>{home.title}</h1>
							<h3>{home.description}</h3>
						</>) : <>Loading...</>*/}
					</FlexGrid>
				</Suspense>
			</div>
		</>
	)
}
export default ServiceRequest;