import Image from "next/image";
import { useAudio } from "react-use";

type QuestionBubbleProps = {
  audioSrc: string | null;
};

export const QuestionBubble = ({ audioSrc }: QuestionBubbleProps) => {
  const [audio, , controls] = useAudio({ src: audioSrc || "" });

  const handleClick = () => {
    void controls.play();
  }

  return (
    <div className="mb-6 flex items-center gap-x-4">
      <div className="flex h-[65px] w-[65px] cursor-pointer items-center justify-center rounded-[25px] bg-[#48BFF8] hover:bg-[#63cafa]" onClick={handleClick}>
        {audio}
        <Image
          src="/speaker.svg"
          alt="Mascot"
          height={40}
          width={40}
          className=""
        />
      </div>

      <div className="relative rounded-xl border-2 px-4 py-2 text-sm lg:text-base">
        Press to play the sound
        <div
          className="absolute -left-3 top-1/2 h-0 w-0 -translate-y-1/2 rotate-90 transform border-x-8 border-t-8 border-x-transparent"
          aria-hidden
        />
      </div>
    </div>
  );
};
