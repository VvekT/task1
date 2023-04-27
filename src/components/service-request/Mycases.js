import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FlexGrid from '@tds/core-flex-grid'
import Box from '@tds/core-box'
import Heading from '@tds/core-heading'
import Text from '@tds/core-text'
import Tabs from '@tds/community-tabs'
import Button from '@tds/core-button'

import CustomTable from "../../common/table";
import './dashboard.scss'
import { useGetTicketsQuery } from "../../store/ticketsPostSlice";

const head = [
	'Number',
	'Short description',
	'state',
	'Priority',
	'Service offering',
	'Related configuration item',
	'Location',
	'Opened',
	'Opened by'
]

const tableData = [
	{
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
		priority: "4-Low",
		serviceOffering: "AWS Managed Operations",
		relatedConfigurationItem: "windowTest",
		location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
	{
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
		priority: "4-Low",
		serviceOffering: "AWS Managed Operations",
		relatedConfigurationItem: "windowTest",
		location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
	{
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
		priority: "4-Low",
		serviceOffering: "AWS Managed Operations",
		relatedConfigurationItem: "windowTest",
		location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
	{
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
		priority: "4-Low",
		serviceOffering: "AWS Managed Operations",
		relatedConfigurationItem: "windowTest",
		location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
	{
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
		priority: "4-Low",
		serviceOffering: "AWS Managed Operations",
		relatedConfigurationItem: "windowTest",
		location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
	{
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
		priority: "4-Low",
		serviceOffering: "AWS Managed Operations",
		relatedConfigurationItem: "windowTest",
		location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
	{
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
		priority: "4-Low",
		serviceOffering: "AWS Managed Operations",
		relatedConfigurationItem: "windowTest",
		location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
	{
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
		priority: "4-Low",
		serviceOffering: "AWS Managed Operations",
		relatedConfigurationItem: "windowTest",
		location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
	{
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
		priority: "4-Low",
		serviceOffering: "AWS Managed Operations",
		relatedConfigurationItem: "windowTest",
		location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
	{
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
		priority: "4-Low",
		serviceOffering: "AWS Managed Operations",
		relatedConfigurationItem: "windowTest",
		location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	}
]

const MyCases = () => {
    const [status, setStatus] = useState("Open");
    const [number, setNumber] = useState(1);
	const [open, setOpen] = useState('my-open-request')
    const [pageVal, setPage] = useState(1);
	const [statusVal, setStatusVal] = useState({
        status: status,
        page: 1,
        isInclude: false
    });
    const { data: posts, isLoading, isFetching } = useGetTicketsQuery(statusVal);
	useEffect(() => {
        setStatusVal({
            status: status,
            page: pageVal,
			isInclude: false
        });
    }, [status, pageVal])

	const handleOpen = (id) => {
		setOpen(id);
		if (id === 'my-open-request') setStatus("Open")
		else setStatus("Closed")
	}

	const navigate = useNavigate();

	const scase = () => {
		// alert("clicked");
		navigate("/scase");
	}

	return (
		<>
			<Box vertical={3}></Box>
			<Heading level="h1" tag="h1">Active Requests</Heading>
			<div className='mycases-counter-button'>
				<FlexGrid.Row horizontalAlign={'end'}>
					<Button variant="standard" onClick={scase}>Submit New Case</Button>
				</FlexGrid.Row>
			</div>
			<FlexGrid limitWidth={false}>
				<div className="mycases-table-container">
					<Box vertical={3}></Box>

					<Tabs copy="en" open={open} onOpen={handleOpen}>
						<Tabs.Panel id="my-open-request" type="Open" heading="My Open Requests" />
						<Tabs.Panel id="my-closed-requests" type="Closed" heading="My Closed Requests" />
						<Tabs.Panel id="all-open-requests" heading="All Open Requests" />
						<Tabs.Panel id="all-closed-requests" heading="All Closed Requests" />
					</Tabs>
					{open == 'my-open-request' && (
						<CustomTable posts={posts} isLoading={isLoading} head={head} pagination />
					)}
					{open == 'my-closed-requests' && (
						<CustomTable posts={posts} isLoading={isLoading} head={head} pagination />
					)}
					{open == 'all-open-requests' && (
						<CustomTable posts={posts} isLoading={isLoading} head={head} pagination />
					)}
					{open == 'all-closed-requests' && (
						<CustomTable posts={posts} isLoading={isLoading} head={head} pagination />
					)}
				</div>
			</FlexGrid>
		</>
	)
}

export default MyCases;