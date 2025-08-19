export type Language = 'en' | 'el';

export interface LanguageConfig {
  code: Language;
  name: string;
  flag: string;
}

export const languages: LanguageConfig[] = [
  {code: 'en', name: 'EN', flag: '🇺🇸'},
  {code: 'el', name: 'ΕΛ', flag: '🇬🇷'}
];