import type {BlogPost} from '@/types/blog';

// Google documentation URLs shared by more than one post. A URL that appears in two articles is
// declared once here, so a moved page is one edit rather than a hunt — and so two posts can never
// cite the same document at two different addresses.
export const G_ESSENTIALS = 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide';
export const G_HOWSEARCH = 'https://developers.google.com/search/docs/fundamentals/how-search-works';
export const G_TITLES = 'https://developers.google.com/search/docs/appearance/title-link';
export const G_SPAM = 'https://developers.google.com/search/docs/essentials/spam-policies';
export const G_GBP = 'https://support.google.com/business/answer/7091';

export type {BlogPost};
