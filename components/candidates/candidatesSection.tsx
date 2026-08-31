"use client";

import { useState } from "react";

import { Container } from "@/components/layout/container";
import { candidates, type Candidate } from "@/data/candidates";
import CandidateCard from "./candidateCard";
import CandidateModal from "./candidateModal";
import { useCardRepel } from "./useCardRepel";

const CandidatesSection = () => {
  const [selected, setSelected] = useState<Candidate | null>(null);
  const { register, repelHandlers } = useCardRepel<HTMLButtonElement>();

  return (
    <section id="kandidati" className="w-full bg-white py-20 lg:py-32">
      <Container>
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-bold uppercase text-brand-blue lg:text-5xl">
            Naši kandidáti
          </h2>
          <p className="mt-4 text-base text-balance text-dark/70 lg:text-lg">
            Spojujeme dosavadní zkušenosti s novou energií. Poznejte lidi, kteří
            chtějí pracovat pro Ústí nad Orlicí.
          </p>
        </div>

        <ul
          {...repelHandlers}
          className="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8 xl:grid-cols-6"
        >
          {candidates.map((candidate, i) => (
            <li key={candidate.number}>
              <CandidateCard
                candidate={candidate}
                onSelect={setSelected}
                ref={register(i)}
              />
            </li>
          ))}
        </ul>
      </Container>

      <CandidateModal candidate={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default CandidatesSection;
