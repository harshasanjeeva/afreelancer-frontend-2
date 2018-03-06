import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://belitsoft.com/sites/default/files/assets/what-is-web-application.png',
    altText: '',
    caption: ''
  },
  {
    src: 'http://www.nacnacenterprise.com/wp-content/uploads/2017/07/web-application-development.png',
    altText: '',
    caption: ''
  },
  {
    src: 'http://www.xfacttech.com/wp-content/uploads/2016/09/web-applications-development.jpg',
    altText: '',
    caption: ''
  }
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;