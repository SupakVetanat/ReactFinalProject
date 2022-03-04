import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Resume from '../Components/Resume';
import Skills from '../Components/Skill';

function ResumePage() {
    const Book = <MenuBookIcon />
    return (
        <>
        <MainLayout>
            <InnerLayout>
                <Skills/>
                <Resume/>
            </InnerLayout>
        </MainLayout>
        </>
      )
}

export default ResumePage