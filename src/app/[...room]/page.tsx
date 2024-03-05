import { MainControls } from "./main-controls";
import { ParticipantGallery } from "./participants-gallery";

export default function Room() {
  return (
    <main className="w-full h-[100vh] flex flex-col bg-[#f1f1f3]">
      <ParticipantGallery />
      <MainControls />
    </main>
  );
}
