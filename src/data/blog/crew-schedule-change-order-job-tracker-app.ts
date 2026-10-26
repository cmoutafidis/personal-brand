import type {BlogPost} from '@/types/blog';

// English niche page for construction subcontractors. Written for F21 of offer-os gtm/followups-and-search
// (F-D177 blog posts, F-D178 English only, F-D179 generic and linking the offer page with no client named),
// from the approved draft in offer-os offers/fiji-solutions--sheet-to-app/derived/articles/ARTICLE-NICHE-CONSTRUCTION.md.
// No money figure (CLAUDE.md rule 7); the offer page's "What it costs" section (#s12-what-it-costs) carries
// the prices. No person named; the post speaks as "we" (D13), so author is omitted and schema author falls
// back to the Organization publisher. The pains are symptoms (OBJECTIONS-AND-PAINS §2, kind H), no survey number.
// Superseded 2026-10-26 (offer-os gtm/seo-plan-2026-10 D-12): the D13 no-byline rule above is replaced; every
// blog post shows "Charis Moutafidis" as author, linked to the About page. Goal B3 carries it out; until then
// this post stays without an author field and nobody should cite D13 as a reason to keep it that way.
const post: BlogPost = {
  id: 'crew-schedule-change-order-job-tracker-app',
  slug: 'crew-schedule-change-order-job-tracker-app',
  title: 'Crew schedules, change orders and job tracking: when the spreadsheet stops keeping up',
  metaTitle: 'Crew schedule and change order apps | Fiji Solutions',
  excerpt: 'When your crew schedule, change order log and job tracker outgrow a shared spreadsheet, here is what an app does instead, and how it gets built.',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  readingTime: 4, // round(bodyWords / 140); body is ~500 words
  tags: ['Spreadsheet to app', 'Construction'],
  body: [
    {type: 'paragraph', text: [
      'If you run a construction subcontracting business, chances are a shared spreadsheet runs a lot of it: the crew schedule, the change order log, the job tracker, often an Excel or Google Sheets template you started from. It worked when there were a few crews and a few jobs. Past a certain size it starts to cost you. This page is about when a crew schedule template or a change order log stops keeping up, and what an app built from that same sheet does instead.',
    ]},

    {type: 'heading', text: 'Where the spreadsheet starts to hurt'},
    {type: 'paragraph', text: ['You may recognise some of these.']},
    {type: 'list', items: [
      ['The foremen call the office to find out where they are going tomorrow.'],
      ['A change order gets approved on site and never makes it into the log.'],
      ['There are three versions of the crew sheet and nobody is sure which one is right.'],
      ['Somebody sorted one column and broke the whole thing.'],
      ['You cannot see where every job stands without calling around.'],
    ]},
    {type: 'paragraph', text: [
      'None of these is a spreadsheet fault. A grid of cells, even a well-built Excel template, cannot give a growing crew roles, a phone screen and a record of who changed what. That is the point where an app earns its keep.',
    ]},

    {type: 'heading', text: 'What the app does instead'},
    {type: 'subheading', text: 'Your crew schedule'},
    {type: 'paragraph', text: [
      'Each foreman opens today’s schedule in a phone browser and sees their own crew and their own jobs. One schedule is the live one, so the office stops fielding calls about where people are going. A change made in the office shows on the foreman’s phone the next time they open it.',
    ]},
    {type: 'subheading', text: 'Your change order log'},
    {type: 'paragraph', text: [
      'The app gives you a screen for logging a change order where the work happens, with a status on each one: raised, sent to the GC, approved, on the pay application. A change approved out on the job gets entered on the spot, so it stops living in somebody’s notes and missing the log.',
    ]},
    {type: 'subheading', text: 'Your job tracker'},
    {type: 'paragraph', text: [
      'One screen lists every job and the stage it is at, so you can see twenty jobs at once and a couple of weeks out without calling around. Each person sees the view that fits their role, and the owner sees all of it.',
    ]},

    {type: 'table', caption: 'The crew schedule, change order log and job tracker, in the sheet and in the app',
      head: ['', 'In the shared spreadsheet', 'In the app'],
      rows: [
        [['Crew schedule'], ['Foremen call the office to find out where they are tomorrow.'], ['Each foreman opens today’s schedule on their phone.']],
        [['Change order log'], ['A change order approved on site never makes the log.'], ['The change order is logged on site with its status, so it stops sitting in someone’s notes.']],
        [['Job tracker'], ['You call around to see where every job stands.'], ['One screen lists every job and its stage.']],
      ],
    },

    {type: 'heading', text: 'How it gets built'},
    {type: 'paragraph', text: [
      'We start from the column headers you already use and build a prototype of your app 7 days after a 30-minute call. You look at it, and you pay only if you like it. The finished app follows on the same terms, with a screen for each role, real logins, and your live data moved across while the old sheet keeps running until the crew trusts the app. The price of the prototype and of the finished app is set and published on our offer page, and you can read the figures stage by stage in ',
      {text: 'What it costs', href: '/en/offers/sheet-to-app#s12-what-it-costs'},
      '.',
    ]},

    {type: 'faq', heading: 'Common questions', items: [
      {q: 'Can you turn my crew schedule Google Sheet into an app my foremen can open on their phones?', a: 'Yes. We build from the column headers you already use, so the schedule your foremen see matches the one you keep. They open it in a phone browser, with nothing to install.'},
      {q: 'What about change orders that get approved out on the job?', a: 'The app has a screen for logging a change order where the work happens, with a status on each one, so an approved change gets entered on the spot and does not sit in somebody’s notes and miss the log.'},
      {q: 'Do we have to change how we work to use it?', a: 'No. The app is built around your own sheet and your own columns, so it follows how your crew already works.'},
    ]},

    {type: 'cta', heading: 'Check your shared spreadsheet first', text: '11 questions about how your team uses its sheet. The result shows what to try in Excel or Google Sheets, where they stop, and what an app built around the sheet adds. Your answers stay in your browser.', label: 'Open the spreadsheet check', href: '/en/tools/spreadsheet-check'},
    {type: 'cta', heading: 'Crew schedule or change order log outgrowing the sheet?', text: 'Book a 30-minute call. We look at your columns, talk through what you need, and you get a prototype of your app 7 days later. Pay only if you like it.', label: 'Book a 30-minute call', href: '/en/offers/sheet-to-app'},
  ],
};

export default post;
