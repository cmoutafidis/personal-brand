export type Language = 'en' | 'el';

export interface LanguageConfig {
  code: Language;
  name: string;
}

export const languages: LanguageConfig[] = [
  { code: 'en', name: 'English' },
  { code: 'el', name: 'Ελληνικά' }
];
