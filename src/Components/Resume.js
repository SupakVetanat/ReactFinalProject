import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title'
import ResumeItem from '../Components/ResumeItem';
import { InnerLayout } from '../styles/Layout';
import SchoolIcon from '@material-ui/icons/School';
import SmallTitle from './SmallTitle';

function Resume() {
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
           <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
            <div className="small-title">
                    <SmallTitle icon={school} title={'Education Qualification'} />
                </div>
                <div className="resume-content">
                <ResumeItem 
                        year={'2019 - Present'} 
                        title={'Bachelor Degree of Multimedia Technology '}
                        subTitle={'THAI-NICHI INSTITUTE OF TECHNOLOGY'}
                        text={'การศึกษาระดับปริญญาตรีที่สถาบันเทคโนโลยีไทย-ญี่ปุ่น คณะเทคโนโลยีสารสนเทศ สาขาวิชาเทคโนโลยีมัลติมิเดีย (MT)'} 
                    />
                <ResumeItem 
                        year={'2016 - 2018'} 
                        title={'Senior High School Graduation'}
                        subTitle={'Satreesethabudbumpen School'}
                        text={'จบการศึกษาระดับมัธยมศึกษาตอนปลายจากโรงเรียนสตรีเศรษฐบุตรบําเพ็ญ สายศิลป์-ภาษาญี่ปุ่น'} 
                />
                <ResumeItem 
                        year={'2013 - 2015'} 
                        title={'Junior High School Graduation'}
                        subTitle={'Nawaminthrachinuthit Triamudomsuksanomklao School'}
                        text={'จบการศึกษาระดับมัธยมศึกษาตอนต้นจากโรงเรียนนวมินทราชินูทิศ เตรียมอุดมศึกษาน้อมเกล้า สายศิลป์-ภาษาญี่ปุ่น'} 
                />
                </div>
                
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume