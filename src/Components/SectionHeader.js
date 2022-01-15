import React from 'react'
import styled from "styled-components"

const SectionWrapper = styled.div`
    .container-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap:10px; 
        padding: 10px 20px;
        margin-bottom: 10px;
        margin-top: 20px;
    }

    .container-wrapper a:nth-child(2) {
        margin-inline-start: auto; 
        text-decoration: none; 
    }

    a{
        text-decoration: none; 
        // color: #7B68EE;
        font-size: 13px;
        color: #6495ED;
    }
    a .daily{
        color: #7B68EE;
        
    }

    .b-hr{
        width: 95%;
        margin: 0 auto;
        border-color: gray;
        opacity: 0.1;
        margin-top: 20px;
        margin-bottom: 20px;

    }
    a button{
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        background-color: #4169E1;
        color: #fff;
    }
`


function SectionHeader() {

    return (
        <SectionWrapper>
            <div className="container-wrapper">
                <a href="#">Trend</a>
                <a className='daily' href="#">Daily</a>
                <a href="#">Weekly</a>
                <a href="#"><button>Monthly</button> </a>
                <a href="#">Yearly</a>
            </div>
            <hr className="b-hr" />

        </SectionWrapper>
    )
}

export default SectionHeader
