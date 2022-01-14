import styled from "styled-components"


export const WelcomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    color: #fff;
    background-color: blue;
    margin: 0 auto;
    padding-left: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 4px;

    h3{
        font-size: 15px;
    }
    p{
        font-size: 12px;
    }
`
const Welcome = () => {
    return (
        <WelcomeWrapper>
            <h3>Welcome Back Timedayo</h3>
            <p>You have 6 notifications and 2 messages</p>
        </WelcomeWrapper>
    )
}

export default Welcome
