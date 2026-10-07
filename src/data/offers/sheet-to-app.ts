import type {SheetToAppOffer} from '@/components/SheetToAppLanding';

// The 7-Day Sheet-to-App Prototype. Built 2026-09-30 in the rollout's goal G19, from the offer-os
// record `offers/fiji-solutions--sheet-to-app`: every page string below is copied verbatim from
// 03-copy.md, per locale, and the metadata from offer.yaml `seo`. To change a line, change it in
// 03-copy.md first and copy it here; this file is never the place a sentence is written.
//
// WHY THIS OFFER HAS ITS OWN LAYOUT. Its page contract (02-architecture.md) is nineteen sections in
// a fixed order, with tables, a four-box diagram, a priced section and five CTA blocks. The shared
// OfferLanding has a different section set, and bending it would change the sixteen routes built on
// it. So this offer renders through src/components/SheetToAppLanding.tsx and keeps OfferLanding's
// graph contract: `slug` and `copy[lang].eyebrow` are what offerLinks.ts reads.
//
// PRICES. This offer's two pages publish the whole price ladder, in dollars, in "What it costs"
// (S12) and in the close (S19) only. That is the dated exception to CLAUDE.md rule 7, recorded
// there on 2026-09-30 (offer-os PLAN.md D68 and D69). No price goes in the hero, in any FAQ answer
// (the FAQ feeds the FAQPage JSON-LD) or in any metadata or JSON-LD. No key in this file may be
// named `price`: G19's check reads the built HTML for that string.
//
// SPEED ANCHOR (rule 6). "7 days" is anchored to the audit call («την πρώτη κλήση») in the H1 and
// the description of both locales. The Greek title cannot fit the anchor under 60 characters, so it
// rides in the description, as 02-architecture.md records.
//
// KEYWORD SEPARATION. The English page targets "order tracker app" and the sheet-to-app phrases;
// the Greek page "excel σε εφαρμογή" and «πρωτότυπο εφαρμογής», the phrase of the retired
// /offers/app-prototype, which now 308s here. Its sibling /offers/software-prototype keeps "custom
// software prototype".
//
// The Greek amounts carry a no-break space before the sign, so the sign never
// wraps onto a line of its own, as 03-copy.md Appendix D (el) allows the build to do.

/**
 * The booking link of the audit call. Since 2026-09-30 (offer-os D120) the audit call is 30 minutes
 * and the page books on the existing 30-minute Calendly event, the same URL as CALENDLY_URL in
 * src/components/AuditFormSection.tsx. It is written out here so this data file, which sitemap.ts
 * and offerLinks.ts also load, does not import a component module. If the event ever changes,
 * change both. While this string is empty, the booking line under the form does not render.
 */
export const SHEET_TO_APP_BOOKING_URL = 'https://calendly.com/charis-fijisolutions/30min';

const sheetToApp: SheetToAppOffer = {
  slug: 'offers/sheet-to-app',
  questionMarker: 'offer-sheet-to-app',
  serviceType: 'Custom Software Development',
  areaServed: {
    en: ['United States'],
    el: ['Greece']
  },
  copy: {
    en: {
      metaTitle: '7-day prototype. Pay only if you like it | Fiji Solutions',
      metaDescription:
        'A prototype of your app 7 days after the audit call: your order tracker or crew schedule as an app. Pay only if you like it.',
      metaKeywords:
        'order tracker app, crew scheduling app, excel to web app, convert excel to web app, excel to app, turn excel into an app',
      ogAlt: 'Fiji Solutions: a prototype of your app 7 days after the audit call',

      // The S01 outcome line. It is also the anchor text of every link to this page (offerLinks.ts
      // reads `eyebrow` for every offer), as 03-copy-homepage.md asks.
      eyebrow: 'The finished app shows where every order or job stands',
      title: 'A prototype 7 days after the audit call. Pay only if you like it.',
      subhead:
        'The Column-First Build starts from your spreadsheet\'s column headers. On a free 30-minute audit call, we talk through what you need.',
      button: 'Book my 30-minute call',
      heroSkip: 'See what you get',
      illustrationDayTag: 'Day 7',
      riskRemover: 'Pay only if you like it.',

      sections: [
        {
          kind: 'content',
          id: 's03-problem',
          title: 'Your whole week runs through one shared spreadsheet',
          blocks: [
            {type: 'p', text: 'Monday, you open the sheet.'},
            {type: 'p', text: 'For some owners it is the crew schedule and the job log. For others it is the order tracker for the metal parts or machines they make.'},
            {type: 'p', text: 'Yours lives in Excel or in Google Sheets. The whole team works in it, and the whole team edits it.'},
            {type: 'p', text: 'The planner wants the open orders due this week. You want to see where every order stands. So you both dig through the same rows.'},
            {type: 'p', text: 'Then the questions start. "Where\'s that order at?"'},
            {type: 'p', text: 'You scroll to the row. It says one thing, and the person who typed it says another. You pick up the phone.'},
            {type: 'p', text: 'Tuesday, if you run crews, the foremen call the office to find out where they go tomorrow. There are three versions of the crew sheet, and nobody knows which one is right.'},
            {type: 'p', text: 'And a date has moved. "Who changed this?" Nobody is sure, so you ask around until someone remembers.'},
            {type: 'p', text: 'Wednesday, a change order gets approved on site. It never reaches the log.'},
            {type: 'p', text: 'Back in the office, someone says it: "We type the same thing in twice." Each order goes into the sheet, then into accounting or an email.'},
            {type: 'p', text: 'Thursday, someone sorts one column and breaks the whole sheet.'},
            {type: 'p', text: '"Everyone sees everything." The person who needs a few columns scrolls past all the rest. Columns meant for you alone sit open to the whole team.'},
            {type: 'p', text: 'Friday, you want one thing before the weekend. "I can\'t see where everything stands without asking around."'},
            {type: 'p', text: 'You ask around again. You call, you message, you walk the floor.'},
            {type: 'p', text: 'Every answer runs through you. When you are out, the questions pile up.'},
            {type: 'h3', text: 'The sheet still sort of works, so fixing it never becomes the week\'s priority'},
            {type: 'p', text: 'Orders still go out. Crews still turn up.'},
            {type: 'p', text: 'There is always a customer to call back or a job to finish. The fix needs your signature, and your week is already full.'},
            {type: 'p', text: 'You have looked at other systems. You may have said it yourself: "We\'ve outgrown the spreadsheet, but every system we look at wants us to change how we work, or charges for every user."'},
            {type: 'p', text: 'Three worries sit under all of it. Your data would have to leave the sheet. You could get locked in to one vendor.'},
            {type: 'p', text: 'And if the tool breaks or loses data, who fixes it?'},
            {type: 'h3', text: 'The day-to-day admin holds the business back'},
            {type: 'p', text: 'Add up the week. The chasing, the retyping and the asking around take up hours of it.'},
            {type: 'p', text: 'This keeps owners up at night. All that bureaucracy keeps the business from growing.'},
            {type: 'p', text: 'Every extra order means one more row to chase, one more call and one more thing to type twice.'},
            {type: 'p', text: 'You can see the work you could take on. You can also see what it would do to the sheet. So the sheet sets the pace of the whole company.'},
            {type: 'skip', text: 'Skip to what you get'}
          ]
        },
        {
          kind: 'content',
          id: 's22-cost-of-inaction',
          title: 'Your own numbers show what the sheet costs you each year',
          blocks: [
            {type: 'p', text: 'Every number in this sum is yours.'},
            {type: 'p', text: 'Count the people who ask around to find where things stand. Multiply by the hours each of them spends a week asking around and typing the same thing twice. Multiply by your working weeks a year.'},
            {type: 'p', text: 'That is the time the sheet takes each year. Multiply it by what an hour of that time costs the business. That is what the sheet costs you each year.'},
            {type: 'p', text: 'On the audit call we ask you for these numbers. They stay in the call notes and your written scope.'}
          ]
        },
        {
          kind: 'cta',
          id: 's18-cta-1',
          benefit: 'Talk through your sheet on the audit call, and click through your prototype 7 days later.',
          action: 'Press the button, paste your column headers into the form, and pick a time.'
        },
        {
          kind: 'content',
          id: 's04-false-solutions',
          title: 'The four usual fixes each stall at a different step',
          blocks: [
            {type: 'p', text: 'The sheet grew with the business, and it got you this far. There are four usual ways out.'},
            {type: 'p', lead: 'Keep the sheet and live with it.', text: 'It still sort of works, so nothing changes, and the chasing goes on: "Where\'s that order at?" "Who changed this?" The yearly cost from your sum above keeps running.'},
            {type: 'p', lead: 'Buy industry software or an ERP.', text: 'It means changing how the business works to fit the tool. And many of them charge for every user.'},
            {type: 'p', lead: 'Build it yourself with a no-code tool.', text: 'Tools such as Glide, Softr and AppSheet let you convert Excel to a web app, and they leave the build to you. If nobody in your company builds software, that is where it stops.'},
            {type: 'p', text: 'And if something breaks or data goes missing, your team is on its own.'},
            {type: 'p', lead: 'Hire a developer or an agency.', text: 'It feels like an open-ended IT project, with no fixed price and no promise it will fit.'},
            {type: 'p', text: 'So the sheet stays, and the chasing goes on.'},
            {type: 'p', text: 'We start from the columns your team already fills in, so nobody has to change how they work. We do the building ourselves. The scope is written down on the audit call, and the price of each stage is on this page.'},
            {type: 'p', text: 'On day 7 you click through a prototype of your app. Pay only if you like it.'}
          ]
        },
        {
          kind: 'content',
          id: 's05-mechanism',
          title: 'Our method starts from the top row of your sheet',
          blocks: [
            {type: 'p', text: 'We call our method The Column-First Build. It starts from your column headers: the top row of your sheet.'},
            {type: 'p', text: 'Those headers already describe how your team works. So we build the app from them, and your team keeps its columns and its way of working.'},
            {type: 'p', text: 'This is how we turn Excel into an app, or a Google Sheet into one. Four steps take you from your headers to a prototype on day 7. The finished app follows about three weeks after you go ahead.'},
            {type: 'diagram', boxes: ['Your column headers', 'The audit call', 'Days 1 to 6', 'Day 7']},
            {type: 'h3', text: '1. You send your column headers with the form'},
            {type: 'p', text: 'You paste the top row of your sheet into the form on this page. The headers are enough for this step.'},
            {type: 'p', text: 'We read them before the call, so the call starts from your own columns. Later, the prototype runs on sample rows we make from your headers, so nobody on your team types test data. Your real sheet moves in with the finished app.'},
            {type: 'h3', text: '2. On the audit call we talk through what you need'},
            {type: 'p', text: 'The audit call takes 30 minutes. We see how your sheet runs today and what you need from it.'},
            {type: 'p', text: 'Then we write down together the 3 to 5 things the prototype must do. Each line names a screen, a role and an action. The list is capped at 5 screens and 2 roles.'},
            {type: 'p', text: 'That short written list is the prototype\'s scope. We also agree what the finished app must do, if you go ahead with it. Before the call ends, we book the day-7 walkthrough.'},
            {type: 'h3', text: '3. Days 1 to 6: each role gets its screen, and every change gets a link'},
            {type: 'p', text: 'The 7 days start once the list is agreed and your column headers have arrived. Then we build a screen for each role on your list.'},
            {type: 'p', text: 'For example, the planner\'s screen shows this week\'s work, and the owner\'s shows the whole picture.'},
            {type: 'p', text: 'Every change comes with a private progress link. The earliest arrives within 48 hours of the audit call. You watch the prototype take shape in your browser, and you comment when it suits you.'},
            {type: 'h3', text: '4. Day 7: you click through your prototype and decide'},
            {type: 'p', text: 'On day 7 we meet for a 30-minute walkthrough. You click through the prototype yourself, screen by screen. Then you tell us whether you like it.'},
            {type: 'p', text: 'You judge a prototype of your app, made from your own sheet. It does the 3 to 5 things on your list, on sample rows made from your headers.'},
            {type: 'p', text: 'The build plan for the finished app is on the table too: what we agreed for it on the audit call, in writing. Its price is in "What it costs" below, so you know the cost of the next step before you choose it.'}
          ]
        },
        {
          kind: 'cta',
          id: 's18-cta-2',
          benefit: 'Your column headers become a prototype of your app 7 days after the audit call.',
          action: 'Press the button and paste the top row of your sheet.'
        },
        {
          kind: 'content',
          id: 's06-transformation',
          title: 'With the finished app, one screen shows where every order or job stands',
          blocks: [
            {type: 'p', text: 'Now take the same week with the finished app in place.'},
            {type: 'p', text: 'Monday, you open one screen. Every order or job is on it, with where it stands. Nobody has to ask around.'},
            {type: 'p', text: 'Each person logs in to their own screen and sees their own part of it. The planner sees this week\'s work and gets on with it. The owner sees the whole picture.'},
            {type: 'p', text: 'Your real sheet moves in, with the formulas we agreed on the audit call. Each thing gets typed once, and the app keeps it. Then the app sends it on to your accounting and email.'},
            {type: 'p', text: 'The sheet becomes your order tracker app or your crew scheduling app, with the columns your team already knows.'},
            {type: 'p', text: 'And the day-to-day admin stops holding the business back. When more work comes in, you can decide to take it on.'}
          ]
        },
        {
          kind: 'content',
          id: 's09-proof',
          title: 'We have shipped changes to a client\'s custom CRM every week since July 2026',
          blocks: [
            {type: 'p', text: 'Fiji Solutions is a software company in Thessaloniki. Our founder has more than ten years of experience building software in banking, travel, telecom, health and online education.'},
            {type: 'p', text: 'Fiji Solutions is listed in Snowflake\'s own partner directory as a Snowflake AI Data Cloud Select Partner.'},
            // 2026-10-08 (F16, offer-os gtm/followups-and-search/PLAN.md F-D140): PAP Center named with the
            // owner's written yes (F-D20), and New Era Learning added (F-D30). AKB stays off every Fiji page (F-D21).
            {type: 'p', text: 'PAP Center, a hair clinic in Thessaloniki, ran on software built in 2000 and feared that software would stop working.'},
            {type: 'p', text: 'We built the clinic a custom CRM, and it still runs today. We have shipped changes to that CRM every week since July 2026, on the platform your finished app runs on.'},
            {type: 'p', text: 'New Era Learning is an online learning platform. We helped build the platform and built a Snowflake data setup that extracts their data into customer and revenue insights.'},
            {type: 'p', text: 'From the audit call through the prototype and the build, you talk to the engineer who builds your app.'}
          ]
        },
        {
          kind: 'content',
          id: 's10-process',
          title: 'Your part is the headers, 30 minutes on a call and 30 minutes on day 7',
          blocks: [
            {
              type: 'ul',
              items: [
                {lead: 'Day 0:', text: 'the audit call: we talk through what you need, agree the list and book the walkthrough.'},
                {lead: 'Within 48 hours:', text: 'your earliest progress link.'},
                {lead: 'Days 3 to 5:', text: 'the rest of the list, each change on its own link.'},
                {lead: 'Day 7:', text: 'you go through the prototype, say whether you like it, and get the build plan.'},
                {lead: 'About three weeks after you go ahead:', text: 'the finished app. If you like it, we invoice the rest of its price.'},
                {lead: '30 days after the walkthrough:', text: 'the prototype comes down, and its fee stops counting toward the finished app.'}
              ]
            },
            {type: 'p', text: 'One thing the prototype leaves out: your formulas and macros. They come into the finished app, for its one price, when we agree them on the audit call.'}
          ]
        },
        {
          kind: 'content',
          id: 's07-offer-stack',
          title: 'You get eight parts, from the audit call to Care',
          blocks: [
            {
              type: 'table',
              head: ['Item', 'What you get'],
              rowHeaders: true,
              rows: [
                ['The audit call', '30 minutes: we talk through what you need and agree the scope'],
                ['The 7-day prototype', 'A prototype of your app to review, a screen per role'],
                ['Progress links', 'A private link for every change'],
                ['The day-7 walkthrough', '30 minutes to review it and decide'],
                ['The finished app', 'What we agreed, about three weeks after you go ahead: logins, your real sheet, connections'],
                ['Care or Care Plus', 'Hosting, backups, fixes and hours of changes, billed monthly, or the code once the app is paid'],
                ['No lock-in', 'Once the app is paid: its code on request, a spreadsheet export'],
                ['The engineer who builds it', 'You talk to that engineer, from the call to delivery']
              ]
            }
          ]
        },
        {
          kind: 'content',
          id: 's12-what-it-costs',
          title: 'What it costs: nothing is due until you say yes',
          blocks: [
            {type: 'p', text: 'Weigh each price against the sheet\'s yearly cost from your sum above.'},
            {
              type: 'table',
              head: ['Stage', 'Price', 'When you pay'],
              rowHeaders: true,
              rows: [
                ['The 7-Day Sheet-to-App Prototype', '$2,000', 'When you say yes on day 7. A no costs nothing'],
                ['The finished app', '$7,000 in total', 'When you say yes at delivery. Start the build within 30 days of the walkthrough, and the prototype\'s $2,000 counts toward it: $5,000 more']
              ]
            },
            {type: 'p', text: 'We take on 3 prototypes a month, so each one gets our full attention. Today\'s prices are where we start, and they will rise as we grow the team.'},
            {type: 'p', text: 'At delivery, choose Care or Care Plus, billed monthly, or take the code once the app is paid and host it yourself.'},
            {type: 'p', text: 'Both plans host your app on our AWS platform. Several copies run at once, so one failed server does not take it offline. Changes are tested on a separate copy before they go live.'},
            {type: 'p', text: 'We back up your app automatically and test that the backups restore. We watch it day and night, apply security updates and keep its software up to date. Bug fixes never count against your hours.'},
            {
              type: 'table',
              head: ['', 'Care', 'Care Plus'],
              rowHeaders: true,
              rows: [
                ['Price', '$400 a month', '$990 a month'],
                ['Changes and new features', 'Up to 2 hours a month', 'Up to 10 hours a month'],
                ['Calls', 'One 1-hour call a month', 'A 1-hour call every week'],
                ['Answers', 'Within 1 business day', 'Same business day, plus a direct phone line to your engineer for anything urgent']
              ]
            },
            {type: 'p', text: 'Send changes by voice note or email. Work past your hours is billed per hour.'}
          ]
        },
        {
          kind: 'cta',
          id: 's18-cta-3',
          benefit: 'A prototype of your app 7 days after the audit call, with the price of each stage listed above.',
          action: 'Press the button, paste your column headers, and pick a time for the call.'
        },
        {
          kind: 'content',
          id: 's08-bonuses',
          title: 'Four extras come with the prototype',
          blocks: [
            {
              type: 'ul',
              items: [
                {lead: 'The Build Plan.', text: 'At the walkthrough: the written plan of your finished app, from what we agreed on the audit call. The connection you named on the call heads the plan.'},
                {lead: 'The What-Connects-Next Screen.', text: 'That one connection, grayed out inside your own prototype, so the next step is there before you decide.'},
                {lead: 'The Sector Starter List.', text: 'A draft of the 3 to 5 lines for your kind of business, brought to the call, so you edit lines that already fit.'},
                {lead: '30 Days of Free Hosting.', text: 'The prototype stays up for 30 days after the walkthrough while you decide.'}
              ]
            }
          ]
        },
        {
          kind: 'content',
          id: 's13-guarantee',
          title: 'Pay only if you like it: you decide on day 7 and at delivery',
          blocks: [
            {type: 'strong', text: 'Nothing is paid before day 7.'},
            {
              type: 'ol',
              items: [
                'The prototype\'s scope: the 3 to 5 lines agreed on the audit call, each a screen, a role and an action. At most 5 screens and 2 roles.',
                'The 7 days start once the list is agreed and your headers arrive.',
                'On day 7, in a 30-minute walkthrough, you review the prototype and say if you like it.',
                'A no needs no reason and costs nothing: we stop and delete your data on request.',
                'Say yes and we invoice the prototype fee. It counts toward the finished app if the build starts within 30 days of the walkthrough.',
                'At delivery you review the finished app. Say yes and we invoice the rest of its price. A no needs no reason and costs nothing more, and the code stays with us.'
              ]
            },
            {type: 'p', text: 'Questions about these terms go to info@fijisolutions.net.'}
          ]
        },
        {
          kind: 'cta',
          id: 's18-cta-4',
          benefit: 'You decide on day 7 and again at delivery, and nothing is paid before you say yes.',
          action: 'Press the button, paste your column headers, and pick a time for the call.'
        },
        {
          kind: 'faq',
          id: 's15-faq',
          title: 'The price of each stage is on this page, and the code is yours once the app is paid'
        },
        {
          kind: 'content',
          id: 's19-close',
          title: '7 days after the audit call, you click through your own prototype. Pay only if you like it.',
          blocks: [
            {type: 'p', text: 'The 7-Day Sheet-to-App Prototype turns your team\'s shared spreadsheet into a prototype of your app, with a screen for each role.'},
            {type: 'p', text: 'It starts with a 30-minute audit call, where we talk through what you need. On day 7, you go through the prototype in a 30-minute walkthrough.'},
            {type: 'p', text: 'If you like it, you pay $2,000. If you do not, you pay nothing.'},
            {type: 'p', text: 'Start the build within 30 days of the walkthrough, and that $2,000 counts toward the finished app\'s $7,000. At delivery you go through the finished app. If you like it, you pay the other $5,000; if you do not, you pay nothing more.'},
            {type: 'p', text: 'To start, paste your column headers below and pick a time.'}
          ]
        }
      ],

      // S15. Also the source of the FAQPage JSON-LD. No answer carries a price (D68).
      // 03-copy.md Appendix D once asked for an inline TODO(charis) on "why a company in Greece"
      // at the end of "Who are you". Its own D79 banner closes it: that question left the English
      // FAQ, which now asks "Who are you, and where are you based?", and the answer below is the
      // copy's whole answer. Nothing is added and no marker is carried.
      faqs: [
        {q: 'What does it cost?', a: 'Each stage and each plan has its price in "What it costs" above. We take on 3 prototypes a month, so each one gets our full attention. Today\'s prices are where we start, and they will rise as we grow the team.'},
        {q: 'Why not Glide, Softr or Airtable?', a: 'If one of them fits how your team works, use it, and we will say so on the call. What we build follows your own columns, and the finished app connects to your accounting and email.'},
        {q: 'We don\'t have time for a software project.', a: 'Your part: the column headers, 30 minutes on the audit call and 30 minutes on day 7. We make the sample rows and send a link for every change.'},
        {q: 'Our data is sensitive.', a: 'The prototype runs on sample rows made from your column headers. Your real sheet moves in later, with the finished app, and we delete your data when you ask.'},
        {q: 'Every system we look at wants us to change how we work.', a: 'The app is built around the columns you already use, and the prototype is made from your own sheet.'},
        {q: 'Who are you, and where are you based?', a: 'Fiji Solutions is a software company in Thessaloniki, Greece. We work with business owners in the United States and in Greece. Our founder has more than ten years of experience building software, and Snowflake\'s partner directory lists Fiji as a Select Partner.'},
        {q: 'What happens after day 7? Are we locked in?', a: 'If you go ahead, the finished app follows about three weeks later, on the same terms: pay only if you like it. Then you choose Care, Care Plus or the code, which is yours on request once the app is paid.'},
        {q: 'Can it keep our formulas and macros?', a: 'They stay out of the 7 days. They come into the finished app, for its one price, when we agree them on the audit call.'},
        {q: 'Is this just AI-generated code?', a: 'We use AI tools to build faster. The finished app runs on the same AWS platform as the CRM we have shipped changes to every week since July 2026.'},
        {q: 'What if you disappear?', a: 'Once the finished app is paid, its code is yours on request at any time. Everything it runs on is written down as code, so another engineer can pick it up.'},
        {q: 'We already use industry software or an ERP.', a: 'Keep it. The prototype is for the spreadsheet that sits next to it. With no such sheet, we are the wrong call.'}
      ],

      formTitle: 'Send your column headers and book your 30-minute call',
      formSubhead: 'We read the top row of your sheet before the call, so we start from your own columns.',
      formNameLabel: 'Name',
      formEmailLabel: 'Email',
      formCompanyLabel: 'Company',
      formMessageLabel: 'Your column headers',
      formMessagePlaceholder: 'Paste the top row here: your column headers. Leave the rows out.',
      formMessageRequired: 'Paste your column headers first.',
      formMicrocopy: 'Pay only if you like it.',
      formSuccess: 'Thank you. We will read your headers before the call. Pick a time below.',
      // Links SHEET_TO_APP_BOOKING_URL above, the existing 30-minute event (D120, 2026-09-30).
      bookingBefore: 'Or ',
      bookingLink: 'book the 30-minute audit call here',
      bookingAfter: '.'
    },

    el: {
      metaTitle: 'Πρωτότυπο εφαρμογής σε 7 μέρες. Πληρώνεις μόνο αν σου αρέσει',
      metaDescription:
        'Πρωτότυπο της εφαρμογής σου 7 μέρες μετά την πρώτη κλήση, φτιαγμένο από τις στήλες του Excel σου. Πληρώνεις μόνο αν σου αρέσει.',
      metaKeywords:
        'excel σε εφαρμογή, μετατροπή excel σε εφαρμογή, παρακολούθηση παραγγελιών, προγραμματισμός συνεργείων, πρωτότυπο εφαρμογής',
      ogAlt: 'Fiji Solutions: πρωτότυπο της εφαρμογής σου 7 μέρες μετά την πρώτη κλήση',

      // The S01 outcome line, and the anchor text of every link to this page (see the en note).
      eyebrow: 'Κάθε παραγγελία και κάθε δουλειά σε μία οθόνη',
      title: 'Πρωτότυπο της εφαρμογής σου 7 μέρες μετά την πρώτη κλήση. Πληρώνεις μόνο αν σου αρέσει.',
      subhead:
        'Δουλεύουμε με τη μέθοδο «Πρώτα οι στήλες»: μας στέλνεις τα ονόματα των στηλών του Excel σου. Στην πρώτη κλήση, 30 λεπτά και δωρεάν, συζητάμε τι χρειάζεσαι.',
      button: 'Κλείνω ώρα για την πρώτη κλήση των 30 λεπτών',
      heroSkip: 'Δες τι παίρνεις',
      // The Greek visual brief asks for the column row and the screen, and no calendar strip.
      riskRemover: 'Πληρώνεις μόνο αν σου αρέσει.',

      sections: [
        {
          kind: 'content',
          id: 's03-problem',
          title: 'Η βδομάδα σου περνάει ρωτώντας πού βρίσκεται η κάθε παραγγελία',
          blocks: [
            {type: 'p', text: 'Δευτέρα πρωί. Ένας πελάτης παίρνει τηλέφωνο για την παραγγελία του και περιμένει.'},
            {type: 'p', text: 'Ανοίγεις το κοινό Excel της ομάδας σου και βρίσκεις την παραγγελία. Η στήλη της κατάστασης γράφει ό,τι έβαλε κάποιος πριν από μέρες. Φωνάζεις στο διπλανό γραφείο: «Πού είναι αυτή η παραγγελία;»'},
            {type: 'p', text: 'Τρίτη. Η ίδια παραγγελία γράφεται στο Excel και μετά ξανά, στο πρόγραμμα του λογιστηρίου.'},
            {type: 'p', text: '«Τα ίδια τα γράφουμε δύο φορές», σου λέει κάποιος. Έχει δίκιο.'},
            {type: 'p', text: 'Τετάρτη. Ένας αριθμός άλλαξε και κανείς δεν θυμάται πότε. «Ποιος το άλλαξε αυτό;»'},
            {type: 'p', text: 'Το Excel δεν απαντά. Ρωτάς έναν έναν. Ο ένας λέει ότι δεν το άγγιξε, ο άλλος ότι το διόρθωσε.'},
            {type: 'p', text: 'Πέμπτη. Στο ίδιο Excel γράφουν όλοι. «Όλοι βλέπουν τα πάντα», λέει κάποιος.'},
            {type: 'p', text: 'Ο καθένας ψάχνει τη δική του στήλη ανάμεσα σε όλες τις άλλες. Κάποιος ταξινομεί μία στήλη και οι γραμμές ανακατεύονται σε όλο το αρχείο.'},
            {type: 'p', text: 'Παρασκευή απόγευμα. Κάνεις τον απολογισμό της βδομάδας: πόσες φορές ρώτησες, πόσες φορές σε ρώτησαν, πόσες φορές γράφτηκε το ίδιο πράγμα. Καταλήγεις στην ίδια φράση: «Δεν ξέρω πού βρίσκεται τίποτα αν δεν ρωτήσω.»'},
            {type: 'h3', text: 'Κάθε ερώτηση για μια παραγγελία καταλήγει σε σένα'},
            {type: 'p', text: 'Αν φτιάχνεις μεταλλικά προϊόντα ή μηχανήματα, κάνεις την παρακολούθηση παραγγελιών σε ένα κοινό Excel ή στο Google Sheets. Αν έχεις συνεργεία, σε ένα τέτοιο Excel κάνεις τον προγραμματισμό συνεργείων και κρατάς το ημερολόγιο των δουλειών. Όλοι γράφουν μέσα και όλοι κυνηγάνε ο ένας τον άλλον.'},
            {type: 'p', text: 'Ο υπεύθυνος προγραμματισμού σε παίρνει για να επιβεβαιώσει μια ημερομηνία. Οι αρχηγοί των συνεργείων παίρνουν τηλέφωνο στο γραφείο για να μάθουν πού πάνε αύριο. Ο πελάτης σε παίρνει για την παράδοση.'},
            {type: 'p', text: 'Μια αλλαγή στη δουλειά εγκρίνεται στο εργοτάξιο και δεν γράφεται ποτέ στο ημερολόγιο. Το πρόγραμμα των συνεργείων κυκλοφορεί σε τρεις εκδοχές και κανείς δεν ξέρει ποια ισχύει.'},
            {type: 'p', text: 'Κανένα κελί δεν λέει πού βρίσκεται κάτι αυτή τη στιγμή, γι’ αυτό όλες οι ερωτήσεις έρχονται σε σένα. Κι όταν λείπεις μια μέρα, οι ερωτήσεις σε περιμένουν.'},
            {type: 'h3', text: 'Το Excel ακόμα κάπως δουλεύει, γι’ αυτό η διόρθωσή του περιμένει'},
            {type: 'p', text: 'Οι παραγγελίες βγαίνουν. Οι δουλειές γίνονται.'},
            {type: 'p', text: 'Η διόρθωση του Excel δεν γίνεται ποτέ η προτεραιότητα της βδομάδας, γιατί κάτι άλλο καίει πάντα περισσότερο.'},
            {type: 'p', text: 'Έχεις κοιτάξει και τι άλλο υπάρχει: ένα έτοιμο πρόγραμμα, έναν προγραμματιστή, ένα εργαλείο που θα το στήσει κάποιος δικός σου. Κάθε φορά κάτι σε κρατάει.'},
            {type: 'p', text: 'Φοβάσαι μήπως τα δεδομένα σου φύγουν από το Excel. Φοβάσαι μήπως δεθείς με έναν προμηθευτή. Και έτσι το Excel μένει όπως είναι, για άλλη μια βδομάδα.'},
            {type: 'h3', text: 'Η καθημερινή τρεχάλα σε κρατάει εκεί που είσαι'},
            {type: 'p', text: 'Όσο όλα περνάνε από σένα, η γραφειοκρατία και η καθημερινή τρεχάλα δεν σε αφήνουν να μεγαλώσεις την επιχείρηση. Ξέρεις ότι η επιχείρησή σου σηκώνει περισσότερη δουλειά.'},
            {type: 'p', text: 'Κάθε παραπάνω παραγγελία φέρνει παραπάνω ερωτήσεις, και όλες καταλήγουν στο ίδιο τηλέφωνο: το δικό σου.'},
            {type: 'p', text: 'Θέλεις να ανοίγεις μία οθόνη και να ξέρεις πού βρίσκεται κάθε παραγγελία και κάθε δουλειά. Να μη ρωτάς κανέναν.'},
            {type: 'p', text: 'Η επόμενη βδομάδα θα είναι ίδια, εκτός αν το Excel σου γίνει εφαρμογή.'},
            {type: 'skip', lead: 'Για να πας κατευθείαν στην πρόταση:', text: 'Δες τι παίρνεις'}
          ]
        },
        {
          kind: 'content',
          id: 's22-cost-of-inaction',
          title: 'Το κυνηγητό έχει κόστος, και το βγάζεις με τα δικά σου νούμερα',
          blocks: [
            {type: 'p', text: 'Πάρε τα δικά σου νούμερα και κάνε τους δύο υπολογισμούς παρακάτω.'},
            {type: 'formula', text: '(άνθρωποι που ψάχνουν την κατάσταση στο Excel) × (ώρες τη βδομάδα που ο καθένας ρωτάει πού βρίσκονται τα πράγματα και ξαναγράφει τα ίδια) × (βδομάδες δουλειάς τον χρόνο) = ώρες που χάνονται τον χρόνο'},
            {type: 'formula', text: '(ώρες που χάνονται τον χρόνο) × (κόστος μιας ώρας αυτών των ανθρώπων) = τι σου κοστίζει κάθε χρόνο το κυνηγητό'},
            {type: 'p', text: 'Τα νούμερα τα βγάζουμε μαζί στην πρώτη κλήση και μένουν στις σημειώσεις της κλήσης.'}
          ]
        },
        {
          kind: 'cta',
          id: 's18-cta-1',
          benefit: 'Στην πρώτη κλήση συζητάμε τι χρειάζεσαι από το Excel σου, και 7 μέρες μετά εξετάζεις το πρωτότυπο της εφαρμογής σου.',
          action: 'Πάτα το κουμπί, επικόλλησε στη φόρμα τα ονόματα των στηλών σου και διάλεξε ώρα.'
        },
        {
          kind: 'content',
          id: 's04-false-solutions',
          title: 'Οι τέσσερις δρόμοι που έχεις μπροστά σου σε γυρνάνε στο ίδιο Excel',
          blocks: [
            {type: 'p', text: 'Κάθε δρόμος που έχεις μπροστά σου ζητάει κάτι που δεν θέλεις να δώσεις. Γι’ αυτό το Excel είναι ακόμα εκεί.'},
            {type: 'p', lead: 'Να το αφήσεις όπως είναι.', text: 'Η διόρθωσή του μένει πάντα για την άλλη βδομάδα, και το κυνηγητό συνεχίζεται: «Πού είναι αυτή η παραγγελία;», «Ποιος το άλλαξε αυτό;».'},
            {type: 'p', lead: 'Έτοιμο λογισμικό του κλάδου ή ERP.', text: 'Για να το βάλεις, η επιχείρησή σου πρέπει να αλλάξει τον τρόπο που δουλεύει και να χωρέσει στο εργαλείο. Πολλά από αυτά χρεώνουν και για κάθε χρήστη.'},
            {type: 'p', text: 'Ίσως το έχεις πει κι εσύ: «Μεγαλώσαμε και το Excel δεν μας χωράει πια. Κάθε σύστημα που κοιτάμε θέλει να αλλάξουμε τον τρόπο που δουλεύουμε, ή χρεώνει για κάθε χρήστη.»'},
            {type: 'p', lead: 'Προγραμματιστής ή εταιρεία ανάπτυξης.', text: 'Μοιάζει με έργο πληροφορικής που δεν ξέρεις πότε τελειώνει, πόσο θα κοστίσει και αν θα ταιριάξει στη δουλειά σου.'},
            {type: 'p', lead: 'Εργαλεία όπως το Glide, το Softr ή το AppSheet.', text: 'Στην εταιρεία σου κανείς δεν φτιάχνει λογισμικό. Κι αν κάτι σοβαρό χαλάσει ή χαθούν δεδομένα, το πρόβλημα είναι δικό σου.'},
            {type: 'p', text: 'Η εφαρμογή σου ξεκινά από τις στήλες που ήδη έχεις και χτίζεται γύρω τους. Η ομάδα σου κρατάει τον τρόπο που δουλεύει. Στην πρώτη κλήση συζητάμε μαζί τι χρειάζεσαι, και το πρωτότυπο φτιάχνεται από το δικό σου Excel. Οι τιμές του πρωτοτύπου, της τελικής εφαρμογής και των πλάνων φροντίδας είναι σταθερές και γραμμένες σε αυτή τη σελίδα.'}
          ]
        },
        {
          kind: 'content',
          id: 's05-mechanism',
          title: '«Πρώτα οι στήλες»: η εφαρμογή σου ξεκινά από τα ονόματα των στηλών σου',
          blocks: [
            {type: 'p', text: 'Η μέθοδός μας λέγεται «Πρώτα οι στήλες». Ξεκινάμε από τα ονόματα των στηλών σου: τα διαβάζουμε πριν από την πρώτη κλήση, και στην κλήση συζητάμε μαζί τι χρειάζεσαι.'},
            {type: 'p', text: 'Τις επόμενες μέρες χτίζουμε από τις στήλες σου την οθόνη κάθε ρόλου, με σύνδεσμο προόδου για κάθε αλλαγή. Έτσι, την 7η μέρα εξετάζεις ένα πρωτότυπο φτιαγμένο από το δικό σου Excel.'},
            {type: 'h3', text: 'Οι στήλες σου περιγράφουν ήδη πώς δουλεύει η επιχείρησή σου'},
            {type: 'p', text: 'Κοίτα τα ονόματα των στηλών σου, πάνω πάνω στο Excel. Κάθε στήλη είναι κάτι που η ομάδα σου χρειάστηκε να γράφει κάπου.'},
            {type: 'p', text: 'Χτίζουμε την εφαρμογή γύρω από αυτές τις στήλες, οπότε κανείς στην ομάδα σου δεν αλλάζει τον τρόπο που δουλεύει. Έτσι η μετατροπή του Excel σου σε εφαρμογή ξεκινά από τα ονόματα των στηλών του.'},
            {type: 'p', text: 'Για το πρωτότυπο χρειαζόμαστε τα ονόματα των στηλών σου. Τις ενδεικτικές γραμμές τις φτιάχνουμε από αυτά, οπότε κανείς δεν πληκτρολογεί δοκιμαστικά στοιχεία.'},
            {type: 'h3', text: 'Τέσσερα βήματα σε πάνε από τα ονόματα των στηλών ως την 7η μέρα'},
            {type: 'diagram', boxes: ['Τα ονόματα των στηλών', 'Η πρώτη κλήση', 'Μέρες 1 έως 6', '7η μέρα']},
            {type: 'p', lead: '1. Τα ονόματα των στηλών σου.', text: 'Μας τα στέλνεις από το Excel σου.'},
            {type: 'p', lead: '2. Η πρώτη κλήση, 30 λεπτά.', text: 'Βλέπουμε πώς δουλεύει σήμερα το Excel σου και συζητάμε τι χρειάζεσαι από αυτό. Γράφουμε μαζί τη λίστα του πρωτοτύπου: 3 έως 5 σημεία, το καθένα μια οθόνη, ένας ρόλος και μια ενέργεια, το πολύ 5 οθόνες και 2 ρόλοι. Συμφωνούμε και τι θα κάνει η τελική εφαρμογή.'},
            {type: 'p', lead: '3. Μέρες 1 έως 6.', text: 'Χτίζουμε την οθόνη κάθε ρόλου και σου στέλνουμε σύνδεσμο προόδου για κάθε αλλαγή.'},
            {type: 'p', lead: '4. 7η μέρα.', text: 'Εξετάζεις το πρωτότυπο και αποφασίζεις. Το σχέδιο υλοποίησης της τελικής εφαρμογής είναι στο τραπέζι.'},
            {type: 'p', text: 'Η λίστα γράφεται μαζί στην πρώτη κλήση, και έτσι οι μέρες 1 έως 6 πάνε στις οθόνες των ρόλων σου.'},
            {type: 'h3', text: 'Βλέπεις το πρωτότυπό σου να χτίζεται όλη τη βδομάδα'},
            {type: 'p', text: 'Κάθε σύνδεσμος προόδου είναι ιδιωτικός. Τον ανοίγεις όποτε σε βολεύει και μας λες τη γνώμη σου. Δεν εγκαθιστάς τίποτα.'},
            {type: 'p', text: 'Στο πρωτότυπο κάθε ρόλος έχει τη δική του οθόνη, με ενδεικτικές γραμμές: η οθόνη του υπεύθυνου προγραμματισμού δείχνει τις ανοιχτές παραγγελίες της βδομάδας, και η δική σου πού βρίσκεται κάθε παραγγελία.'},
            {type: 'p', text: 'Στη συνάντηση της 7ης μέρας εξετάζεις με τα μάτια σου, μία μία, τις οθόνες των ρόλων σου.'},
            {type: 'p', text: 'Αν δεν σου αρέσει, σταματάμε εκεί και δεν πληρώνεις τίποτα. Αν σου αρέσει, πληρώνεις το πρωτότυπο, είτε σταματήσεις εκεί είτε συνεχίσεις. Αν συνεχίσεις, η τελική εφαρμογή έρχεται περίπου τρεις βδομάδες αργότερα, και στην παράδοση λες ξανά αν σου αρέσει.'}
          ]
        },
        {
          kind: 'cta',
          id: 's18-cta-2',
          benefit: 'Οι στήλες σου γίνονται οθόνες, και την 7η μέρα εξετάζεις το πρωτότυπο.',
          action: 'Πάτα το κουμπί, επικόλλησε στη φόρμα τα ονόματα των στηλών σου και διάλεξε ώρα.'
        },
        {
          kind: 'content',
          id: 's06-transformation',
          title: 'Με την τελική εφαρμογή ανοίγεις μία οθόνη και ξέρεις πού βρίσκεται κάθε παραγγελία',
          blocks: [
            {type: 'p', text: 'Μια Δευτέρα πρωί, και η ομάδα σου δουλεύει πια στην τελική εφαρμογή. Ένας πελάτης ρωτάει για την παραγγελία του.'},
            {type: 'p', text: 'Ανοίγεις μία οθόνη και βλέπεις πού βρίσκεται. Δεν ρωτάς κανέναν.'},
            {type: 'p', text: 'Όλη η παρακολούθηση παραγγελιών είναι σε μία οθόνη. Αν έχεις συνεργεία, εκεί είναι και ο προγραμματισμός συνεργείων: κάθε δουλειά και πού βρίσκεται.'},
            {type: 'p', text: 'Ο καθένας μπαίνει με τον δικό του λογαριασμό στη δική του οθόνη. Ο υπεύθυνος προγραμματισμού βλέπει τη δουλειά της βδομάδας. Εσύ βλέπεις όλη την εικόνα.'},
            {type: 'p', text: 'Τα πραγματικά σου δεδομένα έχουν περάσει από το Excel στην εφαρμογή, μαζί με τους τύπους. Κάθε πράγμα γράφεται μία φορά, και η εφαρμογή το στέλνει στο πρόγραμμα του λογιστηρίου και στο email σου.'},
            {type: 'p', text: 'Η καθημερινή γραφειοκρατία δεν κρατάει πια πίσω την επιχείρηση, οπότε μπορείς να αποφασίσεις να τη μεγαλώσεις.'}
          ]
        },
        {
          kind: 'content',
          id: 's09-proof',
          title: 'Ο ιδρυτής μας χτίζει λογισμικό εδώ και πάνω από δέκα χρόνια',
          blocks: [
            {type: 'p', text: 'Ο ιδρυτής μας έχει πάνω από δέκα χρόνια εμπειρία στην κατασκευή λογισμικού, σε τράπεζες, τουρισμό, τηλεπικοινωνίες, υγεία και διαδικτυακή εκπαίδευση.'},
            {type: 'p', text: 'Η Fiji Solutions είναι Snowflake AI Data Cloud Select Partner. Το βλέπεις στον κατάλογο συνεργατών της ίδιας της Snowflake.'},
            // 2026-10-08 (F16, F-D140): PAP Center named, New Era Learning added; AKB stays off (F-D21).
            {type: 'p', text: 'Το PAP Center, μια κλινική μαλλιών στη Θεσσαλονίκη, δούλευε με λογισμικό φτιαγμένο το 2000 και φοβόταν μήπως σταματήσει να λειτουργεί. Φτιάξαμε για την κλινική ένα CRM στα μέτρα της, που τρέχει ακόμα και σήμερα. Από τον Ιούλιο του 2026 παραδίδουμε αλλαγές σε αυτό το CRM κάθε βδομάδα, στην πλατφόρμα όπου θα τρέχει και η δική σου τελική εφαρμογή.'},
            {type: 'p', text: 'Το New Era Learning είναι πλατφόρμα διαδικτυακής εκπαίδευσης. Βοηθήσαμε να χτιστεί η πλατφόρμα και στήσαμε στη Snowflake ένα σύστημα που μετατρέπει τα δεδομένα της πλατφόρμας σε εικόνα για τους πελάτες και τα έσοδά της.'},
            {type: 'p', text: 'Από την πρώτη κλήση ως το πρωτότυπο και την τελική εφαρμογή, μιλάς με τον μηχανικό που χτίζει την εφαρμογή σου.'}
          ]
        },
        {
          kind: 'content',
          id: 's10-process',
          title: 'Από σένα: τα ονόματα των στηλών, 30 λεπτά στην πρώτη κλήση και 30 λεπτά την 7η μέρα',
          blocks: [
            {
              type: 'ul',
              items: [
                {lead: 'Μέρα 0.', text: 'Η πρώτη κλήση: συζητάμε τι χρειάζεσαι, γράφουμε μαζί τη λίστα και κλείνουμε τη συνάντηση της 7ης μέρας.'},
                {lead: 'Μέσα σε 48 ώρες.', text: 'Σου έρχεται σύνδεσμος προόδου.'},
                {lead: 'Μέρες 3 έως 5.', text: 'Τα υπόλοιπα σημεία της λίστας, με σύνδεσμο προόδου για κάθε αλλαγή.'},
                {lead: '7η μέρα.', text: 'Εξετάζεις το πρωτότυπο, λες αν σου αρέσει και παίρνεις το σχέδιο υλοποίησης.'},
                {lead: 'Περίπου τρεις βδομάδες αφού συνεχίσεις.', text: 'Η τελική εφαρμογή, περίπου ένας μήνας από την πρώτη κλήση. Την εξετάζεις κι αυτή και λες αν σου αρέσει. Αν ναι, διαλέγεις Care, Care Plus ή τον κώδικα.'},
                {lead: '30 μέρες μετά την 7η μέρα.', text: 'Τελειώνει η φιλοξενία του πρωτοτύπου με δικά μας έξοδα, και η αμοιβή του δεν μετράει πια στην τιμή της τελικής εφαρμογής.'}
              ]
            },
            {type: 'p', text: 'Οι τύποι και οι μακροεντολές του Excel σου μένουν έξω από τις 7 μέρες. Μπαίνουν στην τελική εφαρμογή, αν τα συμφωνήσουμε στην πρώτη κλήση, και τα καλύπτει η ίδια σταθερή τιμή. Αν θέλεις να εξετάσεις τους υπολογισμούς σου την 7η μέρα, αυτό το πρωτότυπο δεν είναι για σένα.'}
          ]
        },
        {
          kind: 'content',
          id: 's07-offer-stack',
          title: 'Οκτώ πράγματα, από την πρώτη κλήση ως την παράδοση',
          blocks: [
            {
              type: 'table',
              head: ['Τι είναι', 'Τι παίρνεις'],
              rowHeaders: true,
              rows: [
                ['Η πρώτη κλήση', '30 λεπτά: συζητάμε τι χρειάζεσαι και γράφουμε μαζί τη λίστα του πρωτοτύπου.'],
                ['Το πρωτότυπο σε 7 μέρες', 'Μια οθόνη για κάθε ρόλο, με ενδεικτικές γραμμές από τις στήλες σου.'],
                ['Σύνδεσμοι προόδου', 'Ιδιωτικοί, ένας για κάθε αλλαγή. Μέσα σε 48 ώρες από την πρώτη κλήση έχεις ήδη έναν.'],
                ['Η συνάντηση της 7ης μέρας', '30 λεπτά: εξετάζεις το πρωτότυπο και λες αν σου αρέσει.'],
                ['Η τελική εφαρμογή', 'Ό,τι συμφωνήσουμε στην πρώτη κλήση, σε μία σταθερή τιμή, περίπου τρεις βδομάδες αφού συνεχίσεις. Πληρώνεις μόνο αν σου αρέσει.'],
                ['Care ή Care Plus', 'Φιλοξενία, αντίγραφα ασφαλείας, διορθώσεις και ώρες για αλλαγές, κάθε μήνα. Ή παίρνεις τον κώδικα.'],
                ['Κανένα δέσιμο', 'Μόλις πληρώσεις την τελική εφαρμογή, ο κώδικάς της και τα δεδομένα της σε Excel, όποτε τα ζητήσεις.'],
                ['Ο μηχανικός σου', 'Μιλάς με τον μηχανικό της εφαρμογής σου, από την πρώτη κλήση ως την παράδοση.']
              ]
            }
          ]
        },
        {
          kind: 'content',
          id: 's12-what-it-costs',
          title: 'Τι κοστίζει',
          blocks: [
            {type: 'p', text: 'Οι τιμές που βλέπεις εδώ είναι σταθερές. Το πρωτότυπο και την τελική εφαρμογή τα πληρώνεις αφού τα δεις.'},
            {
              type: 'table',
              head: ['Βήμα', 'Τιμή', 'Πότε πληρώνεις'],
              rowHeaders: true,
              rows: [
                ['Το πρωτότυπο σε 7 μέρες', '2.000 $', 'Όταν πεις ναι την 7η μέρα. Αν δεν σου αρέσει, τίποτα.'],
                ['Η τελική εφαρμογή', '7.000 $ συνολικά', 'Αν ξεκινήσει μέσα σε 30 μέρες από την 7η μέρα, τα 2.000 $ του πρωτοτύπου μετράνε, οπότε μένουν 5.000 $. Τα πληρώνεις όταν πεις ναι στην παράδοση.']
              ]
            },
            {type: 'p', text: 'Αναλαμβάνουμε 3 πρωτότυπα τον μήνα, για να έχει το καθένα όλη μας την προσοχή. Ξεκινάμε με αυτές τις τιμές, και θα ανεβαίνουν όσο μεγαλώνει η ομάδα μας.'},
            {type: 'p', text: 'Όταν δεχτείς την τελική εφαρμογή, διαλέγεις ένα από τα δύο πλάνα φροντίδας. Χρεώνεται κάθε μήνα από την παράδοση. Ή παίρνεις τον κώδικα και φιλοξενείς εσύ την εφαρμογή.'},
            {
              type: 'cards',
              cards: [
                {
                  title: 'Care, 400 $ τον μήνα',
                  items: [
                    'Φιλοξενία στην πλατφόρμα μας στο AWS, ταυτόχρονα σε περισσότερους από έναν υπολογιστές: αν πέσει ένας, η εφαρμογή σου μένει ανοιχτή.',
                    'Χωριστό περιβάλλον δοκιμών: κάθε αλλαγή δοκιμάζεται πριν μπει σε λειτουργία.',
                    'Αυτόματα αντίγραφα ασφαλείας, με δοκιμασμένες επαναφορές.',
                    'Επίβλεψη και ενημερώσεις ασφαλείας όλο το εικοσιτετράωρο.',
                    'Κρατάμε ενημερωμένα τα εργαλεία πάνω στα οποία είναι χτισμένη η εφαρμογή σου.',
                    'Διόρθωση σφαλμάτων, που δεν μετράει στις ώρες σου.',
                    'Έως 2 ώρες τον μήνα για αλλαγές και προσθήκες, με φωνητικό μήνυμα ή email. Η επιπλέον δουλειά χρεώνεται με την ώρα.',
                    'Μία κλήση μίας ώρας τον μήνα, απάντηση μέσα σε μία εργάσιμη μέρα, ο κώδικάς σου όποτε τον ζητήσεις.'
                  ]
                },
                {
                  title: 'Care Plus, 990 $ τον μήνα',
                  items: [
                    'Ό,τι έχει το Care, και έως 10 ώρες τον μήνα για αλλαγές και προσθήκες.',
                    'Μία κλήση μίας ώρας κάθε βδομάδα.',
                    'Απευθείας τηλέφωνο με τον μηχανικό της εφαρμογής σου, για ό,τι επείγει.',
                    'Απάντηση στα υπόλοιπα την ίδια εργάσιμη μέρα.'
                  ]
                }
              ]
            },
            {type: 'p', text: 'Σύγκρινε αυτές τις τιμές με το ετήσιο κόστος του κυνηγητού, όπως το υπολόγισες πιο πάνω.'},
            {type: 'p', text: 'Και στα δύο βήματα ισχύει το ίδιο: πληρώνεις μόνο αν σου αρέσει.'}
          ]
        },
        {
          kind: 'cta',
          id: 's18-cta-3',
          benefit: 'Όλα ξεκινούν από τα ονόματα των στηλών σου, και κάθε βήμα το αποφασίζεις εσύ, αφού το δεις.',
          action: 'Πάτα το κουμπί, επικόλλησε στη φόρμα τα ονόματα των στηλών σου και διάλεξε ώρα.'
        },
        {
          kind: 'content',
          id: 's08-bonuses',
          title: 'Τέσσερα ακόμα πράγματα κάνουν πιο εύκολη την απόφαση της 7ης μέρας',
          blocks: [
            {type: 'p', lead: 'Το σχέδιο υλοποίησης.', text: 'Στη συνάντηση της 7ης μέρας παίρνεις το σχέδιο υλοποίησης γραμμένο, από όσα συμφωνήσαμε στην πρώτη κλήση. Στην κορυφή του είναι η διασύνδεση που ζήτησες.'},
            {type: 'p', lead: 'Η οθόνη της επόμενης διασύνδεσης.', text: 'Αυτή η διασύνδεση φαίνεται σε γκρι μέσα στο πρωτότυπό σου, για να βλέπεις το επόμενο βήμα πριν αποφασίσεις.'},
            {type: 'p', lead: 'Το προσχέδιο της λίστας.', text: 'Φέρνουμε στην πρώτη κλήση ένα προσχέδιο με τα 3 έως 5 σημεία για το είδος της επιχείρησής σου. Ξεκινάς από σημεία που ήδη ταιριάζουν και τα διορθώνεις.'},
            {type: 'p', lead: '30 μέρες φιλοξενίας με δικά μας έξοδα.', text: 'Το πρωτότυπο μένει ανοιχτό 30 μέρες μετά τη συνάντηση της 7ης μέρας, όσο αποφασίζεις.'}
          ]
        },
        {
          kind: 'content',
          id: 's13-guarantee',
          title: 'Πληρώνεις μόνο αν σου αρέσει, στο πρωτότυπο και στην τελική εφαρμογή',
          blocks: [
            {type: 'p', text: 'Ο κανόνας ισχύει δύο φορές: την 7η μέρα για το πρωτότυπο και στην παράδοση για την τελική εφαρμογή. Πριν από την 7η μέρα δεν πληρώνεις τίποτα.'},
            {type: 'strong', text: 'Το πρωτότυπο'},
            {
              type: 'ol',
              items: [
                'Το πρωτότυπο καλύπτει τη λίστα που συμφωνούμε στην πρώτη κλήση: 3 έως 5 σημεία, το πολύ 5 οθόνες και 2 ρόλοι.',
                'Οι 7 μέρες ξεκινούν μόλις συμφωνήσουμε τη λίστα και φτάσουν τα ονόματα των στηλών σου.',
                'Την 7η μέρα εξετάζεις το πρωτότυπο σε συνάντηση 30 λεπτών και λες εκεί αν σου αρέσει.',
                'Αν δεν σου αρέσει, δεν χρειάζεται να πεις γιατί. Σταματάμε εκεί, δεν πληρώνεις τίποτα και διαγράφουμε τα δεδομένα σου αν το ζητήσεις.',
                'Αν σου αρέσει, σου στέλνουμε το τιμολόγιο του πρωτοτύπου. Αν η τελική εφαρμογή ξεκινήσει μέσα σε 30 μέρες από την 7η μέρα, η αμοιβή του πρωτοτύπου μετράει στην τιμή της.'
              ]
            },
            {type: 'strong', text: 'Η τελική εφαρμογή'},
            {
              type: 'ol',
              start: 6,
              items: [
                'Στην παράδοση εξετάζεις την τελική εφαρμογή. Αν σου αρέσει, τιμολογούμε το υπόλοιπο της τιμής της. Αν δεν σου αρέσει, δεν πληρώνεις τίποτα παραπάνω και ο κώδικας μένει σε εμάς.'
              ]
            },
            {type: 'p', text: 'Για οτιδήποτε αφορά αυτούς τους όρους, γράψε μας στο info@fijisolutions.net.'}
          ]
        },
        {
          kind: 'cta',
          id: 's18-cta-4',
          benefit: 'Αποφασίζεις την 7η μέρα και ξανά στην παράδοση, και δεν πληρώνεις τίποτα πριν πεις ναι.',
          action: 'Πάτα το κουμπί, επικόλλησε στη φόρμα τα ονόματα των στηλών σου και διάλεξε ώρα.'
        },
        {
          kind: 'faq',
          id: 's15-faq',
          title: 'Οι ερωτήσεις που θα μας έκανες, με ευθείες απαντήσεις'
        },
        {
          kind: 'content',
          id: 's19-close',
          title: 'Σε 7 μέρες από την πρώτη κλήση βλέπεις το πρωτότυπο της εφαρμογής σου',
          blocks: [
            {type: 'p', text: 'Μας στέλνεις τα ονόματα των στηλών του Excel σου. Στην πρώτη κλήση των 30 λεπτών συζητάμε τι χρειάζεσαι, και γράφουμε μαζί τα 3 έως 5 σημεία του πρωτοτύπου.'},
            {type: 'p', text: 'Έτσι, 7 μέρες μετά, έχεις το πρωτότυπο της εφαρμογής σου, με μια οθόνη για κάθε ρόλο. Στη συνάντηση της 7ης μέρας το εξετάζεις και αποφασίζεις.'},
            {type: 'p', text: 'Το πρωτότυπο κοστίζει 2.000 $ και πληρώνεις μόνο αν σου αρέσει. Αν συνεχίσεις, η τελική εφαρμογή έρχεται περίπου τρεις βδομάδες αργότερα, και στην παράδοσή της ισχύει ο ίδιος κανόνας.'},
            {type: 'p', text: 'Το επόμενο βήμα: επικόλλησε τα ονόματα των στηλών σου στη φόρμα παρακάτω και διάλεξε ώρα για την πρώτη κλήση.'}
          ]
        }
      ],

      // S15, and the FAQPage JSON-LD. The guillemets are part of each question, as 03-copy.md
      // writes them. No answer carries a price (D68).
      faqs: [
        {q: '«Πόσο κοστίζει;»', a: 'Οι τιμές είναι γραμμένες σε αυτή τη σελίδα, στην ενότητα «Τι κοστίζει». Το πρωτότυπο το πληρώνεις όταν πεις ναι την 7η μέρα. Αν η τελική εφαρμογή ξεκινήσει μέσα σε 30 μέρες από εκείνη τη μέρα, η αμοιβή του πρωτοτύπου μετράει στην τιμή της. Στην παράδοση διαλέγεις Care ή Care Plus, με μηνιαία χρέωση, ή παίρνεις τον κώδικα. Αναλαμβάνουμε 3 πρωτότυπα τον μήνα, για να έχει το καθένα όλη μας την προσοχή. Ξεκινάμε με αυτές τις τιμές, και θα ανεβαίνουν όσο μεγαλώνει η ομάδα μας.'},
        {q: '«Γιατί να μη χρησιμοποιήσουμε Glide, Softr ή Airtable;»', a: 'Αν κάποιο από αυτά ταιριάζει στον τρόπο που δουλεύει η ομάδα σου, θα σου το πούμε στην πρώτη κλήση για να το χρησιμοποιήσεις. Ό,τι φτιάχνουμε ακολουθεί τις στήλες και τα βήματα της ομάδας σου, και στην τελική εφαρμογή το συνδέουμε με το πρόγραμμα του λογιστηρίου και το email σου.'},
        {q: '«Δεν έχουμε χρόνο για έργο λογισμικού.»', a: 'Το δικό σου κομμάτι είναι τα ονόματα των στηλών, 30 λεπτά στην πρώτη κλήση και 30 λεπτά την 7η μέρα. Τις ενδεικτικές γραμμές τις φτιάχνουμε εμείς, και σου στέλνουμε σύνδεσμο προόδου κάθε φορά που κάτι αλλάζει.'},
        {q: '«Τα δεδομένα μας είναι ευαίσθητα.»', a: 'Το πρωτότυπο δείχνει ενδεικτικές γραμμές, φτιαγμένες από τα ονόματα των στηλών σου. Τα πραγματικά σου δεδομένα περνάνε στην τελική εφαρμογή, και τα διαγράφουμε όποτε μας το ζητήσεις.'},
        {q: '«Κάθε σύστημα που κοιτάμε θέλει να αλλάξουμε τον τρόπο που δουλεύουμε.»', a: 'Η εφαρμογή χτίζεται γύρω από τις στήλες που ήδη χρησιμοποιεί η ομάδα σου, και το πρωτότυπο φτιάχνεται από το δικό σου Excel.'},
        {q: '«Ποιοι είστε και πού βρίσκεστε;»', a: 'Είμαστε η Fiji Solutions, εταιρεία λογισμικού στη Θεσσαλονίκη. Ο ιδρυτής μας έχει πάνω από δέκα χρόνια εμπειρία στην κατασκευή λογισμικού, σε τράπεζες, τουρισμό, τηλεπικοινωνίες, υγεία και διαδικτυακή εκπαίδευση. Θα μας βρεις ως Select Partner στον κατάλογο συνεργατών της ίδιας της Snowflake.'},
        {q: '«Τι γίνεται μετά την 7η μέρα; Θα μείνουμε δεμένοι μαζί σας;»', a: 'Όχι. Μετά τη συνάντηση της 7ης μέρας, το πρωτότυπο μένει ανοιχτό 30 μέρες με δικά μας έξοδα, όσο αποφασίζεις. Αν σου αρέσει και συνεχίσεις, η τελική εφαρμογή έρχεται περίπου τρεις βδομάδες αργότερα, και στην παράδοση ισχύει ξανά το «Πληρώνεις μόνο αν σου αρέσει». Μετά διαλέγεις Care, Care Plus ή τον κώδικα, που τον ζητάς όποτε θέλεις μόλις πληρώσεις την τελική εφαρμογή.'},
        {q: '«Κρατάει τους τύπους και τις μακροεντολές μας;»', a: 'Ναι, στην τελική εφαρμογή, αν τα συμφωνήσουμε στην πρώτη κλήση, και τα καλύπτει η ίδια σταθερή τιμή. Οι 7 μέρες του πρωτοτύπου πάνε σε οθόνες, ρόλους και ενέργειες.'},
        {q: '«Δηλαδή τον κώδικα τον γράφει το AI;»', a: 'Χρησιμοποιούμε εργαλεία AI για να χτίζουμε πιο γρήγορα. Η τελική εφαρμογή τρέχει στην ίδια πλατφόρμα στο AWS με το CRM που φτιάξαμε για μια κλινική στη Θεσσαλονίκη, στο οποίο παραδίδουμε αλλαγές κάθε βδομάδα από τον Ιούλιο του 2026. Και σε κάθε βήμα ισχύει το «Πληρώνεις μόνο αν σου αρέσει».'},
        {q: '«Κι αν εξαφανιστείτε;»', a: 'Μόλις πληρώσεις την τελική εφαρμογή, ζητάς τον κώδικά της όποτε θέλεις. Όλο το στήσιμό της είναι κι αυτό γραμμένο σε κώδικα, οπότε μπορεί να τη συνεχίσει άλλος μηχανικός.'},
        {q: '«Έχουμε ήδη λογισμικό του κλάδου μας ή ERP.»', a: 'Κράτα το. Το πρωτότυπο είναι για το Excel που έχεις ακόμα δίπλα του, αν υπάρχει. Αν δεν υπάρχει τέτοιο Excel, αυτή η πρόταση δεν είναι για σένα.'}
      ],

      formTitle: 'Στείλε μας τα ονόματα των στηλών σου',
      formSubhead: 'Τα διαβάζουμε πριν από την πρώτη κλήση, για να ξεκινήσουμε από τις δικές σου στήλες.',
      formNameLabel: 'Όνομα',
      formEmailLabel: 'Email',
      formCompanyLabel: 'Εταιρεία',
      formMessageLabel: 'Τα ονόματα των στηλών σου',
      formMessagePlaceholder: 'Επικόλλησέ τα εδώ, από το Excel σου.',
      formMessageRequired: 'Επικόλλησε πρώτα τα ονόματα των στηλών σου.',
      formMicrocopy: 'Πληρώνεις μόνο αν σου αρέσει.',
      formSuccess: 'Ευχαριστούμε. Διάλεξε ώρα για την πρώτη κλήση. Θα διαβάσουμε τα ονόματα των στηλών σου πριν από αυτήν.',
      // Links SHEET_TO_APP_BOOKING_URL above, the existing 30-minute event (D120, 2026-09-30).
      bookingBefore: 'Ή ',
      bookingLink: 'διάλεξε κατευθείαν ώρα για την πρώτη κλήση',
      bookingAfter: ' και στείλε μας από πριν τα ονόματα των στηλών.'
    }
  }
};

export default sheetToApp;
