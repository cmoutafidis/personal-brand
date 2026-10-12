import type {BlogPost} from '@/types/blog';

// English niche page for machine shops and fabricators. Written for F21 of offer-os gtm/followups-and-search
// (F-D177 blog posts, F-D178 English only, F-D179 generic and linking the offer page with no client named),
// from the approved draft in offer-os offers/fiji-solutions--sheet-to-app/derived/articles/ARTICLE-NICHE-SHOPS.md.
// No money figure (CLAUDE.md rule 7); the offer page's "What it costs" section (#s12-what-it-costs) carries
// the prices. No person named; the post speaks as "we" (D13), so author is omitted and schema author falls
// back to the Organization publisher. The pains are symptoms (OBJECTIONS-AND-PAINS §2, kind H), no survey number.
const post: BlogPost = {
  id: 'job-shop-scheduling-work-order-quote-app',
  slug: 'job-shop-scheduling-work-order-quote-app',
  title: 'Job shop scheduling, work orders and quotes: when the spreadsheet can’t keep up',
  metaTitle: 'Job shop scheduling and work order apps | Fiji Solutions',
  excerpt: 'When your job schedule, work order tracker and quote log outgrow a shared spreadsheet, here is what an app does instead, and how it gets built.',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  readingTime: 4, // round(bodyWords / 140); body is ~520 words
  tags: ['Spreadsheet to app', 'Manufacturing'],
  body: [
    {type: 'paragraph', text: [
      'If you run a machine shop, a fabrication shop or a small maker, a shared spreadsheet probably runs the floor: the job schedule, the work orders, the quotes and RFQs, often an Excel or Google Sheets template you started from. It got you here. Past a certain size it starts to cost you more than it saves. This page is about when a job shop scheduling template or a work order tracker stops keeping up, and what an app built from that same sheet does instead.',
    ]},

    {type: 'heading', text: 'Where the spreadsheet starts to hurt'},
    {type: 'paragraph', text: ['You may recognise some of these.']},
    {type: 'list', items: [
      ['“Where’s that order at?” is a question you answer by asking around.'],
      ['The same order gets typed in more than once.'],
      ['Nobody can tell who changed a number, or when.'],
      ['Everyone can see everything, including the prices and the customer list.'],
      ['A job gets dropped because the one person who took it in is the only one who knows about it.'],
    ]},
    {type: 'paragraph', text: [
      'None of these is a spreadsheet fault. A grid of cells, even a well-built Excel template, cannot give a growing shop roles, one place a number is entered, and a record of who changed what. That is the point where an app earns its keep.',
    ]},

    {type: 'heading', text: 'What the app does instead'},
    {type: 'subheading', text: 'Your production schedule'},
    {type: 'paragraph', text: [
      'One screen lists every open job and the stage it is at, so you can see where things stand without walking the floor or calling around. The schedule updates as work moves, and each person sees the view that fits their role.',
    ]},
    {type: 'subheading', text: 'Your work order tracker'},
    {type: 'paragraph', text: [
      'An order is entered once and flows through the app, so the same job stops being typed in two or three places. Each person works under their own login, so an entry can be traced to who made it, and “who changed this?” has an answer on the screen.',
    ]},
    {type: 'subheading', text: 'Your quote and RFQ log'},
    {type: 'paragraph', text: [
      'Quotes and RFQs live in one place with a status on each, so a request stops being dropped because the person who took it in forgot. The price column sits behind a role, so prices and the customer list are not open to the whole floor.',
    ]},

    {type: 'table', caption: 'The production schedule, work order tracker and quote log, in the sheet and in the app',
      head: ['', 'In the shared spreadsheet', 'In the app'],
      rows: [
        [['Production schedule'], ['You ask around to see where every job stands.'], ['One screen lists every open job and its stage.']],
        [['Work order tracker'], ['The same order is typed in more than once.'], ['An order is entered once and flows through the app.']],
        [['Quote and RFQ log'], ['Everyone can read the price column.'], ['Each role sees only its own screen; prices stay with the owner.']],
      ],
    },

    {type: 'heading', text: 'How it gets built'},
    {type: 'paragraph', text: [
      'We start from the column headers you already use and build a prototype of your app 7 days after a 30-minute call. You look at it, and you pay only if you like it. The finished app follows on the same terms, with a screen for each role, real logins, and your live data moved across while the old sheet keeps running until the floor trusts the app. Because it is built around your own columns, it follows how your shop already works. The price of the prototype and of the finished app is set and published on our offer page, and you can read the figures stage by stage in ',
      {text: 'What it costs', href: '/en/offers/sheet-to-app#s12-what-it-costs'},
      '.',
    ]},

    {type: 'faq', heading: 'Common questions', items: [
      {q: 'Can you turn my job shop scheduling spreadsheet into an app?', a: 'Yes. We build from the column headers you already use, so the schedule and the work orders in the app match the ones you keep now. It opens in a browser, on the floor or in the office, with nothing to install.'},
      {q: 'Everyone can see everything in our sheet, including prices. Can the app limit that?', a: 'Yes. The app gives each person a login and a screen that fits their role, so the floor sees the jobs it works on and the prices and customer list stay with the owner.'},
      {q: 'We have outgrown the spreadsheet but we do not want to change how we work. What does the app do?', a: 'It is built around your own sheet and your own columns, so it follows how your shop already runs. You keep your own way of working. The price is set and published on our offer page before anything is built, and you pay only if you like the prototype.'},
    ]},

    {type: 'cta', heading: 'Job schedule or work orders outgrowing the sheet?', text: 'Book a 30-minute call. We look at your columns, talk through what you need, and you get a prototype of your app 7 days later. Pay only if you like it.', label: 'Book a 30-minute call', href: '/en/offers/sheet-to-app'},
  ],
};

export default post;
