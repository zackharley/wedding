import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import applePickingImg from './img/gallery-apple-picking.jpeg';
import backpackingImg from './img/gallery-backpacking.jpeg';
import burlingtonImg from './img/gallery-burlington.jpeg';
import friendsWedding from './img/gallery-carter-liz-wedding.webp';
import engagedImg from './img/gallery-engaged.jpeg';
import firstDateImg from './img/gallery-first-date.jpeg';
import homecomingConcertImg from './img/gallery-homecoming-show.jpeg';
import mooseDayImg from './img/gallery-moose-day.webp';
import parkwayImg from './img/gallery-parkway.jpeg';
import purpleJacketsImg from './img/gallery-purple-jackets.jpeg';
import rrWeddingImg from './img/gallery-rr-wedding.jpeg';
import sensLeafsImg from './img/gallery-sens-leafs.jpeg';
import skipperImg from './img/gallery-skipper.jpeg';
import worldCupImg from './img/gallery-world-cup-2018.webp';

import { Box } from '@mui/material';

type ImageDefinition = {
  src: StaticImageData;
  alt: string;
};

const galleryImages: ImageDefinition[] = [
  {
    src: backpackingImg,
    alt: 'Backpacking in Europe.',
  },
  {
    src: homecomingConcertImg,
    alt: "At The Dirty Nelsons' Homecoming concert in 2017.",
  },
  {
    src: worldCupImg,
    alt: 'Celebrating the 2018 World Cup.',
  },
  {
    src: friendsWedding,
    alt: "At a friend's wedding.",
  },
  {
    src: firstDateImg,
    alt: 'On our first date.',
  },
  {
    src: engagedImg,
    alt: 'The day we got engaged.',
  },
  {
    src: mooseDayImg,
    alt: 'The day we took Moose home.',
  },
  {
    src: purpleJacketsImg,
    alt: 'Us in our purple jackets at Homecoming.',
  },
  {
    src: rrWeddingImg,
    alt: 'Dancing at a wedding.',
  },
  {
    src: parkwayImg,
    alt: 'Hanging out on the parkway near where we live.',
  },
  {
    src: applePickingImg,
    alt: 'Apple picking.',
  },
  {
    src: burlingtonImg,
    alt: 'In Burlington, Vermont.',
  },
  {
    src: sensLeafsImg,
    alt: 'At a Sens vs Leafs game.',
  },
  {
    src: skipperImg,
    alt: 'Dressed up.',
  },
];

const numberOfColumns = 2;

const imagesByColumn = galleryImages.reduce((acc, img, index) => {
  acc[index % numberOfColumns] = [...(acc[index % numberOfColumns] || []), img];
  return acc;
}, [] as ImageDefinition[][]);

const gapSize = 1;

export default function PhotoGallery() {
  return (
    <Box
      display="flex"
      alignItems="center"
      overflow="hidden"
      maxHeight="100dvh"
    >
      <Box
        display="grid"
        gridTemplateColumns={`repeat(${numberOfColumns}, 1fr)`}
        gap={gapSize}
        justifyContent="center"
      >
        {imagesByColumn.map((images, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            rowGap={gapSize}
            mt={index === 0 ? 10 : 0}
          >
            {images.map((img) => (
              <Image
                key={img.alt}
                src={img.src}
                alt={img.alt}
                style={{ height: 'auto', width: '100%' }}
                placeholder="blur"
              />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
