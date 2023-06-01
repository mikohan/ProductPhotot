import Edit from 'icons/solid-mono/Edit';
import Lamp from 'icons/solid-mono/Lamp';
import Team from 'icons/lineal/Team';
import Check from 'icons/lineal/Check';
import Medal from 'icons/lineal/Medal';
import Earth from 'icons/lineal/Earth';
import Shield from 'icons/lineal/Shield';
import Target from 'icons/lineal/Target';
import Search from 'icons/lineal/Search';
import ChatTwo from 'icons/lineal/ChatTwo';
import Script from 'icons/solid-duo/Script';
import Verify from 'icons/solid-mono/Verify';
import Server from 'icons/solid-duo/Server';
import Setting from 'icons/solid-duo/Setting';
import TeamTwo from 'icons/solid-mono/TeamTwo';
import ShopTwo from 'icons/lineal/ShopTwo';
import Browser from 'icons/lineal/Browser';
import Director from 'icons/solid-duo/Director';
import Settings from 'icons/lineal/Settings';
import Telephone from 'icons/lineal/Telephone';
import SearchTwo from 'icons/lineal/SearchTwo';
import Analytics from 'icons/lineal/Analytics';
import Megaphone from 'icons/lineal/Megaphone';
import ClockThree from 'icons/lineal/ClockThree';
import DeliveryBox from 'icons/solid-mono/DeliveryBox';
import CloudNetwork from 'icons/solid-duo/CloudNetwork';
import SmartphoneTwo from 'icons/lineal/SmartphoneTwo';
import SettingsThree from 'icons/lineal/SettingsThree';
import CloudComputing from 'icons/lineal/CloudComputing';
import { LinkType } from 'types/demo-1';
import color from 'utils/color';
import { url } from 'utils/urls';

const herroPhoto = {
  h1: 'Product Photography Studio',
  h2: 'Double Your Sales with Professional Images!',
  subheader: 'We help you to reveal the beauty of your product and increase sales. Stand out of your competitors!',
  button: 'Get Free Quote',
  serficeTop:
    'Our photos will answer your customer’s questions, build trust in your brand, and evoke <span className="underline-3 style-1 green">desire</span>!'
};

// used in the services-1 block
const serviceList1 = [
  {
    id: 1,
    link: url.serviceProduct(),
    icon: Lamp,
    title: 'Product Photography',
    linkText: 'Learn More',
    linkType: LinkType.green,
    description: `We create an image pack that will answer your customer’s questions,
    build trust in your brand, and evoke desire.`
  },
  {
    id: 2,
    link: url.serviceFood(),
    icon: Browser,
    title: 'Food Photography',
    linkText: 'Learn More',
    linkType: LinkType.yellow,
    description: `We are focusing on capturing beautiful, mouth-watering images of food 
    and inspiring people to try new foods.`
  },
  {
    id: 3,
    link: url.serviceRealEstate(),
    icon: ChatTwo,
    linkType: LinkType.orange,
    title: 'Real Estate Photography',
    linkText: 'Learn More',
    description: `Need help selling or renting out your property?
    Our photographer in Los Angeles will help you sell it faster.                
`
  },
  {
    id: 4,
    link: url.serviceVideo(),
    icon: Megaphone,
    linkType: LinkType.blue,
    title: 'Video Production',
    linkText: 'Learn More',
    description: `We help to shock your customers with jaw-dropping videos.
    Bring your sales to the next level - let us make video for you.`
  }
];

// used in the portfolio-5 block
const portfolioList4 = [
  { id: 1, image: 'pf1', title: 'Fringilla Nullam', category: 'estate' },
  { id: 2, image: 'pf2', title: 'Ridiculus Parturient', category: 'estate' },
  { id: 3, image: 'pf3', title: 'Ornare Ipsum', category: 'food product' },
  { id: 4, image: 'pf4', title: 'Nullam Mollis', category: 'estate' },
  { id: 5, image: 'pf5', title: 'Euismod Risus', category: 'estate' },
  { id: 6, image: 'pf6', title: 'Ridiculus Tristique', category: 'food' },
  { id: 7, image: 'pf7', title: 'Sollicitudin Pharetra', category: 'food product' },
  { id: 8, image: 'pf8', title: 'Tristique Venenatis', category: 'product' },
  { id: 9, image: 'pf9', title: 'Cursus Fusce', category: 'estate' },
  { id: 10, image: 'pf10', title: 'Consectetur Malesuada', category: 'food' },
  { id: 11, image: 'pf11', title: 'Ultricies Aenean', category: 'product' },
  { id: 12, image: 'pf12', title: 'Pellentesque Commodo', category: 'video product' },
  { id: 13, image: 'pf13', title: 'Ultricies Aenean', category: 'video product' }
];

const pricingList3 = [
  {
    monthlyPrice: 9,
    yearlyPrice: 99,
    planName: 'Basic',
    features: ['1 Project', '100K API Access', '100MB Storage', 'Weekly Reports', '7/24 Support']
  },
  {
    monthlyPrice: 19,
    yearlyPrice: 199,
    planName: 'Premium',
    features: ['5 Projects', '100K API Access', '200MB Storage', 'Weekly Reports', '7/24 Support']
  },
  {
    monthlyPrice: 49,
    yearlyPrice: 499,
    planName: 'Corporate',
    features: ['20 Projects', '300K API Access', '500MB Storage', 'Weekly Reports', '7/24 Support']
  }
];

const pricingList1 = [
  {
    monthlyPrice: 19,
    yearlyPrice: 199,
    planName: 'Photo for Amazon',
    features: ['Proffesional', 'High Resolution', 'True Colors', 'Eye catching', 'Volume Discount']
  },
  {
    monthlyPrice: 49,
    yearlyPrice: 499,
    planName: 'Food photography',
    features: ['Proffesional', 'High Resolution', 'True Colors', 'Eye catching', 'Clean', 'Volume Discount']
  }
];

const processList2 = [
  {
    no: '01',
    title: 'Shipping',
    subtitle: 'Ship or drop-off your product to our studio. We also provide pick-up service in Los Angeles area.'
  },
  {
    no: '02',
    title: 'Photograpy your Products',
    subtitle:
      'Your products will be photographed on our professional sets. Your turn around time (3 business days) is guaranteed.'
  },
  {
    no: '03',
    title: 'Checking Photo Quality',
    subtitle: 'We send to you the results of our work. You can check the quality of our work and make corrections.'
  },
  {
    no: '04',
    title: 'Finalize',
    subtitle:
      'After finishing the project, we will send your products back to you. And we will looking forward for your testimonial.'
  }
];
export { herroPhoto, serviceList1, portfolioList4, pricingList1, processList2 };
