import chair from '../Images/chair.jpg';
import screw from '../Images/screw.jpg';
import hammer from '../Images/hammer.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GradeIcon from '@mui/icons-material/Grade';
import { Link } from "react-router-dom";

export const sliderItems = [
    {
      id: 1,
      img: chair,
      title: "#1 CHAIR IN THE MARKET",
      desc: "GET 10% OFF FIRST TIME PURCHASE",
      bg: "fFFFF",
      shop:<Link to="/itemPage" style={{ color: 'white',textDecoration: 'none' }}>SHOP NOW</Link>
    },
    {
      id: 2,
      img: screw,
      title: "BUY THIS SCREWDRIVER",
      desc: "TO SCREW YOUR HEAD STRAIGHT",
      bg: "fffff",
      shop: <Link to="/itemPage" style={{ color: 'white',textDecoration: 'none' }}>SHOP NOW</Link>
    },
    {
      id: 3,
      img: hammer,
      title: "HAMMER TIME",
      desc: "GUARANTEE TO LAST A LIFETIME",
      bg: "fffff",
      shop: <Link to="/itemPage" style={{ color: 'white',textDecoration: 'none' }}>SHOP NOW</Link>
    },
  ];


  export const productItems = [
    {
      id: 1,
      img: chair,
      title: "#1 CHAIR IN THE MARKET",
      desc: "GET 10% OFF FIRST TIME PURCHASE",
      bg: "fFFFF",
      icon: <Link to="/itemPage" style={{ color: 'red'}}><VisibilityIcon /></Link>,
      icon2: <ShoppingCartIcon />
    },
    {
      id: 2,
      img: screw,
      title: "BUY THIS SCREWDRIVER",
      desc: "TO SCREW YOUR HEAD STRAIGHT",
      bg: "fffff",
      icon: <Link to="/itemPage" style={{ color: 'blue'}}><VisibilityIcon /></Link>,
      icon2: <ShoppingCartIcon />
    },
    {
      id: 3,
      img: hammer,
      title: "HAMMER TIME",
      desc: "GUARANTEE TO LAST A LIFETIME",
      bg: "fffff",
      icon: <Link to="/itemPage" style={{ color: 'green'}}><VisibilityIcon /></Link>,
      icon2: <ShoppingCartIcon />
    },
    
     {
      id: 4,
      img: hammer,
      title: "HAMMER TIME",
      desc: "GUARANTEE TO LAST A LIFETIME",
      bg: "fffff",
      icon: <Link to="/itemPage" style={{ color: 'lightblue'}}><VisibilityIcon /></Link>,
      icon2: <ShoppingCartIcon />
    },

     {
      id: 5,
      img: hammer,
      title: "HAMMER TIME",
      desc: "GUARANTEE TO LAST A LIFETIME",
      bg: "fffff",
      icon: <Link to="/itemPage" style={{ color: 'pink'}}><VisibilityIcon /></Link>,
      icon2: <ShoppingCartIcon />
    },

    
  ];


 export const chairItems = [
    {
      id: 1,
      img: chair,
      title: "Chair 1",
      desc: "GET 10% OFF FIRST TIME PURCHASE",
      cost:"5,000",
      bg: "fFFFF",
      icon:  <Link to="/itemPage" style={{ color: 'pink'}}><VisibilityIcon /></Link>,
      icon2: <ShoppingCartIcon />,
      icon3: <GradeIcon/>
    },
    {
      id: 2,
      img: chair,
      title: "Chair 2",
      cost:"10,000",
      bg: "fFFFF",
      icon: <Link to="/itemPage" style={{ color: 'lightblue'}}><VisibilityIcon /></Link>,
      icon2: <ShoppingCartIcon />,
      icon3: <GradeIcon/>
    },
    {
      id: 3,
      img: chair,
      title: "Chair 3",
      desc: "GET 10% OFF FIRST TIME PURCHASE",
      cost:"2,000",
      bg: "fFFFF",
      icon: <Link to="/itemPage" style={{ color: 'lightgreen'}}><VisibilityIcon /></Link>,
      icon2: <ShoppingCartIcon />,
      icon3: <GradeIcon/>
    },
    
     {
      id: 4,
      img: chair,
      title: "Chair 4",
      desc: "GET 10% OFF FIRST TIME PURCHASE",
      cost:"1,000",
      bg: "fFFFF",
      icon: <Link to="/itemPage"><VisibilityIcon /></Link>,
      icon2: <ShoppingCartIcon />,
      icon3: <GradeIcon/>
    },

  ];

