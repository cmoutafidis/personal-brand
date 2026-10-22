import React from 'react';
import Link from 'next/link';
import {Language} from '@/types/language';
import {ArrowRight, Bot, Code2, Globe, Smartphone, Snowflake, Workflow} from 'lucide-react';
import {SERVICES, servicePageLinks, type ServiceKey} from '@/data/services';

interface ServicesProps {
  t: (key: string) => string;
  // Passed in rather than read from context: this stays a server component, and the page that
  // renders it already knows its locale.
  lang: Language;
}

// The six kinds of work on /portfolio, from src/data/services.ts, the same titles and lines as the
// homepages' "What we build" grid. 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G07, BR-D3, PLAN.md
// §4.2): the three cards of 2026-08-15 became these six. Each card links its service pages only, so
// custom software and apps link the custom software page, data links the data analysis and Snowflake
// pages, and the other three carry no link here. The one offer link on the page is PortfolioOfferLink.
const ICONS: Record<ServiceKey, React.ReactNode> = {
  'custom-software': <Code2 className="h-8 w-8"/>,
  apps: <Smartphone className="h-8 w-8"/>,
  automation: <Workflow className="h-8 w-8"/>,
  'ai-agents': <Bot className="h-8 w-8"/>,
  websites: <Globe className="h-8 w-8"/>,
  data: <Snowflake className="h-8 w-8"/>
};

const Services: React.FC<ServicesProps> = ({t, lang}) => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary-600 dark:text-primary-400">
            {t('services.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div key={s.key}
                 className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden duration-300 p-6 hover:shadow-xl transition-shadow">
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                {ICONS[s.key]}
              </div>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {s.copy[lang].title}
              </h2>
              <p className="flex-1 text-gray-600 dark:text-gray-400 mb-4">
                {s.copy[lang].line}
              </p>
              <ul className="space-y-1">
                {servicePageLinks(s, lang).map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-400">
                      {l.label}
                      <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" aria-hidden="true"/>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
