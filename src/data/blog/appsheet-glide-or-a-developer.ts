import type {BlogPost} from '@/types/blog';

// The second English blog post. Written for F20 of offer-os gtm/followups-and-search (F-D173, F-D176),
// from the approved draft in offer-os offers/fiji-solutions--sheet-to-app/derived/articles/ARTICLE-TOOLS.md.
// No money figure. The "Is AppSheet enough, or do I need a developer?" question lives on the offer page FAQ
// only, so its FAQPage schema sits on one URL (review finding, F-D176). Vendor claims carry a sources block.
// ~~No person is named;~~ the post speaks as "we" ~~(D13), so author is omitted.~~
// Superseded 2026-10-26 (offer-os gtm/seo-plan-2026-10 D-12, replaces D13): every blog post shows
// "Charis Moutafidis" as author, linked to the About page. ~~Goal B3 carries it out; until then the~~
// ~~author field stays omitted here~~ and this comment no longer states a standing rule.
// Done 2026-10-27 (seo-plan-2026-10 B3, D-12, D-27, D-28, C-21): the byline, the author box after the body
// and the Article JSON-LD author come from BLOG_AUTHOR in src/lib/person.ts, "Charis Moutafidis" linked to
// /en/about; this file's `author` field is no longer read.
const post: BlogPost = {
  id: 'appsheet-glide-or-a-developer',
  slug: 'appsheet-glide-or-a-developer',
  title: 'AppSheet, Glide or a developer: who should turn my spreadsheet into an app?',
  metaTitle: 'AppSheet, Glide or a developer? | Fiji Solutions',
  excerpt: 'Three ways to turn a shared spreadsheet into an app: a no-code tool, a developer, or a service that builds it for you. When each one fits.',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-29',
  readingTime: 7, // round(bodyWords / 140); body is ~1028 words since the D5 table (2026-10-29)
  tags: ['Spreadsheet to app', 'No-code tools'],
  body: [
    {type: 'paragraph', text: [
      'When a shared spreadsheet has outgrown itself, you have three realistic ways to turn it into an app: build it yourself in a no-code tool, hire a developer, or use a service that builds it for you. Each one is the right call for a different kind of owner. Here is how to tell which one is yours.',
    ]},

    {type: 'heading', text: 'Build it yourself in a no-code tool'},
    {type: 'paragraph', text: [
      'AppSheet, Glide, Softr and Airtable let you turn a sheet into an app without writing code. They are fast to start, cheap by the month, and a good fit when someone on your team enjoys building things and will keep the app running.',
    ]},
    {type: 'paragraph', text: [
      'Where they reach their limit: the build and the upkeep stay with that person. Involved rules, custom links to your accounting or email, and real logins where each person sees only their own screen get hard to do and harder to maintain. When the person who built it leaves, the app tends to stall.',
    ]},
    {type: 'paragraph', text: [
      'Pick this route when you have a willing builder in-house and the app is simple enough for one person to own.',
    ]},

    {type: 'heading', text: 'Hire a developer'},
    {type: 'paragraph', text: [
      'A freelance developer builds you something custom, shaped to how you work. This fits an owner who knows what they want and can write it down clearly.',
    ]},
    {type: 'paragraph', text: [
      'What to watch: the price and the timeline move with the scope, so a loose brief can drift. You also carry the project yourself, from deciding what goes in to testing that it works. A good developer with a clear brief is a strong choice, and the risk sits in how tightly the work is defined before it starts.',
    ]},

    {type: 'heading', text: 'Use a service that builds it for you'},
    {type: 'paragraph', text: [
      'A service takes the whole job off your plate and hands you a working app. This fits an owner who wants it built, wants a price set up front, and wants to see it work before paying.',
    ]},
    {type: 'paragraph', text: [
      'This is what we do. We start from the column headers of your sheet and build a prototype of your app in 7 days, with a screen for each role. You look at it on a short call, and you pay only if you like it. The finished app follows on the same terms. It runs on AWS, with backups and security updates handled for you. If the price is your main question, we wrote a separate guide on ',
      {text: 'what it costs to turn a spreadsheet into an app', href: '/en/blog/how-much-does-it-cost-to-turn-a-spreadsheet-into-an-app'},
      '.',
    ]},

    {type: 'heading', text: 'A quick way to choose'},
    {type: 'list', items: [
      ['You have someone in-house who will build and run it, and the app is simple: a no-code tool.'],
      ['You know exactly what you want, you can brief it tightly, and you want to run the build: a freelance developer.'],
      ['You want it built for you, at a set price, and you want to try it before you pay: a service like ours.'],
    ]},

    // CONT-9 (2026-10-29, offer-os gtm/seo-plan-2026-10 D5): the comparison matrix the results page for this query
    // carries. No money figure (D-08): the cost row names the model, and our column links the priced offer.
    {type: 'paragraph', text: [
      'An agency is a fourth route. Here is how all four compare.',
    ]},
    {type: 'table', caption: 'Four ways to turn a spreadsheet into an app.', head: ['Compared on', 'No-code tool', 'Freelancer', 'Agency', 'Our fixed-price service'], rows: [
      [[{text: 'Cost model', strong: true}], ['A monthly subscription, often priced per user'], ['By the hour or by the project, moving with the scope'], ['A project fee for the build, often with a monthly retainer for support'], ['A set price for each stage, published before you start. You pay only if you like it. After delivery, a care plan is billed monthly. ', {text: 'What it costs', href: '/en/offers/sheet-to-app#s12-what-it-costs'}]],
      [[{text: 'Who builds', strong: true}], ['You, or whoever on your team takes it on'], ['The developer. You carry the project, from deciding what goes in to testing that it works.'], ['A team, with a process behind it'], ['We do, and you talk to the engineer who builds your app']],
      [[{text: 'Who maintains', strong: true}], ['The person who built it. When they leave, the app tends to stall.'], ['Set by your agreement: ask in writing who keeps it running, before the work starts'], ['Often the agency, on a monthly retainer'], ['We do, on a monthly care plan: hosting on AWS, backups and security updates. Or, once the app is paid, you take the code and host it yourself.']],
      [[{text: 'Logins and roles', strong: true}], ['Real logins, where each person sees only their own screen, get hard to do and harder to maintain'], ['Built to your brief. Real accounts add work.'], ['Built to your brief. Real accounts add work.'], ['A screen for each role in the prototype. In the finished app, each person logs in to their own screen.']],
      [[{text: 'Integrations', strong: true}], ['Custom links to your accounting or email get hard to do and harder to maintain'], ['Built to your brief. Each connection adds to the price.'], ['Built to your brief. Each connection adds to the price.'], ['In the finished app, the connections we agree on the audit call, such as your accounting and email']],
      [[{text: 'Code ownership', strong: true}], ['Ask the vendor what you can take with you if you leave'], ['Set by your contract: ask for it in writing'], ['Set by your contract: ask for it in writing'], ['Yours on request once the app is paid, with a spreadsheet export']],
      [[{text: 'How long it takes', strong: true}], ['Fast to start, and it can be faster for something simple'], ['Moves with the scope'], ['Can run for months on something large'], ['A prototype 7 days after the 30-minute audit call, once your column headers arrive. The finished app about three weeks after you go ahead.']],
    ]},

    {type: 'faq', heading: 'Common questions', items: [
      {q: 'What is the difference between Glide and AppSheet?', a: 'Both turn a sheet into an app without code. Glide leans toward clean, simple apps that are quick to stand up. AppSheet goes deeper on data rules and logic and ties in closely with Google Sheets. For a small team either can work, and the better test is which one the person building it finds easier.'},
      {q: 'Can I move from a no-code tool to a real app later?', a: 'Yes. You can start in a no-code tool and move to a built app once the work outgrows it. We can take your sheet, and what you learned from the no-code version, and build the app around your own columns.'},
    ]},

    {type: 'sources', heading: 'Sources', items: [
      {label: 'AppSheet, product site', url: 'https://about.appsheet.com/'},
      {label: 'AppSheet, pricing', url: 'https://about.appsheet.com/pricing/'},
      {label: 'Glide, product site', url: 'https://www.glideapps.com/'},
      {label: 'Softr, product site', url: 'https://www.softr.io/'},
      {label: 'Airtable, product site', url: 'https://www.airtable.com/'},
    ]},

    {type: 'cta', heading: 'Want it built for you?', text: 'Book a 30-minute call. We look at your columns, talk through what you need, and you get a prototype of your app 7 days later. Pay only if you like it.', label: 'Book a 30-minute call', href: '/en/offers/sheet-to-app'},
  ],
};

export default post;
