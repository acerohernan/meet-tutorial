import { MainControls } from "./main-controls";
import { ParticipantGallery } from "./participants-gallery";

export default function Room() {
  return (
    <main className="w-full h-[100vh] flex flex-col bg-[#ebedf3]">
      <ParticipantGallery />
      <MainControls />
    </main>
  );
}
