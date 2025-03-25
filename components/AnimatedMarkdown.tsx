'use client';
import React, { useEffect, useRef } from 'react';
import Markdown from 'markdown-to-jsx';
import anime from 'animejs';

interface AnimatedMarkdownProps {
  content: string;
  title: string;
}

const AnimatedMarkdown: React.FC<AnimatedMarkdownProps> = ({ content, title }) => {
  const markdownRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    if (!markdownRef.current || !titleRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1 && !animated.current) {
        // Animate the title
        anime({
          targets: '#prod-content div',
          opacity: [0, 1],
          translateY: [100, 0],
          duration: 500,
          easing: 'easeOutQuad'
        });

        animated.current = true;
        }
      });
      },
      { threshold: 0.1 }
    );

    observer.observe(markdownRef.current);

    return () => {
      if (markdownRef.current) observer.unobserve(markdownRef.current);
    };
  }, []);

  return (
    <div id="prod-content" className="w-full flex flex-col items-center">
      <h1 ref={titleRef} className="underline self-start transition-all">
        {title}
      </h1>
      <div ref={markdownRef} className="pt-10 transition-all self-start">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
};

export default AnimatedMarkdown;
