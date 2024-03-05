"use-client";

import { Card, CardContent } from "@/components/ui/card";

import { IParticipant } from "./types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MicIcon } from "lucide-react";

interface IProps {
  participant: IParticipant;
}

export const ParticipantCard: React.FC<IProps> = ({ participant }) => {
  return (
    <div className="p-1">
      <Card>
        <CardContent className="flex flex-col aspect-square p-4">
          <div className="flex justify-end">
            <div className="border border-red p-2 rounded-full">
              <MicIcon />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Avatar className="w-40 h-40">
              <AvatarFallback className="text-5xl">
                {participant.name.slice(0, 1)}
              </AvatarFallback>
            </Avatar>
          </div>
          <span className="line-clamp-1">{participant.name}</span>
        </CardContent>
      </Card>
    </div>
  );
};
