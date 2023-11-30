import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <div className="embla  rounded-sm" ref={emblaRef}>
            <div className="embla__container ">
                <div className="embla__slide">
                    <img className='w-full h-[50vh] md:h-[80vh]' src="https://i.ibb.co/mGWc5vt/huy-nguyen-AB-q9lw-CVv8-unsplash.jpg" alt="" />
                </div>
                <div className="embla__slide">
                    <img className='w-full h-[50vh] md:h-[80vh]' src="https://i.ibb.co/1mq2SN2/med-badr-chemmaoui-xt-Dp-Xi-a-YQ-unsplash.jpg" alt="" />
                </div>
                <div className="embla__slide">
                    <img className='w-full h-[50vh] md:h-[80vh]' src="https://i.ibb.co/GJTKNMf/point3d-commercial-imaging-ltd-ae-Tex-YQKsuk-unsplash.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
