import React from 'react'
import styled from 'styled-components';

function ContactItem ({title,detail, logo}) {
  return (
    <ContactItemStyled>
        <div className="left-content">
          <p>{logo}</p>
        </div>
        <div className="right-content">
            <h5>{title}</h5>
            <h6>{detail}</h6>
        </div>
    </ContactItemStyled>
  )
}
const ContactItemStyled = styled.div`
background-color: var(--sidebar-dark-color);
display: flex;
padding: 2rem;
margin: auto;
margin-bottom: 3rem;
align-items: center;
width: 50%;
    .left-content{
        p{
            svg{
                font-size: 3rem;
            }
        }
        width: 10%;
        padding-left: 20px;
        position: relative;
    }
    .right-content{
        padding-left: 5rem;
        position: relative;
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .4rem;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.5rem;
        }
    }
`
export default ContactItem