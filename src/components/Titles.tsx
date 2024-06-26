'use client';
import React from 'react';
import { Card, Carousel } from './ui';
import Autoplay from 'embla-carousel-autoplay';
const Titles = () => {
  return (
    <Carousel.Carousel
      className="w-full"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 0,
          speed: 1000,
        }),
      ]}
    >
      <Carousel.CarouselContent>
        <Carousel.CarouselItem>
          <Card.Card className=" rounded-none border-none">
            <Card.CardContent className="flex h-96 items-center justify-center rounded-none border-none p-6">
              <span className="text-center font-abriFarface text-9xl ">
                Photographer
              </span>
            </Card.CardContent>
          </Card.Card>
        </Carousel.CarouselItem>
        <Carousel.CarouselItem>
          <Card.Card className=" rounded-none border-none">
            <Card.CardContent className="flex h-96 items-center justify-center rounded-none border-none p-6">
              <span className="text-center font-abriFarface text-9xl ">
                Photographer
              </span>
            </Card.CardContent>
          </Card.Card>
        </Carousel.CarouselItem>
      </Carousel.CarouselContent>
      <Carousel.CarouselPrevious />
      <Carousel.CarouselNext />
    </Carousel.Carousel>
  );
};

export default Titles;
