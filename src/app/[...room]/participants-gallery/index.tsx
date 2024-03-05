"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";

import { ParticipantCard } from "./card";
import { IParticipant } from "./types";

const participants: IParticipant[] = [
  {
    id: "32421",
    name: "Test Participant",
  },
  {
    id: "1324234",
    name: "Hernan Participant",
  },
];

export const ParticipantGallery = () => {
  return (
    <div className="flex-1 w-full flex items-center justify-center">
      <Carousel
        className={cn(
          "w-full",
          participants.length === 1 && "max-w-[60%] md:max-w-lg",
          participants.length > 1 && "max-w-[60%] md:max-w-[80%]"
        )}
      >
        <CarouselContent>
          {participants.map((p) => (
            <CarouselItem
              key={p.id}
              className={cn(
                participants.length === 2 && "md:basis-1/2 lg:basis-1/2",
                participants.length > 2 && "md:basis-1/2 lg:basis-1/3"
              )}
            >
              <ParticipantCard participant={p} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
