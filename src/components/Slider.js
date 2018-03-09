import React, { Component } from 'react';
import { UncontrolledCarousel , CarouselItem,CarouselCaption,Carousel,Button,CarouselIndicators,CarouselControl} from 'reactstrap';
import { AutoRotatingCarousel, Slide ,} from 'material-auto-rotating-carousel'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


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
    caption: '',

  }
];


class Slider extends Component {
  constructor(props) {
  super(props);
  this.state = { activeIndex: 0 };
  this.next = this.next.bind(this);
  this.previous = this.previous.bind(this);
  this.goToIndex = this.goToIndex.bind(this);
  this.onExiting = this.onExiting.bind(this);
  this.onExited = this.onExited.bind(this);
}

onExiting() {
  this.animating = true;
}

onExited() {
  this.animating = false;
}

next() {
  if (this.animating) return;
  const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
  this.setState({ activeIndex: nextIndex });
}

previous() {
  if (this.animating) return;
  const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
  this.setState({ activeIndex: nextIndex });
}

goToIndex(newIndex) {
  if (this.animating) return;
  this.setState({ activeIndex: newIndex });
}


render() {
  const { activeIndex } = this.state;

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} height="550px" width="1300px" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });



    return (
      <div>
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    <div  style={{
        width: 750,
        position: "absolute",
        top: 200,
        bottom: 0,
     padding: "10px 0",
        marginLeft: "28px"
    }} >

    
    <div style={{background: "rgba(0, 0, 0, 0)", maxWidth: "70%" }}>
       <h1 style={{color:"white", fontSize:50}}> 
       Hire expert freelancers for any job, online</h1>
       <Button color="warning" bsSize="large" style={{float:"left",marginLeft: "80px",width:150}} block>Hire</Button>  
       
       <Button  style={{marginLeft: "240px",width:"150px", position: "absolute", top:"129px",color: "#ffffff",
       backgroundColor: "transparent",
       borderColor: "#ffffff"}} block>Work</Button>
       </div>


  </div>
      </div>
    )
  }
}
export default Slider;


// <Carousel>
// <Carousel.Item>
//   <img width={1300} height={500} alt="800x400" src="https://www.f-cdn.com/assets/css/images/homepage/2x-nasa-3-78af6535.jpg" />
//   <Carousel.Caption>

//   </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//   <img width={1300} height={500} alt="800x400" src="https://www.f-cdn.com/assets/css/images/homepage/2x-app-1-374cf36f.jpg" />
//   <Carousel.Caption>
   
    
//   </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//   <img width={1300} height={500} alt="800x400" src="https://www.f-cdn.com/assets/css/images/homepage/2x-website-4-d8912531.jpg" />
//   <Carousel.Caption>

//   </Carousel.Caption>
// </Carousel.Item>
// </Carousel>

