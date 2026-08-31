export type Candidate = {
  /** Position on the ballot – shown in the white circle badge. */
  number: number;
  name: string;
  /**
   * Path to the portrait. Drop the files into `/public/img/candidates/`.
   * If the file is missing, the card falls back to the candidate's initials.
   */
  photo: string;
  /** Age in years – shown in the modal. Optional. */
  age?: number;
  /** Short one-line claim shown on the card. */
  claim: string;
  /** Longer CV shown in the modal. Separate paragraphs with a blank line. */
  cv: string;
};

// One test candidate for now – add the rest of the list here later.
// Photos go in /public/img/candidates/ (e.g. 14.jpg).
export const candidates: Candidate[] = [
  {
    number: 14,
    name: "MRes Michal Špitálský",
    photo: "/img/candidates/14.jpg",
    age: 26,
    claim: 'Více "třetích míst" pro potkávání se!',
    cv: "Jsem učitel, grafik a filmař, který musel objezdit polovinu Spojeného království, aby nakonec zjistil, že nejlépe mu je stejně v rodném Ústí. Na Ústí mám rád jeho prostředí, do nějž jsem zasadil už nejeden kreativní projekt, a to, že se neustále někam posouvá.\n\nJiž dlouhou dobu se podílím na organizaci festivalu Jeden svět a dalších kulturních akcí ve městě. A teď bych rád přiložil ruku k dílu i v jiných částech života města.\n\nDoufám, že to, co mi ještě chybí na zkušenostech, doplním ochotou naslouchat, přicházet s kreativními řešeními a inspiracemi z jiných zemí, kde jsem pobýval.",
  },
];
