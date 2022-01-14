import { MdMenu, MdPayments, MdShutterSpeed } from 'react-icons/md';
import { MdExpandMore } from 'react-icons/md';
import { MdNotifications } from 'react-icons/md';
import styled from "styled-components"


export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    overflow-x: hidden;
    background-color: #0a2351;
    color: #fff;
    padding-top: 15px;
    padding-bottom: 15px;

    .left-nav{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }
    .left-nav span{
        margin-right: 8px;
    }

    .icons{
        display: none;
        // display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 0
    }
    .icons a {
        margin-right: 8px;
    }
    .icons img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 10px;
        margin-left: 10px;
    }
    .top-icon{
        display: inline-block;
        width: 6px;
        background-color: blue;
        margin: 0
    }

    .md-menu{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        // width: 100%;
        // border: 1px solid black;
    }
    
`
export const DashHeader = styled.div`
    display: flex;
    padding-top: 30px;
    padding-bottom: 0px;
    width: 85%;
    margin: 0 auto;

    .header1{
        margin-right: 10px;
        border-bottom: 3px solid blue;
    }
`

const TopHeader = () => {
    return (
        <div>

            <HeaderWrapper>
                <div className="left-nav">
                    <p><span><MdPayments /></span> HydrogenPayroll</p>
                </div>
                <div className="icons">
                    <a href='http://www.rect.org' className="top-icon"><MdShutterSpeed /> </a>
                    <a href='http://www.rect.org' className="top-icon"><MdNotifications /> </a>
                    <span>Funmi Temidayo <MdExpandMore /> </span>
                    <img src='https://images.unsplash.com/photo-1641652321739-b2b175d15e22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60' alt='' />
                </div>
                {/* <div > */}
                    <div className="md-menu"><MdMenu /></div>
                {/* </div> */}
            </HeaderWrapper>
            <DashHeader className="dash-header">
                <p className="header1">Dashboard</p>
                <p>Playslips</p>
            </DashHeader>
            
        </div>
    )
}

export default TopHeader
