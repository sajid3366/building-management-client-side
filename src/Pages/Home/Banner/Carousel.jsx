import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <div className="embla h-[80vh] rounded-sm" ref={emblaRef}>
            <div className="embla__container ">
                <div className="embla__slide">
                    {/* <img src="https://i.ibb.co/47pCjR9/fc1f79e18cdc1a12320b9b10ec3e253d.jpg" alt="" /> */}
                    <img src="https://i.ibb.co/mGWc5vt/huy-nguyen-AB-q9lw-CVv8-unsplash.jpg" alt="" />
                </div>
                <div className="embla__slide">
                    <img src="https://i.ibb.co/1mq2SN2/med-badr-chemmaoui-xt-Dp-Xi-a-YQ-unsplash.jpg" alt="" />
                </div>
                <div className="embla__slide">
                    <img src="https://i.ibb.co/GJTKNMf/point3d-commercial-imaging-ltd-ae-Tex-YQKsuk-unsplash.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
