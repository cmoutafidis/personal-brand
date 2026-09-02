import type {HomeLongFormCopy} from '@/types/homeLongForm';
import {FIRST_FIX_DAYS, GUARANTEE_WINDOW_WORD} from '@/lib/offer';
import {SERVICE_LABEL} from '@/data/offerLinks';
import processAutomation from '@/data/offers/process-automation';
import aiPrototype from '@/data/offers/ai-prototype';
import websiteSeo from '@/data/offers/website-seo';

// The English long-form block at the bottom of the home page. Five things in here are decisions,
// not oversights, and the first two hold in both locales:
//
// 1. IT IS VISIBLE, NOT COLLAPSED. The measurement behind that is written out in full in
//    `src/types/homeLongForm.ts`. peakcodeconsulting.ch collapses its equivalent because it has a
//    visible-word ceiling and a skeleton that overruns it. This site has the opposite problem, 770
//    rendered words against 3,047, and no ceiling recorded anywhere.
//
// 2. THIS FILE IS THE HOME PAGE'S ONLY ROUTE TO THE TWO SERVICE PAGES.
//    `/en/services/custom-software-development-greece` and `/en/services/data-analysis-greece` are
//    in neither the navigation nor the footer. Remove either link and the page it points at is
//    orphaned from the home page. The `/en/offers/*` links are links inside prose, which is the
//    only permitted kind (CLAUDE.md: never the navbar, the footer, QuickLinks or the /portfolio
//    grid).
//
//    ⛔ NO SERVICE OR OFFER ANCHOR IS TYPED IN THIS FILE. That is the rule `offerLinks.ts` states
//    for the whole graph, and it now holds here too: a service anchor is `SERVICE_LABEL[slug].en`
//    and an offer anchor is that page's own `copy.en.eyebrow`, both read off the imports above, so
//    a link and its destination cannot drift. Until 2026-09-02 those five were hand-typed literals
//    and two had already drifted: the service anchors had lost the "in Greece" both pages exist to
//    target, and process-automation's read "automating one business process" against an eyebrow of
//    "Automate one business process". The sentences below are built around the exact strings,
//    capital letter included. If one reads awkwardly, change the sentence, never the anchor.
//    The two "free process audit" anchors are the exception and stay literals: they point at
//    `/en/business-process-audit`, which is neither a service page nor an offer, so no constant
//    exists to read them from. That is the whole exception; do not grow it.
//
// 3. THIS BLOCK CARRIES NO `/en/blog/` LINK, AND THE ASYMMETRY WITH `el.ts` IS THE POINT.
//    The Greek block puts all fourteen articles inside its sentences. It can, because the blog is
//    Greek-only: `blogData.en` is empty, both `[slug]` routes set `dynamicParams = false`, and
//    `/en/blog/<slug>` is a hard 404 rather than a thin page. So every point the Greek makes by
//    linking, the English makes in one sentence of prose and then stops. The sentence has to carry
//    the point itself, not a promise of one: a clause that says a distinction is worth making, or
//    names a scope, and then leaves the reader with no route to it, is the failure mode here. Do
//    not "restore parity" by adding English blog URLs; the commit that fills `blogData.en` is the
//    one allowed to add them. `/en/offers/website-seo` is here for the same reason. The section
//    about not being found is five article links in Greek, and that page is the only destination
//    this locale has for it.
//
// 4. THE GUARANTEE IS STATED EXACTLY ONCE, IN THE `eggyisi` FAQ, IN THE WORDS THE PAGE ALREADY
//    SHIPS (`translations.ts`, 'solutions.payment.description'). Until 2026-09-02 this page carried
//    two contradictory refund promises. Do not paraphrase the window, the trigger or the remedy and
//    do not add terms: the denominator is total fees paid, and the refund is the build fee. "All
//    your money back" is a larger guarantee than the one that ships. The numbers are read from
//    `src/lib/offer.ts` and never retyped. No price appears here in any form, and no result figure,
//    client name or client count appears either.
//
//    That FAQ also names WHICH work the guarantee governs, and that clause is load-bearing. This
//    array is emitted as FAQPage structured data, and `/en/offers/website-seo`, linked a screen
//    above it, carries a different guarantee of its own. Naming the scope keeps the two apart. The
//    clause quotes no terms from either one, and it must not start doing so.
//
// 5. NO EM DASH, NO EN DASH, AND NO "IT IS NOT X, IT IS Y" (CLAUDE.md, the two writing rules given
//    2026-09-02). Where a negative carries something the reader needs, it is a plain separate
//    sentence with no rhetorical pivot in front of it.
//
// The six section ids and the six FAQ ids are identical to `el.ts` and in the same order. They are
// React keys and the surface a reviewer diffs the two locales across, so they stay in the same
// transliterated form in both files even though this one is English.

const en: HomeLongFormCopy = {
  heading: 'Before you ask a software company for a quote',

  intro: [
    'If you have not commissioned software before, the difficulty is rarely knowing what hurts. You have just scrolled past three versions of that. It is knowing what you are actually buying, what stays yours at the end, and why two quotes for the same work are so hard to put side by side.',
  ],

  sections: [
    {
      id: 'ti-kanoume',
      heading: 'What a software company actually does all day',
      paragraphs: [
        [
          'We write software that does not exist yet, for a process your business has and the business next door does not. The piece that moves an order from one system into another with nobody in between. The screen that shows what is outstanding and who has it. The job that runs every Monday without anyone remembering it.',
        ],
        [
          'It comes in two shapes. One is ',
          {text: SERVICE_LABEL['services/custom-software-development-greece'].en, href: '/en/services/custom-software-development-greece'},
          ': internal tools, and the connections between systems that will not exchange data on their own. The other is ',
          {text: SERVICE_LABEL['services/data-analysis-greece'].en, href: '/en/services/data-analysis-greece'},
          ', for when the same figure comes out three ways from three places, and the deliverable there is one source and one owner per number. Above what a spreadsheet holds we work on Snowflake. Fiji Solutions is a Snowflake AI Data Cloud Select Partner.',
        ],
        [
          'We do not do desk support, and we do not take on projects framed as digitising the business. Some of what your software has to do is not your choice either: if you invoice in Greece it has to talk to myDATA, and it is worth asking any supplier how they handle it before you sign.',
        ],
      ],
    },

    {
      id: 'ti-pairneis',
      heading: 'What you get to keep',
      paragraphs: [
        [
          'The honest answer is a list of objects. The source code. The documentation. Your data in a format another system can open. Instructions written for a person: what each piece does, where it runs, what happens when it stops. None of it is held back as leverage.',
        ],
        [
          'Accounts work the same way. The domain, the hosting, the code repository and the tool logins are opened in your own name. Ask for that in writing before work starts, with any supplier, ours included. The answer decides what is still standing the day you stop paying.',
        ],
        [
          'The third thing is the right to leave. Every ready-made platform holds something back, so choosing between WordPress, Shopify and something built for you is mostly a decision about what you can carry out later. In an online shop, accessibility joins that list as a legal obligation, and whether it binds yours is a question for your lawyer and your accountant.',
        ],
      ],
    },

    {
      id: 'pos-xekinaei',
      heading: 'How a project starts, and where the ladder stops',
      paragraphs: [
        [
          'Step one is the ',
          {text: 'free process audit', href: '/en/business-process-audit'},
          '. It is not billed and it is not a sales visit under another name. Nobody should have to buy something to find out what is worth buying, so the written map of where your money leaks is yours either way.',
        ],
        [
          'Step two is the build, with a care plan that keeps it alive afterwards. Three things go in writing before a line of code exists: what gets built, which number will show that it worked, and the price. If you already know your scope, that same step two can be bought as a fixed scope instead: ',
          {text: processAutomation.copy.en.eyebrow, href: '/en/offers/process-automation'},
          '.',
        ],
        [
          'There is no step three. A paid discovery phase is work you fund to reach the decision you were already facing. What we need from you is access to the systems, one person who can decide, and two or three hours with whoever does the job by hand.',
        ],
      ],
    },

    {
      id: 'poso-kostizei',
      heading: 'What it costs to decide',
      paragraphs: [
        [
          'A cheaper question sits in front of the price: what the process costs you today, in hours, in errors corrected later, and in days spent waiting on somebody. That number comes out of one call, and it makes every later comparison possible.',
        ],
        [
          'We publish no prices. Two quotes for the same thing differ because they count different things. Ask every supplier for the same lines, then split them three ways: paid once, repeating every year, and paid to somebody else, such as hosting. Your figure is agreed in writing, against the scope, before anything is built.',
        ],
        [
          'The cost is driven mostly by decisions nobody has made yet: who approves what, what happens to the exceptions, and which steps are compulsory. In an online shop that is the platform, the payments, the shipping rules, the customer data and the way back out, all settled before a line of code is written.',
        ],
      ],
    },

    {
      id: 'den-se-vriskoun',
      heading: 'When the problem is that nobody finds you',
      paragraphs: [
        [
          'The audit measures what the work costs inside the business. Another leak never reaches the books: the customers who went looking and found somebody else. Between your website and a search result there are three stages, crawling, indexing and ranking, and a site missing entirely has usually not cleared one of the first two.',
        ],
        [
          'Search work is a list of jobs, and part of that list is outside your control. Anyone promising a position has no mechanism to deliver one. Anyone promising work can list it. ',
          {text: websiteSeo.copy.en.eyebrow, href: '/en/offers/website-seo'},
          ' is that list, and the ',
          {text: 'free process audit', href: '/en/business-process-audit'},
          ' is the way in if you want the numbers first.',
        ],
        [
          'Advertising is a separate tool. It does not lift your organic position, and switching it off does not lower it. When your customers are local, local results are judged on their own criteria and fed mostly by your Google Business Profile, a page your customers and Google both write parts of.',
        ],
      ],
    },

    {
      id: 'pos-xereis',
      heading: 'How you know it worked',
      paragraphs: [
        [
          'The only way to know is to have measured the before. That is why the audit records hours, errors and delays while everything still runs the old way. Without that baseline, everyone argues about whether it feels better.',
        ],
        [
          'In data work the measurement is the product: a report that assembles itself, a figure with one source behind it, an alert that arrives while the problem is still cheap. To see that at small scale first, there is an ',
          {text: aiPrototype.copy.en.eyebrow, href: '/en/offers/ai-prototype'},
          '.',
        ],
        [
          'In search, the measurable part lives in Google Search Console, with limits almost nobody spells out: what each report counts, and where the sample stops. In AI answers the picture is thinner still, and a screenshot of one chat is not a measurement, because the same question answers differently for the next person.',
        ],
      ],
    },
  ],

  faqHeading: 'Questions people ask before the first call',

  faqs: [
    {
      id: 'ti-kanei-etaireia-logismikou',
      q: 'What exactly does a software company do?',
      a: 'It writes software that does not come ready-made: internal tools, connections between systems that will not exchange data on their own, automation for steps somebody does by hand, and reports that assemble without a person. Desk support and reselling off-the-shelf licences are different businesses. The starting point is your own process.',
    },
    {
      id: 'poso-kostizei-ergo',
      q: 'What does a software project cost, and why are there no prices on this site?',
      a: 'We publish no prices on any page, because no price holds for two different projects. The cost is set by the scope, by how many systems have to be connected, and by what keeps running after handover. The figure is agreed with you in writing before the build starts.',
    },
    {
      id: 'poso-grigora',
      q: 'How quickly will I see something working?',
      a: `The target is to have your first process live within ${FIRST_FIX_DAYS} days of the build starting. The anchor matters: ahead of it sit the audit and a written agreement on what gets built.`,
    },
    {
      id: 'eggyisi',
      q: 'What happens if what you build does not pay off?',
      a: `If what we build has not paid for itself within ${GUARANTEE_WINDOW_WORD.en} months of going live, measured against the baseline in your audit, we refund the build fee. The full terms are on the audit page. That guarantee covers the build that follows the audit; the website and search offers carry their own terms on their own pages.`,
    },
    {
      id: 'poios-echei-ton-kodika',
      q: 'Who owns the code, the data and the accounts at the end?',
      a: 'You do, the code included. The accounts are opened in your own name at the start, so there is nothing to transfer at the end. Your data comes out in a format another system can open, and the written instructions leave with it. If you carry on with somebody else, there is nothing to ask us for.',
    },
    {
      id: 'antikatastasi-programmaton',
      q: 'Do I have to replace the software I already use?',
      a: 'Usually not. Replacement is proposed only when the existing system allows no connection at all, and the reason is written into the audit plan. More often the gap is a connection between two systems that each work well on their own, or a small tool between them.',
    },
    {
      id: 'poios-kanei-ti-douleia',
      q: 'Who actually does the work?',
      a: 'Our founder, Charis Moutafidis. He has worked as a software engineer for more than ten years. Those years cover five sectors: banking, travel, telecommunications, health and online education. Some of that work went through Fiji Solutions, some through Peak Code Consulting, his Swiss company, and some in earlier jobs as a developer. Those sectors describe his own working history.',
    },
  ],
};

export default en;
