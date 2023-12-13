import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {data} from "./Data";
import WorkPlace from "./WorkPlace";
import "./Experience.css"
import {useState} from "react";

function Experience() {

    const [sliderOffset, SetSliderOffset] = useState(0)
    const slides = data.experience.length;
    const distanceToSlide = parseFloat(getComputedStyle(document.body).getPropertyValue('--slideDistance'));
    const maxOffset = distanceToSlide * (slides - 1);


    function SlideLeft() {
        if(sliderOffset > 0) {
            const newOffset = sliderOffset - distanceToSlide;
            SetSliderOffset(newOffset);
        }
    }

    function SlideRight() {
      if(sliderOffset < maxOffset) {
           const newOffset = sliderOffset + distanceToSlide;
           SetSliderOffset(newOffset);
           console.log(distanceToSlide)
       }
    }


    return (
        <>
            <h1>Work experience</h1>
            <div className="ExperiencePanel">
                <button className="WorkPlaceButton" style={{paddingRight:"calc(0.6vw + 0.6vh)"}} onClick={SlideLeft}> <FaChevronLeft/> </button>
                <div className="WorkPlacesContainer">
                    <div className="WorkPlaces" style={{transform: `translateX(${-sliderOffset}vw)`}}>
                        {data.experience.map((item, index) => {
                            return <WorkPlace workExp={item} key={index}/>
                        })}
                    </div>
                </div>
                <button className="WorkPlaceButton" style={{paddingLeft:"calc(0.4vw + 0.4vh)"}} onClick={SlideRight}> <FaChevronRight/> </button>
            </div>
        </>
    )
}

export default Experience;