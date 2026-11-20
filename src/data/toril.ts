export interface TorilCity {
  name: string;
  region: string;
  x: number;
  y: number;
  precise: boolean;
  terrain: string;
}

const REGION_DATA = `Costa da Espada|60|-100|450|A|1|Fireshear@-40,-700;Baldur's Gate@130,960;Beregost@110,1180;Daggerford@90,224;Waterdeep@0,0;Neverwinter@20,-630;Luskan@-10,-880;Mirabar@380,-700;Leilon@0,-470;Port Llast@13,-686;Amphail;Red Larch;Longsaddle@240,-380;Yartar@410,-105;Triboar@330,-130;Westbridge;Secomber@330,300;Zundbridge;Goldenfields;Gauntlgrym;Helm's Hold;Phandalin@130,-440;Candlekeep@60,1140
Fronteira Selvagem|600|-550|300|A|1|Silverymoon@520,-500;Everlund@595,-471;Sundabar@780,-600;Citadel Adbar@830,-680;Citadel Felbarr@560,-760;Mithral Hall@650,-600;Nesmé@180,-640;Jalanthar;Quaervarr;Olostin's Hold;Deadsnows
Lurkwood (floresta)|740|-540|30|A|0|Lurkwood@740,-540
Icewind Dale|330|-1500|120|A|1|Bryn Shander@330,-1500;Targos;Bremen;Termalaine;Lonelywood;Good Mead;Easthaven;Caer-Konig;Caer-Dineval;Dougan's Hole
Floresta Alta|900|0|200|A|0|Karse
Ilhas Moonshae|-900|1050|100|I-Moonshae|0|Caer Callidyrr@-900,1050;Caer Westphal;Caer Corwell;Gnarhelm
Ilhas setentrionais|-800|-700|600|I-Norte|0|Ruathym@-1400,-1400;Gundbarg;Mintarn@-450,-100
Villegdar (cidade flutuante)|-800|-2500|20|V|0|Villegdar@-800,-2500
Dalelands|1900|50|250|A|1|Shadowdale@1600,130;Ashabenford;Essembra;Highmoon;Scardale;Harrowdale;Mistledale@2100,100;Featherdale;Deepingdale;Tasseldale;Myth Drannor
Mar da Lua|2550|-100|350|A|1|Hillsfar@2200,-120;Mulmaster@2750,-250;Phlan@2900,50;Zhentil Keep@2350,-150;Melvaunt;Thentia;Yûlash;Voonlar;Glister;Teshwave;Sulasspryn
A Vastidão|2850|600|250|A|0|Procampur;Ravens Bluff;Tantras;Tsurlagol
Netheril|1500|-600|300|A|0|Thultanthar
Damara|2700|-1300|300|A|0|Heliogabalus;Bloodstone;Valls;Morov;Praka;Ostel;Darmshall
Impiltur|3300|-900|250|A|0|Lyrabar;Dilpur;Hlammach
Grande Vale|3300|-600|100|A|0|Uthmere
Rashemen|4300|-1200|150|A|0|Immilmar@4300,-1200;Mulptan;Mulsantir
Thesk|3800|-400|200|A|0|Telflamm;Phsant;Two-Stars;Phent;Milvarune
Vaasa|3400|-1700|150|A|0|Palischuk
Narfell|3800|-1800|150|A|0|Bildoobaris
Aglarond|4600|-100|150|A|0|Velprintalar;Glarondar;Delthuntle;Nethra;Lasdur;Urst
Altumbel|4500|400|100|A|0|Escalant;Laothkund
Thay|4300|-750|250|A|0|Eltabbar;Bezantur@4300,-750;Tyraturos;Amruthar;Surthay;Nethjet;Delhumide;Pyarados
Amn|160|1560|200|A|1|Athkatla@160,1560;Crimmor@400,1480;Esmeltaran;Keczulla;Purskul;Trademeet;Murann;Riatavin;Eshpurta
Tethyr|400|1950|250|A|1|Darromar@540,1850;Myratma;Saradush;Zazesspur@300,1900;Ithmong;Mosstone;Kamlann
Calimshan|450|2350|250|A|1|Calimport@450,2500;Memnon@520,2330;Almraiven@300,2250;Keltar;Manshaka;Schamedar;Suldolphor;Teshburl
Terras Centrais Ocidentais|400|700|400|A|1|Elturel@260,950;Iriaebor@560,600;Berdusk@280,640;Scornubel@620,430;Triel;Soubar;Asbravn;Hill's Edge;Corm Orp
Erlkazar|1150|450|100|A|0|Llorbauth
Evereska|1250|560|30|A|0|Evereska@1250,560
Lantan|-1000|2900|60|I-Lantan|0|Sambar;Illul
Nimbral|-1500|3300|40|I-Nimbral|0|Nimbral@-1500,3300
Ilhas Nelanther|-200|2000|100|I-Nelanther|0|Prespur
Evermeet|-2000|1000|40|I-Evermeet|0|Leuthilspar@-2000,1000
Cormyr|1900|300|250|A|1|Suzail@1800,350;Arabel@1850,50;Marsember@1900,550;Wheloon;Immersea;Eveningstar;Dhedluk;Tilverton;Thunderstone;Waymoot
Sembia|2450|350|250|A|1|Saerloon@2600,420;Selgaunt@2480,450;Ordulin@2300,150;Yhaunn;Daerlun@2200,280;Urmlaspyr;Chancelgaunt
Costa do Dragão|2800|900|200|A|0|Westgate
Vilhon Reach|3000|1100|300|A|0|Alaghôn;Arrabar;Ormath;Hlondeth;Nonthal;Nun;Shamph;Iljak;Ormpetarr
Chessenta|4300|900|200|A|0|Cimbar;Luthcheq;Akanax;Airspur;Soorenar;Mordulkin;Taskaunt
Mulhorand|5800|400|300|A|0|Skuld@6100,300;Gheldaneth;Sultim;Neldorild;Rauthil;Sampranasz
Unther|5400|1000|150|A|0|Messemprar@5400,1000;Unthalass;Shussel
Murghôm|6400|900|100|A|0|Gizekhtet
Tymanther|5100|1500|150|A|0|Djerad Thymar;Djerad Kethendi;Djerad Kusold
Chult|560|3800|300|A|0|Port Nyanzaru@420,3800;Mezro;Mbala;Kir Sabal;Omu@560,3900;Hisari
Samarach|1500|3900|100|A|0|Samargol
Tashalar|1900|3700|150|A|0|Tashluta;Kzelter
Lapaliiya|2400|3300|150|A|0|Sheirtalar;Lushpool;Ormpur
Thindol|2100|3300|100|A|0|Narubel
Dambrath|3900|3000|200|A|0|Cathyr;Herath;Prastuil;Luenath
Grande Fenda|2800|2400|200|A|0|Eartheart;Underhome;Deepstone
Halruaa|3800|2200|200|A|0|Halarahh@3800,2200;Halagard;Khaerbaal
Reinos Fronteiriços|3200|1800|200|A|0|Derlusk;Innarlith;Rethmar
Shaar|2700|2200|200|A|0|Alamontyr
Luiren|2500|2800|150|A|0|Beluir;Ammathluir
Durpar|5000|3000|150|A|0|Vaelan;Assur
Estagund|4600|3000|100|A|0|Chavyondat
Var, a Dourada|4200|3300|100|A|0|Orvyltar
Ulgarth|4900|3200|100|A|0|Delselar;Kaspar
Veldorn|5400|2800|100|A|0|Ahlarkhem
Norte de Kara-Tur|7500|-1800|400|A|0|Palace of Balinaikal;Palevash;Tomyris
Tabot|8500|-200|150|A|0|Lhasa
Planícies dos Cavalos|8200|-1000|300|A|0|Kourmira;Khampo;Konang Pen
Shou Lung|10500|200|500|A|0|Ausa;Banang;Durkon;Hachoni;Karatin;Kirin;Kuo Te Lung;Linshung;Pendir Chao;Shangtou;To'ming;Tsingtao;Wai;Yenching;Peqqir
T'u Lung|11000|900|300|A|0|Chunming;Kuo Shou;Kwan;Hsien;T'u Liang
Bawa e Bertan|12000|-300|200|A|0|Bawa;Bertan
Koryo|12500|0|300|A|0|Aru;Chozawa;Fochu;Jasuga;Masakado;Nakamaru;Tu Pe;Uwaji;Xi Hulang;Shosun
Kozakura|13200|300|200|A|0|Dojyu;Fukama;Gifu;Iiso;Joya;Kuda;Niba;Tamanokuni;Jitogawa
Wa|13800|500|200|A|0|Kuro;Shinkoku;Koga;Nakatomi;Rukimbaru
Kuong|11500|2000|150|A|0|Kuong
Malatra|10800|2800|300|A|0|Purang;Laothan
Petan|12000|2500|150|A|0|Petan
Zakhara|5800|3800|700|A|0|Huzuz@5200,3600;Qadib@4800,3900;Hiyal@5500,3800;Hafayah;Hawa;Liham;Muluk;Qudra;Umara;Utaqa;Halwa;Wasat;Dihliz;Kadarasto;Medina al-Afyal;Rog'osto;Ajayib;Gana;Jumlat;Sikak;Tajar;Fahhas;Hilm;Hudid;I'tiraf;Mahabba;Talab;Bariya;Harab;Sahu
Maztica|-6500|3100|600|M|0|Ulatos@-5800,3500;Nexal@-6200,3000;Payit@-6600,3300;Kultaka@-6700,2800;Pezelac@-6500,3500;Tukan;Tezat;Helmsport;Palul;Naltepec;Hoxitl
Laerakond|-5500|1000|400|L|0|Taerloon;Port Ghaast
Anchorome|-4000|5200|300|N|0|Fort Flame
Katashaka|-6200|5500|400|K|0|Akongo;Alliz-Dren
Osse|-2500|5800|100|O|0|Si'rat`;

const COAST = "Baldur's Gate;Waterdeep;Neverwinter;Luskan;Leilon;Port Llast;Fireshear;Ruathym;Gundbarg;Mintarn;Caer Callidyrr;Caer Westphal;Caer Corwell;Gnarhelm;Prespur;Hillsfar;Mulmaster;Phlan;Zhentil Keep;Melvaunt;Thentia;Lyrabar;Dilpur;Marsember;Suzail;Saerloon;Selgaunt;Yhaunn;Westgate;Procampur;Athkatla;Murann;Myratma;Zazesspur;Ithmong;Calimport;Memnon;Almraiven;Schamedar;Suldolphor;Cimbar;Luthcheq;Soorenar;Messemprar;Unthalass;Alaghôn;Arrabar;Hlondeth;Port Nyanzaru;Tashluta;Sheirtalar;Ormpur;Karatin;Tsingtao;Dojyu;Jitogawa;Rukimbaru;Uwaji;Fochu;Xi Hulang;Konang Pen;Peqqir;Shosun;Huzuz;Hiyal;Qudra;Hawa;Hafayah;Liham;Muluk;Qadib;Umara;Utaqa;Ajayib;Gana;Jumlat;Sikak;Tajar;Fahhas;I'tiraf;Hilm;Hudid;Mahabba;Talab;Bariya;Harab;Sahu;Ulatos;Pezelac;Tukan;Tezat;Helmsport;Airspur;Port Ghaast;Taerloon;Fort Flame";
const FLUVIAL = "Yartar;Secomber;Daggerford;Elturel;Scornubel;Silverymoon;Everlund;Sundabar;Esmeltaran;Trademeet;Iriaebor;Halarahh;Eartheart;Underhome;Hiyal;Huzuz";

export const normalizeName = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const hashName = (value: string) => {
  let hash = 7;
  for (const character of value) hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  return hash;
};

export const PORTS = new Set(COAST.split(";").map(normalizeName));
export const RIVER_PORTS = new Set(FLUVIAL.split(";").map(normalizeName));

const cityNames = new Set<string>();

export const TORIL_CITIES: TorilCity[] = REGION_DATA.split("\n").flatMap((line) => {
  const [region, centerX, centerY, radius, terrain, preciseRegion, cities] = line.split("|");

  return cities.split(";").flatMap((entry) => {
    const [name, coordinates] = entry.split("@");
    const normalized = normalizeName(name);
    if (cityNames.has(normalized)) return [];
    cityNames.add(normalized);

    let x: number;
    let y: number;
    const hasCoordinates = Boolean(coordinates);
    if (hasCoordinates) {
      [x, y] = coordinates.split(",").map(Number);
    } else {
      const hash = hashName(name);
      const angle = (hash % 360) * Math.PI / 180;
      const factor = .3 + .7 * ((hash >> 9) % 100) / 100;
      x = Number(centerX) + Number(radius) * factor * Math.cos(angle);
      y = Number(centerY) + Number(radius) * factor * Math.sin(angle);
    }

    return [{
      name,
      region,
      x,
      y,
      precise: hasCoordinates && preciseRegion === "1",
      terrain,
    }];
  });
}).sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

export const isNavigableCity = (city: TorilCity) =>
  PORTS.has(normalizeName(city.name)) || RIVER_PORTS.has(normalizeName(city.name));
