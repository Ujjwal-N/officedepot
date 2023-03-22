import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import styled from "styled-components";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from "react-router-dom";


const Container = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

const MediaIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Middle = styled.div`
  flex: 1;
  padding: 5px;
  margin-top:10px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 20px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 15px;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Spacer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Footer = () => {
  return (
    <Container>
      <LeftSide>
        <Logo>OfficeDepot</Logo>

        <Desc>
          OfficeDepot is dedicated to selling the best items in the market. We take pride in offering our customers 
          the best products in the market, and we never compromise on the quality of the items we sell. Our vast list of products is 
          carefully curated to ensure that every item meets our high standards of excellence.
        </Desc>
      </LeftSide>
      <Middle>
        <Title>Links</Title>
        <List>
          <ListItem><Link to="/cart">Cart</Link></ListItem>
          <ListItem><Link to="/products">Collections</Link></ListItem>
          <ListItem><Link to="/profile">My Account</Link></ListItem>
           <ListItem><Link to="/about">About</Link></ListItem>
        </List>
      </Middle>
      <RightSide>
        <Title>Contact</Title>

        <Spacer>
        <ContactItem>
          <RoomIcon style={{marginRight:"10px"}}/> 1 Washington Sq, San Jose, CA 95192
        </ContactItem>
  
        <ContactItem>
          <PhoneIphoneIcon style={{marginRight:"10px"}}/> +1(800)-Office-Depot 
        </ContactItem>
   
        <ContactItem>
          <MailOutlineIcon style={{marginRight:"10px"}} /> officedepot@gmail.com
        </ContactItem>
      
        <SocialContainer>
          <MediaIcon color="3B5999">
            <FacebookIcon />
          </MediaIcon>
          <MediaIcon color="55ACEE">
            <TwitterIcon />
          </MediaIcon>
          <MediaIcon color="E4405F">
            <InstagramIcon />
          </MediaIcon>
          <MediaIcon color="FF0000">
            <YouTubeIcon />
          </MediaIcon>
          <MediaIcon color="BD081C">
            < PinterestIcon />
          </MediaIcon>
        </SocialContainer>
        </Spacer>
      </RightSide>
    </Container>
  );
};