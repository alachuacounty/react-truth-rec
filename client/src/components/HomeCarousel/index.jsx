import Flickity from 'react-flickity-component'
import HomeCarouselStyles from "./home-carousel-styles";
const flickityOptions = {
    initialIndex: 1
}
 

function HomeCarousel() {
    return (
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
       <img className="carousel-cell" src="./img/carousel-media/grayscale-photo-1.jpg" alt=""/>
       <img className="carousel-cell" src="./img/carousel-media/grayscale-photo-2.jpg" alt=""/>
       <img className="carousel-cell" src="./img/carousel-media/grayscale-photo-3.jpg" alt=""/>
       <video  className="carousel-video" src="./img/carousel-media/test-video.mp4" poster="initial_static_picture.jpg" width="100%">
</video> 
<style jsx>{HomeCarouselStyles}</style>
      </Flickity>
       
    )
   
  }

  export default HomeCarousel;