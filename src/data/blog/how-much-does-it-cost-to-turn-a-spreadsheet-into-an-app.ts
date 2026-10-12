import type {BlogPost} from '@/types/blog';

// The first English blog post. Written for F20 of offer-os gtm/followups-and-search (F-D173, F-D176),
// from the approved draft in offer-os offers/fiji-solutions--sheet-to-app/derived/articles/ARTICLE-COST.md.
// No money figure appears: the prices live on the offer page, and this post links its "What it costs"
// section (#s12-what-it-costs) for them (CLAUDE.md rule 7, F-D173). No person is named; the post speaks as
// "we" (D13), so author is omitted and the schema author falls back to the Organization publisher.
const post: BlogPost = {
  id: 'how-much-does-it-cost-to-turn-a-spreadsheet-into-an-app',
  slug: 'how-much-does-it-cost-to-turn-a-spreadsheet-into-an-app',
  title: 'How much does it cost to turn a spreadsheet into an app?',
  metaTitle: 'Cost to turn a spreadsheet into an app | Fiji Solutions',
  excerpt: 'What drives the price of turning a shared spreadsheet into an app, the ways you can be charged, and how to read any quote you get.',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  readingTime: 6, // round(bodyWords / 140); body is ~783 words
  tags: ['Spreadsheet to app', 'Pricing'],
  body: [
    {type: 'paragraph', text: [
      'If your team runs on a shared spreadsheet and you want it to become a real app, the first question is usually what that costs. The honest answer is that it depends on a handful of things, and the way you are charged changes a lot with who builds it. This page walks through what moves the price and the ways you will be asked to pay, so you can read any quote you get with clear eyes.',
    ]},

    {type: 'heading', text: 'What moves the price'},
    {type: 'paragraph', text: ['A few things decide how much work an app really is.']},
    {type: 'list', items: [
      [{text: 'How many screens and roles.', strong: true}, ' One screen for one person is quick. A screen each for the office, the floor and the owner, with different permissions, is more work.'],
      [{text: 'How many jobs it covers.', strong: true}, ' One order book is smaller work than an order book, a crew schedule and a change order log joined into one app.'],
      [{text: 'What it connects to.', strong: true}, ' An app that stands on its own is cheaper than one wired into your accounting, your email and the tools you already pay for.'],
      [{text: 'Whether your real data moves in.', strong: true}, ' Sample rows are fast to make. Moving years of live data, cleaning it and keeping the old sheet in step takes care.'],
      [{text: 'Logins and permissions.', strong: true}, ' A single shared login is simple. Real accounts, where each person sees only their own screen, add work.'],
      [{text: 'What happens after launch.', strong: true}, ' Hosting, backups, security updates and the odd change are a running cost, month after month, on top of the build.'],
    ]},

    {type: 'heading', text: 'The ways you will be charged'},
    {type: 'paragraph', text: ['Four kinds of people build these apps, and each one charges in its own way.']},

    {type: 'subheading', text: 'A no-code tool you build yourself'},
    {type: 'paragraph', text: [
      'Platforms such as AppSheet, Glide, Softr and Airtable charge a monthly fee, usually for each person who uses the app. The cash cost is the lowest of the four. The build and the upkeep sit with you, or with whoever on your team takes it on. We go through the trade-offs between a no-code tool, a developer and a service in ',
      {text: 'AppSheet, Glide or a developer', href: '/en/blog/appsheet-glide-or-a-developer'},
      '.',
    ]},

    {type: 'subheading', text: 'A freelance developer'},
    {type: 'paragraph', text: [
      'You pay by the hour or by the project. The figure moves with the scope and with how well that scope is written down before the work starts. A clear brief keeps it steady. A vague one lets it drift.',
    ]},

    {type: 'subheading', text: 'A software agency'},
    {type: 'paragraph', text: [
      'You pay a project fee for the build and, often, a monthly retainer for support. This is the dearest of the four, with a team and a process behind it.',
    ]},

    {type: 'subheading', text: 'A fixed-price service'},
    {type: 'paragraph', text: [
      'The price for each stage is set and published before you start, so you know the number up front. This is how we work, and the prices are on our offer page.',
    ]},

    {type: 'heading', text: 'Why nobody can quote it blind'},
    {type: 'paragraph', text: [
      'Scope is the thing that moves the price, so a number given before anyone has seen your sheet is a guess. A good quote comes after someone has looked at your columns and heard how your team works. That is the whole point of a short first call.',
    ]},

    {type: 'heading', text: 'How we price it'},
    {type: 'paragraph', text: [
      'We turn your shared spreadsheet into a prototype of your app, built from the column headers you already use. The price of the prototype and the price of the finished app are both set and published on our offer page, and you pay only if you like what you see. You can read the exact figures, stage by stage, in ',
      {text: 'What it costs', href: '/en/offers/sheet-to-app#s12-what-it-costs'},
      ' on that page.',
    ]},

    {type: 'faq', heading: 'Common questions', items: [
      {q: 'Can I just use a no-code tool and skip the cost of a developer?', a: 'Yes, if someone on your team will build the app and keep it running. A no-code tool is the cheapest way in by cash. When you would rather have it built for you, connected to your other tools and handed over working, that is paid work.'},
      {q: 'Does turning a spreadsheet into an app have ongoing costs?', a: 'Usually yes. However it is built, an app needs hosting, backups and security updates, so there is a running monthly cost on top of the build. Ask about it before you start, so the first number is no surprise.'},
      {q: 'How long does it take?', a: 'With us, you get a prototype of your app 7 days after a 30-minute call, and the finished app follows about three weeks later. A no-code build you do yourself can be faster for something simple, and an agency project can run for months on something large.'},
    ]},

    {type: 'cta', heading: 'Want a price for your own sheet?', text: 'Book a 30-minute call. We look at your columns, talk through what you need, and you get a prototype of your app 7 days later. Pay only if you like it.', label: 'Book a 30-minute call', href: '/en/offers/sheet-to-app'},
  ],
};

export default post;
