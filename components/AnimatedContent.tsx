'use client';
import React, { useRef, useEffect } from 'react';
import Markdown from "markdown-to-jsx";
import anime from 'animejs';

interface AnimatedContentProps {
  content: string;
  title: string;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({ content, title }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: contentRef.current,
              width: ['70%', '100%'],
              scale: [0.9, 1],
              opacity: [0.8, 1],
              easing: 'easeOutExpo',
              duration: 800,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={contentRef}
      className="w-[70%] mx-auto transform origin-top opacity-80 transition-all duration-300"
    >
      <h1 className="underline">{title}</h1>
      <Markdown className="pt-10">{content}</Markdown>
    </div>
  );
};

export default AnimatedContent;
