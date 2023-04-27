import React from "react";
import { connect } from 'react-redux'
import { createBrowserHistory } from 'history';

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import './index.scss'
import styled from "styled-components";
import Box from "@tds/core-box"

const MainContainerWrapper = styled(Box)``;

const Layout = (WrappedComponent) =>{
    const history = createBrowserHistory();

    class Layout extends React.Component{
        // componentDidUpdate(prevProps){
        // }
        render(){
            return (
            <MainContainerWrapper>
                <Navbar {...this.props} history={history} />
                <Sidebar {...this.props}  history={history}/>
                <div id="dashboard-middle-section">
                <WrappedComponent {...this.props} history={history} />
                </div>
                <div className='dashboard-footer'>
                    Copyrights reserved 2022
                </div>
            </MainContainerWrapper>)
        }
    }
    const mapStateToProps = state => state
    return connect(mapStateToProps)(Layout)
}

export default Layout;