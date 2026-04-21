import Image from "next/image";

import { TEAM_ASSETS, type TeamPhotoCrop } from "./team-data";

const MASK_SIZE = "97.824px 97.823px";

type TeamAvatarProps = {
  photoSrc: string;
  crop: TeamPhotoCrop;
  photoAlt: string;
};

export function TeamAvatar({ photoSrc, crop, photoAlt }: TeamAvatarProps) {
  const maskUrl = `url(${TEAM_ASSETS.mask})`;

  return (
    <div className="relative size-[98px] shrink-0 overflow-visible">
      <Image
        src={TEAM_ASSETS.frame}
        alt=""
        width={98}
        height={98}
        className="pointer-events-none absolute z-0 select-none"
        style={{ left: crop.frameLeft, top: crop.frameTop }}
      />
      <div
        className="absolute z-[1] overflow-hidden"
        style={{
          width: crop.photoWidth,
          height: crop.photoHeight,
          left: crop.photoLeft,
          top: crop.photoTop,
          WebkitMaskImage: maskUrl,
          maskImage: maskUrl,
          WebkitMaskSize: MASK_SIZE,
          maskSize: MASK_SIZE,
          WebkitMaskPosition: crop.maskPosition,
          maskPosition: crop.maskPosition,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        <Image
          src={photoSrc}
          alt={photoAlt}
          width={crop.photoWidth}
          height={crop.photoHeight}
          className="size-full object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-brand-lime mix-blend-multiply"
          aria-hidden
        />
      </div>
    </div>
  );
}
