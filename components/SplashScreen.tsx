"use client";
import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); // Hide splash screen after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeOutQuad',
      duration: 750,
    });

    timeline
      .add({
        targets: '.splash-screen h1',
        opacity: [0, 1],
        translateY: [-50, 0],
      })
      .add({
        targets: '.splash-screen p',
        opacity: [0, 1],
        translateY: [50, 0],
        offset: '-=500', // Starts 500ms before the previous animation ends
      });
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-custom-radial z-50 splash-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Welcome to Point Grey Pictures</h1>
        <p className="text-lg text-white mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default SplashScreen;