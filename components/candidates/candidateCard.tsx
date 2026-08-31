"use client";

import type { Candidate } from "@/data/candidates";
import CandidatePhoto from "./candidatePhoto";

// Fixed pool of "random-ish" tilt angles for the name box. Picked by candidate
// number so the layout is stable between server and client renders.
const TILTS = [-4, 3, -2.5, 2, -3.5, 4, -1.5, 2.5, -3, 1.5, -2, 3.5];

const tiltFor = (n: number) => TILTS[n % TILTS.length];

interface CandidateCardProps {
  candidate: Candidate;
  onSelect: (candidate: Candidate) => void;
  ref?: React.Ref<HTMLButtonElement>;
}

const CandidateCard = ({ candidate, onSelect, ref }: CandidateCardProps) => {
  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onSelect(candidate)}
      aria-label={`${candidate.name} – ${candidate.claim}`}
      className="group relative block w-full pb-8 text-left transition-transform duration-300 ease-out will-change-transform focus:outline-none hover:cursor-pointer motion-reduce:transition-none"
    >
      {/* Photo box – raises on hover / keyboard focus */}
      <div className="relative aspect-3/4 overflow-hidden rounded-3xl bg-brand-blue/10 shadow-md transition duration-300 ease-out group-hover:-translate-y-3 group-hover:shadow-lg group-focus-visible:-translate-y-3 group-focus-visible:ring-4 group-focus-visible:ring-brand-blue/40 border border-gray-200">
        <CandidatePhoto
          src={candidate.photo}
          name={candidate.name}
          fallbackClassName="text-5xl"
        />
      </div>

      {/* Ballot number */}
      <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-brand-blue shadow-md group-hover:-translate-y-1 transition-transform duration-300">
        {candidate.number}
      </span>

      {/* Name box – overlaps the photo, tilted, straightens on hover */}
      <div
        className="absolute inset-x-3 bottom-2 origin-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-0"
        style={{ rotate: `${tiltFor(candidate.number)}deg` }}
      >
        <div className="rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
          <p className="font-extrabold leading-tight text-brand-blue">
            {candidate.name}
          </p>
          {candidate.age !== undefined && (
            <span className="text-sm font-medium text-dark/40">
              {candidate.age} let
            </span>
          )}
          <p className="mt-1 text-sm leading-snug text-dark/70">
            {candidate.claim}
          </p>
        </div>
      </div>
    </button>
  );
};

export default CandidateCard;
