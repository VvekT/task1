import React, { useState, useEffect } from "react";
import {
 Home,
 CallTalking,
 ComputerNetwork,
 ArtificialIntelligence,
} from "@tds/core-decorative-icon";
import Link from "@tds/core-link";
import { ChevronLeft, ChevronRight } from "@tds/core-interactive-icon";
 
import Icon from "./icons/Icon";
import LogoWillow from "../../public/images/icon/Logo-Willow.svg";
import { customCategoriesData } from "../utils/customPageData";
import Paragraph from "@tds/core-paragraph";
import { TextWrapper } from "../utils/index";
import Text from "@tds/core-text";
import Box from "@tds/core-box";
import Heading from "@tds/core-heading";
import { useLocation } from "react-router-dom";
import HairlineDivider from "@tds/core-hairline-divider";
import {
 colorGreyShuttle,
 colorTelusPurple,
 colorWhite,
} from "@tds/core-colours";
 
import styled from "styled-components";
 
import "./index.scss";
import { SidebarMenu } from "./SidebarMenu";
 
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
 
const CategoryWrapper = styled(Box)`
 padding: 0px;
 top: 90px;
 position: relative;
 a {
   text-decoration: none !important;
 }
`;
 
const Sidebar = ({ customPageData, history }) => {
 const [isCollapse, setIsCollapse] = useState(false);
 const [screenSize, getDimension] = useState({
   dynamicWidth: window.innerWidth,
 });
 const [open,setOpen] = useState(false);
 const [showMore,setShowMore] = useState(false);
 const pathnameUrl = useLocation().pathname;
 console.log("para,ssß.", pathnameUrl);
 const [href, setHref] = useState("/");
 const urlToShow = [
   "/Scase",
   "/service-request/catalogue/0",
   "/service-request/catalogue/1",
   "/service-request/catalogue/2",
   "/service-request/catalogue/3",
   "/service-request/catalogue/4",
   "/service-request/catalogue/5",
   "/service-request/catalogue/6",
   "/service-request/catalogue/7",
   "/service-request/catalogue/8",
   "/service-request/catalogue/9",
   "/service-request/catalogue/10",
   "/service-request/catalogue/11",
   "/service-request/catalogue/12",
   "/service-request/catalogue/13",
   "/service-request/catalogue/14",
   "/service-request/catalogue/15",
   "/service-request/catalogue/16",
   "/service-request/catalogue/17",
   "/service-request/catalogue/18",
   "/service-request/catalogue/19",
   "/service-request/catalogue/20",
   "/service-request/catalogue/21",
   "/service-request/catalogue/22",
 
 ];
 
 useEffect(() => {
   let collapse = localStorage.getItem("isCollapseMenu");
   if (!collapse || collapse == false) {
     localStorage.setItem("isCollapseMenu", collapse);
   }
 }, []);
 
 useEffect(() => {
   const { location } = history;
   setHref(location.pathname);
   let isCollapseMenu = localStorage.getItem("isCollapseMenu");
   if (isCollapseMenu == "true") {
     closeSideBar();
   } else {
     showSideBar();
   }
 }, [href]);
 
 const setDimension = () => {
   console.log("width", window.innerWidth)
   getDimension({
     dynamicWidth: window.innerWidth,
   })
   if (window.innerWidth >= 320) {
     let element = document.getElementById('dashboard-sidebar')
     let dashElel = document.getElementById('dashboard-middle-section')
     let iconElelRight = document.getElementById('slider-icon-right')
     let iconElelLeft = document.querySelector('.direction-arrow-left')
     element.style.minWidth = '50px'
     element.style.width = '113px'
     dashElel.style.marginLeft = '100px'
     iconElelRight.style.display = 'block'
     iconElelLeft.style.display = 'block'
     setIsCollapse(true)
     localStorage.setItem('isCollapseMenu', true)
   }
 }
 
 const [colapse,setCollapse] = useState(false);
 
 useEffect(() => {
   window.addEventListener('resize', setDimension);
   return (() => {
     window.removeEventListener('resize', setDimension);
   })
 }, [screenSize])
 
 const closeSideBar = () => {
   let element = document.getElementById("dashboard-sidebar");
   let dashElel = document.getElementById("dashboard-middle-section");
   let iconElel = document.getElementById("slider-icon-right");
   element.style.minWidth = "50px";
   element.style.width = "113px";
   dashElel.style.marginLeft = "120px";
   iconElel.style.display = "block";
   setIsCollapse(true);
   localStorage.setItem("isCollapseMenu", true);
 };
 const showSideBar = () => {
   let element = document.getElementById("dashboard-sidebar");
   let iconElel = document.getElementById("slider-icon-right");
   let dashElel = document.getElementById("dashboard-middle-section");
   element.style.display = "block";
   element.style.minWidth = "300px";
   iconElel.style.display = "none";
   dashElel.style.marginLeft = "320px";
   dashElel.style.marginRight = "25px";
   localStorage.setItem("isCollapseMenu", false);
   setIsCollapse(false);
 };
 
 const { sidebar } = customPageData;
 
 return (
   <>
     {urlToShow.includes(pathnameUrl) && (
       <>
         <div
           className="dashboard-sidebar dashboard-sidebar-cat"
           id="dashboard-sidebar"
         >
           <span
             className="direction-arrow-left"
             onClick={closeSideBar}
           ></span>
 
           <CategoryWrapper>
             {/* <Box style={{ marginBottom: "22px", display: "flex" }}>
               <Link href="/">
                 <Box
                   inline
                   style={{
                     position: "relative",
                     left: "47px",
                     bottom: "-32px",
                     display: "inline-block",
                   }}
                 >
                   <ChevronLeft />
                 </Box>
                 <Icon
                   name="Icon-Home"
                   className={href === "/" ? "svg-white" : "svg-inverted"}
                   iconClass="sz32"
                   text="Home"
                   iconSize={"medium"}
                 />
               </Link>
             </Box> */}
             {/* <HairlineDivider />
             <TextWrapper
               additionalProps={{
                 position: "relative",
                 textAlign: "center",
                 marginTop: "10px",
               }}
             >
               <Box vertical="2"></Box>
               <Box
                 style={{
                   left: "50px",
                   display: "flex",
                   position: "relative",
                 }}
               >
                 <TextWrapper
                   additionalProps={{
                     letterSpacing: "0.3px",
                   }}
                 >
                   <Text size="large">Select Categories</Text>
                 </TextWrapper>
                 <TextWrapper
                   color={colorGreyShuttle}
                   additionalProps={{ fontWeight: 400 }}
                 >
                    <Text size="small">Showing 12 categories</Text>
                 </TextWrapper>
               </Box>
             </TextWrapper> */}
             <ul>
               {customCategoriesData &&
                 customCategoriesData["sidebar"].map((option) => {
                   return (
                     <li
                       className={
                         href === option.link
                           ? "icon-side sidebar-link active"
                           : "icon-side sidebar-link"
                       }
                       key={option.link}
                     >
                       <Box style={{ flex: 1 }}>
                         <Link href={option.link} >
                           <Box style={{ width: "173px" }}>
                             <Text size="medium" className={
                               option.activeClassName
                           }>{option.title}</Text>
                           </Box>
                         </Link>
                       </Box>
                       <IconCircle>{option.count}</IconCircle>
                     </li>
                   );
                 })}
             </ul>
           </CategoryWrapper>
           <br/><br/>
           <br/><br/>
           {!showMore &&
           <div className="button-showMore cursor-pointer mg10 icon-side" onClick={()=>setShowMore(true)}>
               Show More Categories
               </div>
           }
           {showMore &&
 
               <div className="button-showMore cursor-pointer mg10 icon-side" onClick={()=>setShowMore(false)}>
               Show Less Categories
               </div>
           }  
           {showMore &&
           // <CategoryWrapper>
           <ul>
               {customCategoriesData &&
                 customCategoriesData["showSidebar"].map((option) => {
                   return (
                     <li
                       className={
                         href === option.link
                           ? "icon-side sidebar-link active"
                           : "icon-side sidebar-link"
                       }
                       key={option.link}
                     >
                       <Box style={{ flex: 1 }}>
                         <Link href={option.link} >
                           <Box style={{ width: "173px" }}>
                             <Text size="medium" className={
                               option.activeClassName
                           }>{option.title}</Text>
                           </Box>
                         </Link>
                       </Box>
                       <IconCircle>{option.count}</IconCircle>
                     </li>
                   );
                 })}
             </ul>
           // </CategoryWrapper>
          
       }
         </div>
         <span
           className="direction-arrow-right"
           id="slider-icon-right"
           onClick={showSideBar}
         >
           {/* <Icon name="Icon-Expand" className="svg-white" /> */}
         </span>
       </>
     )}
     {!urlToShow.includes(pathnameUrl) && (
       <>
         <div className="dashboard-sidebar" id="dashboard-sidebar">
           <span className="direction-arrow-left" onClick={closeSideBar}>
             <Icon name="Icon-Collapse" className="svg-white" />
             {/*<Link href="#" icon={ChevronLeft} iconPosition="right" onClick={closeSideBar}></Link>*/}
           </span>
 
           {!isCollapse ?
      
           (
             <ul className="main-navbars">
               {sidebar &&
                 sidebar.map((option) => {
                   if(option.drop){
                           return(
 
                            
                               <div className={open ? "sidebar-item open" : "sidebar-item"}>
               <div className="sidebar-title">
               <li
                           className={
                             href === option.link
                               ? "sidebar-link active"
                               : "sidebar-link"
                           }
                           key={option.link}
                         >
 
                           <Link href={option.link} >
                              
                             <Icon
                               name={option.icon}
                               className={
                                 href === option.link
                                   ? option.activeClassName
                                   : option.className
                               }
                               iconClass="sz32"
                               text={option.title}
                               iconSize={"medium"}
                             />
                             </Link>
                             {option.isAccordion && (
                              
                               <span className="sidebar-accordion toggle-btn float-right" onClick={()=>setOpen(!open)}>
                                 <ChevronRight />
                               </span>
 
 
                             )}
                            
                          
                           </li>
                           </div>
                               <div className="sidebar-content">
                            { option.drop.map((details) =>
                           // <a href={details.title || "#"} className="sidebar-item plain">
                           // { option.drop.icon && <i className={drop.icon}></i> }
                           // {details.title}
                           <SidebarMenu  details={details}/>
                           // console.log(details.title)
                       // </a>
                       ) }
                   </div>
                        
                         </div>
                           );
                   }else{
                       return(
                           <li
                           className={
                             href === option.link
                               ? "sidebar-link active"
                               : "sidebar-link"
                           }
                           key={option.link}
                         >
                           <Link href={option.link} onClick={()=>setCollapse(true)}>
                              
                             <Icon
                               name={option.icon}
                               className={
                                 href === option.link
                                   ? option.activeClassName
                                   : option.className
                               }
                               iconClass="sz32"
                               text={option.title}
                               iconSize={"medium"}
                             />
                           </Link>
 
                           {option.isAccordion && (
                               <span className="sidebar-accordion">
                                 <ChevronRight />
                               </span>
                             )}
                         </li>
                       );
                   }
                   // return (
                   //   <li
                   //     className={
                   //       href === option.link
                   //         ? "sidebar-link active"
                   //         : "sidebar-link"
                   //     }
                   //     key={option.link}
                   //   >
                   //     <Link href={option.link} onClick={()=>setCollapse(true)}>
                          
                   //       <Icon
                   //         name={option.icon}
                   //         className={
                   //           href === option.link
                   //             ? option.activeClassName
                   //             : option.className
                   //         }
                   //         iconClass="sz32"
                   //         text={option.title}
                   //         iconSize={"medium"}
                   //       />
                   //       {option.isAccordion && (
                   //         <span className="sidebar-accordion">
                   //           <ChevronRight />
                   //         </span>
                   //       )}
                   //     </Link>
                   //   </li>
                   // );
                 })}
             </ul>
           )
          
          
            :
            (
             <ul className="main-navbars">
               {sidebar &&
                 sidebar.map((option) => {
                   return (
                     <li
                       className={
                         href === option.link
                           ? "sidebar-link active"
                           : "sidebar-link"
                       }
                       key={option.link}
                     >
                       <Link href={option.link}>
                         <Icon
                           name={option.icon}
                           className={
                             href === option.link
                               ? option.activeClassName
                               : option.className
                           }
                         />
                       </Link>
                     </li>
                   );
                 })}
               {/*<li className="sidebar-link">
                           <Link href="#" iconPosition="left" ><Icon name="Icon-Home" className="svg-inverted" /></Link>
                       </li>
                       <li className="sidebar-link">
                           <Link href="#"><Icon name="Icon-DigitalITServices" className="svg-inverted" /></Link>
                       </li>
                       <li className="sidebar-link">
                           <Link href="#" ><Icon name="Icon-DigitalCXM" className="svg-inverted mg10" /></Link>
                       </li>
                       <li className="sidebar-link active">
                           <Link href="/" ><Icon name="Icon-ServiceRequest" className="svg-white" /></Link>
                   </li>*/}
             </ul>
           )}
           {!isCollapse && (
             <div className="icon-footer">
               <img src={LogoWillow} alt="logo" />
             </div>
           )}
         </div>
         <span
           className="direction-arrow-right"
           id="slider-icon-right"
           onClick={showSideBar}
         >
           <Icon name="Icon-Expand" className="svg-white" />
         </span>
       </>
     )}
   </>
 );
};
 
export default Sidebar;