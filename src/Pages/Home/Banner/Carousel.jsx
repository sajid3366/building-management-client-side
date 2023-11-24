import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <div className="embla h-[80vh] rounded-sm" ref={emblaRef}>
            <div className="embla__container ">
                <div className="embla__slide">
                    <img src="https://i.ibb.co/47pCjR9/fc1f79e18cdc1a12320b9b10ec3e253d.jpg" alt="" />
                </div>
                <div className="embla__slide">
                    <img src="https://i.ibb.co/18wyZ68/katie-musial-Jg-E6-SP0-U7e4-unsplash.jpg" alt="" />
                </div>
                <div className="embla__slide">
                    <img src="https://i.ibb.co/jkSZv76/goh-rhy-yan-f-SDCASisgs-unsplash.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
