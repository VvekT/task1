import React from 'react'
// import { customPageData } from '../utils/customPageData'
import "./index.scss";
import Link from "@tds/core-link";
import Text from "@tds/core-text";
import Box from "@tds/core-box";

import {
    colorGreyShuttle,
    colorTelusPurple,
    colorWhite,
  } from "@tds/core-colours";
import { ChevronLeft, ChevronRight } from "@tds/core-interactive-icon";

  import styled from "styled-components";


const IconCircle = styled("span")`
display: flex;
border-radius: 50%;
width: 21px;
height: 21px;
background: ${colorTelusPurple};
border: 2px solid #666;
color: ${colorWhite};
justify-content: center;
font-size: 12px;
margin-right: 20px;
`;


export const SidebarMenu = ({details}) => {

  return (
    <>

            <div className='sidebarmenu-c'>
                
                {details.count ?
                    // return(
                        <li 
                        // className=
                // {
                        //   href =
                        //    details.link
                        //     ? "icon-side sidebar-link active"
                        //     : 
                            // "icon-side sidebar-link"
                        // }
                        key={details.link}
                      >
                        <Box style={{ flex: 1 }}>
                          <Link href={details.link} >
                            <Box style={{ width: "173px" }}>
                              <Text size="medium" className={
                                details.activeClassName
                            }> 
                                {details.title}
                                 </Text>
                            </Box>
                          </Link>
                        </Box>
                        <IconCircle>{details.count}</IconCircle>
                      </li>
                    

                :
                    // return(
                        <li className=
                // {
                        //   href =
                        //    details.link
                        //     ? "icon-side sidebar-link active"
                        //     : 
                            "icon-side  color-purple"
                        // }
                        key={details.link}
                      >
                        <Box style={{ flex: 1 }}>
                          <Link href={details.link} >
                            <Box style={{ width: "173px" }}>
                              <Text size="medium" className={
                                details.ClassName
                            } > 
                                {details.title}
                                 </Text>
                            </Box>
                          </Link>
                          {details.isAccordion && (
                                <span className="sidebar-accordion">
                                  <ChevronRight />
                                </span>
                              )}
                        </Box>
                        {/* <IconCircle>{details.count}</IconCircle> */}
                      </li>
                    // );

                }
                
            
                      </div>
    </>
  )
}
