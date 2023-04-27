import React from "react";
import Paragraph from '@tds/core-paragraph'
import { SearchBold } from '@tds/core-interactive-icon'
import Text from '@tds/core-text'
import Heading from '@tds/core-heading'
import Box from '@tds/core-box'
import { Calendar } from '@tds/core-decorative-icon'

import './index.scss'

const ComingSoon = () => {
    return (
        <>
            <Box between={4}>
                <div className="coming-soon-message">
                    <Heading level="h1">Willow Snow</Heading>
                    <Heading level="h4">COMING SOON</Heading>
                    <div><Calendar copy="en" size='48' /></div>

                    <Paragraph block={true}>OUR SITE IS CURRENTLY ON MAINTANENCE.</Paragraph>
                    <Paragraph block={true}>WE'LL BE BACK WITH OUR NEW DESIGNED WEBSITE SOON!</Paragraph>

                </div>
            </Box>
        </>
    )
}

export default ComingSoon;