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


export const assistantId = "d6683411-62fe-42cb-ad6f-54dc1eb9eeb7";
export const vapiApiKey = "4fb313ff-b3ca-4e50-869f-2a28d0939c6f";