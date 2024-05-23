"use client"

import { useEffect } from "react"
import { gsap } from "gsap"

export const animatePageIn = () => {
    const bannerOne = document.getElementById("banner-1")
    const bannerTwo = document.getElementById("banner-2")
    const bannerThree = document.getElementById("banner-3")
    const bannerFour = document.getElementById("banner-4")

    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        const tl = gsap.timeline()

        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 0,
        }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 100,
            stagger: 0.2,
        })
    }
}

export default function Template({ color = 'black' , children }) {
    useEffect(() => {
        animatePageIn()
    }, [])
    return (
        <div>
            <div id="banner-1" className={`min-h-screen ${color === 'black' ? 'bg-black' : 'bg-white'} z-10 fixed top-0 left-0 w-1/4`}/>
            <div id="banner-2" className={`min-h-screen ${color === 'black' ? 'bg-black' : 'bg-white'} z-10 fixed top-0 left-1/4 w-1/4`}/>
            <div id="banner-3" className={`min-h-screen ${color === 'black' ? 'bg-black' : 'bg-white'} z-10 fixed top-0 left-2/4 w-1/4`}/>
            <div id="banner-4" className={`min-h-screen ${color === 'black' ? 'bg-black' : 'bg-white'} z-10 fixed top-0 left-3/4 w-1/4`}/>
            {children}
        </div>
    )
}