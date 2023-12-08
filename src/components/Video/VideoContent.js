import React from "react";
import { useState, useRef } from "react";
import { faComment, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import video from "./Download.mp4";
function VideoContent() {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef();

  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div>
      <div
        className="flex gap-x-4 justify-start w-full mt-2"
        onClick={handleVideo}
      >
        <video
          ref={videoRef}
          className="w-[320px] h-full ml-20 rounded-md"
          src={video}
          loop
          autoPlay
        />
        <div className="flex flex-col gap-y-3 justify-end">
          <div className="flex flex-col gap-y-1 cursor-pointer">
            <div className="bg-[#1618230f] w-[48px] h-[48px] rounded-full flex justify-center items-center">
              <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faHeart} />
            </div>
            <strong className="text-xs text-[#161823bf] flex justify-center">
              503k
            </strong>
          </div>
          <div className="flex flex-col gap-y-1 cursor-pointer">
            <div className="bg-[#1618230f] w-[48px] h-[48px] rounded-full flex justify-center items-center">
              <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faComment} />
            </div>
            <strong className="text-xs text-[#161823bf] flex justify-center">
              20.9K
            </strong>
          </div>

          <div className="flex flex-col gap-y-1 cursor-pointer">
            <div className="bg-[#1618230f] w-[48px] h-[48px] rounded-full flex justify-center items-center">
              <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faShare} />
            </div>
            <strong className="text-xs text-[#161823bf] flex justify-center">
              2001
            </strong>
          </div>
        </div>
      </div>
      <div className="border-[.5px] border-[#16182333] my-5"></div>
    </div>
  );
}

export default VideoContent;
