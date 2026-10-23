export type AppLanguage = 'ko' | 'es';
export type QuestionDirection = 'FORWARD' | 'REVERSE';
export type QuestionOrigin = 'NEW' | 'REVIEW';

export interface ParableQuestion {
  id: number;
  code: string;
  chapterId: number;
  chapterTitleEs: string;
  chapterTitleKo: string;
  termEs: string;
  termKo: string;
  questionEs: string;
  questionKo: string;
  answerEs: string;
  answerKo: string;
  verseEs: string;
  verseKo: string;
}

export interface ChapterInfo {
  id: number;
  titleEs: string;
  titleKo: string;
}

export interface StudyCardItem {
  uid: string; // e.g. "1-FORWARD-NEW"
  question: ParableQuestion;
  direction: QuestionDirection;
  origin: QuestionOrigin;
  /** All questions that share the exact same answer (used when direction === 'REVERSE' without verse hints) */
  equivalentQuestions: ParableQuestion[];
}

export const CHAPTERS: ChapterInfo[] = [
  { id: 1, titleEs: "1. Parábola", titleKo: "1장. 비유" },
  { id: 2, titleEs: "2. Semilla, campo, árbol, ave", titleKo: "2장. 씨, 밭, 나무, 새" },
  { id: 3, titleEs: "3. Alimento y levadura", titleKo: "3장. 양식과 누룩" },
  { id: 4, titleEs: "4. Recipiente, balanza, vara", titleKo: "4장. 그릇, 저울, 지팡이" },
  { id: 5, titleEs: "5. Fuego, incensario, olla", titleKo: "5장. 불, 향로, 가마" },
  { id: 6, titleEs: "6. Luz, tinieblas, ojo, ropa", titleKo: "6장. 빛, 어둠, 눈, 옷" },
  { id: 7, titleEs: "7. Tesoro y rico", titleKo: "7장. 보화와 부자" },
  { id: 8, titleEs: "8. Agua, manantial, río", titleKo: "8장. 물, 샘, 강" },
  { id: 9, titleEs: "9. Mar, pescador, red, pez, barco", titleKo: "9장. 바다, 어부, 그물, 고기, 배" },
  { id: 10, titleEs: "10. Bestia, cabeza, cuerno, cola", titleKo: "10장. 짐승, 머리, 뿔, 꼬리" },
  { id: 11, titleEs: "11. Cordero, vino nuevo, aceite", titleKo: "11장. 어린양, 새 포도주, 감람유" },
  { id: 12, titleEs: "12. Monte, piedra, ídolo", titleKo: "12장. 산, 돌, 우상" },
  { id: 13, titleEs: "13. Sello, trompeta, cántico", titleKo: "13장. 인, 나팔, 노래" },
  { id: 14, titleEs: "14. Cuatro seres vivientes, viento, aliento de vida", titleKo: "14장. 네 생물, 바람, 생기" },
  { id: 15, titleEs: "15. Muerte, sepultura, resurrección", titleKo: "15장. 사망, 무덤, 부활" },
  { id: 16, titleEs: "16. Esposo, esposa, viuda, huérfano", titleKo: "16장. 남편, 아내, 과부, 고아" },
  { id: 17, titleEs: "17. Jerusalén, Babilonia, guerra, arma", titleKo: "17장. 예루살렘, 바벨론, 전쟁, 무기" },
  { id: 18, titleEs: "18. Cielo, tierra, sol, luna, estrellas", titleKo: "18장. 하늘, 땅, 해, 달, 별" },
  { id: 19, titleEs: "19. Israel", titleKo: "19장. 이스라엘" },
  { id: 20, titleEs: "20. Reino de los cielos y llave", titleKo: "20장. 천국과 열쇠" }
];

export const QUESTIONS: ParableQuestion[] = [
  {
    id: 1,
    code: "Q1",
    chapterId: 1,
    chapterTitleEs: "1. Parábola",
    chapterTitleKo: "1장. 비유",
    termEs: "La parábola",
    termKo: "비유",
    questionEs: "¿Qué significa en parábola la parábola?",
    questionKo: "비유의 의미는 무엇인가?",
    answerEs: "Es para ocultar el misterio antes de la aparición de la realidad, se compara con algo similar",
    answerKo: "실체가 나타나기 전에 비밀을 감추기 위해 비슷한 것으로 빗대어 말한 것",
    verseEs: "Sal 78:2",
    verseKo: "시 78:2"
  },
  {
    id: 2,
    code: "Q2",
    chapterId: 2,
    chapterTitleEs: "2. Semilla, campo, árbol, ave",
    chapterTitleKo: "2장. 씨, 밭, 나무, 새",
    termEs: "La semilla",
    termKo: "씨",
    questionEs: "¿Qué significa en parábola la semilla?",
    questionKo: "씨의 의미는?",
    answerEs: "Palabra",
    answerKo: "말씀",
    verseEs: "Lc 8:11, 1P 1:23",
    verseKo: "눅 8:11, 벧전 1:23"
  },
  {
    id: 3,
    code: "Q3",
    chapterId: 2,
    chapterTitleEs: "2. Semilla, campo, árbol, ave",
    chapterTitleKo: "2장. 씨, 밭, 나무, 새",
    termEs: "La semilla de Satanás",
    termKo: "사단의 씨",
    questionEs: "¿Qué significa en parábola la semilla de Satanás?",
    questionKo: "사단의 씨의 의미는?",
    answerEs: "Falsa doctrina",
    answerKo: "거짓 교리",
    verseEs: "Jn 8:44, Mt 13:25",
    verseKo: "요 8:44, 마 13:25"
  },
  {
    id: 4,
    code: "Q4",
    chapterId: 2,
    chapterTitleEs: "2. Semilla, campo, árbol, ave",
    chapterTitleKo: "2장. 씨, 밭, 나무, 새",
    termEs: "El campo",
    termKo: "밭",
    questionEs: "¿Qué significa en parábola el campo?",
    questionKo: "밭의 의미는?",
    answerEs: "Corazón del hombre, mundo",
    answerKo: "사람의 마음, 세상",
    verseEs: "Lc 8:15, 1Co 3:9, Mt 13:38",
    verseKo: "눅 8:15, 고전 3:9, 마 13:38"
  },
  {
    id: 5,
    code: "Q5",
    chapterId: 2,
    chapterTitleEs: "2. Semilla, campo, árbol, ave",
    chapterTitleKo: "2장. 씨, 밭, 나무, 새",
    termEs: "Su campo (el campo de Jesús)",
    termKo: "자기 밭 (예수님의 밭)",
    questionEs: "¿Qué significa en parábola su campo (el campo de Jesús)?",
    questionKo: "자기 밭 / 예수님의 밭의 의미는?",
    answerEs: "Las iglesias de Jesús",
    answerKo: "예수님의 교회들",
    verseEs: "Mt 13:24",
    verseKo: "마 13:24"
  },
  {
    id: 6,
    code: "Q6",
    chapterId: 2,
    chapterTitleEs: "2. Semilla, campo, árbol, ave",
    chapterTitleKo: "2장. 씨, 밭, 나무, 새",
    termEs: "El árbol",
    termKo: "나무",
    questionEs: "¿Qué significa en parábola el árbol?",
    questionKo: "나무의 의미는?",
    answerEs: "El hombre interior renacido de la semilla que es la palabra (o pastor)",
    answerKo: "말씀의 씨로 거듭난 속사람 또는 목자",
    verseEs: "Jn 15:1",
    verseKo: "요 15:1"
  },
  {
    id: 7,
    code: "Q7",
    chapterId: 2,
    chapterTitleEs: "2. Semilla, campo, árbol, ave",
    chapterTitleKo: "2장. 씨, 밭, 나무, 새",
    termEs: "La rama",
    termKo: "가지",
    questionEs: "¿Qué significa en parábola la rama?",
    questionKo: "가지의 의미는?",
    answerEs: "Discípulo",
    answerKo: "제자",
    verseEs: "Jn 15:5",
    verseKo: "요 15:5"
  },
  {
    id: 8,
    code: "Q8",
    chapterId: 2,
    chapterTitleEs: "2. Semilla, campo, árbol, ave",
    chapterTitleKo: "2장. 씨, 밭, 나무, 새",
    termEs: "La hoja",
    termKo: "잎사귀",
    questionEs: "¿Qué significa en parábola la hoja?",
    questionKo: "잎사귀의 의미는?",
    answerEs: "Evangelista",
    answerKo: "전도자",
    verseEs: "Ez 47:12, Ap 22:2",
    verseKo: "겔 47:12, 계 22:2"
  },
  {
    id: 9,
    code: "Q9",
    chapterId: 2,
    chapterTitleEs: "2. Semilla, campo, árbol, ave",
    chapterTitleKo: "2장. 씨, 밭, 나무, 새",
    termEs: "El fruto",
    termKo: "열매",
    questionEs: "¿Qué significa en parábola el fruto?",
    questionKo: "열매의 의미는?",
    answerEs: "Palabra, santo producto de haber dado la palabra",
    answerKo: "말씀, 말씀을 전하여 맺은 성도",
    verseEs: "Stg 1:18, Ap 14:4",
    verseKo: "약 1:18, 계 14:4"
  },
  {
    id: 10,
    code: "Q10",
    chapterId: 2,
    chapterTitleEs: "2. Semilla, campo, árbol, ave",
    chapterTitleKo: "2장. 씨, 밭, 나무, 새",
    termEs: "El ave",
    termKo: "새",
    questionEs: "¿Qué significa en parábola el ave?",
    questionKo: "새의 의미는?",
    answerEs: "Espíritu",
    answerKo: "영",
    verseEs: "Mt 3:16, Ap 19:17",
    verseKo: "마 3:16, 계 19:17"
  },
  {
    id: 11,
    code: "Q11",
    chapterId: 2,
    chapterTitleEs: "2. Semilla, campo, árbol, ave",
    chapterTitleKo: "2장. 씨, 밭, 나무, 새",
    termEs: "El ave de Satanás",
    termKo: "사단의 새",
    questionEs: "¿Qué significa en parábola el ave de Satanás?",
    questionKo: "사단의 새의 의미는?",
    answerEs: "Espíritu maligno",
    answerKo: "악령",
    verseEs: "Dn 4:21, Ap 18:2",
    verseKo: "단 4:21, 계 18:2"
  },
  {
    id: 12,
    code: "Q12",
    chapterId: 3,
    chapterTitleEs: "3. Alimento y levadura",
    chapterTitleKo: "3장. 양식과 누룩",
    termEs: "El alimento",
    termKo: "양식",
    questionEs: "¿Qué significa en parábola el alimento?",
    questionKo: "양식의 의미는?",
    answerEs: "Palabra",
    answerKo: "말씀",
    verseEs: "Jn 6:27, Is 55:1-2, Am 8:11",
    verseKo: "요 6:27, 사 55:1-2, 암 8:11"
  },
  {
    id: 13,
    code: "Q13",
    chapterId: 3,
    chapterTitleEs: "3. Alimento y levadura",
    chapterTitleKo: "3장. 양식과 누룩",
    termEs: "El alimento de Satanás",
    termKo: "사단의 양식",
    questionEs: "¿Qué significa en parábola el alimento de Satanás?",
    questionKo: "사단의 양식의 의미는?",
    answerEs: "Falsa doctrina",
    answerKo: "거짓 교리",
    verseEs: "Pr 4:17, Mal 1:7, Is 28:7-8",
    verseKo: "잠 4:17, 말 1:7, 사 28:7-8"
  },
  {
    id: 14,
    code: "Q14",
    chapterId: 3,
    chapterTitleEs: "3. Alimento y levadura",
    chapterTitleKo: "3장. 양식과 누룩",
    termEs: "La levadura",
    termKo: "누룩",
    questionEs: "¿Qué significa en parábola la levadura?",
    questionKo: "누룩의 의미는?",
    answerEs: "Doctrina",
    answerKo: "교리 / 교훈",
    verseEs: "Mt 13:33",
    verseKo: "마 13:33"
  },
  {
    id: 15,
    code: "Q15",
    chapterId: 3,
    chapterTitleEs: "3. Alimento y levadura",
    chapterTitleKo: "3장. 양식과 누룩",
    termEs: "La levadura de Satanás",
    termKo: "사단의 누룩",
    questionEs: "¿Qué significa en parábola la levadura de Satanás?",
    questionKo: "사단의 누룩의 의미는?",
    answerEs: "Doctrina de Satanás",
    answerKo: "사단의 교리 / 사단의 교훈",
    verseEs: "Mt 16:6-12",
    verseKo: "마 16:6-12"
  },
  {
    id: 16,
    code: "Q16",
    chapterId: 3,
    chapterTitleEs: "3. Alimento y levadura",
    chapterTitleKo: "3장. 양식과 누룩",
    termEs: "Ser leudado",
    termKo: "누룩에 부풀다",
    questionEs: "¿Qué significa en sentido figurado ser leudado?",
    questionKo: "누룩에 부풀다의 의미는?",
    answerEs: "Tener un cambio en la fe",
    answerKo: "신앙의 변화를 겪음 / 마음이 부풂",
    verseEs: "-",
    verseKo: "-"
  },
  {
    id: 17,
    code: "Q17",
    chapterId: 4,
    chapterTitleEs: "4. Recipiente, balanza, vara",
    chapterTitleKo: "4장. 그릇, 저울, 지팡이",
    termEs: "El recipiente",
    termKo: "그릇",
    questionEs: "¿Qué significa en parábola el recipiente?",
    questionKo: "그릇의 의미는?",
    answerEs: "Hombre, iglesia",
    answerKo: "사람, 교회",
    verseEs: "Hch 9:15, Mt 13:47-48",
    verseKo: "행 9:15, 마 13:47-48"
  },
  {
    id: 18,
    code: "Q18",
    chapterId: 4,
    chapterTitleEs: "4. Recipiente, balanza, vara",
    chapterTitleKo: "4장. 그릇, 저울, 지팡이",
    termEs: "La balanza",
    termKo: "저울",
    questionEs: "¿Qué significa en parábola la balanza?",
    questionKo: "저울의 의미는?",
    answerEs: "Palabra",
    answerKo: "말씀",
    verseEs: "Pr 24:12",
    verseKo: "잠 24:12"
  },
  {
    id: 19,
    code: "Q19",
    chapterId: 4,
    chapterTitleEs: "4. Recipiente, balanza, vara",
    chapterTitleKo: "4장. 그릇, 저울, 지팡이",
    termEs: "La balanza de Satanás",
    termKo: "사단의 저울",
    questionEs: "¿Qué significa en parábola la balanza de Satanás?",
    questionKo: "사단의 저울의 의미는?",
    answerEs: "Palabra de Satanás (falsa doctrina)",
    answerKo: "사단의 말 / 거짓 교리",
    verseEs: "Pr 11:1",
    verseKo: "잠 11:1"
  },
  {
    id: 20,
    code: "Q20",
    chapterId: 4,
    chapterTitleEs: "4. Recipiente, balanza, vara",
    chapterTitleKo: "4장. 그릇, 저울, 지팡이",
    termEs: "La vara",
    termKo: "지팡이",
    questionEs: "¿Qué significa en parábola la vara?",
    questionKo: "지팡이의 의미는?",
    answerEs: "Palabra y hombre",
    answerKo: "말씀과 사람",
    verseEs: "Is 11:4, Sal 89:32",
    verseKo: "사 11:4, 시 89:32"
  },
  {
    id: 21,
    code: "Q21",
    chapterId: 4,
    chapterTitleEs: "4. Recipiente, balanza, vara",
    chapterTitleKo: "4장. 그릇, 저울, 지팡이",
    termEs: "La vara de hierro",
    termKo: "철장",
    questionEs: "¿Qué significa en parábola la vara de hierro?",
    questionKo: "철장의 의미는?",
    answerEs: "Autoridad para gobernar",
    answerKo: "다스리는 권세 / 치리권",
    verseEs: "Sal 2:6-9, Ap 2:26-27",
    verseKo: "시 2:6-9, 계 2:26-27"
  },
  {
    id: 22,
    code: "Q22",
    chapterId: 5,
    chapterTitleEs: "5. Fuego, incensario, olla",
    chapterTitleKo: "5장. 불, 향로, 가마",
    termEs: "El fuego",
    termKo: "불",
    questionEs: "¿Qué significa en parábola el fuego?",
    questionKo: "불의 의미는?",
    answerEs: "Palabra",
    answerKo: "말씀",
    verseEs: "Jer 5:14, Jer 23:29",
    verseKo: "렘 5:14, 렘 23:29"
  },
  {
    id: 23,
    code: "Q23",
    chapterId: 5,
    chapterTitleEs: "5. Fuego, incensario, olla",
    chapterTitleKo: "5장. 불, 향로, 가마",
    termEs: "El incensario",
    termKo: "향로",
    questionEs: "¿Qué significa en parábola el incensario?",
    questionKo: "향로의 의미는?",
    answerEs: "Hombre",
    answerKo: "사람",
    verseEs: "Ap 8:3",
    verseKo: "계 8:3"
  },
  {
    id: 24,
    code: "Q24",
    chapterId: 5,
    chapterTitleEs: "5. Fuego, incensario, olla",
    chapterTitleKo: "5장. 불, 향로, 가마",
    termEs: "El incienso",
    termKo: "향",
    questionEs: "¿Qué significa en parábola el incienso?",
    questionKo: "향의 의미는?",
    answerEs: "Oración de los santos",
    answerKo: "성도들의 기도",
    verseEs: "Ap 5:8",
    verseKo: "계 5:8"
  },
  {
    id: 25,
    code: "Q25",
    chapterId: 5,
    chapterTitleEs: "5. Fuego, incensario, olla",
    chapterTitleKo: "5장. 불, 향로, 가마",
    termEs: "El humo de incienso",
    termKo: "향연",
    questionEs: "¿Qué significa en parábola el humo de incienso?",
    questionKo: "향연의 의미는?",
    answerEs: "La oración que es elevada",
    answerKo: "올라가는 기도",
    verseEs: "Ap 8:3-5",
    verseKo: "계 8:3-5"
  },
  {
    id: 26,
    code: "Q26",
    chapterId: 5,
    chapterTitleEs: "5. Fuego, incensario, olla",
    chapterTitleKo: "5장. 불, 향로, 가마",
    termEs: "La olla",
    termKo: "가마 / 솥",
    questionEs: "¿Qué significa en parábola la olla?",
    questionKo: "가마/솥의 의미는?",
    answerEs: "Iglesia",
    answerKo: "교회",
    verseEs: "Zac 14:20-21",
    verseKo: "슥 14:20-21"
  },
  {
    id: 27,
    code: "Q27",
    chapterId: 6,
    chapterTitleEs: "6. Luz, tinieblas, ojo, ropa",
    chapterTitleKo: "6장. 빛, 어둠, 눈, 옷",
    termEs: "La luz",
    termKo: "빛",
    questionEs: "¿Qué significa en parábola la luz?",
    questionKo: "빛의 의미는?",
    answerEs: "Palabra de vida",
    answerKo: "생명의 말씀",
    verseEs: "Jn 1:1-5, 1Ts 5:1-6",
    verseKo: "요 1:1-5, 살전 5:1-6"
  },
  {
    id: 28,
    code: "Q28",
    chapterId: 6,
    chapterTitleEs: "6. Luz, tinieblas, ojo, ropa",
    chapterTitleKo: "6장. 빛, 어둠, 눈, 옷",
    termEs: "Las tinieblas",
    termKo: "어둠",
    questionEs: "¿Qué significa en parábola las tinieblas?",
    questionKo: "어둠의 의미는?",
    answerEs: "Ignorancia de la palabra",
    answerKo: "말씀에 대한 무지",
    verseEs: "Jn 12:35",
    verseKo: "요 12:35"
  },
  {
    id: 29,
    code: "Q29",
    chapterId: 6,
    chapterTitleEs: "6. Luz, tinieblas, ojo, ropa",
    chapterTitleKo: "6장. 빛, 어둠, 눈, 옷",
    termEs: "El candelabro / candelero",
    termKo: "등대 / 촛대",
    questionEs: "¿Qué significan en parábola el candelabro / candelero?",
    questionKo: "등대 / 촛대의 의미는?",
    answerEs: "Espíritu y obrero",
    answerKo: "영과 일꾼/사명자",
    verseEs: "Ap 4:5, Ap 5:6",
    verseKo: "계 4:5, 계 5:6"
  },
  {
    id: 30,
    code: "Q30",
    chapterId: 6,
    chapterTitleEs: "6. Luz, tinieblas, ojo, ropa",
    chapterTitleKo: "6장. 빛, 어둠, 눈, 옷",
    termEs: "El ojo",
    termKo: "눈",
    questionEs: "¿Qué significa en parábola el ojo?",
    questionKo: "눈의 의미는?",
    answerEs: "Espíritu y obrero",
    answerKo: "영과 일꾼/사명자",
    verseEs: "Ap 5:6",
    verseKo: "계 5:6"
  },
  {
    id: 31,
    code: "Q31",
    chapterId: 6,
    chapterTitleEs: "6. Luz, tinieblas, ojo, ropa",
    chapterTitleKo: "6장. 빛, 어둠, 눈, 옷",
    termEs: "El ciego",
    termKo: "영적 소경",
    questionEs: "¿Quién es en sentido figurado el ciego?",
    questionKo: "영적 소경의 의미는?",
    answerEs: "El que ve la palabra pero no la entiende",
    answerKo: "말씀을 보아도 깨닫지 못하는 자",
    verseEs: "Ap 3:17-18, Is 42:18-20",
    verseKo: "계 3:17-18, 사 42:18-20"
  },
  {
    id: 32,
    code: "Q32",
    chapterId: 6,
    chapterTitleEs: "6. Luz, tinieblas, ojo, ropa",
    chapterTitleKo: "6장. 빛, 어둠, 눈, 옷",
    termEs: "El sordo",
    termKo: "영적 귀머거리",
    questionEs: "¿Quién es en sentido figurado el sordo?",
    questionKo: "영적 귀머거리의 의미는?",
    answerEs: "El que oye la palabra pero no la entiende",
    answerKo: "말씀을 들어도 깨닫지 못하는 자",
    verseEs: "Is 42:18-20",
    verseKo: "사 42:18-20"
  },
  {
    id: 33,
    code: "Q33",
    chapterId: 6,
    chapterTitleEs: "6. Luz, tinieblas, ojo, ropa",
    chapterTitleKo: "6장. 빛, 어둠, 눈, 옷",
    termEs: "La ropa",
    termKo: "옷",
    questionEs: "¿Qué significa en parábola la ropa?",
    questionKo: "옷의 의미는?",
    answerEs: "Corazón, acciones, doctrina",
    answerKo: "마음, 행실, 교리",
    verseEs: "Ap 22:14, Ap 19:13",
    verseKo: "계 22:14, 계 19:13"
  },
  {
    id: 34,
    code: "Q34",
    chapterId: 6,
    chapterTitleEs: "6. Luz, tinieblas, ojo, ropa",
    chapterTitleKo: "6장. 빛, 어둠, 눈, 옷",
    termEs: "El vestido de boda",
    termKo: "혼인잔치 예복 / 세마포",
    questionEs: "¿Qué significa en parábola el vestido de boda?",
    questionKo: "혼인잔치 예복 / 세마포의 의미는?",
    answerEs: "Acciones justas",
    answerKo: "옳은 행실",
    verseEs: "Ap 19:8",
    verseKo: "계 19:8"
  },
  {
    id: 35,
    code: "Q35",
    chapterId: 6,
    chapterTitleEs: "6. Luz, tinieblas, ojo, ropa",
    chapterTitleKo: "6장. 빛, 어둠, 눈, 옷",
    termEs: "El vestido de la ramera",
    termKo: "음녀의 옷",
    questionEs: "¿Qué significa en parábola el vestido de la ramera?",
    questionKo: "음녀의 옷의 의미는?",
    answerEs: "Falsa doctrina",
    answerKo: "거짓 교리",
    verseEs: "Ap 17:4",
    verseKo: "계 17:4"
  },
  {
    id: 36,
    code: "Q36",
    chapterId: 7,
    chapterTitleEs: "7. Tesoro y rico",
    chapterTitleKo: "7장. 보화와 부자",
    termEs: "El tesoro",
    termKo: "보화",
    questionEs: "¿Qué significa en parábola el tesoro?",
    questionKo: "보화의 의미는?",
    answerEs: "Palabra",
    answerKo: "말씀",
    verseEs: "Pr 16:16",
    verseKo: "잠 16:16"
  },
  {
    id: 37,
    code: "Q37",
    chapterId: 7,
    chapterTitleEs: "7. Tesoro y rico",
    chapterTitleKo: "7장. 보화와 부자",
    termEs: "El rico",
    termKo: "영적 부자",
    questionEs: "¿Quién es en sentido figurado el rico?",
    questionKo: "영적 부자의 의미는?",
    answerEs: "Persona que tiene mucha palabra (conocimiento)",
    answerKo: "말씀/지식이 많은 자",
    verseEs: "Ap 3:17-18",
    verseKo: "계 3:17-18"
  },
  {
    id: 38,
    code: "Q38",
    chapterId: 8,
    chapterTitleEs: "8. Agua, manantial, río",
    chapterTitleKo: "8장. 물, 샘, 강",
    termEs: "El agua",
    termKo: "물",
    questionEs: "¿Qué significa en parábola el agua?",
    questionKo: "물의 의미는?",
    answerEs: "Palabra",
    answerKo: "말씀",
    verseEs: "Dt 32:1-2, Jn 15:3",
    verseKo: "신 32:1-2, 요 15:3"
  },
  {
    id: 39,
    code: "Q39",
    chapterId: 8,
    chapterTitleEs: "8. Agua, manantial, río",
    chapterTitleKo: "8장. 물, 샘, 강",
    termEs: "El manantial",
    termKo: "샘",
    questionEs: "¿Qué significa en parábola el manantial?",
    questionKo: "샘의 의미는?",
    answerEs: "Pastor y templo (iglesia)",
    answerKo: "목자와 성전/교회",
    verseEs: "Zac 13:1, Ap 7:17",
    verseKo: "슥 13:1, 계 7:17"
  },
  {
    id: 40,
    code: "Q40",
    chapterId: 8,
    chapterTitleEs: "8. Agua, manantial, río",
    chapterTitleKo: "8장. 물, 샘, 강",
    termEs: "El río",
    termKo: "강",
    questionEs: "¿Qué significa en parábola el río?",
    questionKo: "강의 의미는?",
    answerEs: "Corazón de discípulos y evangelistas",
    answerKo: "제자들과 전도자의 마음",
    verseEs: "Jn 7:37-38, Ap 22:1-2",
    verseKo: "요 7:37-38, 계 22:1-2"
  },
  {
    id: 41,
    code: "Q41",
    chapterId: 9,
    chapterTitleEs: "9. Mar, pescador, red, pez, barco",
    chapterTitleKo: "9장. 바다, 어부, 그물, 고기, 배",
    termEs: "El mar",
    termKo: "바다",
    questionEs: "¿Qué significa en parábola el mar?",
    questionKo: "바다의 의미는?",
    answerEs: "Mundo",
    answerKo: "세상",
    verseEs: "Dn 7:3, 17",
    verseKo: "단 7:3, 17"
  },
  {
    id: 42,
    code: "Q42",
    chapterId: 9,
    chapterTitleEs: "9. Mar, pescador, red, pez, barco",
    chapterTitleKo: "9장. 바다, 어부, 그물, 고기, 배",
    termEs: "El pescador",
    termKo: "어부",
    questionEs: "¿Quién es en parábola el pescador?",
    questionKo: "어부의 의미는?",
    answerEs: "Pastor (evangelista)",
    answerKo: "목자 / 전도자",
    verseEs: "Mt 4:18-20",
    verseKo: "마 4:18-20"
  },
  {
    id: 43,
    code: "Q43",
    chapterId: 9,
    chapterTitleEs: "9. Mar, pescador, red, pez, barco",
    chapterTitleKo: "9장. 바다, 어부, 그물, 고기, 배",
    termEs: "La red",
    termKo: "그물",
    questionEs: "¿Qué significa en parábola la red?",
    questionKo: "그물의 의미는?",
    answerEs: "Palabra",
    answerKo: "말씀",
    verseEs: "Mt 13:47-50",
    verseKo: "마 13:47-50"
  },
  {
    id: 44,
    code: "Q44",
    chapterId: 9,
    chapterTitleEs: "9. Mar, pescador, red, pez, barco",
    chapterTitleKo: "9장. 바다, 어부, 그물, 고기, 배",
    termEs: "El pez",
    termKo: "물고기",
    questionEs: "¿Qué significa en parábola el pez?",
    questionKo: "물고기의 의미는?",
    answerEs: "Hombre",
    answerKo: "사람",
    verseEs: "Mt 13:47-50, Mt 4:18-20",
    verseKo: "마 13:47-50, 마 4:18-20"
  },
  {
    id: 45,
    code: "Q45",
    chapterId: 9,
    chapterTitleEs: "9. Mar, pescador, red, pez, barco",
    chapterTitleKo: "9장. 바다, 어부, 그물, 고기, 배",
    termEs: "El barco",
    termKo: "배",
    questionEs: "¿Qué significa en parábola el barco?",
    questionKo: "배의 의미는?",
    answerEs: "Organización como iglesia",
    answerKo: "교회와 같은 조직체",
    verseEs: "Ap 8:8-9, Ap 18:17-19",
    verseKo: "계 8:8-9, 계 18:17-19"
  },
  {
    id: 46,
    code: "Q46",
    chapterId: 10,
    chapterTitleEs: "10. Bestia, cabeza, cuerno, cola",
    chapterTitleKo: "10장. 짐승, 머리, 뿔, 꼬리",
    termEs: "La bestia en general",
    termKo: "비유한 짐승 일반",
    questionEs: "¿Qué significa en general la bestia en parábola?",
    questionKo: "비유한 짐승 일반의 의미는?",
    answerEs: "Falso pastor",
    answerKo: "거짓 목자",
    verseEs: "Sal 49:20",
    verseKo: "시 49:20"
  },
  {
    id: 47,
    code: "Q47",
    chapterId: 10,
    chapterTitleEs: "10. Bestia, cabeza, cuerno, cola",
    chapterTitleKo: "10장. 짐승, 머리, 뿔, 꼬리",
    termEs: "Los tres tipos de hombres que representan las bestias en los libros proféticos",
    termKo: "예언서에 등장하는 짐승이 비유하는 3종류의 인물",
    questionEs: "¿Cuáles son los tres tipos de hombres que representan las bestias en los libros proféticos?",
    questionKo: "예언서에 등장하는 짐승이 비유하는 3종류의 인물은?",
    answerEs: "Tres tipos de hombres: traidor, destructor, salvador y sus pertenecientes",
    answerKo: "배도자, 멸망자, 구원자와 그 소속",
    verseEs: "-",
    verseKo: "-"
  },
  {
    id: 48,
    code: "Q48",
    chapterId: 10,
    chapterTitleEs: "10. Bestia, cabeza, cuerno, cola",
    chapterTitleKo: "10장. 짐승, 머리, 뿔, 꼬리",
    termEs: "La cabeza",
    termKo: "머리",
    questionEs: "¿Qué significa en parábola la cabeza?",
    questionKo: "머리의 의미는?",
    answerEs: "Líder (pastor)",
    answerKo: "우두머리 / 목자",
    verseEs: "Is 29:10, Ef 4:15",
    verseKo: "사 29:10, 엡 4:15"
  },
  {
    id: 49,
    code: "Q49",
    chapterId: 10,
    chapterTitleEs: "10. Bestia, cabeza, cuerno, cola",
    chapterTitleKo: "10장. 짐승, 머리, 뿔, 꼬리",
    termEs: "El cuerno",
    termKo: "뿔",
    questionEs: "¿Qué significa en parábola el cuerno?",
    questionKo: "뿔의 의미는?",
    answerEs: "Persona que tiene autoridad (anciano) y lucha siendo pertenencia de la cabeza",
    answerKo: "권세 있는 자/장로, 머리에 속하여 싸우는 자",
    verseEs: "Ap 5:6, Ap 17:12",
    verseKo: "계 5:6, 계 17:12"
  },
  {
    id: 50,
    code: "Q50",
    chapterId: 10,
    chapterTitleEs: "10. Bestia, cabeza, cuerno, cola",
    chapterTitleKo: "10장. 짐승, 머리, 뿔, 꼬리",
    termEs: "La cola",
    termKo: "꼬리",
    questionEs: "¿Qué significa en parábola la cola?",
    questionKo: "꼬리의 의미는?",
    answerEs: "Falso profeta",
    answerKo: "거짓 선지자",
    verseEs: "Is 9:15",
    verseKo: "사 9:15"
  },
  {
    id: 51,
    code: "Q51",
    chapterId: 11,
    chapterTitleEs: "11. Cordero, vino nuevo, aceite",
    chapterTitleKo: "11장. 어린양, 새 포도주, 감람유",
    termEs: "El cordero",
    termKo: "어린양",
    questionEs: "¿Quién es el cordero en parábola?",
    questionKo: "어린양의 의미는?",
    answerEs: "Jesús",
    answerKo: "예수님",
    verseEs: "Jn 1:29",
    verseKo: "요 1:29"
  },
  {
    id: 52,
    code: "Q52",
    chapterId: 11,
    chapterTitleEs: "11. Cordero, vino nuevo, aceite",
    chapterTitleKo: "11장. 어린양, 새 포도주, 감람유",
    termEs: "La sangre y la carne del cordero",
    termKo: "어린양의 피와 살",
    questionEs: "¿Qué significa en parábola la sangre y la carne del cordero?",
    questionKo: "어린양의 피와 살의 의미는?",
    answerEs: "La palabra de vida de Jesús",
    answerKo: "예수님의 생명의 말씀",
    verseEs: "Jn 6:51-58",
    verseKo: "요 6:51-58"
  },
  {
    id: 53,
    code: "Q53",
    chapterId: 11,
    chapterTitleEs: "11. Cordero, vino nuevo, aceite",
    chapterTitleKo: "11장. 어린양, 새 포도주, 감람유",
    termEs: "El vino nuevo",
    termKo: "새 포도주",
    questionEs: "¿Qué significa en parábola el vino nuevo?",
    questionKo: "새 포도주의 의미는?",
    answerEs: "La palabra revelada nueva",
    answerKo: "새 계시 말씀",
    verseEs: "Is 25:6-8, Lc 5:37-38, Ap 6:6",
    verseKo: "사 25:6-8, 눅 5:37-38, 계 6:6"
  },
  {
    id: 54,
    code: "Q54",
    chapterId: 11,
    chapterTitleEs: "11. Cordero, vino nuevo, aceite",
    chapterTitleKo: "11장. 어린양, 새 포도주, 감람유",
    termEs: "El vino de Satanás",
    termKo: "사단의 포도주",
    questionEs: "¿Qué significa en parábola el vino de Satanás?",
    questionKo: "사단의 포도주의 의미는?",
    answerEs: "Falsa doctrina",
    answerKo: "거짓 교리",
    verseEs: "Dt 32:32-33",
    verseKo: "신 32:32-33"
  },
  {
    id: 55,
    code: "Q55",
    chapterId: 11,
    chapterTitleEs: "11. Cordero, vino nuevo, aceite",
    chapterTitleKo: "11장. 어린양, 새 포도주, 감람유",
    termEs: "Los odres nuevos",
    termKo: "새 부대",
    questionEs: "¿Qué significan en parábola los odres nuevos?",
    questionKo: "새 부대의 의미는?",
    answerEs: "Pastor nuevo y discípulos",
    answerKo: "새 목자와 제자들",
    verseEs: "Lc 5:37-38, Hch 9:15",
    verseKo: "눅 5:37-38, 행 9:15"
  },
  {
    id: 56,
    code: "Q56",
    chapterId: 11,
    chapterTitleEs: "11. Cordero, vino nuevo, aceite",
    chapterTitleKo: "11장. 어린양, 새 포도주, 감람유",
    termEs: "El aceite de oliva",
    termKo: "감람유",
    questionEs: "¿Qué significa en parábola el aceite de oliva?",
    questionKo: "감람유의 의미는?",
    answerEs: "La palabra del testimonio del testigo",
    answerKo: "증인의 증거의 말씀",
    verseEs: "Zac 4:11-14, Ap 11:3-4",
    verseKo: "슥 4:11-14, 계 11:3-4"
  },
  {
    id: 57,
    code: "Q57",
    chapterId: 12,
    chapterTitleEs: "12. Monte, piedra, ídolo",
    chapterTitleKo: "12장. 산, 돌, 우상",
    termEs: "El monte",
    termKo: "산",
    questionEs: "¿Qué significa en parábola el monte?",
    questionKo: "산의 의미는?",
    answerEs: "Iglesia, templo",
    answerKo: "교회, 성전",
    verseEs: "Is 2:2-3, Ap 14:1-3",
    verseKo: "사 2:2-3, 계 14:1-3"
  },
  {
    id: 58,
    code: "Q58",
    chapterId: 12,
    chapterTitleEs: "12. Monte, piedra, ídolo",
    chapterTitleKo: "12장. 산, 돌, 우상",
    termEs: "Los tres tipos de monte en las profecías",
    termKo: "예언서에 나타나는 세 가지 산",
    questionEs: "¿Cuáles son los tres tipos de monte que aparecen en las profecías?",
    questionKo: "예언서에 나타나는 세 가지 산은?",
    answerEs: "Monte de traición, monte de destrucción, monte de salvación",
    answerKo: "배도의 산, 멸망의 산, 구원의 산",
    verseEs: "-",
    verseKo: "-"
  },
  {
    id: 59,
    code: "Q59",
    chapterId: 12,
    chapterTitleEs: "12. Monte, piedra, ídolo",
    chapterTitleKo: "12장. 산, 돌, 우상",
    termEs: "La piedra",
    termKo: "돌",
    questionEs: "¿Qué significa en parábola la piedra?",
    questionKo: "돌의 의미는?",
    answerEs: "Palabra del juicio y pastor que recibe autoridad para juzgar",
    answerKo: "심판의 말씀 및 심판 권세를 받은 목자",
    verseEs: "Mt 21:42-46, 1P 2:4-8",
    verseKo: "마 21:42-46, 벧전 2:4-8"
  },
  {
    id: 60,
    code: "Q60",
    chapterId: 12,
    chapterTitleEs: "12. Monte, piedra, ídolo",
    chapterTitleKo: "12장. 산, 돌, 우상",
    termEs: "El ídolo",
    termKo: "우상",
    questionEs: "¿Quién es en parábola el ídolo?",
    questionKo: "우상의 의미는?",
    answerEs: "Falso maestro (pastor)",
    answerKo: "거짓 스승 / 거짓 목자",
    verseEs: "Hab 2:18",
    verseKo: "합 2:18"
  },
  {
    id: 61,
    code: "Q61",
    chapterId: 13,
    chapterTitleEs: "13. Sello, trompeta, cántico",
    chapterTitleKo: "13장. 인, 나팔, 노래",
    termEs: "El sello (marca)",
    termKo: "인 / 표",
    questionEs: "¿Qué significa en parábola el sello (marca)?",
    questionKo: "인/표의 의미는?",
    answerEs: "Palabra de Dios",
    answerKo: "하나님의 말씀",
    verseEs: "Jn 1:1, Jn 3:31-34",
    verseKo: "요 1:1, 요 3:31-34"
  },
  {
    id: 62,
    code: "Q62",
    chapterId: 13,
    chapterTitleEs: "13. Sello, trompeta, cántico",
    chapterTitleKo: "13장. 인, 나팔, 노래",
    termEs: "El sello (marca) de Satanás",
    termKo: "사단의 인 / 표",
    questionEs: "¿Qué significa en parábola el sello (marca) de Satanás?",
    questionKo: "사단의 인/표의 의미는?",
    answerEs: "Palabra de falsa doctrina",
    answerKo: "사단의 거짓 교리 말씀",
    verseEs: "-",
    verseKo: "-"
  },
  {
    id: 63,
    code: "Q63",
    chapterId: 13,
    chapterTitleEs: "13. Sello, trompeta, cántico",
    chapterTitleKo: "13장. 인, 나팔, 노래",
    termEs: "El sonido de la trompeta",
    termKo: "나팔 소리",
    questionEs: "¿Qué significa en parábola el sonido de la trompeta?",
    questionKo: "나팔 소리의 의미는?",
    answerEs: "Palabra que anuncia",
    answerKo: "알리는/선포하는 말씀",
    verseEs: "Is 58:1, Is 18:3",
    verseKo: "사 58:1, 사 18:3"
  },
  {
    id: 64,
    code: "Q64",
    chapterId: 13,
    chapterTitleEs: "13. Sello, trompeta, cántico",
    chapterTitleKo: "13장. 인, 나팔, 노래",
    termEs: "La trompeta",
    termKo: "나팔",
    questionEs: "¿Quién es en parábola la trompeta?",
    questionKo: "나팔의 의미는?",
    answerEs: "Hombre",
    answerKo: "사람 / 육체",
    verseEs: "Ap 8:2",
    verseKo: "계 8:2"
  },
  {
    id: 65,
    code: "Q65",
    chapterId: 13,
    chapterTitleEs: "13. Sello, trompeta, cántico",
    chapterTitleKo: "13장. 인, 나팔, 노래",
    termEs: "El trompetista",
    termKo: "나팔수",
    questionEs: "¿Quién es en parábola el trompetista?",
    questionKo: "나팔수의 의미는?",
    answerEs: "Espíritu",
    answerKo: "영",
    verseEs: "Ap 8:2",
    verseKo: "계 8:2"
  },
  {
    id: 66,
    code: "Q66",
    chapterId: 13,
    chapterTitleEs: "13. Sello, trompeta, cántico",
    chapterTitleKo: "13장. 인, 나팔, 노래",
    termEs: "El cántico en general",
    termKo: "노래 일반",
    questionEs: "¿Qué significa en parábola el cántico en general?",
    questionKo: "노래 일반의 의미는?",
    answerEs: "Palabra que se predica",
    answerKo: "전파되는 말씀",
    verseEs: "-",
    verseKo: "-"
  },
  {
    id: 67,
    code: "Q67",
    chapterId: 13,
    chapterTitleEs: "13. Sello, trompeta, cántico",
    chapterTitleKo: "13장. 인, 나팔, 노래",
    termEs: "El cántico de Moisés",
    termKo: "모세의 노래",
    questionEs: "¿Qué significa en parábola el cántico de Moisés?",
    questionKo: "모세의 노래의 의미는?",
    answerEs: "Palabra del Antiguo Testamento",
    answerKo: "구약의 말씀",
    verseEs: "-",
    verseKo: "-"
  },
  {
    id: 68,
    code: "Q68",
    chapterId: 13,
    chapterTitleEs: "13. Sello, trompeta, cántico",
    chapterTitleKo: "13장. 인, 나팔, 노래",
    termEs: "El cántico del Cordero",
    termKo: "어린양의 노래",
    questionEs: "¿Qué significa en parábola el cántico del Cordero?",
    questionKo: "어린양의 노래의 의미는?",
    answerEs: "Palabra del Nuevo Testamento",
    answerKo: "신약의 말씀",
    verseEs: "-",
    verseKo: "-"
  },
  {
    id: 69,
    code: "Q69",
    chapterId: 13,
    chapterTitleEs: "13. Sello, trompeta, cántico",
    chapterTitleKo: "13장. 인, 나팔, 노래",
    termEs: "El cántico nuevo",
    termKo: "새 노래",
    questionEs: "¿Qué significa en parábola el cántico nuevo?",
    questionKo: "새 노래의 의미는?",
    answerEs: "Palabra de la realidad cumplida del Apocalipsis",
    answerKo: "계시록 실상 성취의 말씀",
    verseEs: "Ap 14:3",
    verseKo: "계 14:3"
  },
  {
    id: 70,
    code: "Q70",
    chapterId: 14,
    chapterTitleEs: "14. Cuatro seres vivientes, viento, aliento de vida",
    chapterTitleKo: "14장. 네 생물, 바람, 생기",
    termEs: "Los cuatro seres vivientes",
    termKo: "네 생물",
    questionEs: "¿Quiénes son los cuatro seres vivientes en parábola?",
    questionKo: "네 생물의 의미는?",
    answerEs: "Cuatro arcángeles",
    answerKo: "네 천사장",
    verseEs: "Ap 4:6-8",
    verseKo: "계 4:6-8"
  },
  {
    id: 71,
    code: "Q71",
    chapterId: 14,
    chapterTitleEs: "14. Cuatro seres vivientes, viento, aliento de vida",
    chapterTitleKo: "14장. 네 생물, 바람, 생기",
    termEs: "El viento",
    termKo: "바람",
    questionEs: "¿Qué significa en parábola el viento?",
    questionKo: "바람의 의미는?",
    answerEs: "Ángel y juicio",
    answerKo: "천사와 심판",
    verseEs: "Dn 7:2, Heb 1:7, Ap 6:12-13",
    verseKo: "단 7:2, 히 1:7, 계 6:12-13"
  },
  {
    id: 72,
    code: "Q72",
    chapterId: 14,
    chapterTitleEs: "14. Cuatro seres vivientes, viento, aliento de vida",
    chapterTitleKo: "14장. 네 생물, 바람, 생기",
    termEs: "El viento sopla",
    termKo: "바람이 분다",
    questionEs: "¿Qué significa en sentido figurado el viento sopla?",
    questionKo: "바람이 분다의 의미는?",
    answerEs: "Juicio por medio de los ángeles",
    answerKo: "천사들을 통한 심판",
    verseEs: "-",
    verseKo: "-"
  },
  {
    id: 73,
    code: "Q73",
    chapterId: 14,
    chapterTitleEs: "14. Cuatro seres vivientes, viento, aliento de vida",
    chapterTitleKo: "14장. 네 생물, 바람, 생기",
    termEs: "Detener el viento",
    termKo: "바람을 붙잡다 / 멈추다",
    questionEs: "¿Qué significa en sentido figurado detener el viento?",
    questionKo: "바람을 붙잡다/멈추다의 의미는?",
    answerEs: "Suspender el juicio por medio de los ángeles",
    answerKo: "천사들을 통한 심판의 보류/중단",
    verseEs: "-",
    verseKo: "-"
  },
  {
    id: 74,
    code: "Q74",
    chapterId: 14,
    chapterTitleEs: "14. Cuatro seres vivientes, viento, aliento de vida",
    chapterTitleKo: "14장. 네 생물, 바람, 생기",
    termEs: "El aliento de vida",
    termKo: "생기",
    questionEs: "¿Qué significa en parábola el aliento de vida?",
    questionKo: "생기의 의미는?",
    answerEs: "Palabra de vida",
    answerKo: "생명의 말씀",
    verseEs: "Gn 2:7, Ap 11:11",
    verseKo: "창 2:7, 계 11:11"
  },
  {
    id: 75,
    code: "Q75",
    chapterId: 15,
    chapterTitleEs: "15. Muerte, sepultura, resurrección",
    chapterTitleKo: "15장. 사망, 무덤, 부활",
    termEs: "La muerte",
    termKo: "사망",
    questionEs: "¿Qué significa en parábola la muerte?",
    questionKo: "사망의 의미는?",
    answerEs: "Estado sin palabra de vida",
    answerKo: "생명의 말씀이 없는 상태",
    verseEs: "Ez 18:4",
    verseKo: "겔 18:4"
  },
  {
    id: 76,
    code: "Q76",
    chapterId: 15,
    chapterTitleEs: "15. Muerte, sepultura, resurrección",
    chapterTitleKo: "15장. 사망, 무덤, 부활",
    termEs: "La sepultura",
    termKo: "무덤",
    questionEs: "¿Qué significa en parábola la sepultura?",
    questionKo: "무덤의 의미는?",
    answerEs: "Organización de falsa doctrina",
    answerKo: "거짓 교리의 조직체",
    verseEs: "Mt 23:27-28",
    verseKo: "마 23:27-28"
  },
  {
    id: 77,
    code: "Q77",
    chapterId: 15,
    chapterTitleEs: "15. Muerte, sepultura, resurrección",
    chapterTitleKo: "15장. 사망, 무덤, 부활",
    termEs: "La resurrección",
    termKo: "부활",
    questionEs: "¿Qué significa en parábola la resurrección?",
    questionKo: "부활의 의미는?",
    answerEs: "Lo que revive a través de la palabra de vida",
    answerKo: "생명의 말씀을 통해 다시 살아나는 것",
    verseEs: "Jn 5:24-29",
    verseKo: "요 5:24-29"
  },
  {
    id: 78,
    code: "Q78",
    chapterId: 16,
    chapterTitleEs: "16. Esposo, esposa, viuda, huérfano",
    chapterTitleKo: "16장. 남편, 아내, 과부, 고아",
    termEs: "El esposo",
    termKo: "남편",
    questionEs: "¿Qué significa en parábola el esposo?",
    questionKo: "남편의 의미는?",
    answerEs: "Espíritu",
    answerKo: "영",
    verseEs: "Os 2:19-20",
    verseKo: "호 2:19-20"
  },
  {
    id: 79,
    code: "Q79",
    chapterId: 16,
    chapterTitleEs: "16. Esposo, esposa, viuda, huérfano",
    chapterTitleKo: "16장. 남편, 아내, 과부, 고아",
    termEs: "La esposa",
    termKo: "아내",
    questionEs: "¿Qué significa en parábola la esposa?",
    questionKo: "아내의 의미는?",
    answerEs: "Carne",
    answerKo: "육체",
    verseEs: "Os 2:19-20",
    verseKo: "호 2:19-20"
  },
  {
    id: 80,
    code: "Q80",
    chapterId: 16,
    chapterTitleEs: "16. Esposo, esposa, viuda, huérfano",
    chapterTitleKo: "16장. 남편, 아내, 과부, 고아",
    termEs: "La esposa (novia) de Jesús",
    termKo: "예수님의 신부",
    questionEs: "¿Quién es en parábola la esposa (novia) de Jesús?",
    questionKo: "예수님의 신부의 의미는?",
    answerEs: "Los santos y pastores que se unen espiritualmente con Jesús",
    answerKo: "예수님과 영육 결혼하는 성도와 목자",
    verseEs: "Ap 19:7-9, Ap 22:16-17",
    verseKo: "계 19:7-9, 계 22:16-17"
  },
  {
    id: 81,
    code: "Q81",
    chapterId: 16,
    chapterTitleEs: "16. Esposo, esposa, viuda, huérfano",
    chapterTitleKo: "16장. 남편, 아내, 과부, 고아",
    termEs: "La viuda",
    termKo: "과부",
    questionEs: "¿Quién es en parábola la viuda?",
    questionKo: "과부의 의미는?",
    answerEs: "Pastor traidor",
    answerKo: "배도한 목자",
    verseEs: "Lm 5:3",
    verseKo: "애 5:3"
  },
  {
    id: 82,
    code: "Q82",
    chapterId: 16,
    chapterTitleEs: "16. Esposo, esposa, viuda, huérfano",
    chapterTitleKo: "16장. 남편, 아내, 과부, 고아",
    termEs: "Los huérfanos",
    termKo: "고아",
    questionEs: "¿Quiénes son en parábola los huérfanos?",
    questionKo: "고아의 의미는?",
    answerEs: "Los congregados que pertenecen al pastor traidor",
    answerKo: "배도한 목자에게 속한 교인들",
    verseEs: "Lm 5:3",
    verseKo: "애 5:3"
  },
  {
    id: 83,
    code: "Q83",
    chapterId: 17,
    chapterTitleEs: "17. Jerusalén, Babilonia, guerra, arma",
    chapterTitleKo: "17장. 예루살렘, 바벨론, 전쟁, 무기",
    termEs: "Jerusalén",
    termKo: "예루살렘",
    questionEs: "¿Qué significa en parábola Jerusalén?",
    questionKo: "예루살렘의 의미는?",
    answerEs: "La denominación del pueblo elegido",
    answerKo: "선민의 교단 / 선민 장막",
    verseEs: "Mt 24:1-2, Lc 21:20-21",
    verseKo: "마 24:1-2, 눅 21:20-21"
  },
  {
    id: 84,
    code: "Q84",
    chapterId: 17,
    chapterTitleEs: "17. Jerusalén, Babilonia, guerra, arma",
    chapterTitleKo: "17장. 예루살렘, 바벨론, 전쟁, 무기",
    termEs: "La Nueva Jerusalén en el mundo físico",
    termKo: "육계의 새 예루살렘",
    questionEs: "¿Qué significa en el mundo físico la Nueva Jerusalén?",
    questionKo: "육계의 새 예루살렘의 의미는?",
    answerEs: "La nueva organización/tabernáculo del pueblo elegido vencedor",
    answerKo: "새 선민의 장막 / 증거장막성전",
    verseEs: "Jer 3:17, Zac 8:3",
    verseKo: "렘 3:17, 슥 8:3"
  },
  {
    id: 85,
    code: "Q85",
    chapterId: 17,
    chapterTitleEs: "17. Jerusalén, Babilonia, guerra, arma",
    chapterTitleKo: "17장. 예루살렘, 바벨론, 전쟁, 무기",
    termEs: "Babilonia",
    termKo: "바벨론",
    questionEs: "¿Qué significa en parábola Babilonia?",
    questionKo: "바벨론의 의미는?",
    answerEs: "La denominación de demonios gentiles",
    answerKo: "이방 귀신의 교단",
    verseEs: "Ap 17:5, Ap 18:2-4",
    verseKo: "계 17:5, 계 18:2-4"
  },
  {
    id: 86,
    code: "Q86",
    chapterId: 17,
    chapterTitleEs: "17. Jerusalén, Babilonia, guerra, arma",
    chapterTitleKo: "17장. 예루살렘, 바벨론, 전쟁, 무기",
    termEs: "La guerra",
    termKo: "전쟁",
    questionEs: "¿Qué significa en parábola la guerra?",
    questionKo: "전쟁의 의미는?",
    answerEs: "Lucha de doctrinas",
    answerKo: "교리 싸움",
    verseEs: "Mt 24:7-8, Ef 6:12",
    verseKo: "마 24:7-8, 엡 6:12"
  },
  {
    id: 87,
    code: "Q87",
    chapterId: 17,
    chapterTitleEs: "17. Jerusalén, Babilonia, guerra, arma",
    chapterTitleKo: "17장. 예루살렘, 바벨론, 전쟁, 무기",
    termEs: "El arma",
    termKo: "무기",
    questionEs: "¿Qué significa en parábola el arma?",
    questionKo: "무기의 의미는?",
    answerEs: "Palabra del testimonio",
    answerKo: "증거의 말씀",
    verseEs: "Ap 12:11, Ef 6:17",
    verseKo: "계 12:11, 엡 6:17"
  },
  {
    id: 88,
    code: "Q88",
    chapterId: 18,
    chapterTitleEs: "18. Cielo, tierra, sol, luna, estrellas",
    chapterTitleKo: "18장. 하늘, 땅, 해, 달, 별",
    termEs: "El cielo",
    termKo: "하늘",
    questionEs: "¿Qué significa en parábola el cielo?",
    questionKo: "하늘의 의미는?",
    answerEs: "Tabernáculo del pueblo elegido",
    answerKo: "선민의 장막",
    verseEs: "Gn 37:9-11, Ap 13:6",
    verseKo: "창 37:9-11, 계 13:6"
  },
  {
    id: 89,
    code: "Q89",
    chapterId: 18,
    chapterTitleEs: "18. Cielo, tierra, sol, luna, estrellas",
    chapterTitleKo: "18장. 하늘, 땅, 해, 달, 별",
    termEs: "El Nuevo cielo",
    termKo: "새 하늘",
    questionEs: "¿Qué significa en parábola el Nuevo cielo?",
    questionKo: "새 하늘의 의미는?",
    answerEs: "Nuevo tabernáculo",
    answerKo: "새 장막 / 증거장막성전",
    verseEs: "Ap 15:5, Ap 21:1",
    verseKo: "계 15:5, 계 21:1"
  },
  {
    id: 90,
    code: "Q90",
    chapterId: 18,
    chapterTitleEs: "18. Cielo, tierra, sol, luna, estrellas",
    chapterTitleKo: "18장. 하늘, 땅, 해, 달, 별",
    termEs: "La tierra",
    termKo: "땅",
    questionEs: "¿Qué significa en parábola la tierra?",
    questionKo: "땅의 의미는?",
    answerEs: "Pueblo (santo)",
    answerKo: "백성 / 성도 / 흙으로 된 육체",
    verseEs: "Ap 13:3",
    verseKo: "계 13:3"
  },
  {
    id: 91,
    code: "Q91",
    chapterId: 18,
    chapterTitleEs: "18. Cielo, tierra, sol, luna, estrellas",
    chapterTitleKo: "18장. 하늘, 땅, 해, 달, 별",
    termEs: "El cielo y la tierra en Isaías 1:2",
    termKo: "이사야 1:2의 하늘과 땅",
    questionEs: "¿Qué significan en parábola el cielo y la tierra en Isaías 1:2?",
    questionKo: "이사야 1:2의 하늘과 땅의 의미는?",
    answerEs: "Espíritus y carnes",
    answerKo: "영들과 육체들",
    verseEs: "Is 1:2",
    verseKo: "사 1:2"
  },
  {
    id: 92,
    code: "Q92",
    chapterId: 18,
    chapterTitleEs: "18. Cielo, tierra, sol, luna, estrellas",
    chapterTitleKo: "18장. 하늘, 땅, 해, 달, 별",
    termEs: "El sol",
    termKo: "해",
    questionEs: "¿Quién es en parábola el sol?",
    questionKo: "해의 의미는?",
    answerEs: "Pastor",
    answerKo: "목자",
    verseEs: "Gn 37:9-11, Mt 24:29, Ap 6:12-13",
    verseKo: "창 37:9-11, 마 24:29, 계 6:12-13"
  },
  {
    id: 93,
    code: "Q93",
    chapterId: 18,
    chapterTitleEs: "18. Cielo, tierra, sol, luna, estrellas",
    chapterTitleKo: "18장. 하늘, 땅, 해, 달, 별",
    termEs: "La luna",
    termKo: "달",
    questionEs: "¿Quién es en parábola la luna?",
    questionKo: "달의 의미는?",
    answerEs: "Evangelista",
    answerKo: "전도자 / 사역자",
    verseEs: "Gn 37:9-11, Mt 24:29, Ap 6:12-13",
    verseKo: "창 37:9-11, 마 24:29, 계 6:12-13"
  },
  {
    id: 94,
    code: "Q94",
    chapterId: 18,
    chapterTitleEs: "18. Cielo, tierra, sol, luna, estrellas",
    chapterTitleKo: "18장. 하늘, 땅, 해, 달, 별",
    termEs: "Las estrellas",
    termKo: "별들",
    questionEs: "¿Quiénes son en parábola las estrellas?",
    questionKo: "별들의 의미는?",
    answerEs: "Santos",
    answerKo: "성도들",
    verseEs: "Gn 37:9-11, Mt 24:29, Ap 6:12-13",
    verseKo: "창 37:9-11, 마 24:29, 계 6:12-13"
  },
  {
    id: 95,
    code: "Q95",
    chapterId: 19,
    chapterTitleEs: "19. Israel",
    chapterTitleKo: "19장. 이스라엘",
    termEs: "Israel",
    termKo: "이스라엘",
    questionEs: "¿Qué significa en parábola Israel?",
    questionKo: "이스라엘의 의미는?",
    answerEs: "Vencedor, pueblo elegido",
    answerKo: "이긴자, 선민",
    verseEs: "Gn 32:28, Jn 16:33, Ap 2-3",
    verseKo: "창 32:28, 요 16:33, 계 2-3"
  },
  {
    id: 96,
    code: "Q96",
    chapterId: 20,
    chapterTitleEs: "20. Reino de los cielos y llave",
    chapterTitleKo: "20장. 천국과 열쇠",
    termEs: "El primer significado del reino de los cielos",
    termKo: "천국의 1번째 의미",
    questionEs: "¿Cuál es el primer significado del reino de los cielos?",
    questionKo: "천국의 1번째 의미는?",
    answerEs: "El reino de los cielos del mundo espiritual",
    answerKo: "영계 천국",
    verseEs: "Ap 4:1-8, Ap 21:2, 10",
    verseKo: "계 4:1-8, 계 21:2, 10"
  },
  {
    id: 97,
    code: "Q97",
    chapterId: 20,
    chapterTitleEs: "20. Reino de los cielos y llave",
    chapterTitleKo: "20장. 천국과 열쇠",
    termEs: "El segundo significado del reino de los cielos",
    termKo: "천국의 2번째 의미",
    questionEs: "¿Cuál es el segundo significado del reino de los cielos?",
    questionKo: "천국의 2번째 의미는?",
    answerEs: "El reino de los cielos que es el tabernáculo del pueblo elegido anterior",
    answerKo: "이전 선민의 장막인 천국",
    verseEs: "Ap 13:6",
    verseKo: "계 13:6"
  },
  {
    id: 98,
    code: "Q98",
    chapterId: 20,
    chapterTitleEs: "20. Reino de los cielos y llave",
    chapterTitleKo: "20장. 천국과 열쇠",
    termEs: "El tercer significado del reino de los cielos",
    termKo: "천국의 3번째 의미",
    questionEs: "¿Cuál es el tercer significado del reino de los cielos?",
    questionKo: "천국의 3번째 의미는?",
    answerEs: "Las 12 tribus recreadas y selladas",
    answerKo: "재창조되어 인 맞은 12지파",
    verseEs: "Ap 7, Ap 14",
    verseKo: "계 7, 계 14"
  },
  {
    id: 99,
    code: "Q99",
    chapterId: 20,
    chapterTitleEs: "20. Reino de los cielos y llave",
    chapterTitleKo: "20장. 천국과 열쇠",
    termEs: "La llave",
    termKo: "열쇠",
    questionEs: "¿Qué significa en parábola la llave?",
    questionKo: "열쇠의 의미는?",
    answerEs: "Sabiduría para conocer el misterio",
    answerKo: "비밀을 아는 지혜",
    verseEs: "Lc 11:52, Ap 1:18",
    verseKo: "눅 11:52, 계 1:18"
  }
];

function normalizeAnswerKey(str: string): string {
  return str.trim().toLowerCase().replace(/\s+/g, ' ');
}

/**
 * Returns all questions that share the same answer (in either Spanish or Korean),
 * so that when a Reverse question (Answer -> Question) is presented without verse hints,
 * all matching parable concepts are accepted and shown together.
 */
export function getEquivalentQuestions(question: ParableQuestion): ParableQuestion[] {
  const keyEs = normalizeAnswerKey(question.answerEs);
  const keyKo = normalizeAnswerKey(question.answerKo);
  return QUESTIONS.filter(
    (q) =>
      normalizeAnswerKey(q.answerEs) === keyEs ||
      normalizeAnswerKey(q.answerKo) === keyKo
  );
}

export interface DaySchedule {
  day: number;
  titleKo: string;
  titleEs: string;
  newConceptIds: number[];
  learnedPoolIds: number[];
  reviewConceptCount: number;
}

export const DAY_SCHEDULES: DaySchedule[] = Array.from({ length: 20 }, (_, idx) => {
  const day = idx + 1;
  if (day === 1) {
    return {
      day: 1,
      titleKo: "1일차 · 신규 10문항 (Q1~Q10)",
      titleEs: "Día 1 · 10 nuevas (Q1~Q10)",
      newConceptIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      learnedPoolIds: [],
      reviewConceptCount: 0
    };
  }
  if (day <= 18) {
    const startId = 10 + (day - 2) * 5 + 1;
    const endId = startId + 4;
    const newIds: number[] = [];
    for (let i = startId; i <= endId; i++) {
      newIds.push(i);
    }
    const poolIds: number[] = [];
    for (let i = 1; i < startId; i++) {
      poolIds.push(i);
    }
    return {
      day,
      titleKo: `${day}일차 · 신규 5 (Q${startId}~Q${endId}) + 복습 5`,
      titleEs: `Día ${day} · 5 nuevas (Q${startId}~Q${endId}) + 5 repaso`,
      newConceptIds: newIds,
      learnedPoolIds: poolIds,
      reviewConceptCount: 5
    };
  }
  if (day === 19) {
    const newIds = [96, 97, 98, 99];
    const poolIds = Array.from({ length: 95 }, (_, i) => i + 1);
    return {
      day: 19,
      titleKo: "19일차 · 신규 4 (Q96~Q99) + 복습 6",
      titleEs: "Día 19 · 4 nuevas (Q96~Q99) + 6 repaso",
      newConceptIds: newIds,
      learnedPoolIds: poolIds,
      reviewConceptCount: 6
    };
  }
  return {
    day: 20,
    titleKo: "20일차 · 전 범위 랜덤 10문항",
    titleEs: "Día 20 · 10 aleatorias finales",
    newConceptIds: [],
    learnedPoolIds: Array.from({ length: 99 }, (_, i) => i + 1),
    reviewConceptCount: 10
  };
});

export function sampleRandomIds(
  poolIds: number[],
  count: number,
  prioritizeIds: number[] = []
): number[] {
  if (count <= 0) return [];
  if (poolIds.length <= count) {
    return [...poolIds];
  }
  const copy = [...poolIds];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  if (prioritizeIds.length === 0) {
    return copy.slice(0, count).sort((a, b) => a - b);
  }
  const priorityMatches = copy.filter((id) => prioritizeIds.includes(id));
  const others = copy.filter((id) => !prioritizeIds.includes(id));
  return [...priorityMatches, ...others].slice(0, count).sort((a, b) => a - b);
}

/**
 * Generates ONLY Question -> Answer (FORWARD) study/exam cards for each day's
 * new questions and cumulative random review questions.
 */
export function buildBidirectionalSessionCards(
  newConceptIds: number[],
  reviewConceptIds: number[]
): StudyCardItem[] {
  const cards: StudyCardItem[] = [];

  const appendForwardOnly = (id: number, origin: QuestionOrigin) => {
    const q = QUESTIONS.find((item) => item.id === id);
    if (!q) return;
    cards.push({
      uid: `${q.id}-FORWARD-${origin}`,
      question: q,
      direction: 'FORWARD',
      origin,
      equivalentQuestions: [q]
    });
  };

  newConceptIds.forEach((id) => appendForwardOnly(id, 'NEW'));
  reviewConceptIds.forEach((id) => appendForwardOnly(id, 'REVIEW'));

  return cards;
}
