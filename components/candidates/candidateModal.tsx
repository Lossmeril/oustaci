"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { BsXLg } from "react-icons/bs";

import type { Candidate } from "@/data/candidates";
import CandidatePhoto from "./candidatePhoto";

interface CandidateModalProps {
  candidate: Candidate | null;
  onClose: () => void;
}

const CandidateModal: React.FC<CandidateModalProps> = ({
  candidate,
  onClose,
}) => {
  return (
    <Dialog
      open={candidate !== null}
      onClose={onClose}
      className="relative z-60"
    >
      <div
        className="fixed inset-0 bg-dark/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center overflow-y-auto p-4 sm:p-8">
        <DialogPanel className="relative my-auto w-full max-w-4xl bg-transparent">
          <button
            type="button"
            onClick={onClose}
            className="absolute -top-2 right-0 z-20 rounded-full bg-white p-2.5 text-dark shadow-lg transition hover:bg-white/90 sm:-right-2"
          >
            <span className="sr-only">Zavřít</span>
            <BsXLg className="size-5" />
          </button>

          {candidate && (
            <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-0">
              {/* Photo card */}
              <div className="relative w-56 shrink-0 sm:w-72">
                <div className="relative aspect-3/4 overflow-hidden rounded-3xl bg-brand-blue/10 shadow-2xl">
                  <CandidatePhoto
                    src={candidate.photo}
                    name={candidate.name}
                    fallbackClassName="text-6xl"
                  />
                </div>
                <span className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-bold text-brand-blue shadow-md">
                  {candidate.number}
                </span>
              </div>

              {/* Skewed text card, overlapping the photo */}
              <div className="z-10 -mt-8 w-[92%] -rotate-2 sm:-ml-12 sm:mt-10 sm:w-auto sm:flex-1">
                <div className="max-h-[70vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-black/5 sm:p-8">
                  <DialogTitle className="text-2xl font-bold text-brand-blue sm:text-3xl">
                    {candidate.name}
                  </DialogTitle>
                  {candidate.age !== undefined && (
                    <p className="mt-1 text-sm font-medium text-dark/50">
                      {candidate.age} let
                    </p>
                  )}
                  <p className="mt-3 text-lg font-semibold text-dark/80">
                    {candidate.claim}
                  </p>
                  <div className="mt-5 space-y-3 leading-relaxed text-dark/80">
                    {candidate.cv.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CandidateModal;
