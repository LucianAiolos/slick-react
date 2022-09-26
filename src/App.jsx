import Slider from 'react-slick'
import './App.css';
import { imageData } from './imageData';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

function App() {





  const images = imageData.map((image, i) => (
    <div className='carousel-cont' key={i}>
      <div className="img-cont">
        <img className='carousel-img' src={image} alt="" />
      </div>
    </div>
  ))

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Slick Slider</h1>
        <Slider 
          className='slider'
          dots={true}
          arrows={true}
          variableWidth
          infinite={true}
        > 
          {images}
        </Slider>
      </header>

      <div className="cont-2">
        <img src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/web_first_images_release.png?itok=g21NrdRw',
  'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
      </div>
      <h1>hi</h1>
      
    </div>
  );
}

export default App;