// Priorities of the election programme, transcribed from the printed newspaper
// (oustaci_noviny_PRIORITY.pdf, pages 6–7). Rendered as cards by
// <ProgramSection />.

import {
  Bus,
  Building2,
  GraduationCap,
  Hammer,
  HeartHandshake,
  Landmark,
  Leaf,
  House,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Wallet,
  type LucideIcon,
} from "lucide-react";

/** A single bullet. A plain string, or a lead-in with indented sub-points. */
export type ProgramItem = string | { text: string; children: string[] };

export type ProgramPriority = {
  /** Card heading – shown uppercase in brand blue. */
  title: string;
  /** Lucide icon shown in the chip above the heading. */
  icon: LucideIcon;
  items: ProgramItem[];
};

export const programHeading = "Priority volebního programu";

export const programPriorities: ProgramPriority[] = [
  {
    title: "Hospodaření města",
    icon: Wallet,
    items: [
      "Budeme vytvářet finanční rezervy pro mimořádné situace i spolufinancování důležitých investic.",
      "Velké investice posoudíme z hlediska jejich přínosu pro občany i budoucích provozních nákladů.",
      "Veřejné zakázky budeme nadále zadávat transparentně a hospodárně.",
      "Zachováme participativní rozpočet PRO ÚSTÍ.",
      "Posílíme otevřenou komunikaci mezi vedením města, komisemi, osadními výbory a občany.",
    ],
  },
  {
    title: "Správa majetku města a veřejné služby",
    icon: Building2,
    items: [
      "Rozvoj ploch kolem Tiché Orlice jako komunitního veřejného prostoru města.",
      "Pokračování v modernizaci veřejného osvětlení.",
      "Podporujeme obě možné varianty řešení problematiky krytého plaveckého bazénu, tedy jak rekonstrukci stávajícího, tak i případnou výstavbu nového u Aquaparku. Rozhodovat budeme na základě odborných podkladů, které se nyní zpracovávají.",
    ],
  },
  {
    title: "Investice a rozvoj",
    icon: Hammer,
    items: [
      "Přístavba a modernizace domova důchodců.",
      "Výstavba Školní jídelny Smetanova.",
      "Přístavba výtahu ZŠ Bratří Čapků.",
      "Dokončení další etapy Revitalizace území Perla 01 – veřejné prostranství SŠUP.",
      "Opěrná zeď příjezdové komunikace k MŠ Černovír.",
      "Technická infrastruktura pro výstavbu RD v Karpatské ulici v Kerharticích.",
    ],
  },
  {
    title: "Péče o vzhled a čistotu města",
    icon: Sparkles,
    items: [
      "Pravidelná údržba a ošetřování veřejné zeleně.",
      "Pravidelná údržba všech městských parků.",
      "Rozvoj, obnova a údržba městského mobiliáře, dětských hřišť a odpočinkových lokalit.",
      "Snižování vizuálního smogu a naplňování přijatých strategií (např. umístění výdejních boxů apod.).",
    ],
  },
  {
    title: "Životní prostředí a odpadové hospodářství",
    icon: Leaf,
    items: [
      "Vypracování strategie adaptace města na změny spojené se změnou klimatu.",
      "Diskusní a edukační workshopy na vybraná témata (sdílení energií, FVE na domech, elektromobilita, větrná energie, zachytávání vody, komunitní zahrady apod.).",
      "Rozšiřování fotovoltaických elektráren na střechách městských objektů a rozšiřování biodiverzity.",
      "Modernizace a zastínění dětského hřiště na Kociánce.",
      "Postupné rozmísťování mlžících prvků a pítek ve veřejném prostoru.",
      "Provedeme audit pachtovních smluv za účelem plnění podmínek Agroenvironmentálně-klimatických opatření (např. pěstování meziplodin, krajinotvorné sady, podpora biodiverzity na orné půdě).",
      "Vyhodnotíme posílení systému tříděného odpadu u bytových domů.",
    ],
  },
  {
    title: "Sociální služby a péče",
    icon: HeartHandshake,
    items: [
      "Zachování grantových dotací a jejich pravidelné navyšování o míru inflace nebo o cenové výkyvy.",
      "Řešení případných komunikačních problémů v oblasti sociálních služeb.",
      "Přístavba a modernizace domova důchodců.",
      "Příprava etapizace a zahájení rekonstrukce Centra sociální péče.",
    ],
  },
  {
    title: "Školství, sport, kultura, volný čas a mladé město",
    icon: GraduationCap,
    items: [
      "Zachování grantových dotací a jejich pravidelné navyšování o míru inflace nebo o cenové výkyvy.",
      {
        text: "Budeme prosazovat nové dotační programy:",
        children: [
          "Podpora nájmu – příspěvek na náklady spojené s pronájmem sportovních a kulturních zařízení.",
          "Podpora vrcholového sportu – individuální dotace pro vrcholové sportovce.",
        ],
      },
      "Zajistíme stabilní financování nepedagogických pracovníků.",
      "Podporujeme mateřské školky v městských částech a zachováme jejich stabilitu.",
      "Podporujeme kulturní a volnočasové aktivity ve městě, zejména pak letní venkovní akce.",
      "Nadále preferujeme a podporujeme akce zaměřené na činnost dětí a mládeže.",
      "Budeme iniciovat vznik Rady mladých jako poradního orgánu města, který umožní předávat své podněty vedení města a mladým lidem poskytne možnost aktivně se podílet na dění ve městě.",
      "Podpoříme vznik studentského klubu za účelem setkávání mladých lidí, edukační činnosti a trávení volného času.",
    ],
  },
  {
    title: "Památková péče, cestovní ruch a propagace",
    icon: Landmark,
    items: [
      "Zachování dotační podpory na opravu významných a architektonicky cenných budov.",
      "Na dokončenou obnovu kaplí křížové cesty na Andrlově chlumu navážeme restaurováním interiérů.",
      "Dokončení započatých prací na Architektonickém manuálu, na jehož realizaci obdrželo město dotaci z programu Ministerstva kultury ve výši 455 tisíc korun.",
      "Dokončení započatých prací na stálé expozici Ústí nad Orlicí – DNA textil – výzkum, vývoj, výroba a užití.",
    ],
  },
  {
    title: "Doprava a MHD",
    icon: Bus,
    items: [
      "Vyřešíme majetkoprávní vztahy u vlakového nádraží a rozšíříme zde parkovací kapacitu.",
      "Zachováme rozsah veřejných služeb na linkách městské autobusové dopravy.",
      "Rekonstrukce stezky 8. května podél Tiché Orlice bez zásahu do vzrostlé zeleně.",
      "Definitivní úprava parkoviště v areálu bývalé Perly.",
    ],
  },
  {
    title: "Bydlení a podpora podnikání",
    icon: House,
    items: [
      "Zpracujeme analýzu poptávky a zvážíme možnost podpory města pro budování cenově dostupného družstevního bydlení.",
      "Nebudeme snižovat městský bytový fond.",
      "Podporujeme projekt přestavby bývalé administrativní budovy v areálu bývalé Perly 01.",
    ],
  },
  {
    title: "Městská policie, krizové řízení a činnost jednotek SDH",
    icon: ShieldCheck,
    items: [
      "Pravidelný ranní dohled na frekventovaných přechodech v blízkosti základních škol.",
      "Pravidelná aktualizace krizových plánů a prověřování připravenosti města na mimořádné situace.",
      "Další investice do pořízení mobilních protipovodňových bariér.",
      "Realizace nouzové cesty k letišti z městské části Černovír.",
    ],
  },
  {
    title: "Informování a diskuse s veřejností",
    icon: MessagesSquare,
    items: [
      "Aktivní oslovení veřejnosti a všech klíčových aktérů již ve fázi plánování projektů.",
      "Podporujeme činnost Osadních výborů a nadále umožníme jejich veřejná zasedání.",
      "Upřednostníme odbornost členů jednotlivých komisí rady města před stranickou příslušností a komisím vytvoříme adekvátní podmínky pro jejich činnost.",
      "Podpoříme větší transparentnost odborných komisí rady města tím, že umožníme jejich veřejná jednání.",
    ],
  },
];
