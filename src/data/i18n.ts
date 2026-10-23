import { AppLanguage } from './questions';

export type { AppLanguage };

export interface LocalizedStrings {
  brandTitle: string;
  navStudy: string;
  navExam: string;
  navCatalog: string;
  navChangeLanguage: string;
  btnDownloadHtml: string;
  kickerSummary: string;
  statCurrentDay: string;
  statTodayComposition: string;
  statMasteredConcepts: string;
  statBookmarkedConcepts: string;
  studyMethodCard: string;
  studyMethodTyping: string;
  typingBadgeShort: string;
  typingBadgeKeywords: string;
  typingAnswerPlaceholderShort: string;
  typingAnswerPlaceholderKeywords: string;
  typingVersePlaceholder: string;
  typingVerseNone: string;
  btnCheckTyping: string;
  btnRetryTyping: string;
  typingResultCorrect: string;
  typingResultWrong: string;
  typingMissingKeywords: string;
  typingMissingVerses: string;
  filterAll10: string;
  filterNew: string;
  filterReview: string;
  layoutList: string;
  layoutFocus: string;
  btnShowAllAnswers: string;
  btnHideAllAnswers: string;
  btnRerollReview: string;
  tagNewConcept: string;
  tagReviewConcept: string;
  tagForward: string;
  labelPromptForward: string;
  labelAnswerForward: string;
  labelKeyVerse: string;
  btnShowAnswer: string;
  btnHideAnswer: string;
  clickToRevealBox: string;
  btnPrevCard: string;
  btnNextCard: string;
  btnBookmark: string;
  btnBookmarked: string;
  btnMarkMastered: string;
  btnMastered: string;
  btnListenPromptEc: string;
  btnListenAnswerEc: string;
  sidebarDayController: (day: number) => string;
  btnCompleteDay: (day: number) => string;
  btnCompletedDay: (day: number) => string;
  labelNewRange: string;
  labelReviewPoolRange: string;
  labelSelectedReviewConcepts: string;
  labelFirstDayNoReview: string;
  labelAllRangeReview: string;
  checkboxPrioritizeWeak: string;
  curriculumTitle: string;
  curriculumSubtitle: string;
  btnResetProgress: string;
  autoSaveNote: string;
  examTitle: (day: number) => string;
  examModeWritten: string;
  examModeMultipleChoice: string;
  examShuffleOrder: string;
  examOriginalOrder: string;
  examInputPlaceholderForward: string;
  examSubmitAndCheck: string;
  examModelAnswer: string;
  examAutoMatchedNotice: string;
  examSelfGradeLabel: string;
  examGradePass: string;
  examGradeReview: string;
  examCorrectBadge: string;
  examWrongBadge: string;
  examPrevQuestion: string;
  examNextQuestion: string;
  examFinishBtn: string;
  examResultsTitle: (day: number) => string;
  examReviewMistakesTitle: string;
  examFinalScoreLabel: string;
  examCorrectCountLabel: string;
  examWrongCountLabel: string;
  examReviewMistakesBtn: (count: number) => string;
  examRetryAllBtn: string;
  examPerfectScoreMsg: string;
  examMistakesListTitle: string;
  examBackToStudyBtn: string;
  examScoreSummary: (correct: number, review: number, total: number) => string;
  catalogSearchPlaceholder: string;
  catalogAllChapters: string;
  catalogFilterAll: string;
  catalogFilterBookmarked: string;
  catalogFilterMastered: string;
  catalogFilterUnmastered: string;
  catalogEmpty: string;
  footerText: string;
}

export const UI_STRINGS: Record<AppLanguage, LocalizedStrings> = {
  ko: {
    brandTitle: '비유 99',
    navStudy: '학습 (10)',
    navExam: '시험 (10)',
    navCatalog: '전체 도감',
    navChangeLanguage: '언어 변경',
    btnDownloadHtml: 'HTML 저장',
    kickerSummary: '20개 장 · 99문항 · 일일 10문항',
    statCurrentDay: '학습 회차',
    statTodayComposition: '오늘 문항',
    statMasteredConcepts: '암기 완료',
    statBookmarkedConcepts: '집중공부',
    studyMethodCard: '1. 카드',
    studyMethodTyping: '2. 타이핑',
    typingBadgeShort: '단답형 · 정확히 입력',
    typingBadgeKeywords: '문장형 · 핵심단어 모두 기록',
    typingAnswerPlaceholderShort: '단답형 정답을 정확히 입력하세요 (예: 말씀)',
    typingAnswerPlaceholderKeywords: '문장의 핵심단어를 모두 입력하세요',
    typingVersePlaceholder: '증거성구 입력 (성경이름과 숫자 입력 / 띄어쓰기·쉼표 무관)',
    typingVerseNone: '증거성구 없음 (-)',
    btnCheckTyping: '정답 확인',
    btnRetryTyping: '다시 입력',
    typingResultCorrect: '✓ 정답 (핵심어 · 증거성구 모두 일치)',
    typingResultWrong: '✕ 오답 · 누락된 핵심어/증거성구를 확인하세요',
    typingMissingKeywords: '정답 핵심어:',
    typingMissingVerses: '누락 성구:',
    filterAll10: '전체 (10)',
    filterNew: '신규',
    filterReview: '복습',
    layoutList: '1문항 뷰',
    layoutFocus: '전체 뷰',
    btnShowAllAnswers: '정답 보기',
    btnHideAllAnswers: '정답 가리기',
    btnRerollReview: '복습 다시 뽑기',
    tagNewConcept: '신규',
    tagReviewConcept: '복습',
    tagForward: '문제→답',
    labelPromptForward: '질문',
    labelAnswerForward: '정답 · 성구',
    labelKeyVerse: '성구',
    btnShowAnswer: '정답 보기',
    btnHideAnswer: '가리기',
    clickToRevealBox: '정답 확인',
    btnPrevCard: '이전',
    btnNextCard: '다음',
    btnBookmark: '집중공부',
    btnBookmarked: '집중공부',
    btnMarkMastered: '암기체크',
    btnMastered: '암기완료',
    btnListenPromptEc: '',
    btnListenAnswerEc: '',
    sidebarDayController: (day: number) => `${day}일차 요약`,
    btnCompleteDay: (day: number) => `${day}일차 완료`,
    btnCompletedDay: (day: number) => `${day}일차 완료됨`,
    labelNewRange: '신규 범위',
    labelReviewPoolRange: '복습 범위',
    labelSelectedReviewConcepts: '복습 문항',
    labelFirstDayNoReview: '첫날 (신규 10)',
    labelAllRangeReview: '전 범위',
    checkboxPrioritizeWeak: '미암기·집중공부 우선 추출',
    curriculumTitle: '20일 진도표',
    curriculumSubtitle: '1일차 10 · 2일차~ 신규 5 + 복습 5',
    btnResetProgress: '초기화',
    autoSaveNote: '자동 저장됨',
    examTitle: (day: number) => `${day}일차 시험`,
    examModeWritten: '타이핑',
    examModeMultipleChoice: '객관식',
    examShuffleOrder: '순서 섞기',
    examOriginalOrder: '기본 순서',
    examInputPlaceholderForward: '정답 입력...',
    examSubmitAndCheck: '채점',
    examModelAnswer: '정답',
    examAutoMatchedNotice: '정답 · 증거성구 모두 일치',
    examSelfGradeLabel: '기록:',
    examGradePass: '● 통과',
    examGradeReview: '▲ 집중공부',
    examCorrectBadge: '✓ 정답',
    examWrongBadge: '✕ 오답',
    examPrevQuestion: '이전',
    examNextQuestion: '다음',
    examFinishBtn: '결과 보기',
    examResultsTitle: (day: number) => `${day}일차 시험 결과`,
    examReviewMistakesTitle: '오답 복습 시험',
    examFinalScoreLabel: '최종 점수',
    examCorrectCountLabel: '정답 (통과)',
    examWrongCountLabel: '오답 (집중공부)',
    examReviewMistakesBtn: (count: number) => `오답 다시 풀기 (${count})`,
    examRetryAllBtn: '전체 다시 시험보기 (10문항)',
    examPerfectScoreMsg: '모든 문항을 정확히 맞추셨습니다!',
    examMistakesListTitle: '오답 문항 확인',
    examBackToStudyBtn: '학습 화면으로',
    examScoreSummary: (correct: number, review: number, total: number) =>
      `통과 ${correct} · 집중공부 ${review} / ${total}`,
    catalogSearchPlaceholder: '번호, 질문, 답, 성구 검색...',
    catalogAllChapters: '전체 장',
    catalogFilterAll: '전체',
    catalogFilterBookmarked: '집중공부',
    catalogFilterMastered: '암기완료',
    catalogFilterUnmastered: '미암기',
    catalogEmpty: '검색 결과 없음',
    footerText: '비유 99 일일 학습 시스템'
  },
  es: {
    brandTitle: 'Parábolas 99',
    navStudy: 'Estudio (10)',
    navExam: 'Examen (10)',
    navCatalog: 'Catálogo',
    navChangeLanguage: 'Idioma',
    btnDownloadHtml: 'Guardar HTML',
    kickerSummary: '20 cap. · 99 preg. · 10 diarias',
    statCurrentDay: 'Día actual',
    statTodayComposition: 'Hoy',
    statMasteredConcepts: 'Aprendidas',
    statBookmarkedConcepts: 'Estudio intensivo',
    studyMethodCard: '1. Tarjeta',
    studyMethodTyping: '2. Escritura',
    typingBadgeShort: 'Corta · Respuesta exacta',
    typingBadgeKeywords: 'Oración · Todas las palabras clave',
    typingAnswerPlaceholderShort: 'Escriba la respuesta exacta (ej. Palabra)',
    typingAnswerPlaceholderKeywords: 'Escriba todas las palabras clave de la respuesta',
    typingVersePlaceholder: 'Versículo (nombre y números / espacios libres)',
    typingVerseNone: 'Sin versículo (-)',
    btnCheckTyping: 'Comprobar',
    btnRetryTyping: 'Reintentar',
    typingResultCorrect: '✓ Correcto (Palabras clave y versículos)',
    typingResultWrong: '✕ Incorrecto · Verifique palabras clave y versículos',
    typingMissingKeywords: 'Palabras clave faltantes:',
    typingMissingVerses: 'Versículos faltantes:',
    filterAll10: 'Todo (10)',
    filterNew: 'Nuevas',
    filterReview: 'Repaso',
    layoutList: 'Vista 1',
    layoutFocus: 'Lista (10)',
    btnShowAllAnswers: 'Ver todo',
    btnHideAllAnswers: 'Ocultar todo',
    btnRerollReview: 'Sortear repaso',
    tagNewConcept: 'Nueva',
    tagReviewConcept: 'Repaso',
    tagForward: 'Pregunta→Respuesta',
    labelPromptForward: 'Pregunta',
    labelAnswerForward: 'Respuesta · Versículo',
    labelKeyVerse: 'Versículo',
    btnShowAnswer: 'Ver',
    btnHideAnswer: 'Ocultar',
    clickToRevealBox: 'Ver respuesta',
    btnPrevCard: 'Anterior',
    btnNextCard: 'Siguiente',
    btnBookmark: 'Estudio intensivo',
    btnBookmarked: 'Estudio intensivo',
    btnMarkMastered: 'Aprender',
    btnMastered: 'Aprendido',
    btnListenPromptEc: 'Pregunta (EC)',
    btnListenAnswerEc: 'Respuesta (EC)',
    sidebarDayController: (day: number) => `Resumen · Día ${day}`,
    btnCompleteDay: (day: number) => `Completar Día ${day}`,
    btnCompletedDay: (day: number) => `Día ${day} listo`,
    labelNewRange: 'Nuevas',
    labelReviewPoolRange: 'Rango repaso',
    labelSelectedReviewConcepts: 'Sorteadas',
    labelFirstDayNoReview: 'Día 1 (10 nuevas)',
    labelAllRangeReview: 'Rango total',
    checkboxPrioritizeWeak: 'Priorizar estudio intensivo',
    curriculumTitle: 'Plan 20 Días',
    curriculumSubtitle: 'Día 1: 10 · Día 2+: 5 nuevas + 5 repaso',
    btnResetProgress: 'Reiniciar',
    autoSaveNote: 'Guardado automático',
    examTitle: (day: number) => `Examen · Día ${day}`,
    examModeWritten: 'Escritura',
    examModeMultipleChoice: 'Opciones',
    examShuffleOrder: 'Mezclar',
    examOriginalOrder: 'Ordenar',
    examInputPlaceholderForward: 'Respuesta...',
    examSubmitAndCheck: 'Calificar',
    examModelAnswer: 'Respuesta',
    examAutoMatchedNotice: '¡Respuesta y versículos correctos!',
    examSelfGradeLabel: 'Evaluar:',
    examGradePass: '● Aprobado',
    examGradeReview: '▲ Estudio intensivo',
    examCorrectBadge: '✓ Correcto',
    examWrongBadge: '✕ Incorrecto',
    examPrevQuestion: 'Anterior',
    examNextQuestion: 'Siguiente',
    examFinishBtn: 'Ver resultados',
    examResultsTitle: (day: number) => `Resultados del Examen · Día ${day}`,
    examReviewMistakesTitle: 'Repaso de Errores',
    examFinalScoreLabel: 'Puntaje Final',
    examCorrectCountLabel: 'Correctas (Aprobadas)',
    examWrongCountLabel: 'Incorrectas (Estudio intensivo)',
    examReviewMistakesBtn: (count: number) => `Repasar errores (${count})`,
    examRetryAllBtn: 'Repetir examen completo (10)',
    examPerfectScoreMsg: '¡Respondiste correctamente todas las preguntas!',
    examMistakesListTitle: 'Preguntas incorrectas',
    examBackToStudyBtn: 'Volver al estudio',
    examScoreSummary: (correct: number, review: number, total: number) =>
      `Bien: ${correct} · Intensivo: ${review} / ${total}`,
    catalogSearchPlaceholder: 'Buscar pregunta, respuesta o versículo...',
    catalogAllChapters: 'Todos los cap.',
    catalogFilterAll: 'Todas',
    catalogFilterBookmarked: 'Estudio intensivo',
    catalogFilterMastered: 'Aprendidas',
    catalogFilterUnmastered: 'Pendientes',
    catalogEmpty: 'Sin resultados',
    footerText: 'Parábolas 99 · Estudio Diario'
  }
};
