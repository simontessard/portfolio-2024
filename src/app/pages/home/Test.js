"use client";
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Test() {
    useEffect(() => {
        let horizontalSection = document.querySelector('.horizontal');

        gsap.to('.horizontal', {
            x: () => horizontalSection.scrollWidth * -1,
            xPercent: 100,
            scrollTrigger: {
                trigger: '.horizontal',
                start: 'center center',
                end: '+=200px',
                pin: '#horizontal-scoll',
                scrub: true,
                invalidateOnRefresh: true
            }
        });
    }, []);
  return (
      <section id="horizontal-scoll">
          <div className="horizontal-scoll-wrapper">
              <div className="horizontal">
                  <div>
                      <div className="card">
                          <h2>Card 1</h2>
                      </div>
                  </div>
                  <div>
                      <div className="card">
                          <h2>Card 2</h2>
                      </div>
                  </div>
                  <div>
                      <div className="card">
                          <h2>Card 3</h2>
                      </div>
                  </div>
                  <div>
                      <div className="card">
                          <h2>Card 6</h2>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}