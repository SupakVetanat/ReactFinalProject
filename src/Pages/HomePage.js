import React from 'react'
import styled from 'styled-components'
import  FacebookIcon  from '@material-ui/icons/Facebook'
import  GitHubIcon from '@material-ui/icons/GitHub'
import YoutubeIcon   from '@material-ui/icons/YouTube'

const HomePage = () => {
  return (
    <HomePageStyled>
        <div className='typography'>
            <h1>Hi I'm <span className='reveal-text'>Supak Vetanat</span></h1>
            <div className='icons'>
                <div className='icon i-facebook' ><a  href='https://www.facebook.com/profile.php?id=100009373082496'><FacebookIcon/></a></div>
                <div className='icon i-github'><a  href='https://github.com/SupakVetanat'><GitHubIcon/></a></div>
                <div className='icon i-youtube'><a  href='https://www.youtube.com/channel/UCwGf9A_zGwb0iKyISPypLoQ'><YoutubeIcon/></a></div>
            </div>
        </div>
    </HomePageStyled>
  )
}
const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    :root {
        --delay: 0;
        --duration: 800ms;
        --iterations: 1;
    }

    .reveal-text,
    .reveal-text::after {
        animation-delay: var(--animation-delay, 2s);
        animation-iteration-count: var(--iterations, 1);
        animation-duration: var(--duration, 800ms);
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
    }
    
    .reveal-text {
        --animation-delay: var(--delay, 0);
        --animation-duration: var(--duration, 800ms);
        --animation-iterations: var(--iterations, 1);
        position: relative;
        animation-name: clip-text;
        white-space: nowrap;
        cursor: default;
        
        &::after {
            content: "";
            position: absolute;
            z-index: 999;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--primary-color);
            transform: scaleX(0);
            transform-origin: 0 50%;
            pointer-events: none;
            animation-name: text-revealer;
        }
        
    }
    
    
    @keyframes clip-text {
        from {
            clip-path: inset(0 100% 0 0);
        }
        to {
            clip-path: inset(0 0 0 0);
        }
    }
    
    
    @keyframes text-revealer {
        
        0%, 50% {
            transform-origin: 0 50%;
        }
        
        60%, 100% {
            transform-origin: 100% 50%;		
        }
    
        
        60% {
            transform: scaleX(1);
        }
        
        100% {
            transform: scaleX(0);
        }
    }
    
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        h1{
            margin-bottom: 2rem;
        }

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-facebook{
                &:hover{
                    border: 2px solid #007bff;
                    color: #007bff;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage