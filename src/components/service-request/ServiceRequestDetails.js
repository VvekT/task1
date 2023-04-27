import React, { useEffect, useState } from 'react'
import { serviceReqDetails } from './ServiceRequestCategory'
import Box from '@tds/core-box'
import { useNavigate, useParams } from 'react-router-dom'
import './index.scss'

import Breadcrumbs from "@tds/core-breadcrumbs";
import ChevronLink from "@tds/core-chevron-link";
import HairlineDivider from '@tds/core-hairline-divider'
import Heading from '@tds/core-heading'
// import ServiceRequests from './ServiceRequests'
import { BackButton, CardWrapper, IconWrapper, TextWrapper } from '../../utils'
import Card from "@tds/core-card";
import Text from '@tds/core-text'
import {
    colorTelusGreen
} from "@tds/core-colours";
import styled from 'styled-components';
import { media } from '@tds/core-responsive'
import IconListActive from "../../../public/images/icon/ListviewActive.svg";
import IconListInActive from "../../../public/images/icon/ListViewInactive.svg";
import IconTileActive from "../../../public/images/icon/TileViewActive.svg";
import IconTileInActive from "../../../public/images/icon/TileViewInactive.svg";
import Image from "@tds/core-image";
import GoToFormIcon from "../../../public/images/icon/Icon-Next.svg"

const TwoGridLayout = styled(Box)({
    display: "grid",
    gridTemplateColumns: `repeat(2,1fr)`,
    gap: "1rem",
    alignItems: "flex-end",
    flex: 1,

    ...media.from("xs").until("lg").css({
        gridTemplateColumns: "auto",
    }),
});

const CatalogueContainer = styled(Box)`
  display: grid;
  gridTemplateColumns: repeat(3, 1fr)
  grid-template-areas:
    ". . head . ."
    "divider divider divider divider divider"
    "body body body body body";
  grid-gap: 1rem;
  grid-template-columns: repeat(3, minmax(240px, 1fr));
  ${media.from("xs").until("md").css({
    gridTemplateColumns: "1fr",
    gridTemplateAreas: "head",
})}
`;

const DiffCatalogueContainer = styled(Box)`
  display: grid;
  gridTemplateColumns: repeat(1, 1fr)

  grid-template-areas:
    ". . head . ."
    "divider divider divider divider divider"
    "body body body body body";
  grid-gap: 1rem;

  ${media.from("xs").until("md").css({
    gridTemplateColumns: "1fr",
    gridTemplateAreas: "head",
})}
`

const ServiceRequestDetails = () => {
    const navigate = useNavigate()
    const params = useParams();
    const [categoriesDetails, setCategoriesDetails] = useState({
        sid: 0,
        name: "",
        details: []
    })

    useEffect(() => {
        const val = serviceReqDetails.find(({ sid }) => {
            return sid == params.sid;
        })
        setCategoriesDetails(val)
    }, [params.sid])

    { console.log({ categoriesDetails }) }

    const [showGrid, setShowGrid] = useState(true);
    const [showList, setShowList] = useState(false);

    const funcShowGrid = () => {
        setShowGrid(true)
        setShowList(false)
    }

    const funcShowList = () => {
        setShowGrid(false)
        setShowList(true)
    }

    return (
        <>
            <br /><br />
            <Box>
                <Breadcrumbs baseUrl="http://localhost:9000/service-request">
                    <Breadcrumbs.Item href="/">Service request</Breadcrumbs.Item>
                    <Breadcrumbs.Item href="/">Service catalogue</Breadcrumbs.Item>
                    <Breadcrumbs.Item href="/">Make a request</Breadcrumbs.Item>
                </Breadcrumbs>
            </Box>
            <br />
            <ChevronLink varient="primary" direction="left" onClick={() => history.back(-1)}>
                Back
            </ChevronLink>
            <Box>
                <TwoGridLayout>
                    <div>
                        <Heading level="h1">{categoriesDetails?.name}</Heading>
                    </div>
                    <div className='right-float-main' onClick={() => setShow(true)}>
                        <img width="40px" src={showGrid ? IconTileActive : IconTileInActive} className="img cursor-pointer" alt="Grid" onClick={funcShowGrid} />
                        <Box className="hairline-add">
                            <HairlineDivider vertical />
                        </Box>
                        <img width="40px" src={showList ? IconListActive : IconListInActive} className="img cursor-pointer" alt="List" onClick={funcShowList} />
                    </div>
                </TwoGridLayout>
                {/* <FlexGrid>
                    <FlexGrid.Row> 
                        <FlexGrid.Col md={10}>
                            <Heading level="h1">{categoriesDetails?.name}</Heading>
                        </FlexGrid.Col>
                        <FlexGrid.Col md={2}>
                            <div className='right-float-main' onClick={() => setShow(true)}>
                                <img width="40px" src={showGrid ? IconTileActive : IconTileInActive} className="img cursor-pointer" alt="Grid" onClick={funcShowGrid} />
                                <Box className="hairline-add">
                                    <HairlineDivider vertical />
                                </Box>
                                <img width="40px" src={showList ? IconListActive : IconListInActive} className="img cursor-pointer" alt="List" onClick={funcShowList} />
                            </div>
                        </FlexGrid.Col>
                    </FlexGrid.Row>

                </FlexGrid> */}
            </Box>
            <HairlineDivider />
            <Box vertical={2}></Box>
            {showGrid &&
                <CatalogueContainer>
                    {categoriesDetails && categoriesDetails?.details && categoriesDetails["details"].map(({ title, description }) => (
                        <Card spacing="compact" variant="defaultOnlyBorder" fullHeight>

                            <TextWrapper>
                                <Text size="medium" bold>{title}</Text>
                            </TextWrapper>
                            <Box vertical={3}>
                                <TextWrapper>
                                    <Text size="small">{description}</Text>
                                </TextWrapper>
                            </Box>
                            <TextWrapper color={colorTelusGreen}>
                                <Text size="small" onClick={() => navigate('/scase')}>
                                    <div className='cursor-pointer'>
                                        <div style={{position:"relative", top: "-4px", display: "inline-block"}}>
                                        <Text size="small">Go To Form</Text>&nbsp;&nbsp;&nbsp;&nbsp;
                                        </div>
                                        <IconWrapper inline>
                                            <Image
                                                height={20}
                                                width={20}
                                                alt="Award icon"
                                                src={GoToFormIcon}
                                            />
                                        </IconWrapper>
                                    </div>

                                </Text>
                            </TextWrapper>
                        </Card>
                    ))
                    }
                </CatalogueContainer>

            }
            {showList &&
                <DiffCatalogueContainer>
                    {categoriesDetails && categoriesDetails?.details && categoriesDetails["details"].map(({ title, description }) => (
                        <Card spacing="compact" variant="defaultOnlyBorder" fullHeight>
                            {/* <FlexGrid> */}
                            {/* <FlexGrid.Row> */}
                            {/* <FlexGrid.Col> */}
                            <TextWrapper>
                                <Text size="medium" bold>{title}</Text>
                            </TextWrapper>
                            <Box vertical={3}>
                                <TextWrapper>
                                    <Text size="small">{description}</Text>
                                </TextWrapper>
                            </Box>
                            {/* </FlexGrid.Col> */}

                            {/* <FlexGrid.Col> */}
                            {/* <Box vertical={2}> */}
                            {/* <Text>3/3</Text> */}
                            {/* </Box> */}
                            {/* </FlexGrid.Col> */}
                            {/* <FlexGrid.col> 
                            <div>
                                h
                            </div>
                        </FlexGrid.col> */}
                            {/* <FlexGrid.Col> */}
                            <div className='right-float'>
                                <TextWrapper color={colorTelusGreen}>
                                    <Text size="small" onClick={() => navigate('/scase')}>
                                        <div className='cursor-pointer'>
                                            Go To Form
                                        </div>
                                    </Text>
                                </TextWrapper>
                            </div>
                            {/* </FlexGrid.Col> */}
                            {/* </FlexGrid.Row> */}
                            {/* </FlexGrid> */}
                        </Card>
                    ))
                    }
                </DiffCatalogueContainer>
            }
        </>
    )
}

export default ServiceRequestDetails