import type {BlogPost} from '@/types/blog';

// English niche page for construction subcontractors. Written for F21 of offer-os gtm/followups-and-search
// (F-D177 blog posts, F-D178 English only, F-D179 generic and linking the offer page with no client named),
// from the approved draft in offer-os offers/fiji-solutions--sheet-to-app/derived/articles/ARTICLE-NICHE-CONSTRUCTION.md.
// No money figure (CLAUDE.md rule 7); the offer page's "What it costs" section (#s12-what-it-costs) carries
// the prices. ~~No person named;~~ the post speaks as "we" ~~(D13), so author is omitted and schema author falls~~
// ~~back to the Organization publisher.~~ The pains are symptoms (OBJECTIONS-AND-PAINS §2, kind H), no survey number.
// Superseded 2026-10-26 (offer-os gtm/seo-plan-2026-10 D-12): the D13 no-byline rule above is replaced; every
// blog post shows "Charis Moutafidis" as author, linked to the About page. ~~Goal B3 carries it out; until then~~
// ~~this post stays without an author field and~~ nobody should cite D13 as a reason to keep it that way.
// Done 2026-10-27 (seo-plan-2026-10 B3, D-12, D-27, D-28, C-21): the byline, the author box after the body
// and the Article JSON-LD author come from BLOG_AUTHOR in src/lib/person.ts, "Charis Moutafidis" linked to
// /en/about; this file's `author` field is no longer read.
// Rewritten 2026-10-29 (offer-os gtm/seo-plan-2026-10 D9, CONT-8, D-113): its own example sheet, a made-up
// subcontractor change order log (CO no., GC ref., Job, Change, Requested by, Status, Backup) presented as a
// typical sheet and never a client's, the ways it breaks named from those columns, and every paragraph,
// heading and FAQ answer it shared with job-shop-scheduling-work-order-quote-app.ts rewritten; the old
// sheet-versus-app table is dropped. No client, no figure. The two cta blocks are unchanged standard blocks.
const post: BlogPost = {
  id: 'crew-schedule-change-order-job-tracker-app',
  slug: 'crew-schedule-change-order-job-tracker-app',
  title: 'Crew schedules, change orders and job tracking: when the spreadsheet stops keeping up',
  metaTitle: 'Crew schedule and change order apps | Fiji Solutions',
  excerpt: 'Your crew schedule, change order log and job tracker share one spreadsheet. Here is where that sheet breaks, and what an app built from its columns does.',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-29',
  readingTime: 6, // round(bodyWords / 140); body is ~890 words with the two cta blocks, ~800 without (2026-10-29)
  tags: ['Spreadsheet to app', 'Construction'],
  body: [
    {type: 'paragraph', text: [
      'A construction subcontractor can run its whole week from one shared spreadsheet. One tab holds the crew schedule, one holds the change order log, and one tracks every job. That works while the crews are few. As crews and jobs grow, the gaps between the field and the office show up in the sheet. Below you will find an example sheet, the places it breaks, and what those columns become in an app.',
    ]},

    {type: 'heading', text: 'An example sheet from a subcontractor’s office'},
    {type: 'paragraph', text: [
      'Here is the change order tab of an example sheet for a subcontractor. The entries are made up. Its columns follow trade usage. There is your own CO number and the number the general contractor (GC) gives the same change. Then come who asked for it, its status and the backup that proves it.',
    ]},
    {type: 'table', caption: 'An example change order log for a subcontractor: the columns, with made-up entries',
      head: ['CO no.', 'GC ref.', 'Job', 'Change', 'Requested by', 'Status', 'Backup'],
      rows: [
        [['CO-011'], ['PCO-23'], ['Clinic fit-out'], ['Add blocking for wall-mounted monitors in the exam rooms'], ['GC superintendent'], ['Approved'], ['Signed CO, photos']],
        [['CO-012'], ['Awaiting'], ['School gym'], ['Move door frames to match the revised drawing'], ['Architect'], ['Pending'], ['Revised drawing']],
        [['CO-013'], ['Awaiting'], ['Apartment block, east wing'], ['Extra coat in the stairwells, agreed on site'], ['GC superintendent'], ['Verbal only'], ['Photos on the foreman’s phone']],
        [['CO-014'], ['PCO-31'], ['Office tenant floor'], ['Drop the soffit in reception'], ['Owner'], ['Rejected'], ['Email thread']],
      ],
    },
    {type: 'paragraph', text: [
      'The crew schedule tab carries the date, the job, the foreman, the crew and notes such as a permit or an inspection. The job tracker tab carries the GC, the superintendent, the phase and the open change orders.',
    ]},

    {type: 'heading', text: 'How this sheet breaks on a job'},
    {type: 'paragraph', text: ['Each of these starts with one column.']},
    {type: 'list', items: [
      ['The Status column still says Pending after the superintendent approved the change on site.'],
      ['The GC ref. stays blank. The GC’s number arrived by email at the office, and nobody copied it into the row.'],
      ['The Backup column points at photos on one foreman’s phone. The pay application goes out without them.'],
      ['The office moves a crew in the schedule tab at night. The foreman works from a screenshot taken that afternoon, and the crew drives to the wrong site.'],
      ['The phase column in the job tracker gets updated on Fridays, so by Wednesday it describes last week.'],
    ]},
    {type: 'paragraph', text: [
      'Each break sits where the field meets the office. Changes happen on site, and the sheet lives on the office computer. Anyone can edit any row, with no clear record of who changed a status.',
    ]},

    {type: 'heading', text: 'The same three tabs, built as an app'},
    {type: 'subheading', text: 'The crew schedule'},
    {type: 'paragraph', text: [
      'Each foreman signs in from a phone browser and sees tomorrow’s job, crew and site notes. When the office moves a crew, the foreman sees the move the next time the screen opens.',
    ]},
    {type: 'subheading', text: 'The change order log'},
    {type: 'paragraph', text: [
      'The foreman raises a change from the job, with the photos on the same record. Its status moves from raised to sent to the GC, approved and on the pay application. The GC ref. has its own field, and a change still waiting for one shows up on the office’s list.',
    ]},
    {type: 'subheading', text: 'The job tracker'},
    {type: 'paragraph', text: [
      'One list shows every job with its GC, its superintendent, its phase and its open change orders. The owner sees all of them. Each foreman sees the jobs on their own schedule.',
    ]},

    {type: 'heading', text: 'How we build it from your sheet'},
    {type: 'paragraph', text: [
      'It begins with a 30-minute call about your sheet, its tabs and its column headers. A prototype of your app, built on those columns, is ready 7 days after the call. You pay for the prototype only if you like it. On the same terms, we then build the finished app. Foremen, office staff and the owner each get a screen of their own and a real login. Your live data moves across, and the old sheet stays in use until your crews trust the app.',
    ]},
    {type: 'paragraph', text: [
      'Both prices, for the prototype and for the finished app, are fixed and public on our offer page. The section ',
      {text: 'What it costs', href: '/en/offers/sheet-to-app#s12-what-it-costs'},
      ' lists them stage by stage.',
    ]},

    {type: 'faq', heading: 'Common questions', items: [
      {q: 'Can you turn my crew schedule Google Sheet into an app my foremen can open on their phones?', a: 'Yes. The app takes its fields from the columns your schedule has now, so your foremen see the same dates, jobs and crews you keep. They open it in the browser on their phone, with nothing to install.'},
      {q: 'What about change orders that get approved out on the job?', a: 'The foreman logs the change on the job, from the phone, at the moment it is agreed. It gets a status and its photos straight away, so the office sees it the same day.'},
      {q: 'Do we have to change how we work to use it?', a: 'No. The screens follow your own tabs and columns, so your crews keep the routine they have today.'},
    ]},

    {type: 'cta', heading: 'Check your shared spreadsheet first', text: '11 questions about how your team uses its sheet. The result shows what to try in Excel or Google Sheets, where they stop, and what an app built around the sheet adds. Your answers stay in your browser.', label: 'Open the spreadsheet check', href: '/en/tools/spreadsheet-check'},
    {type: 'cta', heading: 'Crew schedule or change order log outgrowing the sheet?', text: 'Book a 30-minute call. We look at your columns, talk through what you need, and you get a prototype of your app 7 days later. Pay only if you like it.', label: 'Book a 30-minute call', href: '/en/offers/sheet-to-app'},
  ],
};

export default post;
