import React, { useState } from 'react';

const Featured = () => {
  const sliders = [
    {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/burger_emxbtv.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/ric_a4ewxo.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className='max-w-[1520] h-[500] w-full py-4 px-4 relative'>
      <div
        className='w-full h-full rounded-2xl bg-center duration-500'
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
    </div>
  );
};

export default Featured;
