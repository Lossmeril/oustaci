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

// Real candidate list. Claims and CVs are filled in later. Photos live in
// /public/img/candidates/ named by zero-padded ballot number (01.webp … 27.webp).
export const candidates: Candidate[] = [
  {
    number: 1,
    name: "Petr Hájek",
    photo: "/img/candidates/01.webp",
    age: 59,
    claim: "",
    cv: "",
  },
  {
    number: 2,
    name: "Mgr. Pavel Svatoš",
    photo: "/img/candidates/02.webp",
    age: 57,
    claim: "",
    cv: "",
  },
  {
    number: 3,
    name: "Blanka Holmesová",
    photo: "/img/candidates/03.webp",
    age: 56,
    claim: "",
    cv: "",
  },
  {
    number: 4,
    name: "RNDr. MgA. Lenka Janyšová",
    photo: "/img/candidates/04.webp",
    age: 63,
    claim: "",
    cv: "",
  },
  {
    number: 5,
    name: "Mgr. Petr Kulhavý",
    photo: "/img/candidates/05.webp",
    age: 50,
    claim: "",
    cv: "",
  },
  {
    number: 6,
    name: "František Velebný",
    photo: "/img/candidates/06.webp",
    age: 49,
    claim: "",
    cv: "",
  },
  {
    number: 7,
    name: "Hana Drobná",
    photo: "/img/candidates/07.webp",
    age: 69,
    claim: "",
    cv: "",
  },
  {
    number: 8,
    name: "Bc. Radek Mačát, MBA",
    photo: "/img/candidates/08.webp",
    age: 53,
    claim: "",
    cv: "",
  },
  {
    number: 9,
    name: "Bc. David Šítek",
    photo: "/img/candidates/09.webp",
    age: 50,
    claim: "",
    cv: "",
  },
  {
    number: 10,
    name: "Barbora Medunová",
    photo: "/img/candidates/10.webp",
    age: 21,
    claim: "",
    cv: "",
  },
  {
    number: 11,
    name: "Mgr. Martina Drdová",
    photo: "/img/candidates/11.webp",
    age: 32,
    claim: "",
    cv: "",
  },
  {
    number: 12,
    name: "Linda Gregarová, DiS.",
    photo: "/img/candidates/12.webp",
    age: 41,
    claim: "",
    cv: "",
  },
  {
    number: 13,
    name: "Petr Wagenknecht",
    photo: "/img/candidates/13.webp",
    age: 55,
    claim: "",
    cv: "",
  },
  {
    number: 14,
    name: "Michal Špitálský, MRes",
    photo: "/img/candidates/14.webp",
    age: 26,
    claim: 'Více "třetích míst" pro potkávání se!',
    cv: "Jsem učitel, grafik a filmař, který musel objezdit polovinu Spojeného království, aby nakonec zjistil, že nejlépe mu je stejně v rodném Ústí. Na Ústí mám rád jeho prostředí, do nějž jsem zasadil už nejeden kreativní projekt, a to, že se neustále někam posouvá.\n\nJiž dlouhou dobu se podílím na organizaci festivalu Jeden svět a dalších kulturních akcí ve městě. A teď bych rád přiložil ruku k dílu i v jiných částech života města.\n\nDoufám, že to, co mi ještě chybí na zkušenostech, doplním ochotou naslouchat, přicházet s kreativními řešeními a inspiracemi z jiných zemí, kde jsem pobýval.",
  },
  {
    number: 15,
    name: "Zuzana Mačátová",
    photo: "/img/candidates/15.webp",
    age: 46,
    claim: "",
    cv: "",
  },
  {
    number: 16,
    name: "Mgr. Vlastimil Drda",
    photo: "/img/candidates/16.webp",
    age: 43,
    claim: "",
    cv: "",
  },
  {
    number: 17,
    name: "Bc. Zlatuše Bartošová",
    photo: "/img/candidates/17.webp",
    age: 60,
    claim: "",
    cv: "",
  },
  {
    number: 18,
    name: "MUDr. Jan Skotálek",
    photo: "/img/candidates/18.webp",
    age: 65,
    claim: "",
    cv: "",
  },
  {
    number: 19,
    name: "Ing. arch. Jáchym Kopecký",
    photo: "/img/candidates/19.webp",
    age: 31,
    claim: "",
    cv: "",
  },
  {
    number: 20,
    name: "Mgr. Marcela Bucháčková",
    photo: "/img/candidates/20.webp",
    age: 41,
    claim: "",
    cv: "",
  },
  {
    number: 21,
    name: "MUDr. Ladislav Skalický",
    photo: "/img/candidates/21.webp",
    age: 62,
    claim: "",
    cv: "",
  },
  {
    number: 22,
    name: "Pavel Koráb",
    photo: "/img/candidates/22.webp",
    age: 61,
    claim: "",
    cv: "",
  },
  {
    number: 23,
    name: "MUDr. Tereza Fišerová",
    photo: "/img/candidates/23.webp",
    age: 32,
    claim: "",
    cv: "",
  },
  {
    number: 24,
    name: "Ing. Vlastimil Bartoš",
    photo: "/img/candidates/24.webp",
    age: 70,
    claim: "",
    cv: "",
  },
  {
    number: 25,
    name: "Bc. Anna Škopová",
    photo: "/img/candidates/25.webp",
    age: 76,
    claim: "",
    cv: "",
  },
  {
    number: 26,
    name: "Jitka Svobodová",
    photo: "/img/candidates/26.webp",
    age: 72,
    claim: "",
    cv: "",
  },
  {
    number: 27,
    name: "Jan Duffek",
    photo: "/img/candidates/27.webp",
    age: 43,
    claim: "",
    cv: "",
  },
];
