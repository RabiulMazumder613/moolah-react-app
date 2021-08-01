import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    ButtonLink
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and recieve $250 in 
                    credit towards your
                    next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <ButtonLink 
                    to='signup' 
                    smooth={true} 
                    duration={500} 
                    exact="true" 
                    offset={-80} 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary = "true"
                    dark = "true"
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </ButtonLink>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
