import React from 'react'
import {MainLayout } from '../styles/Layout'
import Resume from '../Components/Resume';
import Skills from '../Components/Skill';

function ResumePage() {
    return (
        <>
        <MainLayout>
                <Skills/>
                <Resume/>
        </MainLayout>
        </>
      )
}

export default ResumePage