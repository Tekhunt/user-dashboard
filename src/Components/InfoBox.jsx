import styled from "styled-components"
import { FaToggleOff } from "react-icons/fa"

export const InfoBoxWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 85%;
    margin: 0 auto;
    background-color: #0a2351;
    color: #fff;
    border-radius: 4px;
    padding: 10px;
    @media only screen and (min-width: 901px){
        // width: 400px;

        // display: flex;
        // justify-content: space-between;
        // align-items: center;
        // flex-direction: column;
        // width: 85%;
        // margin: 0 auto;
        // border: 20px solid red;
        background-color: #0a2351;
    }

    .info-img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 10px;
        
    }
    .lside{
        display: flex;
    }
    .details{
        padding: 5px;
        border-radius: 12px;
        border: none;
        color: #939bca;
        }

    .info1{
        display: flex;
        // border: 1px solid black;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        // margin-top: 10px;
        padding: 10px;
    }
    .info2{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px;
        }

    hr{ 
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid #939bca;
        opacity: 0.2;
    }

    // info2 .div1, .div2{
    //     display: flex;
    //     flex-direction: column;
    // }

    .div1{
        margin-bottom: 10px;
    }
    .opac{
        color: #939bca;
        font-size: 12px;
      }
      .eye-toggle{
          padding: 5px;
      }

      .toggle-eye{
          font-size: 50px;
      }

`

const InfoBox = () => {
    return (
        <InfoBoxWrapper>
            <div className="info1">
                <div className="lside">
                    <img src='https://images.unsplash.com/photo-1641652321739-b2b175d15e22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60' className="info-img" alt='' />
                    <div>
                        <p>Temidayo</p>
                        <p className="opac">Eventuals Ltd</p>
                    </div>
                </div> 
                <button className="details">Details</button>
            </div>
            <hr />
            <div className="info2">
                <div>
                    <div className="div1">
                        <p>Account Linked</p>
                        <p className="opac">*** *** *** 4563</p>
                    </div>
                    <div className="div1">
                        <p className="opac">Temidayo</p>
                        <p>Eventuals Ltd</p>
                    </div>
                    <p className="opac">Account Linked</p>
                </div>
                <p className="toggle-eye"><FaToggleOff /></p>
            
            </div>
            
        </InfoBoxWrapper>
    )
}

export default InfoBox
