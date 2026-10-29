import type {BlogPost} from '@/types/blog';

// English niche page for machine shops and fabricators. Written for F21 of offer-os gtm/followups-and-search
// (F-D177 blog posts, F-D178 English only, F-D179 generic and linking the offer page with no client named),
// from the approved draft in offer-os offers/fiji-solutions--sheet-to-app/derived/articles/ARTICLE-NICHE-SHOPS.md.
// No money figure (CLAUDE.md rule 7); the offer page's "What it costs" section (#s12-what-it-costs) carries
// the prices. ~~No person named;~~ the post speaks as "we" ~~(D13), so author is omitted and schema author falls~~
// ~~back to the Organization publisher.~~ The pains are symptoms (OBJECTIONS-AND-PAINS §2, kind H), no survey number.
// Superseded 2026-10-26 (offer-os gtm/seo-plan-2026-10 D-12): the D13 no-byline rule above is replaced; every
// blog post shows "Charis Moutafidis" as author, linked to the About page. ~~Goal B3 carries it out; until then~~
// ~~this post stays without an author field and~~ nobody should cite D13 as a reason to keep it that way.
// Done 2026-10-27 (seo-plan-2026-10 B3, D-12, D-27, D-28, C-21): the byline, the author box after the body
// and the Article JSON-LD author come from BLOG_AUTHOR in src/lib/person.ts, "Charis Moutafidis" linked to
// /en/about; this file's `author` field is no longer read.
// Rewritten 2026-10-29 (offer-os gtm/seo-plan-2026-10 D9, CONT-8, D-113): its own example sheet (a typical job
// shop schedule with made-up rows, never a client's), the ways that sheet breaks named from its columns, and
// every paragraph, heading and FAQ answer reworded so no sentence is shared with the construction post. No
// client and no figure claimed.
const post: BlogPost = {
  id: 'job-shop-scheduling-work-order-quote-app',
  slug: 'job-shop-scheduling-work-order-quote-app',
  title: 'Job shop scheduling, work orders and quotes: when the spreadsheet can’t keep up',
  metaTitle: 'Job shop scheduling and work order apps | Fiji Solutions',
  excerpt: 'A job shop sheet can hold the schedule, the work orders and the quotes. See where it breaks on the floor, and how an app built on its columns runs.',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-29',
  readingTime: 8, // round(bodyWords / 140); body is ~1050 words with the table, FAQ and two cta blocks, ~960 without the cta blocks (2026-10-29, D9 review: was 5 from a prose-only count)
  tags: ['Spreadsheet to app', 'Manufacturing'],
  body: [
    {type: 'paragraph', text: [
      'A machine shop or a fabrication shop can run its whole floor from one shared spreadsheet. One tab holds the production schedule, the same rows serve as the work order tracker, and another tab logs every quote and RFQ. That works while everyone who edits it can talk across the bench. This post shows a typical version of that sheet and the places it breaks in a shop. Then it shows how an app built from the same columns behaves.',
    ]},

    {type: 'heading', text: 'A typical job shop sheet'},
    {type: 'paragraph', text: [
      'Here is the kind of sheet we mean. The columns are the ones a shop keeps for each open job, and the rows are made up.',
    ]},
    {type: 'table', caption: 'An example job shop schedule sheet: the columns a machine or fabrication shop keeps for each open job, with made-up rows',
      head: ['Job no.', 'Part and rev', 'Qty', 'Material', 'Next op and machine', 'Outside process', 'Ship by', 'Status'],
      rows: [
        [['J-2417'], ['40-118 rev C'], ['120'], ['6061-T6 bar'], ['Op 30, mill (VMC 2)'], ['Anodize'], ['Nov 14'], ['Running']],
        [['J-2421'], ['BRK-220 rev A'], ['35'], ['A36 plate'], ['Op 20, press brake'], ['Powder coat'], ['Nov 18'], ['Waiting on material']],
        [['J-2423'], ['SH-905 rev B'], ['8'], ['4140 round bar'], ['Op 10, saw'], ['Heat treat'], ['Nov 21'], ['PO received']],
        [['J-2426'], ['40-118 rev D'], ['60'], ['6061-T6 bar'], ['Op 10, CNC lathe'], ['Anodize'], ['Nov 28'], ['First article']],
      ],
    },
    {type: 'paragraph', text: [
      'The quote log sits on the next tab. Its columns are RFQ number, customer, part and rev, quantity, material, quote due date, status and price. When a quote is won, somebody copies its part, rev and quantity into a new row of the schedule.',
    ]},

    {type: 'heading', text: 'How that sheet breaks on a shop floor'},
    {type: 'paragraph', text: ['Each column has its own way of going wrong. Read down the list and count the ones you met this month.']},
    {type: 'list', items: [
      ['The Next op cell says Op 20 while the parts already sit at the deburr bench. It moves when somebody remembers to update it, at the end of a shift or the next morning.'],
      ['The customer sends rev D of a drawing. The quote log gets the new rev, the schedule row still reads rev C, and the job runs to the old print.'],
      ['A job leaves for heat treat or anodize, and its return date lives in one person’s head. The Ship by date stays put until the day it is missed.'],
      ['Status reads “Waiting on material”, and the purchase order for that plate sits in a different file. Finding out where it stands means opening both.'],
      ['A won quote gets retyped into the schedule, and the quantity or the rev comes across wrong.'],
      ['Two people sort or filter the sheet at the same time, and a row lands against the wrong job. Finding out who moved it means asking around the shop.'],
      ['The price column on the quote tab is open to anyone who can open the file, operators included.'],
    ]},
    {type: 'paragraph', text: [
      'Each of these comes from one grid that everyone edits by hand. In an app, each thing gets typed once, and the app keeps it. Each person signs in and sees their own part of it.',
    ]},

    {type: 'heading', text: 'Those columns, moved into an app'},
    {type: 'subheading', text: 'Production schedule'},
    {type: 'paragraph', text: [
      'Every open job appears on one screen with its next operation and its machine. The operator marks an operation done at the machine, so the next op moves when the work moves. The office sees the floor as it stands, from a desk.',
    ]},
    {type: 'subheading', text: 'Work order tracker'},
    {type: 'paragraph', text: [
      'A work order carries its part number and revision from the quote it came from. When the customer sends a new rev, it changes in one place, and every screen that shows the job shows the new rev. A job out for plating or heat treat shows as out, with the date it left.',
    ]},
    {type: 'subheading', text: 'Quote and RFQ log'},
    {type: 'paragraph', text: [
      'Each RFQ gets a record with its quote due date and a status. A won quote turns into a work order on the same screen and carries its part, rev and quantity across. The price column sits behind the owner’s login.',
    ]},

    {type: 'heading', text: 'From your sheet to a prototype of your app'},
    {type: 'paragraph', text: [
      'Send us the column headers your shop keeps today, and we talk them through on a 30-minute call. A prototype of the app, built on those columns, reaches you 7 days after that call. You go through it on a 30-minute walkthrough. Payment comes only if you like the prototype. The finished app follows on the same terms. Every role works in a screen of its own, under a personal login, and your live jobs move across while the old sheet keeps running. You switch over once the floor trusts the app. The prototype and the finished app each have a set price, published on our offer page. You can read both, stage by stage, in ',
      {text: 'What it costs', href: '/en/offers/sheet-to-app#s12-what-it-costs'},
      '.',
    ]},

    {type: 'faq', heading: 'Common questions', items: [
      {q: 'Can you turn my job shop scheduling spreadsheet into an app?', a: 'Yes. Your own column headers are the starting point, so the jobs, operations and revs in the app carry the names your shop uses today. The app runs in a web browser on a floor screen, a tablet or an office PC, and needs no install.'},
      {q: 'Everyone can see everything in our sheet, including prices. Can the app limit that?', a: 'Yes. Each person in the shop gets a login tied to a role. Operators see the jobs at their machines, and the quote prices and the customer list stay on the owner’s screen.'},
      {q: 'We have outgrown the spreadsheet but we do not want to change how we work. What does the app do?', a: 'It takes the columns you keep now and puts each one on the screen of the person who fills it in. Your jobs pass through the same steps as today. The price is published on our offer page before any work starts, and payment comes only if you like the prototype.'},
    ]},
    {type: 'cta', heading: 'Check your shared spreadsheet first', text: '11 questions about how your team uses its sheet. The result shows what to try in Excel or Google Sheets, where they stop, and what an app built around the sheet adds. Your answers stay in your browser.', label: 'Open the spreadsheet check', href: '/en/tools/spreadsheet-check'},
    {type: 'cta', heading: 'Job schedule or work orders outgrowing the sheet?', text: 'Book a 30-minute call. We look at your columns, talk through what you need, and you get a prototype of your app 7 days later. Pay only if you like it.', label: 'Book a 30-minute call', href: '/en/offers/sheet-to-app'},
  ],
};

export default post;
