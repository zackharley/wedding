import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import mooseDayImg from '../img/gallery-moose-day.webp';
import worldCupImg from '../img/gallery-world-cup-2018.webp';
import friendsWedding from '../img/gallery-carter-liz-wedding.webp';
import { Box } from '@mui/material';

type ImageDefinition = {
  src: StaticImageData;
  alt: string;
};

const galleryImages: ImageDefinition[] = [
  {
    src: mooseDayImg,
    alt: 'Kaitlyn, Zackery, and their dog Moose the day they picked him up from the breeder.',
  },
  {
    src: worldCupImg,
    alt: "Kaitlyn and Zackery in Cannes celebrating France's victory over Croatia in the 2018 FIFA World Cup.",
  },
  {
    src: worldCupImg,
    alt: "Kaitlyn and Zackery in Cannes celebrating France's victory over Croatia in the 2018 FIFA World Cup.",
  },
  {
    src: friendsWedding,
    alt: "Kaitlyn and Zackery at their friends' wedding.",
  },
  {
    src: mooseDayImg,
    alt: 'Kaitlyn, Zackery, and their dog Moose the day they picked him up from the breeder.',
  },
  {
    src: worldCupImg,
    alt: "Kaitlyn and Zackery in Cannes celebrating France's victory over Croatia in the 2018 FIFA World Cup.",
  },
  {
    src: worldCupImg,
    alt: "Kaitlyn and Zackery in Cannes celebrating France's victory over Croatia in the 2018 FIFA World Cup.",
  },
  {
    src: friendsWedding,
    alt: "Kaitlyn and Zackery at their friends' wedding.",
  },
  {
    src: mooseDayImg,
    alt: 'Kaitlyn, Zackery, and their dog Moose the day they picked him up from the breeder.',
  },
  {
    src: worldCupImg,
    alt: "Kaitlyn and Zackery in Cannes celebrating France's victory over Croatia in the 2018 FIFA World Cup.",
  },
  {
    src: worldCupImg,
    alt: "Kaitlyn and Zackery in Cannes celebrating France's victory over Croatia in the 2018 FIFA World Cup.",
  },
  {
    src: friendsWedding,
    alt: "Kaitlyn and Zackery at their friends' wedding.",
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
