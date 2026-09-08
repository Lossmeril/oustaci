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

// Real candidate list. Photos live in /public/img/candidates/ named by
// zero-padded ballot number (01.webp … 27.webp).
export const candidates: Candidate[] = [
  {
    number: 1,
    name: "Petr Hájek",
    photo: "/img/candidates/01.webp",
    age: 59,
    claim: "Dokončit započaté, to je oč tu běží.",
    cv: "Petr Hájek je investiční technik a současný starosta města, v čele Oušťáků stojí popáté. Díky své profesi stavebního investičního technika zná dobře naše město i jeho problémy a potřeby – s prací na radnici a s výstavbou města je spojen víc než 30 let.\n\nDíky jeho úsilí a schopnosti komunikace se podařilo zrealizovat řadu projektů, které výrazně proměnily tvář města – například park u kostela nebo park u Roškotova divadla. Patnáct let stojí v čele revitalizace území bývalé Perly 01; bez jeho přínosu a energie bychom se dnes nepyšnili novým domem dětí a mládeže, vedle kterého se nyní otevřely také nové ateliéry a učebny SŠUP.\n\nMimo úřad můžete Petra nejčastěji potkat na kulturních akcích, ale cizí mu není ani sport, takže nepřekvapí jeho přítomnost na fotbalové tribuně. Nejen ústecká veřejnost ho zná také jako divadelníka a výtvarníka. Náš kandidát na starostu města zaručuje zkušenost, odpovědnost a stabilitu.",
  },
  {
    number: 2,
    name: "Mgr. Pavel Svatoš",
    photo: "/img/candidates/02.webp",
    age: 57,
    claim: "Dobrý tým se nemění a je ctí pro něj pracovat.",
    cv: "Pavel Svatoš je ředitel Základní školy Třebovská a současný místostarosta města. Za SNK Oušťáci kandiduje popáté a obhajuje druhou pozici na kandidátce.\n\nV uplynulém volebním období již podruhé zastával pozici neuvolněného místostarosty – pravé ruky starosty. Díky jeho přehledu a manažerským schopnostem byly ve škole realizovány významné investiční akce, které zlepšily školní prostředí nejen pro žáky a zaměstnance, ale i pro širokou veřejnost.\n\nPavel je aktivně zapojen do činnosti ústeckého Autoklubu, který pořádá tradiční závody do vrchu Ústecká 21. Už několik sezón je také skalním fanouškem ústeckých fotbalistů a nemůže chybět na žádném domácím utkání.",
  },
  {
    number: 3,
    name: "Blanka Holmesová",
    photo: "/img/candidates/03.webp",
    age: 56,
    claim:
      "Oušťáci chtějí pro město a občany opravdu to nejlepší. Vždyť zde také žijeme!",
    cv: "Blanka Holmesová je podnikatelka a současná zastupitelka, za Oušťáky kandiduje podruhé. Rozvoj města jí není lhostejný a ráda by se i v dalším období zapojila do zlepšování všeho, čeho ve městě dosáhnout jde.\n\nJako majitelka jazykové školy a hospůdky U Sherlocka se setkává se spoustou Oušťáků a zajímá se o jejich názory a podněty ke zlepšení života v Ústí. Během prvního volebního období navnímala, co je a není v možnostech města či radnice – co je potřeba změnit, vybudovat a čeho lze či nelze dosáhnout.\n\nDnes už ví, že není vše tak jednoduché, jak si občané leckdy myslí. Ráda by opětovně přispěla k tomu, aby byly problémy města dostatečně včas a dobře vysvětleny a řešeny. Jen tak se může město nadále rozvíjet.",
  },
  {
    number: 4,
    name: "RNDr. MgA. Lenka Janyšová",
    photo: "/img/candidates/04.webp",
    age: 63,
    claim:
      "Jsem učitelka, organizátorka a člověk, kterému na Ústí nad Orlicí záleží.",
    cv: "Lenka Janyšová je učitelka a současná zastupitelka. Učí na místním gymnáziu a dlouhodobě se věnuje kulturnímu životu města jako vůdčí osobnost, organizátorka a produkční spolku Malá scéna. Dobře díky tomu ví, že když se lidé spojí a mají chuť něco dělat, mohou své okolí skutečně měnit k lepšímu.\n\nZkušenosti má i přímo z komunální politiky – působila v zastupitelstvu i radě města a řadu let vedla Kulturní komisi. Zná tak nejen kulturní prostředí města, ale také fungování samosprávy a potřeby jeho obyvatel.\n\nDo komunální politiky kandiduje proto, že nechce jen komentovat, co by se mělo změnit. Chce být u toho, když se změny skutečně dějí. Záleží jí na tom, aby Ústí nad Orlicí bylo bezpečným, čistým a příjemným městem pro život, které myslí na všechny generace. Za důležité považuje kvalitní veřejný prostor, podporu seniorů, otevřenou komunikaci radnice s občany a především další rozvoj kultury a komunitního života.\n\nLenka věří, že město netvoří jen radnice a její rozhodnutí, ale lidé, kteří v něm žijí, pracují, vychovávají děti, tvoří, podnikají a tráví svůj volný čas – a právě jejich hlas by měl být při rozhodování o budoucnosti města slyšet. Chce pro Ústí nad Orlicí pracovat stejně jako ve škole a v kultuře: s energií, odpovědností a chutí proměňovat dobré nápady v konkrétní výsledky.",
  },
  {
    number: 5,
    name: "Mgr. Petr Kulhavý",
    photo: "/img/candidates/05.webp",
    age: 50,
    claim: "Pracovat pro druhé mě baví. Zvládám to i bez mandátu.",
    cv: "Petr Kulhavý je učitel. Téměř třicet let učí na základní škole, lektoruje po školách a připravuje děti na přijímací zkoušky. Vede spolek Spousti, který organizuje festival Jeden svět, a trénuje florbal v klubu Orlicko-Třebovsko. Kandiduje vůbec poprvé a nás těší, že právě za SNK Oušťáci.\n\nJeho motivací jsou děti – nejen ty jeho. Do sdružení přináší dva hlavní body volebního programu: chce přispět k budování odolného a vzdělaného města.\n\nSám říká: „Extrémní horka, sucha, lesní požáry a přívalové deště byly předpovědí vědců Mezivládního panelu pro změnu klimatu před 20 lety. Dnes jsou realitou, kterou žijeme. Chci se dívat na předpovědi pro dalších 20 let a na ně město připravit.“\n\nA k otázce školství: „Nejlepší investicí do budoucna bylo, je a bude kvalitní vzdělání. Za třicet let ve školství jsem ale pochopil, že na stát se v tomhle čekat nedá. Pokud mají být ústecké školy nadstandardní, musí do nich investovat město – do učitelů, ředitelů i do prostředí. Děti a mladí lidé tady budou žít za dvacet let a rozhodnutí učiněná teď jim budou buď pomáhat, nebo chybět.“",
  },
  {
    number: 6,
    name: "František Velebný",
    photo: "/img/candidates/06.webp",
    age: 49,
    claim:
      "Když něco stojí za to, aby se to dělalo, stojí za to, aby se to dělalo dobře.",
    cv: "František Velebný je majitel rodinné firmy Velebný & Fam a od roku 2022 také radní města. Jeho svět se točí kolem výroby vyšívaných praporů, textilní techniky a hledání cest, jak věci dělat lépe.\n\nKdyž zrovna neřeší firmu nebo město, najdete ho nejspíš na cestách v karavanu nebo na žíněnce při bojových sportech. Má rád věci, které fungují, a nerad se smiřuje s odpovědí „to nejde“.",
  },
  {
    number: 7,
    name: "Hana Drobná",
    photo: "/img/candidates/07.webp",
    age: 69,
    claim:
      "Knapovec, Dolní a Horní Houžovec – rovnocenné součásti města Ústí nad Orlicí.",
    cv: "Hana Drobná z Knapovce je bývalá pracovnice v administrativě a současná zastupitelka – pozitivní duše našeho sdružení. Od roku 2014 je zastupitelkou města a za SNK Oušťáci patří mezi zakládající členy.\n\nAktivně je zapojena do činnosti Osadního výboru v Knapovci a místní Tělovýchovné jednoty, kterou vede jako předsedkyně. V městské části je za Hankou vidět velký kus odvedené práce a SNK Oušťáci si jejího přínosu váží.",
  },
  {
    number: 8,
    name: "Bc. Radek Mačát, MBA",
    photo: "/img/candidates/08.webp",
    age: 53,
    claim: "Tohle město mám prostě rád.",
    cv: "Radek Mačát je obchodní manažer a současný zastupitel, za Oušťáky kandiduje popáté jako zakládající člen. Pracuje jako provozní ředitel a žije na sídlišti Štěpnice.\n\nV minulém volebním období byl členem zastupitelstva a předsedou finančního výboru. Mezi jeho záliby patří sport a cestování.",
  },
  {
    number: 9,
    name: "Bc. David Šítek",
    photo: "/img/candidates/09.webp",
    age: 50,
    claim: "Odolné město potřebuje rozumné řešení.",
    cv: "David Šítek je specialista plánování ve firmě CZ LOKO a.s. a předseda místní organizace Českého rybářského sdružení Ústí nad Orlicí. Působí také v dozorčí radě městské společnosti Tepvos.\n\nZajímá se o obnovitelnou energii a podílel se na našem volebním tématu „Odolné město“. Povahou je technik se zaměřením na fakta, ale zároveň i snílek s vizemi do budoucna.",
  },
  {
    number: 10,
    name: "Barbora Medunová",
    photo: "/img/candidates/10.webp",
    age: 21,
    claim: "Více mladých lidí do politiky.",
    cv: "Barbora Medunová je studentka sociologie a demografie na Univerzitě Karlově a v občanském životě se pohybuje už od základní školy. Ústí vnímá jako bezpečné město s nádhernou přírodou, kterému chybí kvalitní zázemí pro mladou generaci – místo, kde se dá tvořit, setkávat se a trávit volný čas.\n\nI přes předsudky o nedostatku zkušeností mladých lidí má za sebou reálné výsledky i praxi z vedení fakultních spolků a z pozice místopředsedkyně Mladých starostů v Pardubickém kraji. V komunální politice chce svou energii věnovat podpoře kultury, rozvoji občanské angažovanosti a vzdělanosti.",
  },
  {
    number: 11,
    name: "Mgr. Martina Drdová",
    photo: "/img/candidates/11.webp",
    age: 32,
    claim: "Starost není slabost.",
    cv: "Martina Drdová je dvaatřicetiletá učitelka místního gymnázia, která si momentálně dopřává mateřskou pauzu se synem Antonínem. Svůj čas se snaží dělit mezi velkou rodinu, přátele, divadlo a občas i nějaký sport.\n\nV minulém období působila v Kulturní a školské komisi města. Protože jí není lhostejné veřejné dění ve městě, ráda by svými zkušenostmi přispěla k tomu, aby Ústí bylo maximálně přátelské místo pro dospělé i děti.",
  },
  {
    number: 12,
    name: "Linda Gregarová, DiS.",
    photo: "/img/candidates/12.webp",
    age: 41,
    claim: "Nejen muzika. Taky naše město.",
    cv: "Linda Gregarová je učitelka ZUŠ. Ti, kdo ji znají, si ji nejspíš spojí s ústeckou ZUŠ, bubny, Black Bandem a kulturou obecně. Letos se znovu rozhodla kandidovat za Oušťáky a my jsme tomu rádi.\n\nJak sama říká, někdy není na škodu věnovat se i něčemu jinému než hudbě a setkávat se s lidmi, kteří mají podobný pohled na město, ve kterém žijí. Ústí nad Orlicí má ráda především pro dostatek zeleně a široké možnosti sportovního, kulturního i odpočinkového vyžití. Oceňuje také pestrý společenský život a množství akcí, které město nabízí – každý den se vlastně něco děje.\n\nDo komunálního dění se chce zapojovat aktivně. Přihlížet a stěžovat si není její styl, je připravena přiložit ruku k dílu.",
  },
  {
    number: 13,
    name: "Petr Wagenknecht",
    photo: "/img/candidates/13.webp",
    age: 55,
    claim: "",
    cv: "Kdo by neznal ústeckého fotografa Petra Wagenknechta, který za SNK Oušťáci kandiduje počtvrté. Petra není těžké představit – dávno se svou fotografickou prací a volnou tvorbou prosadil.\n\nZískal řadu prestižních ocenění, třikrát byl oceněn porotou Czech Press Photo a v roce 2016 byl zařazen mezi 150 nejlepších svatebních fotografů světa. Petr má prostě neskutečný talent zachytit v originální a osobité formě emoce a náladu; spoušť foťáku mačká v pravý okamžik a každá jeho fotka vypráví svůj příběh.\n\nV poslední době se věnuje také karikatuře s vtipným a trefným komentářem, ve které reaguje na aktuální události. Je aktivním hráčem stolního tenisu za TTC Sokol Hylváty. Samozřejmě fotí i nás Oušťáky – a proto nám to na předvolebních plakátech tak sluší!\n\nPetr kandiduje se šťastným číslem 13. Rád by podpořil kulturu a vybudování otužovacího jezírka ve městě.",
  },
  {
    number: 14,
    name: "Michal Špitálský, MRes",
    photo: "/img/candidates/14.webp",
    age: 26,
    claim: 'Více "třetích míst" pro potkávání se!',
    cv: "Náš kandidát s číslem 14 je učitel, grafik a filmař, který musel objezdit polovinu Spojeného království, aby nakonec zjistil, že nejlépe mu je stejně v rodném Ústí na Orlicí. Na Ústí mám rád jeho prostředí, do nějž jsem zasadil už nejeden kreativní projekt, a to, že se neustále někam posouvá. Již dlouhou dobu se podílím na organizaci festivalu Jeden svět a dalších kulturních akcí ve městě. A teď bych rád přiložil ruku k dílu i v jiných částech života města. Doufám, že to, co mi ještě chybí na zkušenostech doplním ochotou naslouchat, přicházet s kreativními řešeními a inspiracemi z jiných zemí, kde jsem pobýval.",
  },
  {
    number: 15,
    name: "Zuzana Mačátová",
    photo: "/img/candidates/15.webp",
    age: 46,
    claim: "Pomáhá. Spojuje. Mění.",
    cv: "Zuzana Mačátová je referentka městského úřadu a další nováček mezi SNK Oušťáci. Žije v Černovíru a už více než 12 let se aktivně podílí na životě místní části v rámci Osadního výboru, poslední čtyři roky jako jeho předsedkyně.\n\nJe ženou, která má ráda věci konkrétní – místo velkých slibů raději hledá cesty, jak dobré nápady skutečně proměnit v realitu. A když je potřeba, neváhá přiložit ruku k dílu. Záleží jí na tom, aby se v městských částech dobře žilo, aby byly upravené a příjemné, ale zároveň si zachovaly svůj venkovský charakter a sousedskou atmosféru.\n\nK Černovíru neodmyslitelně patří také dobrovolní hasiči. Zuzka je jejich součástí už od dětství a od roku 2014 působí jako starostka. Pomoc druhým a práce pro komunitu jsou pro ni přirozenou součástí života. Věří, že právě aktivní lidé, ochota pomoci a dobré vztahy mezi sousedy jsou tím, co dělá naše město lepším místem.",
  },
  {
    number: 16,
    name: "Mgr. Vlastimil Drda",
    photo: "/img/candidates/16.webp",
    age: 43,
    claim: "Začít musíme sami u sebe.",
    cv: "Vlastimil Drda je pracovník marketingu a učitel, letos kandiduje podruhé. Vystudovaný biolog se zkušenostmi se státní správou v oblasti životního prostředí na městské i krajské úrovni. Aktuálně pracuje jako asistent marketingu a od září podpoří stavy učitelského sboru místního gymnázia.\n\nVe volném čase holduje amatérskému divadlu a je předsedou Divadelního spolku Vicena. Má za sebou dvě rodičovské dovolené, a snad i proto se nechá namočit do realizace různých taškařic pro děti.\n\nSvé zkušenosti zúročil v končícím volebním období zejména v Kulturní a školské komisi a rád v tom bude pokračovat.",
  },
  {
    number: 17,
    name: "Bc. Zlatuše Bartošová",
    photo: "/img/candidates/17.webp",
    age: 60,
    claim: "Ústí je město s příběhem, je městem pro život.",
    cv: "Zlatuše Bartošová je učitelka ZUŠ. Tanec, děti, kultura, příroda a vztah k městu – to jsou oblasti, které Zlatku provázejí celý život a jsou pro ni přirozenou součástí života v Ústí nad Orlicí. Tanec a práce s dětmi jsou její celoživotní vášní; jak sama říká, naučily ji vnímat prostor, hledat rovnováhu, spolupracovat s ostatními a zároveň respektovat jedinečnost každého člověka. Právě tento přístup by ráda přenesla také do veřejného života.\n\nZlatka je přesvědčená, že město není jen souborem budov, silnic a investic. Město tvoří především lidé – jejich vztahy, kultura, tradice, spolky, sport, příroda i místa, kde se mohou setkávat. Ústí nad Orlicí pro ni není jen místem, kde žije a pracuje; vnímá ho jako město s vlastním příběhem, tradicemi a krásnými místy, o která je potřeba pečovat a uchovat je pro další generace.\n\n„Centrum města propojují krásné parky a zelená místa, která vytvářejí oázy klidu. Právě taková místa nám připomínají, že kvalita života ve městě není jen o tom, co postavíme, ale také o tom, co dokážeme zachovat, opečovat a vytvářet pro každodenní život lidí. Chci, aby Ústí bylo městem, kde se dobře žije a kde nezapomínáme na svou historii ani na prostředí kolem nás. Proto kandiduji za Oušťáky,“ říká Zlatka Bartošová.",
  },
  {
    number: 18,
    name: "MUDr. Jan Skotálek",
    photo: "/img/candidates/18.webp",
    age: 65,
    claim: "Jsem šťastný, že jsem oušťák.",
    cv: "Jan Skotálek je lékař a současný zastupitel a radní. O sobě říká, že je „věrný nosič vody a podporovatel Oušťáků“.\n\nZkušeností má na rozdávání – dvacet let pracoval v zastupitelstvu a jedenáct let v radě města. Rád sportuje, pravidelně sponzoruje kulturní akce ve městě a je to vzorný dědeček.\n\nPatří mezi zakládající členy SNK Oušťáci a za sdružení kandiduje počtvrté. Jeho aktivní veřejné podpory si vážíme.",
  },
  {
    number: 19,
    name: "Ing. arch. Jáchym Kopecký",
    photo: "/img/candidates/19.webp",
    age: 31,
    claim: "Makejme, Ústí bude takové, jaké si ho uděláme.",
    cv: "Jáchym Kopecký je architekt. V minulém volebním období pracoval v komisi pro architekturu a životní prostředí, diskutoval o investicích a přispíval svým pohledem.\n\nMá přehled o dětských hřištích v hoodu a rád jezdí po městě na kole se skautskou lilií na rámu.",
  },
  {
    number: 20,
    name: "Mgr. Marcela Bucháčková",
    photo: "/img/candidates/20.webp",
    age: 41,
    claim: "Neměň to, co funguje!",
    cv: "Marcela Bucháčková je učitelka. Jako speciální pedagožka v sociálních službách prošla několika službami pro rodiny s dětmi a pak se rozhodla druhou půlku profesní kariéry působit ve školství.\n\nNyní třetím rokem pracuje jako učitelka prvního stupně ZŠ. Jejími nejoblíbenějšími předměty jsou tělocvik, výtvarka a přírodověda, ale sociální témata a prevence jsou stále její srdeční záležitostí.",
  },
  {
    number: 21,
    name: "MUDr. Ladislav Skalický",
    photo: "/img/candidates/21.webp",
    age: 62,
    claim: "S úsměvem se lépe šlape.",
    cv: "Lékař, muzikant, turista a milovník kamenů – zkrátka člověk mnoha zájmů, to je Ladislav Skalický. Po letech působení na interním oddělení se od roku 2002 věnuje jako soukromý ambulantní lékař endokrinologii.\n\nOd roku 2018 vede značkařský obvod Klubu českých turistů v Ústí nad Orlicí, takže dobře ví, že když je potřeba najít správnou cestu, vyplatí se mít dobré značení. Je členem komorního orchestru bývalých žáků ZUŠ Česká Třebová, kde hraje v prvních houslích, a také členem Mineralogického klubu Česká Třebová.\n\nLadislav Skalický je lékař, který umí hledat správné cesty, držet tón a poznat ten pravý kámen.",
  },
  {
    number: 22,
    name: "Pavel Koráb",
    photo: "/img/candidates/22.webp",
    age: 61,
    claim: "SNK Oušťáci nemění názory a priority. Proto mají moji podporu.",
    cv: "Pavel Koráb je správce budov a ústecké veřejnosti dobře znám – samozřejmě pozitivně. Dříve hoteliér a podnikatel, dnes správce budov, kde uplatňuje svou původní profesi stavebního technika.\n\nJe dlouholetý a stále aktivní hráč bowlingu. Úroveň jeho hry byla a je vysoká; pochlubit se může řadou významných úspěchů, ať už jako jednotlivec, nebo jako člen extraligového týmu.",
  },
  {
    number: 23,
    name: "MUDr. Tereza Fišerová",
    photo: "/img/candidates/23.webp",
    age: 32,
    claim: "Ústí očima mladé rodiny.",
    cv: "Tereza Fišerová je mladá lékařka v Orlickoústecké nemocnici. Jako maminka dvou dětí vnímá potřeby rodin a význam kvalitního zázemí pro děti a mladé lidi.\n\nVe volném čase se závodně věnuje běhu a triatlonu a sport obecně je pro ni důležitou součástí zdravého životního stylu.\n\nJako rodačka z Ústí se vždy zajímala o veřejné dění ve městě a svůj pohled člověka, který v Ústí žije, pracuje a vychovává děti, by ráda využila k dalšímu rozvoji města.",
  },
  {
    number: 24,
    name: "Ing. Vlastimil Bartoš",
    photo: "/img/candidates/24.webp",
    age: 70,
    claim: "Nezůstat stranou a vždy jednat podle vlastního přesvědčení.",
    cv: "Vlastimil Bartoš je pracující důchodce a patří mezi zakládající členy sdružení, za Oušťáky kandiduje popáté. Je to rozvážný muž s jasným a bystrým názorem.\n\nV našem sdružení je přirozenou autoritou – a to ne pro svůj věk, ale pro celkový přehled, schopnost pojmenovat problém a navrhnout k němu konkrétní řešení. Kvůli stálému pracovnímu vytížení v tiskárně Grantis se brání být na kandidátce výš.",
  },
  {
    number: 25,
    name: "Bc. Anna Škopová",
    photo: "/img/candidates/25.webp",
    age: 76,
    claim: "Kvalitní služby v sociální oblasti dělají město městem.",
    cv: "Anna Škopová je sociální pracovnice a bývalá dlouholetá vedoucí odboru sociálních služeb, v letošních komunálních volbách kandiduje počtvrté. Pro naše sdružení je hlavním přínosem její práce a přehled v sociální oblasti.\n\nJako koordinátorka je aktivně zapojena do činnosti Komunitního plánování sociálních služeb našeho města. Osm let zastávala pozici radní města a byla předsedkyní Bytové komise. Zkušeností má tedy na rozdávání a její rady a názory jsou pro nás stále důležité.",
  },
  {
    number: 26,
    name: "Jitka Svobodová",
    photo: "/img/candidates/26.webp",
    age: 72,
    claim: "Každá investice vložená do sociálních služeb se vyplatí.",
    cv: "Jitka Svobodová je bývalá pracovnice pečovatelské služby. Kandiduje potřetí a je dobrou duší Oušťáků.\n\nJako bývalá dlouholetá vedoucí pečovatelské služby Ústí nad Orlicí je známou tváří našeho města. Za svoji činnost v sociálních službách a ve prospěch osob se zdravotním postižením byla v roce 2017 oceněna Pardubickým krajem v rámci udílení cen „Duhové křídlo“ v kategorii Profesionál.",
  },
  {
    number: 27,
    name: "Jan Duffek",
    photo: "/img/candidates/27.webp",
    age: 43,
    claim:
      "Na konci vždy vše dobře dopadne. A jestli to dobře nedopadlo, tak to potom ještě není konec. (J. Lennon)",
    cv: "Jan Duffek je obchodní manažer a nováček, který kandidátku SNK Oušťáci uzavírá. Rozhodl se podpořit dobré a smysluplné projekty, které ve městě vznikají. Posledních 11 let pracuje jako obchodní manažer pro lyžařský areál v Říčkách, takže mu není cizí prostředí cestovního ruchu a sportu.\n\nS oblibou říká, že vše kolem nás není dokonalé, ale aby se něco změnilo, je potřeba pro to něco udělat – a to může každý z nás.\n\nVolný čas tráví nejraději s rodinou a na sportovištích různého druhu, od sjezdovky po volejbalové hřiště. Duší, srdcem i bydlištěm je Kerharťák a v rámci svých časových možností se snaží podílet na sportovních, volnočasových i bafuňářských aktivitách v místním Sokole.",
  },
];
