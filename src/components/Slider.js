import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://www.f-cdn.com/assets/css/images/homepage/2x-nasa-3-78af6535.jpg',
    altText: '',
    caption: '',
  },
  {
    src: 'https://www.f-cdn.com/assets/css/images/homepage/2x-app-1-374cf36f.jpg',
    altText: '',
    caption: ''
  },
  {
    src: 'https://www.f-cdn.com/assets/css/images/homepage/2x-website-4-d8912531.jpg',
    altText: '',
    caption: ''
  }
];

const Slider = () => <UncontrolledCarousel items={items}  style={{  width:"100%"}}/>;

export default Slider;