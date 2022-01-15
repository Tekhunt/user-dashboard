import DataSummary from "../Components/DataSummary"
import TopHeader from "../Components/TopHeader"
import Welcome from "../Components/Welcome"
import InfoBox from "../Components/InfoBox"
import ChartBar from "../Components/Chart"
import * as Ava from "react-icons/fa";
import styled from "styled-components"
import SectionHeader from "../Components/SectionHeader"

export const Content = styled.div`
    box-shadow: 
    inset 4px 4px 1px #e5ebee;
    inset -4px -4px 5px #888888;
    background-color: #e5ebee;
    padding-top: 30px;
`

const Dashboard = styled.div`
    .b-hr{
        width: 95%;
        margin: 0 auto;
        border-color: gray;
        opacity: 0.1;
        margin-top: 20px;
        margin-bottom: 20px;

    }
`

const Footer = styled.div`

  display: flex;
//   justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  padding-bottom: 30px;
  
  @media only screen and (max-width: 901px){
    display: none;
}
@media only screen and (min-width: 901px){
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
`

const Section = styled.p`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 10px
`

const MidContent = styled.div`
// border: 1px solid black;

@media only screen and (min-width: 901px){
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: 0 auto;
    
    .info-sec{
        
        width: 40%;
        // height: 260px;
        margin-left: -30px;

    }

    .data-sec{
        // display: flex;
        width:65%;
        background-color: lightblue;
        // height: 227px;
        // flex-wrap: wrap;
        border-radius: 8px;
        // margin-left:0px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        background: #fff;
        box-shadow: 2px 2px 2px 0px #fff;
    }
    
}
`

const BottomSection = styled.div`
    -moz-box-shadow: 13px 13px 0px 0px #FFFFFF;
    -webkit-box-shadow: 13px 13px 0px 0px #FFFFFF;
    box-shadow: 13px 13px 0px 0px  #FFFFFF;
    width: 85%;
    margin: 0 auto;
    background: #fff;
    box-shadow: 2px 2px 2px 0px #fff;
`

const DashBoard = () => {
    return (
        <Dashboard>
            <TopHeader />
            <Content>
                <Welcome />
                <Section>Dashbaord</Section>
                <MidContent>
                    <div className="info-sec">
                        <InfoBox />
                    </div>
                
                    <div className="data-sec">
                        <DataSummary amount='N263,367.90' text='Total Gross Paid' avatar={Ava.FaAtlassian}/>
                        <DataSummary amount='N263,367.90' text='Total Net Paid' avatar={Ava.FaAtlassian}/>
                        <DataSummary amount='N263,367.90' text='Total Extras Paid' avatar={Ava.FaAtlassian}/>
                        <DataSummary amount='N263,367.90' text='Total Collections Paid' avatar={Ava.FaAtlassian}/>
                        <DataSummary amount='N263,367.90' text='General Payment' avatar={Ava.FaAtlassian}/>
                    </div>
                </MidContent>
                <BottomSection>
                    <SectionHeader />
                    <ChartBar />
                    <hr className="b-hr" />
                    <Footer>
                        <DataSummary amount='N263,367.90' text='Total Gross Paid' avatar={Ava.FaAtlassian}/>
                        <DataSummary amount='N263,367.90' text='Total Net Paid' avatar={Ava.FaAtlassian}/>
                        <DataSummary amount='N263,367.90' text='Total Extras Paid' avatar={Ava.FaAtlassian}/>
                        <DataSummary amount='N263,367.90' text='Total Collections Paid' avatar={Ava.FaAtlassian}/>
                        <DataSummary amount='N263,367.90' text='General Payment' avatar={Ava.FaAtlassian}/>
                    </Footer>
                </BottomSection>
            </Content>
        </Dashboard>
    )
}

export default DashBoard
