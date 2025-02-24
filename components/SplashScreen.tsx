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
        easing: 'linear',
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
          targets: 'article.ziggle',
          opacity: [1, 0.1],

        })
        .add({
          targets: 'article.ziggle',
          opacity: [0.1, 0],
        });
    }
  }, [visible]);


  return (
    <div key={pathname} className="flex flex-col flex-grow h-full">
      <article className={`px-10 fixed inset-0 flex items-center justify-center bg-custom-radial z-50 ziggle ${visible ? '' : 'hidden'}`}>
         <div className="splash-img">
            <SplashImage slug={pathname}/>
         </div>
      </article>
      {!visible && children}
    </div>
  );
};

export default SplashScreen;