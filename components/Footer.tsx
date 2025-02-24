import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-orange-200 py-10 w-full flex flex-col justify-between items-center">
      <div className='w-full flex flex-col justify-start pl-10 pb-2'>
        <a
          className='visited:text-orange-100'
          href="https://houseplant.com">houseplant.com
        </a>
        <a
          className='visited:text-orange-100'
          href="https://reelstart.org">reelstart.org
        </a>
      </div>
      <p className='pt-2 text-center'>
       Made by Elias Belzberg for Point Grey Pictures
      </p>
      <p className='text-center pb-2'>
       2025
      </p>
      <div className="w-full flex justify-center items-center space-x-6">
        <a href="https://www.instagram.com/pointgrey/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-100 w-8 h-8 flex justify-center items-center visited:text-orange-100">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://x.com/pointgrey" target="_blank" rel="noopener noreferrer" className="hover:text-orange-100 w-8 h-8 flex justify-center items-center visited:text-orange-100">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;