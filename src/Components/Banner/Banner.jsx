
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import image1 from "../../assets/Untitled-1.png";
import image2 from "../../assets/banner-2.png";

const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider md:h-[400px] bg-white">
                <div className="keen-slider__slide number-slide1 via-gray-400">
                    <div className="relative font-catamaran">
                        <div className="h-[400px] ">
                            <img className="object-contain left-0 h-full" src={image1} alt="" />
                        </div>
                        <div className="absolute md:top-32 lg:top-32 md:right-0 md:mr-4 lg:mr-0">
                            <h2 className="text-3xl text-cyan-500 font-extrabold  text-right">Stay Connected in Style: </h2>
                            <h2 className="text-3xl font-bold text-center  md:text-right">Find Your Perfect Tech Companion</h2>
                            <p className=" absolute text-right right-0 mt-8 text-[#999999]">Discover the next evolution in mobile technology with our latest smartphone collection. Sleek designs, powerful performance, and innovative features await you. Stay connected, capture memories, and experience seamless multitasking like never before. Upgrade your communication experience today</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide2">
                    <div className="flex flex-col md:relative font-catamaran">
                        <div className="h-[400px]">
                            <img src={image2} alt="" />
                        </div>
                        <div className="absolute md:top-32 lg:top-40 left-0 md:ml-4 lg:ml-0">
                            <h2 className="text-3xl  font-extrabold ">Transform Your Living Space </h2>
                            <h2 className="text-3xl text-cyan-500 font-bold">with Smart Gadgets and Devices! </h2>
                            <p className="md:w-1/2 mt-8 text-[#999999]">Discover a world of innovation at our electronics emporium! With an array of gadgets and accessories, we cater to every tech enthusiast. Find quality products, unbeatable prices, and expert customer service—all in one convenient place.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="keen-slider__slide number-slide3">3</div>
                <div className="keen-slider__slide number-slide4">4</div>
                <div className="keen-slider__slide number-slide5">5</div>
                <div className="keen-slider__slide number-slide6">6</div>  */}
            </div>
        </>
    )
};

export default Banner;