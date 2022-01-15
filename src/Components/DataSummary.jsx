import * as Ava from "react-icons/fa";
import styled from "styled-components"

export const DataWrapper = styled.div`
    display: flex;
    justify_content: center;
    align-items: center;
    width: 85%;
    margin: 0 auto;
    margin-top: 10px;
    // width: 140px;
   


    .num{
        // color: lightblue;
        margin-left: 10px;
        // width: 110px;
    }
    .text{
        font-size: 10px;
        color: #939bca;
    }
    .amount{
        font-size: 13px;
    }

    .avata{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #939bca;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        font-size: 20px;
        padding-bottom: 5px;
    }

    
`
const DataSummary = ({amount, text}) => {
    return (
        <DataWrapper>
                <div className="avata">
                    <Ava.FaAtlassian />
                </div>
            <div className="num">
                <p className="amount">{amount}</p>
                <p className="text">{text}</p>
            </div>
        </DataWrapper>
    )
}

export default DataSummary
