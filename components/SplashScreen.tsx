"use client";
import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import { usePathname } from 'next/navigation';
import SplashImage from './SplashImage';

type SplashScreenProps = {
  children: React.ReactNode;
};

const SplashScreen: React.FC<SplashScreenProps> =  ({ children }) => {

  const [visible, setVisible] = useState(true);
  const path = usePathname().split("/");
  const pathname = path[path.length - 1];
  let prevPathname = pathname;


  useEffect(() => {
    if ("" === prevPathname) return;

    setVisible(true);
    prevPathname = pathname;

  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 1700);
    console.log("visible", visible);

    if (visible) {
      const timeline = anime.timeline({
        easing: 'easeOutQuad',
        duration: 750,
      });
      timeline
        .add({
          targets: '.splash-img',
          opacity: [0, 1],
        })
        .add({
          targets: '.splash-img',
          scale: [1, 1.1],
        })
        .add({
          targets: 'div.splish',
          opacity: [1, 0],
        });
    } else {
      anime({
        targets: 'div.splish',
        opacity: [0, 1],
        duration: 1000,
      });
    }
    // return () => clearTimeout(timer);
  }, [visible]);


  return (
    <div key={pathname} className="flex flex-col flex-grow h-full">
      {visible ? (
        <div className="fixed inset-0 flex items-center justify-center bg-custom-radial z-50 splish">
         <div className="splash-img">
            <SplashImage slug={pathname}/>
         </div>
       </div>
      ):
      children}
    </div>
  );
};

export default SplashScreen;