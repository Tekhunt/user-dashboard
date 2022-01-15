import { MdMenu, MdPayments, MdShutterSpeed, MdClose } from 'react-icons/md';
import { MdExpandMore } from 'react-icons/md';
import { MdNotifications } from 'react-icons/md';
import styled from "styled-components"
import { useState } from "react"


export const HeaderWrapper = styled.div`
    background-color: #0a2351;
    .sub-header{
        display: flex;
        justify-content: space-between;
        align-content: center;
        overflow-x: hidden;
        background-color: #0a2351;
        color: #fff;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    @media only screen and (min-width: 400px){
        .left-nav{
            margin-left: 30px;
        }
        .left-nav .span1{
            margin-right: 8px;
            font-size: 30px;
        }
    }

    

    .left-nav{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 30px;
    }
    .left-nav .span1{
        margin-right: 8px;
    }
    .left-nav p{
        display: flex;
        align-items: center;
    }

    .icons{
        // display: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
    }
    .icons a {
        margin-right: 8px;
        font-size: 20px;
        color: #fff;
    }
    .icons img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-left: 10px;
    }

    .md-menu{
        display: none;
        // display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        font-size: 40px;
        // width: 100%;
        margin-right: 30px;
    }
    .hr1{
        margin-right: 10px;
        height: 30px;
        transform: scale(1, 1.5)
    }
    .expand{
        font-size: 20px;
    }
    .icons p{
        display: flex;
    }

    @media only screen and (max-width: 550px){
        .icons{
            display: none;
        }
        .md-menu{
            display: flex;
        }
    }
    
    }
    
    .show-menu{
        display: none;
        // display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
    }
    .show-menu a {
        margin-right: 8px;
        font-size: 20px;
        color: #fff;
    }
    .show-menu img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-left: 10px;
    }
    .show-menu .show{
        display: block;
        color: blue;
    }
  


    .drop-img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }

    .drop-menu{
        display: flex;
        flex-direction: column;
        // justify-content: center;
        // align-items: center;
        color: #fff;
        margin-left: 30px;
    }
    .last-item{
        margin-bottom: 20px;
    }
    .name{
        display: flex;
    }

    .drop-menu p, img{
        margin-bottom: 10px;
        font-size: 18px;
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
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
    return (
        <div>

            <HeaderWrapper>
            <div className="sub-header">
                <div className="left-nav">
                    <p><span className="span1"><MdPayments /></span> <span className="span2">HydrogenPayroll</span></p>
                </div>

                <div className="md-menu" onClick={handleToggle}>
                 {navbarOpen? <MdClose /> : <MdMenu /> }
                </div>

                <div className={`${navbarOpen ? "show-menu" : "icons"}`}>
                    <a href='http://www.rect.org' className="top-icon show"><MdShutterSpeed /> </a>
                    <a href='http://www.rect.org' className="top-icon show"><MdNotifications /> </a>
                    <p className="hr1 show">|</p>
                   <p className='show'> Funmi Temidayo <span className='expand'><MdExpandMore /> </span></p>
                    <img src='https://images.unsplash.com/photo-1641652321739-b2b175d15e22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60' className='show' alt='' />
                </div>
            </div> 
            {navbarOpen &&
                <div className="drop-menu">
                    <img src='https://images.unsplash.com/photo-1641652321739-b2b175d15e22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60' className='drop-img' alt='' />
                    <p className='name'>Funmi Temidayo <span className='expand'><MdExpandMore /> </span></p>
                    <p><MdShutterSpeed /></p>
                    <p className='last-item'><MdNotifications /> </p>
                </div>
            }
            </HeaderWrapper>
            <DashHeader className="dash-header">
                <p className="header1">Dashboard</p>
                <p>Playslips</p>
            </DashHeader>
            
        </div>
    )
}

export default TopHeader
