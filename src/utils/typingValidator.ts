import { ParableQuestion, AppLanguage } from '../data/questions';

export interface KeywordSpec {
  isShort: boolean; // true = 단답형 (정확히 일치해야 함), false = 문장형/복합형 (실제 답의 핵심단어 모두 포함해야 함)
  koSlots: string[][];
  esSlots: string[][];
}

/**
 * 모든 정답 핵심어(koSlots, esSlots)는 QUESTIONS의 실제 정답(answerKo, answerEs) 내에
 * 실제로 존재하는 단어들로만 100% 추출하여 구성됨.
 */
export const QUESTION_KEYWORD_SPECS: Record<number, KeywordSpec> = {
  // Q1: 실체가 나타나기 전에 비밀을 감추기 위해 비슷한 것으로 빗대어 말한 것 / Es para ocultar el misterio antes de la aparición de la realidad, se compara con algo similar
  1: {
    isShort: false,
    koSlots: [['실체'], ['비밀'], ['감추기'], ['비슷한'], ['빗대어']],
    esSlots: [['ocultar'], ['misterio'], ['realidad'], ['compara'], ['similar']]
  },
  // Q2: 말씀 / Palabra
  2: {
    isShort: true,
    koSlots: [['말씀']],
    esSlots: [['Palabra']]
  },
  // Q3: 거짓 교리 / Falsa doctrina
  3: {
    isShort: true,
    koSlots: [['거짓 교리']],
    esSlots: [['Falsa doctrina']]
  },
  // Q4: 사람의 마음, 세상 / Corazón del hombre, mundo
  4: {
    isShort: false,
    koSlots: [['사람의 마음', '마음'], ['세상']],
    esSlots: [['Corazón'], ['mundo']]
  },
  // Q5: 예수님의 교회들 / Las iglesias de Jesús
  5: {
    isShort: false,
    koSlots: [['예수님'], ['교회들', '교회']],
    esSlots: [['iglesias'], ['Jesús']]
  },
  // Q6: 말씀의 씨로 거듭난 속사람 또는 목자 / El hombre interior renacido de la semilla que es la palabra (o pastor)
  6: {
    isShort: false,
    koSlots: [['말씀'], ['씨'], ['거듭난'], ['속사람', '목자']],
    esSlots: [['hombre interior', 'pastor'], ['renacido'], ['semilla'], ['palabra']]
  },
  // Q7: 제자 / Discípulo
  7: {
    isShort: true,
    koSlots: [['제자']],
    esSlots: [['Discípulo']]
  },
  // Q8: 전도자 / Evangelista
  8: {
    isShort: true,
    koSlots: [['전도자']],
    esSlots: [['Evangelista']]
  },
  // Q9: 말씀, 말씀을 전하여 맺은 성도 / Palabra, santo producto de haber dado la palabra
  9: {
    isShort: false,
    koSlots: [['말씀'], ['성도']],
    esSlots: [['Palabra'], ['santo']]
  },
  // Q10: 영 / Espíritu
  10: {
    isShort: true,
    koSlots: [['영']],
    esSlots: [['Espíritu']]
  },
  // Q11: 악령 / Espíritu maligno
  11: {
    isShort: true,
    koSlots: [['악령']],
    esSlots: [['Espíritu maligno']]
  },
  // Q12: 말씀 / Palabra
  12: {
    isShort: true,
    koSlots: [['말씀']],
    esSlots: [['Palabra']]
  },
  // Q13: 거짓 교리 / Falsa doctrina
  13: {
    isShort: true,
    koSlots: [['거짓 교리']],
    esSlots: [['Falsa doctrina']]
  },
  // Q14: 교리 / 교훈 | Doctrina
  14: {
    isShort: true,
    koSlots: [['교리', '교훈', '교리 / 교훈']],
    esSlots: [['Doctrina']]
  },
  // Q15: 사단의 교리 / 사단의 교훈 | Doctrina de Satanás
  15: {
    isShort: false,
    koSlots: [['사단'], ['교리', '교훈']],
    esSlots: [['Doctrina'], ['Satanás']]
  },
  // Q16: 신앙의 변화를 겪음 / 마음이 부풂 | Tener un cambio en la fe
  16: {
    isShort: false,
    koSlots: [['신앙의 변화', '마음이 부풂']],
    esSlots: [['cambio'], ['fe']]
  },
  // Q17: 사람, 교회 / Hombre, iglesia
  17: {
    isShort: false,
    koSlots: [['사람'], ['교회']],
    esSlots: [['Hombre'], ['iglesia']]
  },
  // Q18: 말씀 / Palabra
  18: {
    isShort: true,
    koSlots: [['말씀']],
    esSlots: [['Palabra']]
  },
  // Q19: 사단의 말 / 거짓 교리 | Palabra de Satanás (falsa doctrina)
  19: {
    isShort: false,
    koSlots: [['사단의 말', '거짓 교리']],
    esSlots: [['Palabra de Satanás', 'falsa doctrina']]
  },
  // Q20: 말씀과 사람 / Palabra y hombre
  20: {
    isShort: false,
    koSlots: [['말씀'], ['사람']],
    esSlots: [['Palabra'], ['hombre']]
  },
  // Q21: 다스리는 권세 / 치리권 | Autoridad para gobernar
  21: {
    isShort: false,
    koSlots: [['다스리는 권세', '치리권']],
    esSlots: [['Autoridad'], ['gobernar']]
  },
  // Q22: 말씀 / Palabra
  22: {
    isShort: true,
    koSlots: [['말씀']],
    esSlots: [['Palabra']]
  },
  // Q23: 사람 / Hombre
  23: {
    isShort: true,
    koSlots: [['사람']],
    esSlots: [['Hombre']]
  },
  // Q24: 성도들의 기도 / Oración de los santos
  24: {
    isShort: false,
    koSlots: [['성도'], ['기도']],
    esSlots: [['Oración'], ['santos']]
  },
  // Q25: 올라가는 기도 / La oración que es elevada
  25: {
    isShort: false,
    koSlots: [['올라가는'], ['기도']],
    esSlots: [['oración'], ['elevada']]
  },
  // Q26: 교회 / Iglesia
  26: {
    isShort: true,
    koSlots: [['교회']],
    esSlots: [['Iglesia']]
  },
  // Q27: 생명의 말씀 / Palabra de vida
  27: {
    isShort: false,
    koSlots: [['생명'], ['말씀']],
    esSlots: [['Palabra'], ['vida']]
  },
  // Q28: 말씀에 대한 무지 / Ignorancia de la palabra
  28: {
    isShort: false,
    koSlots: [['말씀'], ['무지']],
    esSlots: [['Ignorancia'], ['palabra']]
  },
  // Q29: 영과 일꾼/사명자 / Espíritu y obrero
  29: {
    isShort: false,
    koSlots: [['영'], ['일꾼', '사명자']],
    esSlots: [['Espíritu'], ['obrero']]
  },
  // Q30: 영과 일꾼/사명자 / Espíritu y obrero
  30: {
    isShort: false,
    koSlots: [['영'], ['일꾼', '사명자']],
    esSlots: [['Espíritu'], ['obrero']]
  },
  // Q31: 말씀을 보아도 깨닫지 못하는 자 / El que ve la palabra pero no la entiende
  31: {
    isShort: false,
    koSlots: [['말씀'], ['보아도'], ['깨닫지 못하는']],
    esSlots: [['ve'], ['palabra'], ['entiende']]
  },
  // Q32: 말씀을 들어도 깨닫지 못하는 자 / El que oye la palabra pero no la entiende
  32: {
    isShort: false,
    koSlots: [['말씀'], ['들어도'], ['깨닫지 못하는']],
    esSlots: [['oye'], ['palabra'], ['entiende']]
  },
  // Q33: 마음, 행실, 교리 / Corazón, acciones, doctrina
  33: {
    isShort: false,
    koSlots: [['마음'], ['행실'], ['교리']],
    esSlots: [['Corazón'], ['acciones'], ['doctrina']]
  },
  // Q34: 옳은 행실 / Acciones justas
  34: {
    isShort: true,
    koSlots: [['옳은 행실']],
    esSlots: [['Acciones justas']]
  },
  // Q35: 거짓 교리 / Falsa doctrina
  35: {
    isShort: true,
    koSlots: [['거짓 교리']],
    esSlots: [['Falsa doctrina']]
  },
  // Q36: 말씀 / Palabra
  36: {
    isShort: true,
    koSlots: [['말씀']],
    esSlots: [['Palabra']]
  },
  // Q37: 말씀/지식이 많은 자 / Persona que tiene mucha palabra (conocimiento)
  37: {
    isShort: false,
    koSlots: [['말씀', '지식'], ['많은']],
    esSlots: [['mucha'], ['palabra', 'conocimiento']]
  },
  // Q38: 말씀 / Palabra
  38: {
    isShort: true,
    koSlots: [['말씀']],
    esSlots: [['Palabra']]
  },
  // Q39: 목자와 성전/교회 / Pastor y templo (iglesia)
  39: {
    isShort: false,
    koSlots: [['목자'], ['성전', '교회']],
    esSlots: [['Pastor'], ['templo', 'iglesia']]
  },
  // Q40: 제자들과 전도자의 마음 / Corazón de discípulos y evangelistas
  40: {
    isShort: false,
    koSlots: [['제자'], ['전도자'], ['마음']],
    esSlots: [['Corazón'], ['discípulos'], ['evangelistas']]
  },
  // Q41: 세상 / Mundo
  41: {
    isShort: true,
    koSlots: [['세상']],
    esSlots: [['Mundo']]
  },
  // Q42: 목자 / 전도자 | Pastor (evangelista)
  42: {
    isShort: true,
    koSlots: [['목자', '전도자', '목자 / 전도자']],
    esSlots: [['Pastor', 'evangelista', 'Pastor (evangelista)']]
  },
  // Q43: 말씀 / Palabra
  43: {
    isShort: true,
    koSlots: [['말씀']],
    esSlots: [['Palabra']]
  },
  // Q44: 사람 / Hombre
  44: {
    isShort: true,
    koSlots: [['사람']],
    esSlots: [['Hombre']]
  },
  // Q45: 교회와 같은 조직체 / Organización como iglesia
  45: {
    isShort: false,
    koSlots: [['교회'], ['조직체']],
    esSlots: [['Organización'], ['iglesia']]
  },
  // Q46: 거짓 목자 / Falso pastor
  46: {
    isShort: true,
    koSlots: [['거짓 목자']],
    esSlots: [['Falso pastor']]
  },
  // Q47: 배도자, 멸망자, 구원자와 그 소속 / Tres tipos de hombres: traidor, destructor, salvador y sus pertenecientes
  47: {
    isShort: false,
    koSlots: [['배도자'], ['멸망자'], ['구원자'], ['소속']],
    esSlots: [['traidor'], ['destructor'], ['salvador'], ['pertenecientes']]
  },
  // Q48: 우두머리 / 목자 | Líder (pastor)
  48: {
    isShort: true,
    koSlots: [['우두머리', '목자', '우두머리 / 목자']],
    esSlots: [['Líder', 'pastor', 'Líder (pastor)']]
  },
  // Q49: 권세 있는 자/장로, 머리에 속하여 싸우는 자 / Persona que tiene autoridad (anciano) y lucha siendo pertenencia de la cabeza
  49: {
    isShort: false,
    koSlots: [['권세', '장로'], ['머리'], ['싸우는']],
    esSlots: [['autoridad', 'anciano'], ['lucha'], ['cabeza']]
  },
  // Q50: 거짓 선지자 / Falso profeta
  50: {
    isShort: true,
    koSlots: [['거짓 선지자']],
    esSlots: [['Falso profeta']]
  },
  // Q51: 예수님 / Jesús
  51: {
    isShort: true,
    koSlots: [['예수님']],
    esSlots: [['Jesús']]
  },
  // Q52: 예수님의 생명의 말씀 / La palabra de vida de Jesús
  52: {
    isShort: false,
    koSlots: [['예수님'], ['생명'], ['말씀']],
    esSlots: [['palabra'], ['vida'], ['Jesús']]
  },
  // Q53: 새 계시 말씀 / La palabra revelada nueva
  53: {
    isShort: false,
    koSlots: [['새'], ['계시'], ['말씀']],
    esSlots: [['palabra'], ['revelada'], ['nueva']]
  },
  // Q54: 거짓 교리 / Falsa doctrina
  54: {
    isShort: true,
    koSlots: [['거짓 교리']],
    esSlots: [['Falsa doctrina']]
  },
  // Q55: 새 목자와 제자들 / Pastor nuevo y discípulos
  55: {
    isShort: false,
    koSlots: [['새 목자'], ['제자']],
    esSlots: [['Pastor nuevo'], ['discípulos']]
  },
  // Q56: 증인의 증거의 말씀 / La palabra del testimonio del testigo
  56: {
    isShort: false,
    koSlots: [['증인'], ['증거'], ['말씀']],
    esSlots: [['palabra'], ['testimonio'], ['testigo']]
  },
  // Q57: 교회, 성전 / Iglesia, templo
  57: {
    isShort: false,
    koSlots: [['교회'], ['성전']],
    esSlots: [['Iglesia'], ['templo']]
  },
  // Q58: 배도의 산, 멸망의 산, 구원의 산 / Monte de traición, monte de destrucción, monte de salvación
  58: {
    isShort: false,
    koSlots: [['배도의 산'], ['멸망의 산'], ['구원의 산']],
    esSlots: [['Monte de traición'], ['monte de destrucción'], ['monte de salvación']]
  },
  // Q59: 심판의 말씀 및 심판 권세를 받은 목자 / Palabra del juicio y pastor que recibe autoridad para juzgar
  59: {
    isShort: false,
    koSlots: [['심판'], ['말씀'], ['권세'], ['목자']],
    esSlots: [['Palabra'], ['juicio'], ['pastor'], ['autoridad']]
  },
  // Q60: 거짓 스승 / 거짓 목자 | Falso maestro (pastor)
  60: {
    isShort: false,
    koSlots: [['거짓 스승', '거짓 목자']],
    esSlots: [['Falso maestro', 'pastor']]
  },
  // Q61: 하나님의 말씀 / Palabra de Dios
  61: {
    isShort: false,
    koSlots: [['하나님'], ['말씀']],
    esSlots: [['Palabra'], ['Dios']]
  },
  // Q62: 사단의 거짓 교리 말씀 / Palabra de falsa doctrina
  62: {
    isShort: false,
    koSlots: [['사단'], ['거짓 교리'], ['말씀']],
    esSlots: [['Palabra'], ['falsa doctrina']]
  },
  // Q63: 알리는/선포하는 말씀 / Palabra que anuncia
  63: {
    isShort: false,
    koSlots: [['알리는', '선포하는'], ['말씀']],
    esSlots: [['Palabra'], ['anuncia']]
  },
  // Q64: 사람 / 육체 | Hombre
  64: {
    isShort: true,
    koSlots: [['사람', '육체', '사람 / 육체']],
    esSlots: [['Hombre']]
  },
  // Q65: 영 / Espíritu
  65: {
    isShort: true,
    koSlots: [['영']],
    esSlots: [['Espíritu']]
  },
  // Q66: 전파되는 말씀 / Palabra que se predica
  66: {
    isShort: false,
    koSlots: [['전파되는'], ['말씀']],
    esSlots: [['Palabra'], ['predica']]
  },
  // Q67: 구약의 말씀 / Palabra del Antiguo Testamento
  67: {
    isShort: false,
    koSlots: [['구약'], ['말씀']],
    esSlots: [['Palabra'], ['Antiguo Testamento']]
  },
  // Q68: 신약의 말씀 / Palabra del Nuevo Testamento
  68: {
    isShort: false,
    koSlots: [['신약'], ['말씀']],
    esSlots: [['Palabra'], ['Nuevo Testamento']]
  },
  // Q69: 계시록 실상 성취의 말씀 / Palabra de la realidad cumplida del Apocalipsis
  69: {
    isShort: false,
    koSlots: [['계시록'], ['실상'], ['성취'], ['말씀']],
    esSlots: [['Palabra'], ['realidad'], ['cumplida'], ['Apocalipsis']]
  },
  // Q70: 네 천사장 / Cuatro arcángeles
  70: {
    isShort: true,
    koSlots: [['네 천사장']],
    esSlots: [['Cuatro arcángeles']]
  },
  // Q71: 천사와 심판 / Ángel y juicio
  71: {
    isShort: false,
    koSlots: [['천사'], ['심판']],
    esSlots: [['Ángel'], ['juicio']]
  },
  // Q72: 천사들을 통한 심판 / Juicio por medio de los ángeles
  72: {
    isShort: false,
    koSlots: [['천사'], ['심판']],
    esSlots: [['Juicio'], ['ángeles']]
  },
  // Q73: 천사들을 통한 심판의 보류/중단 / Suspender el juicio por medio de los ángeles
  73: {
    isShort: false,
    koSlots: [['천사'], ['심판'], ['보류', '중단']],
    esSlots: [['Suspender'], ['juicio'], ['ángeles']]
  },
  // Q74: 생명의 말씀 / Palabra de vida
  74: {
    isShort: false,
    koSlots: [['생명'], ['말씀']],
    esSlots: [['Palabra'], ['vida']]
  },
  // Q75: 생명의 말씀이 없는 상태 / Estado sin palabra de vida
  75: {
    isShort: false,
    koSlots: [['생명'], ['말씀'], ['없는'], ['상태']],
    esSlots: [['Estado'], ['sin'], ['palabra'], ['vida']]
  },
  // Q76: 거짓 교리의 조직체 / Organización de falsa doctrina
  76: {
    isShort: false,
    koSlots: [['거짓 교리'], ['조직체']],
    esSlots: [['Organización'], ['falsa doctrina']]
  },
  // Q77: 생명의 말씀을 통해 다시 살아나는 것 / Lo que revive a través de la palabra de vida
  77: {
    isShort: false,
    koSlots: [['생명'], ['말씀'], ['다시 살아나는']],
    esSlots: [['revive'], ['palabra'], ['vida']]
  },
  // Q78: 영 / Espíritu
  78: {
    isShort: true,
    koSlots: [['영']],
    esSlots: [['Espíritu']]
  },
  // Q79: 육체 / Carne
  79: {
    isShort: true,
    koSlots: [['육체']],
    esSlots: [['Carne']]
  },
  // Q80: 예수님과 영육 결혼하는 성도와 목자 / Los santos y pastores que se unen espiritualmente con Jesús
  80: {
    isShort: false,
    koSlots: [['예수님'], ['영육 결혼'], ['성도'], ['목자']],
    esSlots: [['santos'], ['pastores'], ['unen espiritualmente'], ['Jesús']]
  },
  // Q81: 배도한 목자 / Pastor traidor
  81: {
    isShort: true,
    koSlots: [['배도한 목자']],
    esSlots: [['Pastor traidor']]
  },
  // Q82: 배도한 목자에게 속한 교인들 / Los congregados que pertenecen al pastor traidor
  82: {
    isShort: false,
    koSlots: [['배도한 목자'], ['교인']],
    esSlots: [['congregados'], ['pastor traidor']]
  },
  // Q83: 선민의 교단 / 선민 장막 | La denominación del pueblo elegido
  83: {
    isShort: false,
    koSlots: [['선민'], ['교단', '장막']],
    esSlots: [['denominación'], ['pueblo elegido']]
  },
  // Q84: 새 선민의 장막 / 증거장막성전 | La nueva organización/tabernáculo del pueblo elegido vencedor
  84: {
    isShort: false,
    koSlots: [['새 선민의 장막', '증거장막성전']],
    esSlots: [['nueva'], ['organización', 'tabernáculo'], ['pueblo elegido'], ['vencedor']]
  },
  // Q85: 이방 귀신의 교단 / La denominación de demonios gentiles
  85: {
    isShort: false,
    koSlots: [['이방'], ['귀신'], ['교단']],
    esSlots: [['denominación'], ['demonios'], ['gentiles']]
  },
  // Q86: 교리 싸움 / Lucha de doctrinas
  86: {
    isShort: true,
    koSlots: [['교리 싸움']],
    esSlots: [['Lucha de doctrinas']]
  },
  // Q87: 증거의 말씀 / Palabra del testimonio
  87: {
    isShort: false,
    koSlots: [['증거'], ['말씀']],
    esSlots: [['Palabra'], ['testimonio']]
  },
  // Q88: 선민의 장막 / Tabernáculo del pueblo elegido
  88: {
    isShort: false,
    koSlots: [['선민'], ['장막']],
    esSlots: [['Tabernáculo'], ['pueblo elegido']]
  },
  // Q89: 새 장막 / 증거장막성전 | Nuevo tabernáculo
  89: {
    isShort: false,
    koSlots: [['새 장막', '증거장막성전']],
    esSlots: [['Nuevo'], ['tabernáculo']]
  },
  // Q90: 백성 / 성도 / 흙으로 된 육체 | Pueblo (santo)
  90: {
    isShort: false,
    koSlots: [['백성', '성도', '흙으로 된 육체']],
    esSlots: [['Pueblo', 'santo']]
  },
  // Q91: 영들과 육체들 / Espíritus y carnes
  91: {
    isShort: false,
    koSlots: [['영들'], ['육체들']],
    esSlots: [['Espíritus'], ['carnes']]
  },
  // Q92: 목자 / Pastor
  92: {
    isShort: true,
    koSlots: [['목자']],
    esSlots: [['Pastor']]
  },
  // Q93: 전도자 / 사역자 | Evangelista
  93: {
    isShort: true,
    koSlots: [['전도자', '사역자', '전도자 / 사역자']],
    esSlots: [['Evangelista']]
  },
  // Q94: 성도들 / Santos
  94: {
    isShort: true,
    koSlots: [['성도들', '성도']],
    esSlots: [['Santos']]
  },
  // Q95: 이긴자, 선민 / Vencedor, pueblo elegido
  95: {
    isShort: false,
    koSlots: [['이긴자'], ['선민']],
    esSlots: [['Vencedor'], ['pueblo elegido']]
  },
  // Q96: 영계 천국 / El reino de los cielos del mundo espiritual
  96: {
    isShort: false,
    koSlots: [['영계'], ['천국']],
    esSlots: [['reino de los cielos'], ['mundo espiritual']]
  },
  // Q97: 이전 선민의 장막인 천국 / El reino de los cielos que es el tabernáculo del pueblo elegido anterior
  97: {
    isShort: false,
    koSlots: [['이전'], ['선민'], ['장막'], ['천국']],
    esSlots: [['reino de los cielos'], ['tabernáculo'], ['pueblo elegido'], ['anterior']]
  },
  // Q98: 재창조되어 인 맞은 12지파 / Las 12 tribus recreadas y selladas
  98: {
    isShort: false,
    koSlots: [['재창조'], ['인 맞은'], ['12지파']],
    esSlots: [['12 tribus'], ['recreadas'], ['selladas']]
  },
  // Q99: 비밀을 아는 지혜 / Sabiduría para conocer el misterio
  99: {
    isShort: false,
    koSlots: [['비밀'], ['지혜']],
    esSlots: [['Sabiduría'], ['misterio']]
  }
};

export function normalizeCompact(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .normalize('NFC')
    .replace(/[^a-z0-9가-힣]/g, '');
}

export const KO_BOOK_FULL_TO_ABBR: Array<[string, string]> = [
  ['요한계시록', '계'], ['계시록', '계'], ['계시', '계'],
  ['창세기', '창'], ['출애굽기', '출'], ['레위기', '레'], ['민수기', '민'], ['신명기', '신'],
  ['여호수아', '수'], ['사사기', '삿'], ['룻기', '룻'],
  ['사무엘상', '삼상'], ['사무엘하', '삼하'],
  ['열왕기상', '왕상'], ['열왕기하', '왕하'],
  ['역대상', '대상'], ['역대하', '대하'],
  ['에스라', '스'], ['느헤미야', '느'], ['에스더', '에'], ['욥기', '욥'],
  ['시편', '시'], ['잠언', '잠'], ['전도서', '전'], ['아가서', '아'], ['아가', '아'],
  ['이사야', '사'],
  ['예레미야애가', '애'], ['애가', '애'], ['예레미야', '렘'],
  ['에스겔', '겔'], ['다니엘', '단'], ['호세아', '호'], ['요엘', '욜'],
  ['아모스', '암'], ['오바댜', '옵'], ['요나', '욘'], ['미가', '미'], ['나훔', '나'],
  ['하박국', '합'], ['스바냐', '습'], ['학개', '학'], ['스가랴', '슥'], ['말라기', '말'],
  ['마태복음', '마'], ['마태', '마'],
  ['마가복음', '막'], ['마가', '막'],
  ['누가복음', '눅'], ['누가', '눅'],
  ['요한복음', '요'], ['요한', '요'],
  ['사도행전', '행'], ['사도', '행'],
  ['로마서', '롬'],
  ['고린도전서', '고전'], ['고린도전', '고전'],
  ['고린도후서', '고후'], ['고린도후', '고후'],
  ['갈라디아서', '갈'], ['갈라디아', '갈'],
  ['에베소서', '엡'], ['에베소', '엡'],
  ['빌립보서', '빌'], ['빌립보', '빌'],
  ['골로새서', '골'], ['골로새', '골'],
  ['데살로니가전서', '살전'], ['데살로니가전', '살전'],
  ['데살로니가후서', '살후'], ['데살로니가후', '살후'],
  ['디모데전서', '딤전'], ['디모데전', '딤전'],
  ['디모데후서', '딤후'], ['디모데후', '딤후'],
  ['디도서', '딛'], ['디도', '딛'],
  ['빌레몬서', '몬'], ['빌레몬', '몬'],
  ['히브리서', '히'], ['히브리', '히'],
  ['야고보서', '약'], ['야고보', '약'],
  ['베드로전서', '벧전'], ['베드로전', '벧전'], ['벧전서', '벧전'],
  ['베드로후서', '벧후'], ['베드로후', '벧후'], ['벧후서', '벧후'],
  ['요한일서', '요일'], ['요한1서', '요일'],
  ['요한이서', '요이'], ['요한2서', '요이'],
  ['요한삼서', '요삼'], ['요한3서', '요삼'],
  ['유다서', '유']
];

export const ES_BOOK_FULL_TO_ABBR: Array<[string, string]> = [
  ['1pedro', '1p'], ['1 pedro', '1p'],
  ['2pedro', '2p'], ['2 pedro', '2p'],
  ['1juan', '1jn'], ['1 juan', '1jn'],
  ['2juan', '2jn'], ['2 juan', '2jn'],
  ['3juan', '3jn'], ['3 juan', '3jn'],
  ['1corintios', '1co'], ['1 corintios', '1co'],
  ['2corintios', '2co'], ['2 corintios', '2co'],
  ['1tesalonicenses', '1ts'], ['1 tesalonicenses', '1ts'],
  ['2tesalonicenses', '2ts'], ['2 tesalonicenses', '2ts'],
  ['1timoteo', '1ti'], ['1 timoteo', '1ti'],
  ['2timoteo', '2ti'], ['2 timoteo', '2ti'],
  ['1samuel', '1s'], ['1 samuel', '1s'],
  ['2samuel', '2s'], ['2 samuel', '2s'],
  ['1reyes', '1r'], ['1 reyes', '1r'],
  ['2reyes', '2r'], ['2 reyes', '2r'],
  ['1cronicas', '1cr'], ['1 cronicas', '1cr'],
  ['2cronicas', '2cr'], ['2 cronicas', '2cr'],
  ['genesis', 'gn'], ['exodo', 'ex'], ['levitico', 'lv'], ['numeros', 'nm'], ['deuteronomio', 'dt'],
  ['josue', 'jos'], ['jueces', 'jue'], ['rut', 'rt'],
  ['esdras', 'esd'], ['nehemias', 'neh'], ['ester', 'est'], ['job', 'job'],
  ['salmos', 'sal'], ['salmo', 'sal'],
  ['proverbios', 'pr'], ['eclesiastes', 'ec'], ['cantares', 'cnt'],
  ['isaias', 'is'], ['jeremias', 'jer'], ['lamentaciones', 'lm'],
  ['ezequiel', 'ez'], ['daniel', 'dn'], ['oseas', 'os'], ['joel', 'jl'],
  ['amos', 'am'], ['abdias', 'abd'], ['jonas', 'jon'], ['miqueas', 'mi'], ['nahum', 'nah'],
  ['habacuc', 'hab'], ['sofonias', 'sof'], ['hageo', 'hag'], ['zacarias', 'zac'], ['malaquias', 'mal'],
  ['mateo', 'mt'], ['marcos', 'mr'], ['lucas', 'lc'], ['juan', 'jn'], ['hechos', 'hch'],
  ['romanos', 'ro'], ['galatas', 'ga'], ['efesios', 'ef'],
  ['filipenses', 'fil'], ['colosenses', 'col'],
  ['tito', 'tit'], ['filemon', 'flm'],
  ['hebreos', 'heb'], ['hebreos', 'he'],
  ['santiago', 'stg'], ['judas', 'jud'], ['apocalipsis', 'ap']
];

export interface TargetVerseReference {
  rawDisplay: string;
  book: string;
  numbers: string[];
}

export function parseTargetReferences(targetVerseRaw: string): TargetVerseReference[] {
  if (!targetVerseRaw || targetVerseRaw.trim() === '-') return [];
  const parts = targetVerseRaw.split(',').map((s) => s.trim());
  const refs: TargetVerseReference[] = [];

  for (const p of parts) {
    if (/^\d+/.test(p) && !isNaN(Number(p.trim()))) {
      if (refs.length > 0) {
        refs[refs.length - 1].numbers.push(p.trim());
        refs[refs.length - 1].rawDisplay += ', ' + p.trim();
      }
      continue;
    }
    const book = p.match(/^([가-힣]+|[a-zA-Z0-9]+)/)?.[1] || '';
    const numbers = [...p.matchAll(/\d+/g)].map((m) => m[0]);
    refs.push({
      rawDisplay: p,
      book,
      numbers
    });
  }
  return refs;
}

export function normalizeVerseInput(raw: string, lang: AppLanguage): string {
  let s = (raw || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .normalize('NFC');

  const dict = lang === 'ko' ? KO_BOOK_FULL_TO_ABBR : ES_BOOK_FULL_TO_ABBR;
  for (const [full, abbr] of dict) {
    s = s.replace(new RegExp(full, 'g'), abbr);
  }
  return s;
}

export function isVerseReferenceSatisfied(
  normUser: string,
  compactUser: string,
  userNumbers: string[],
  ref: TargetVerseReference,
  lang: AppLanguage
): boolean {
  const normBook = normalizeVerseInput(ref.book, lang).trim();
  if (!normUser.includes(normBook) && !compactUser.includes(normBook)) {
    return false;
  }

  const essentialNums = ref.numbers.length <= 1 ? ref.numbers : [ref.numbers[0], ref.numbers[1]];

  const hasDiscrete = essentialNums.every((n) => userNumbers.includes(n));
  if (hasDiscrete) return true;

  const bookIdx = compactUser.indexOf(normBook);
  if (bookIdx !== -1) {
    let searchIdx = bookIdx + normBook.length;
    let allFound = true;
    for (const num of essentialNums) {
      const nextIdx = compactUser.indexOf(num, searchIdx);
      if (nextIdx === -1) {
        allFound = false;
        break;
      }
      searchIdx = nextIdx + num.length;
    }
    if (allFound) return true;
  }

  return false;
}

export interface TypingValidationResult {
  isCorrect: boolean;
  answerCorrect: boolean;
  verseCorrect: boolean;
  isShortQuestion: boolean;
  missingKeywords: string[];
  missingVerses: string[];
  expectedKeywordsDisplay: string[];
  expectedVersesDisplay: string[];
}

export function evaluateTypingSubmission(
  question: ParableQuestion,
  userAnswer: string,
  userVerse: string,
  lang: AppLanguage
): TypingValidationResult {
  const spec = QUESTION_KEYWORD_SPECS[question.id];
  const rawTargetAnswer = lang === 'ko' ? question.answerKo : question.answerEs;
  const compactTargetAnswer = normalizeCompact(rawTargetAnswer);

  // 철저히 실제 정답(rawTargetAnswer) 내에 포함되어 있는 단어만 유효한 슬롯으로 필터링
  const rawSlots = spec ? (lang === 'ko' ? spec.koSlots : spec.esSlots) : [];
  const slots = rawSlots
    .map((slot) => slot.filter((word) => compactTargetAnswer.includes(normalizeCompact(word))))
    .filter((slot) => slot.length > 0);

  const isShortQuestion = spec ? spec.isShort && slots.length === 1 : false;

  const compactUserAnswer = normalizeCompact(userAnswer);
  const missingKeywords: string[] = [];
  const expectedKeywordsDisplay = slots.map((slot) => slot.join(' / '));

  let answerCorrect = false;

  if (!compactUserAnswer) {
    answerCorrect = false;
    slots.forEach((slot) => missingKeywords.push(slot.join(' / ')));
  } else if (compactUserAnswer === compactTargetAnswer) {
    // 실제 정답 전체를 그대로 입력한 경우 무조건 정답
    answerCorrect = true;
  } else if (isShortQuestion && slots.length === 1) {
    // 단답형(1개 핵심어): 조사/관사를 제거한 입력값이 실제 정답 내 단답 후보와 정확히 일치해야 함
    const cleaned = lang === 'ko'
      ? compactUserAnswer.replace(/(이다|입니다|임|란|이란|은|는|이|가|을|를)$/g, '')
      : compactUserAnswer.replace(/^(el|la|los|las|un|una)/g, '');
    const slotVariants = slots[0].map((v) => normalizeCompact(v));
    const exactMatch = slotVariants.some(
      (variant) => cleaned === variant || compactUserAnswer === variant
    );
    answerCorrect = exactMatch;
    if (!exactMatch) {
      missingKeywords.push(slots[0].join(' / '));
    }
  } else {
    // 복합형 또는 문장형: 실제 정답에서 추출된 모든 핵심단어 슬롯이 입력에 포함되어야 함
    for (const slot of slots) {
      const matched = slot.some((variant) => compactUserAnswer.includes(normalizeCompact(variant)));
      if (!matched) {
        missingKeywords.push(slot.join(' / '));
      }
    }
    answerCorrect = missingKeywords.length === 0;
  }

  // 증거성구 검증
  const targetVerseRaw = (lang === 'ko' ? question.verseKo : question.verseEs).trim();
  const hasVerseRequirement = targetVerseRaw !== '-' && targetVerseRaw.length > 0;

  const refs = parseTargetReferences(targetVerseRaw);
  const expectedVersesDisplay = refs.map((r) => r.rawDisplay);

  const missingVerses: string[] = [];
  let verseCorrect = true;

  if (hasVerseRequirement) {
    const normUser = normalizeVerseInput(userVerse, lang);
    if (!normUser.trim()) {
      verseCorrect = false;
      refs.forEach((r) => missingVerses.push(r.rawDisplay));
    } else {
      const userNumbers = [...normUser.matchAll(/\d+/g)].map((m) => m[0]);
      const compactUser = normUser.replace(/[^가-힣a-zA-Z0-9]/g, '');

      for (const ref of refs) {
        const satisfied = isVerseReferenceSatisfied(normUser, compactUser, userNumbers, ref, lang);
        if (!satisfied) {
          missingVerses.push(ref.rawDisplay);
        }
      }
      verseCorrect = missingVerses.length === 0;
    }
  }

  return {
    isCorrect: answerCorrect && verseCorrect,
    answerCorrect,
    verseCorrect,
    isShortQuestion,
    missingKeywords,
    missingVerses,
    expectedKeywordsDisplay,
    expectedVersesDisplay
  };
}
