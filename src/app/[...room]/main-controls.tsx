"use client";

import {
  VideoIcon,
  MicIcon,
  MicOffIcon,
  VideoOffIcon,
  XIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export const MainControls = () => {
  const [micOn, setMicOn] = useState(false);
  const [cameraOn, setCameraOn] = useState(false);

  function toggleMic() {
    setMicOn((prev) => !prev);
  }

  function toggleCamera() {
    setCameraOn((prev) => !prev);
  }

  return (
    <div className="flex items-center justify-center gap-4 p-4">
      {micOn ? (
        <Button size="icon" onClick={toggleMic}>
          <MicIcon className="h-6 w-6" />
        </Button>
      ) : (
        <Button size="icon" variant="destructive" onClick={toggleMic}>
          <MicOffIcon className="h-6 w-6" />
        </Button>
      )}
      {cameraOn ? (
        <Button size="icon" onClick={toggleCamera}>
          <VideoIcon className="h-6 w-6" />
        </Button>
      ) : (
        <Button variant="destructive" size="icon" onClick={toggleCamera}>
          <VideoOffIcon className="h-6 w-6" />
        </Button>
      )}
      <Button variant="destructive" size="icon">
        <XIcon className="h-6 w-6" />
      </Button>
    </div>
  );
};
