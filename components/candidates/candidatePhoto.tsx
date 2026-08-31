"use client";

import { useState } from "react";

interface CandidatePhotoProps {
  src?: string;
  name: string;
  /** Extra classes for the initials fallback (e.g. text size). */
  fallbackClassName?: string;
}

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

const CandidatePhoto: React.FC<CandidatePhotoProps> = ({
  src,
  name,
  fallbackClassName = "text-4xl",
}) => {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-brand-blue text-white">
        <span className={`font-bold ${fallbackClassName}`}>
          {initialsOf(name)}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      onError={() => setErrored(true)}
      className="h-full w-full object-cover"
    />
  );
};

export default CandidatePhoto;
