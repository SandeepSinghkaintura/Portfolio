import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
// import GreenCtgImg from '../images/greenctg.jpg';
// import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/hero2.jpeg';

const projects = [
  // {
  //   id: uuidv4(),
  //   name: 'U Tracker',
  //   desc:
  //     'An application to track your all data from one place. I developed the website and the mobile app',
  //   img: UTrackerImg,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Green CTG',
  //   desc:
  //     'An app to help people to get an overview of how they can make the city beautiful.',
  //   img: GreenCtgImg,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Coin Tracker',
  //   desc:
  //     'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
  //   img: CoinTrackerImg,
  // },
  {
    id: uuidv4(),
    name: "Sandeep's Portfolio",
    desc:
      'A portfolio for Sandeep. A Developer from India. The portfolio is made using ReactJs .',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: "E-commerce Website",
    desc:
      'A website made to help buissness. This website is made using ReactJs  .',
    img:  UTrackerImg,
  },
  
  // {
  //   id: uuidv4(),
  //   name: 'Tracking Soft',
  //   desc:
  //     'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
  //   img: ProjectImg,
  // },

];

export default projects;

