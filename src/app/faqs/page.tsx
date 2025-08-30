'use client';

import FloralWrapper from '@/components/FloralWrapper';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
  Box,
  Link,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { ReactNode } from 'react';

type FAQItem = {
  question: string;
  answer: string | ReactNode;
  actionHref?: string;
  actionText?: string;
};

const FAQS_ITEMS: FAQItem[] = [
  {
    question: 'Where is the wedding taking place?',
    answer: (
      <Link
        href="https://maps.app.goo.gl/VUN4vnVgXXUyCoW39"
        target="_blank"
        rel="noopener noreferrer"
      >
        Stone Crop Acres, Morrisburg, ON
      </Link>
    ),
  },
  {
    question: 'Do you have a registry?',
    answer: (
      <>
        We are so grateful to celebrate this special day with you, and we truly
        don&apos;t expect any gifts. However, if you&apos;d like to give,
        contributions will go toward our honeymoon and new furniture for our
        home. For anyone who prefers a gift, we&apos;ve also put together a
        small registry with a few meaningful items.
      </>
    ),
    actionHref:
      'https://www.myregistry.com/wedding-registry/kaitlyn-russell-and-zackery-harley-long-sault-on/4809824',
    actionText: 'View Registry',
  },
  {
    question: 'Where should I stay?',
    answer: (
      <>
        We have rooms reserved especially for our guests at the Best Western
        Parkway Inn & Conference Centre in Cornwall, ON.{' '}
        <b>Book with the link below and receive a 10% discount!</b>
        <br />
        <br />
        If the room type you prefer is no longer available within our room
        block, you can call the hotel and they will try and find you a room that
        matches your preference at the preferred rate.
        <br />
        <br />
        There will be a shuttle between the Best Western and the wedding venue.
      </>
    ),
    actionHref:
      'https://www.bestwestern.com/en_US/book/hotel-rooms.66019.html?groupId=L86WB1M9',
    actionText: 'Book Now',
  },
  {
    question: 'How should I get to/from the wedding?',
    answer: (
      <>
        We will have a shuttle service running from the Best Western Parkway Inn
        & Conference Centre to the venue on the day of the wedding before the
        ceremony.
        <br />
        <br />A shuttle will also be ready to bring guests back to the hotel
        later in the evening.
      </>
    ),
  },
  {
    question: 'When should I arrive at the wedding?',
    answer:
      'The wedding will begin at 4:00pm. A shuttle will depart from the Best Western Parkway Inn & Conference Centre at 3:30pm.',
  },
  {
    question: 'What should I wear?',
    answer: (
      <>
        Please come in your favourite formal attire. As there are grassy areas,
        we recommend wedge or block heels.
        <br />
        <br />
        Please save white for the bride.
      </>
    ),
  },
  {
    question: 'Can I bring my children?',
    answer:
      'Our wedding is an adults-only event. We appreciate your understanding and look forward to celebrating with you!',
  },
  {
    question: 'I have more questions...help!',
    answer: (
      <>
        Not to worry! You can text your questions to Zack at{' '}
        <Link href="tel:613-662-2394" target="_blank" rel="noopener noreferrer">
          613-662-2394
        </Link>
        .
      </>
    ),
  },
];

export default function Faqs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <FloralWrapper variant="light" title="FAQs" subtitle="Let's Get Into It">
      <Container maxWidth="md" sx={{ py: isMobile ? 4 : 6 }}>
        <Box sx={{ mb: 4 }}>
          {FAQS_ITEMS.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                boxShadow: 'none',
                border: `1px solid ${theme.palette.divider}`,
                '&:before': {
                  display: 'none',
                },
                borderRadius: '8px !important',
                overflow: 'hidden',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  fontWeight: 'bold',
                  backgroundColor: 'rgba(0, 0, 0, 0.02)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: isMobile ? '1rem' : '1.25rem',
                    fontWeight: 600,
                    letterSpacing: '0.125rem',
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: 'Lato, sans-serif',
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  {faq.answer}
                </Typography>
                {faq.actionHref && faq.actionText && (
                  <Button
                    variant="contained"
                    color="primary"
                    href={faq.actionHref}
                    sx={{ mt: 3 }}
                    target="_blank"
                  >
                    {faq.actionText}
                  </Button>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </FloralWrapper>
  );
}
