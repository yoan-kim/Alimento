/**
 * Latin American Ecuadorian Spanish (es-EC) Speech Synthesis Utility.
 * Prioritizes es-EC voices first, then Latin American Spanish (es-419, es-CO, es-PE, es-MX, es-US),
 * strictly avoiding Peninsular/Castilian Spanish (es-ES) voices when Latin American voices exist.
 */

let cachedVoices: SpeechSynthesisVoice[] = [];

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  const loadVoices = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

export function getBestEcuadorSpanishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices =
    cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // 1. Exact Ecuadorian Spanish (es-EC or es_EC)
  const ecVoice = voices.find(
    (v) =>
      v.lang.toLowerCase().replace('_', '-') === 'es-ec' ||
      v.name.toLowerCase().includes('ecuador')
  );
  if (ecVoice) return ecVoice;

  // 2. Andean / Latin American Spanish (es-419, es-CO, es-PE, es-CL, es-MX, es-US)
  const preferredLangPrefixes = [
    'es-419',
    'es-co',
    'es-pe',
    'es-mx',
    'es-us',
    'es-ar',
    'es-cl',
    'es-ve'
  ];

  for (const prefix of preferredLangPrefixes) {
    const match = voices.find((v) =>
      v.lang.toLowerCase().replace('_', '-').startsWith(prefix)
    );
    if (match) return match;
  }

  // 3. Any Spanish voice that is NOT Castilian (es-ES)
  const nonCastilianEs = voices.find((v) => {
    const norm = v.lang.toLowerCase().replace('_', '-');
    return norm.startsWith('es') && norm !== 'es-es';
  });
  if (nonCastilianEs) return nonCastilianEs;

  // 4. Fallback to any Spanish voice
  return voices.find((v) => v.lang.toLowerCase().startsWith('es')) || null;
}

export function speakEcuadorSpanish(text: string): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  const voice = getBestEcuadorSpanishVoice();
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang || 'es-EC';
  } else {
    utterance.lang = 'es-EC';
  }
  utterance.rate = 0.94;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
}
