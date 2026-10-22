// The spreadsheet check: questions, answers and what each answer means, in the sheet the team
// already has and in an app built around it.
//
// Built 2026-10-21 by the S14 chat of the SEO loop plan (offer-os gtm/seo-loop-2026-10, SL-D61 to
// SL-D67), after the Peak Code migration check of S13. Both locales live in this one file, so the
// twins cannot drift: every question, option and finding carries `en` and `el` side by side, and
// SpreadsheetCheck.tsx renders whichever the page asks for. The Greek is written in Greek, with the
// informal εσύ of every Greek page on this site.
//
// ⚠️ EVERY STATEMENT ABOUT EXCEL OR GOOGLE SHEETS WAS CHECKED ON 2026-10-21 against the help page
// listed in SOURCES, in the language of the page that cites it. Do not add a vendor fact from
// memory. A sentence about how we work carries its F-fiji id from offer-os
// gtm/seo-loop-2026-10/facts/fiji.md and stays inside that fact and its limits.
//
// ⚠️ NO SCORE, NO VERDICT, NO THRESHOLD, NO PRICE. The result lists findings per lane and stops
// there. The pages we read give hard maximums (rows, cells, file size, open tabs editing one Google
// file). None of them names a team size or an edit count at which a shared sheet starts to fail, so a
// total, a percentage or a "you have outgrown it" would be an invented measurement. The tool never says "free" (SL-D64).
//
// ⚠️ NO CLIENT, PROSPECT OR BUSINESS NAME, EVER (SL-D4). This repo is public. Vendors and their
// products (Microsoft, Excel, Google Sheets) are named because the findings are about them.

import type {Language} from '@/types/language';

export type Lang = Language;
export type Text = Record<Lang, string>;

/** sheet: what Excel or Google Sheets can already do, or where it stops. app: what an app built
 *  around the sheet adds, in our own words and facts. */
export type LaneId = 'sheet' | 'app';

/** limit: where the sheet stops. fix: something to try in the sheet. check: open, read it on the
 *  real file. adds: what the app adds. note: worth knowing, no work. */
export type Effect = 'limit' | 'fix' | 'check' | 'adds' | 'note';

export interface Finding {
  lane: LaneId;
  effect: Effect;
  text: Text;
  /** Keys of SOURCES, or an F-fiji id for a fact about how we work. */
  src: string[];
  /** Ids of the options of the first question ('where') this finding applies to. Absent: every answer. */
  platforms?: string[];
}

export interface Option {
  id: string;
  label: Text;
  findings?: Finding[];
  /** The visitor does not know: the result lists the question's hint under "Still to find out". */
  unsure?: boolean;
}

export interface Question {
  id: string;
  text: Text;
  hint: Text;
  options: Option[];
}

export const LANES: { id: LaneId; name: Text }[] = [
  {id: 'sheet', name: {en: 'In the sheet you have', el: 'Στο Excel ή στο Google Sheets που έχεις'}},
  {id: 'app', name: {en: 'In an app built around your sheet', el: 'Σε μια εφαρμογή χτισμένη γύρω από το αρχείο σου'}},
];

export const EFFECT_LABEL: Record<Effect, Text> = {
  limit: {en: 'Limit', el: 'Όριο'},
  fix: {en: 'Try first', el: 'Δοκίμασε πρώτα'},
  check: {en: 'To check', el: 'Να το κοιτάξεις'},
  adds: {en: 'What it adds', el: 'Τι προσθέτει'},
  note: {en: 'Worth knowing', el: 'Καλό να το ξέρεις'},
};

const unsure = (): Option => ({id: 'unsure', label: {en: 'Not sure', el: 'Δεν ξέρω'}, unsure: true});
const yes = (findings: Finding[]): Option => ({id: 'yes', label: {en: 'Yes', el: 'Ναι'}, findings});
const no = (): Option => ({id: 'no', label: {en: 'No', el: 'Όχι'}});

// Findings more than one answer shares. The component lists a finding once per lane, by reference.
const COAUTHOR: Finding = {
  lane: 'sheet',
  effect: 'fix',
  text: {
    en: 'Excel lets several people work in one workbook at the same time with co-authoring. For Excel on a computer, Microsoft’s list includes a Microsoft 365 subscription, the latest version of Excel for Microsoft 365, and the file saved as .xlsx, .xlsm or .xlsb, kept in OneDrive, OneDrive for Business or a SharePoint Online library.',
    el: 'Με τη σύνταξη από κοινού, πολλά άτομα μπορούν να δουλεύουν ταυτόχρονα στο ίδιο βιβλίο εργασίας του Excel. Για το Excel στον υπολογιστή, η Microsoft ζητά, μεταξύ άλλων, συνδρομή στο Microsoft 365, την πιο πρόσφατη έκδοση του Excel για Microsoft 365 και αρχείο σε μορφή .xlsx, .xlsm ή .xlsb, αποθηκευμένο στο OneDrive, στο OneDrive για επιχειρήσεις ή σε βιβλιοθήκη του SharePoint Online.',
  },
  src: ['ms-coauthor'],
  platforms: ['local', 'onprem', 'cloud'],
};

const MS_VERSIONS: Finding = {
  lane: 'sheet',
  effect: 'note',
  text: {
    en: 'A file in OneDrive or SharePoint has a version history you can see and restore. Microsoft’s help page says file version history is retained for 30 days, and that on a work or school account the administrator may have turned versioning off.',
    el: 'Ένα αρχείο στο OneDrive ή στο SharePoint έχει ιστορικό εκδόσεων, που μπορείς να δεις και να επαναφέρεις. Η σελίδα βοήθειας της Microsoft γράφει ότι το ιστορικό εκδόσεων διατηρείται για 30 ημέρες και ότι σε εταιρικό ή σχολικό λογαριασμό ο διαχειριστής μπορεί να το έχει απενεργοποιήσει.',
  },
  src: ['ms-versions'],
  platforms: ['cloud'],
};

const G_VERSIONS: Finding = {
  lane: 'sheet',
  effect: 'note',
  text: {
    en: 'Google Sheets keeps a version history where you can find who updated the file and their changes. Browsing earlier versions needs permission to edit the file.',
    el: 'Το Google Sheets κρατά ιστορικό εκδόσεων, όπου βλέπεις ποιος ενημέρωσε το αρχείο και τι άλλαξε. Για να δεις προηγούμενες εκδόσεις χρειάζεσαι δικαίωμα επεξεργασίας στο αρχείο.',
  },
  src: ['g-versions'],
  platforms: ['gsheets'],
};

const G_RESTORE: Finding = {
  lane: 'sheet',
  effect: 'note',
  text: {
    en: 'In Google Sheets, restoring an earlier version clears the cell by cell edit history for the changes made before the restore. Google suggests making a copy of the spreadsheet when you need to keep that history.',
    el: 'Στο Google Sheets, η επαναφορά μιας παλαιότερης έκδοσης σβήνει το ιστορικό τροποποιήσεων των κελιών για όσες αλλαγές έγιναν πριν από την επαναφορά. Η Google προτείνει να φτιάξεις αντίγραφο του αρχείου, αν θέλεις να κρατήσεις αυτό το ιστορικό.',
  },
  src: ['g-versions'],
  platforms: ['gsheets'],
};

const SCREEN_PER_ROLE: Finding = {
  lane: 'app',
  effect: 'adds',
  text: {
    en: 'The prototype gives each role its own screen, built around the columns your team already uses, so nobody has to change how they work.',
    el: 'Το πρωτότυπο δίνει σε κάθε ρόλο τη δική του οθόνη, χτισμένη γύρω από τις στήλες που ήδη χρησιμοποιεί η ομάδα σου, ώστε κανείς να μη χρειαστεί να αλλάξει τον τρόπο που δουλεύει.',
  },
  src: ['F-fiji-064', 'F-fiji-076'],
};

const OWN_LOGIN: Finding = {
  lane: 'app',
  effect: 'adds',
  text: {
    en: 'The finished app gives each person their own login and moves your real sheet in, formulas included.',
    el: 'Στην τελική εφαρμογή ο καθένας μπαίνει με τον δικό του λογαριασμό, και το πραγματικό σου αρχείο περνά μέσα της μαζί με τους τύπους του.',
  },
  src: ['F-fiji-072'],
};

const FORMULAS_LATER: Finding = {
  lane: 'app',
  effect: 'note',
  text: {
    en: 'Formulas and macros stay out of the 7 day prototype. They come into the finished app when we agree them on the audit call.',
    el: 'Οι τύποι και οι μακροεντολές μένουν έξω από τις 7 μέρες του πρωτοτύπου. Μπαίνουν στην τελική εφαρμογή όταν τα συμφωνήσουμε στην πρώτη κλήση.',
  },
  src: ['F-fiji-074'],
};

export const QUESTIONS: Question[] = [
  {
    id: 'where',
    text: {en: 'Where does the team’s sheet live?', el: 'Πού βρίσκεται το αρχείο που δουλεύει η ομάδα σου;'},
    hint: {
      en: 'Ask whoever set the file up where it is saved: on a computer or a shared network folder, in SharePoint on your own server, in OneDrive or SharePoint Online, or in Google Drive.',
      el: 'Ρώτα όποιον έστησε το αρχείο πού είναι αποθηκευμένο: σε έναν υπολογιστή ή σε κοινόχρηστο φάκελο του δικτύου, σε SharePoint σε δικό σου διακομιστή, στο OneDrive ή στο SharePoint Online, ή στο Google Drive.',
    },
    options: [
      {
        id: 'local',
        label: {en: 'Excel on a computer or a shared folder', el: 'Excel σε υπολογιστή ή σε κοινόχρηστο φάκελο'},
        findings: [
          COAUTHOR,
          {
            lane: 'sheet',
            effect: 'note',
            text: {
              en: 'The older Shared Workbook feature has many limitations. A shared workbook cannot be edited in Excel for the web, and Microsoft has replaced the feature with co-authoring.',
              el: 'Η παλαιότερη δυνατότητα του κοινόχρηστου βιβλίου εργασίας έχει πολλούς περιορισμούς. Ένα κοινόχρηστο βιβλίο εργασίας δεν ανοίγει για επεξεργασία στο Excel για το web, και η Microsoft έχει αντικαταστήσει τη δυνατότητα με τη σύνταξη από κοινού.',
            },
            src: ['ms-shared'],
          },
        ],
      },
      {
        id: 'onprem',
        label: {en: 'Excel in SharePoint on our own server', el: 'Excel σε SharePoint στον δικό μας διακομιστή'},
        findings: [
          {
            lane: 'sheet',
            effect: 'limit',
            text: {
              en: 'Microsoft states that SharePoint sites it does not host, the on premises kind, do not support co-authoring.',
              el: 'Η Microsoft γράφει ότι οι τοποθεσίες SharePoint εσωτερικής εγκατάστασης, όσες δεν φιλοξενεί η ίδια, δεν υποστηρίζουν τη σύνταξη από κοινού.',
            },
            src: ['ms-coauthor'],
          },
        ],
      },
      {
        id: 'cloud',
        label: {en: 'Excel in OneDrive or SharePoint Online', el: 'Excel στο OneDrive ή στο SharePoint Online'},
        findings: [MS_VERSIONS],
      },
      {
        id: 'gsheets',
        label: {en: 'Google Sheets', el: 'Google Sheets'},
        findings: [G_VERSIONS],
      },
      unsure(),
    ],
  },
  {
    id: 'copies',
    text: {
      en: 'Does the team work from more than one copy of the sheet, such as a copy emailed around, one per person or one per site?',
      el: 'Δουλεύει η ομάδα σου σε περισσότερα από ένα αντίγραφα του αρχείου, για παράδειγμα ένα που πηγαινοέρχεται με email, ένα για κάθε άτομο ή ένα για κάθε συνεργείο;',
    },
    hint: {
      en: 'Search your mailbox and the shared folders for the file’s name. Every other file with that name, or with a date added to it, is a copy.',
      el: 'Ψάξε στο email και στους κοινόχρηστους φακέλους το όνομα του αρχείου. Κάθε άλλο αρχείο με το ίδιο όνομα, ή με μια ημερομηνία δίπλα του, είναι αντίγραφο.',
    },
    options: [yes([COAUTHOR, OWN_LOGIN]), no(), unsure()],
  },
  {
    id: 'broken',
    text: {
      en: 'Has someone sorted, deleted or typed over something and broken the sheet for everyone?',
      el: 'Έχει τύχει κάποιος να ταξινομήσει, να σβήσει ή να γράψει από πάνω και να χαλάσει το αρχείο για όλους;',
    },
    hint: {
      en: 'Ask the person who keeps the sheet when they last had to repair it, and what broke.',
      el: 'Ρώτα αυτόν που κρατά το αρχείο πότε χρειάστηκε τελευταία φορά να το διορθώσει, και τι είχε χαλάσει.',
    },
    options: [
      yes([
        {
          lane: 'sheet',
          effect: 'fix',
          text: {
            en: 'In Excel you can lock cells and protect the worksheet, which prevents people from changing the locked cells. In Google Sheets you can protect a sheet or a range so people cannot change its content.',
            el: 'Στο Excel μπορείς να κλειδώσεις κελιά και να προστατέψεις το φύλλο εργασίας, ώστε οι άλλοι χρήστες να μην αλλάζουν τα κλειδωμένα κελιά. Στο Google Sheets μπορείς να προστατέψεις ένα φύλλο ή μια περιοχή, ώστε οι άλλοι χρήστες να μην αλλάζουν το περιεχόμενό της.',
          },
          src: ['ms-protect', 'g-protect'],
        },
        MS_VERSIONS,
        G_RESTORE,
        SCREEN_PER_ROLE,
      ]),
      no(),
      unsure(),
    ],
  },
  {
    id: 'who',
    text: {
      en: 'When a number in the sheet changes, can you find out who changed it and when?',
      el: 'Όταν αλλάζει ένας αριθμός στο αρχείο, μπορείς να βρεις ποιος τον άλλαξε και πότε;',
    },
    hint: {
      en: 'Open the file’s version history. In Google Sheets, click Last edit at the top right. For a file in OneDrive or SharePoint, right click the file there and choose Version history.',
      el: 'Άνοιξε το ιστορικό εκδόσεων του αρχείου. Στο Google Sheets, κάνε κλικ στην Τελευταία επεξεργασία επάνω δεξιά. Για ένα αρχείο στο OneDrive ή στο SharePoint, κάνε δεξί κλικ πάνω του εκεί και διάλεξε Ιστορικό εκδόσεων.',
    },
    options: [
      {id: 'yes', label: {en: 'Yes', el: 'Ναι'}},
      {
        id: 'no',
        label: {en: 'No', el: 'Όχι'},
        findings: [G_VERSIONS, MS_VERSIONS],
      },
      unsure(),
    ],
  },
  {
    id: 'private',
    text: {
      en: 'Does the sheet hold columns some people should not see, such as costs, margins or pay?',
      el: 'Έχει το αρχείο στήλες που κάποιοι δεν πρέπει να βλέπουν, όπως κόστη, περιθώρια κέρδους ή μισθούς;',
    },
    hint: {
      en: 'Go through the columns one by one and ask who on the team needs each of them.',
      el: 'Πέρασε τις στήλες μία μία και ρώτα ποιος στην ομάδα χρειάζεται την καθεμιά.',
    },
    options: [
      yes([
        {
          lane: 'sheet',
          effect: 'limit',
          text: {
            en: 'Microsoft says worksheet protection prevents people from changing locked cells. Microsoft also says it isn’t intended as a security feature. Google says protecting a sheet shouldn’t be used as a security measure, since people can print, copy, paste, import and export copies of a protected spreadsheet.',
            el: 'Η Microsoft γράφει ότι η προστασία του φύλλου εργασίας εμποδίζει τις αλλαγές στα κλειδωμένα κελιά. Γράφει επίσης ότι δεν προορίζεται για χρήση ως δυνατότητα ασφαλείας. Η Google γράφει ότι η προστασία ενός φύλλου δεν πρέπει να χρησιμοποιείται ως μέτρο ασφαλείας, γιατί οι χρήστες μπορούν να εκτυπώνουν, να αντιγράφουν, να επικολλούν, να εισάγουν και να εξάγουν αντίγραφα ενός προστατευμένου αρχείου.',
          },
          src: ['ms-protect', 'g-protect'],
        },
        {
          lane: 'sheet',
          effect: 'limit',
          text: {
            en: 'Google says every editor of a spreadsheet can unhide a hidden sheet and see it, and a viewer can still reach its content, for example by making a copy and unhiding the sheet there.',
            el: 'Η Google γράφει ότι όλοι οι συντάκτες ενός αρχείου μπορούν να εμφανίσουν ξανά ένα κρυφό φύλλο και να το δουν. Κι αν κάποιος φτιάξει αντίγραφο του αρχείου, το φύλλο μένει κρυφό, αλλά μπορεί να το εμφανίσει ξανά.',
          },
          src: ['g-protect'],
          platforms: ['gsheets'],
        },
        OWN_LOGIN,
      ]),
      no(),
      unsure(),
    ],
  },
  {
    id: 'share',
    text: {
      en: 'If the sheet is in Google Sheets, what does its General access setting say?',
      el: 'Αν το αρχείο είναι στο Google Sheets, τι γράφει η ρύθμιση Γενική πρόσβαση;',
    },
    hint: {
      en: 'Open the sheet, click Share and read the line under General access.',
      el: 'Άνοιξε το αρχείο, πάτησε Κοινή χρήση και διάβασε τη γραμμή κάτω από τη Γενική πρόσβαση.',
    },
    options: [
      {
        id: 'restricted',
        label: {en: 'Restricted', el: 'Περιορισμένη'},
        findings: [
          {
            lane: 'sheet',
            effect: 'note',
            text: {
              en: 'Restricted means only people with access can open the file.',
              el: 'Περιορισμένη σημαίνει ότι μόνο τα άτομα με πρόσβαση μπορούν να ανοίξουν το αρχείο.',
            },
            src: ['g-share'],
          },
        ],
      },
      {
        id: 'link',
        label: {en: 'Anyone with the link', el: 'Όλοι όσοι διαθέτουν τον σύνδεσμο'},
        findings: [
          {
            lane: 'sheet',
            effect: 'limit',
            text: {
              en: 'With this setting, anyone who has the link can use the file without signing in to a Google Account.',
              el: 'Με αυτή τη ρύθμιση, όποιος έχει τον σύνδεσμο μπορεί να χρησιμοποιήσει το αρχείο χωρίς να συνδεθεί σε λογαριασμό Google.',
            },
            src: ['g-share'],
          },
          {
            lane: 'sheet',
            effect: 'fix',
            text: {
              en: 'Set General access to Restricted, so only people with access can open the file.',
              el: 'Βάλε τη Γενική πρόσβαση σε Περιορισμένη, ώστε μόνο τα άτομα με πρόσβαση να ανοίγουν το αρχείο.',
            },
            src: ['g-share'],
          },
        ],
      },
      {
        id: 'public',
        label: {en: 'Public', el: 'Δημόσιο'},
        findings: [
          {
            lane: 'sheet',
            effect: 'limit',
            text: {
              en: 'With this setting, anyone can search on Google and get access to the file without signing in to a Google Account.',
              el: 'Με αυτή τη ρύθμιση, οποιοσδήποτε μπορεί να κάνει αναζήτηση στο Google και να αποκτήσει πρόσβαση στο αρχείο χωρίς να συνδεθεί σε λογαριασμό Google.',
            },
            src: ['g-share'],
          },
        ],
      },
      {
        id: 'org',
        label: {en: 'The name of our organization or a group in it', el: 'Το όνομα του οργανισμού μας ή μιας ομάδας του'},
        findings: [
          {
            lane: 'sheet',
            effect: 'note',
            text: {
              en: 'Google says the General access options depend on whether your Google Account is through work, school or Gmail.',
              el: 'Η Google γράφει ότι οι επιλογές της Γενικής πρόσβασης εξαρτώνται από το αν ο λογαριασμός σου Google είναι μέσω εργασίας, σχολείου ή Gmail.',
            },
            src: ['g-share'],
          },
        ],
      },
      {id: 'excel', label: {en: 'We use Excel', el: 'Δουλεύουμε σε Excel'}},
      unsure(),
    ],
  },
  {
    id: 'twice',
    text: {
      en: 'Does the same information get typed in twice, into the sheet and somewhere else, such as accounting, email or another sheet?',
      el: 'Γράφει η ομάδα σου τα ίδια στοιχεία δύο φορές, στο αρχείο και κάπου αλλού, για παράδειγμα στο λογιστικό, σε email ή σε άλλο αρχείο;',
    },
    hint: {
      en: 'Follow one order or job from start to finish, and note every place where someone types its details.',
      el: 'Ακολούθησε μία παραγγελία ή μία δουλειά από την αρχή ως το τέλος, και σημείωσε κάθε σημείο όπου κάποιος γράφει τα στοιχεία της.',
    },
    options: [
      yes([
        {
          lane: 'sheet',
          effect: 'fix',
          text: {
            en: 'Between two Google Sheets, the IMPORTRANGE function pulls data from one spreadsheet into another, once access between them is granted.',
            el: 'Η συνάρτηση IMPORTRANGE φέρνει δεδομένα από ένα αρχείο Google Sheets σε ένα άλλο, αφού συνδέσεις τα δύο αρχεία με άδεια πρόσβασης.',
          },
          src: ['g-importrange'],
          platforms: ['gsheets'],
        },
        {
          lane: 'sheet',
          effect: 'limit',
          text: {
            en: 'Once that access is granted, any editor of the receiving sheet can pull from any part of the source sheet. Chains of IMPORTRANGE across several files can lead to long delays between a change in the source and the result.',
            el: 'Μόλις δοθεί αυτή η άδεια, οποιοσδήποτε συντάκτης του αρχείου προορισμού μπορεί να φέρει δεδομένα από οποιοδήποτε σημείο του αρχείου πηγής. Αλυσίδες από IMPORTRANGE σε πολλά αρχεία μπορεί να προκαλέσουν μεγάλες καθυστερήσεις από τη στιγμή που αλλάζει η πηγή ως τη στιγμή που φαίνεται το αποτέλεσμα.',
          },
          src: ['g-importrange'],
          platforms: ['gsheets'],
        },
        {
          lane: 'app',
          effect: 'adds',
          text: {
            en: 'The finished app adds a database, connections to accounting, email or CRM, and automations.',
            el: 'Η τελική εφαρμογή προσθέτει βάση δεδομένων, σύνδεση με το λογιστικό, το email ή το CRM, και αυτοματισμούς.',
          },
          src: ['F-fiji-073'],
        },
      ]),
      no(),
      unsure(),
    ],
  },
  {
    id: 'erp',
    text: {
      en: 'Does the business run an ERP or industry software next to the sheet?',
      el: 'Χρησιμοποιεί η επιχείρησή σου ERP ή κάποιο λογισμικό του κλάδου της δίπλα στο αρχείο;',
    },
    hint: {
      en: 'List the software the team logs in to every day, and next to each one, what the sheet holds that it does not.',
      el: 'Γράψε τα προγράμματα στα οποία συνδέεται η ομάδα κάθε μέρα, και δίπλα στο καθένα, τι κρατά το αρχείο που εκείνο δεν κρατά.',
    },
    options: [
      yes([
        {
          lane: 'app',
          effect: 'note',
          text: {
            en: 'A business that already runs an ERP or industry software keeps it. The prototype is for the spreadsheet that still sits next to it.',
            el: 'Αν έχεις ήδη ERP ή λογισμικό του κλάδου σου, το κρατάς. Το πρωτότυπο είναι για το Excel που έχεις ακόμα δίπλα του.',
          },
          src: ['F-fiji-077'],
        },
      ]),
      no(),
      unsure(),
    ],
  },
  {
    id: 'scripts',
    text: {
      en: 'Do scripts or macros keep the sheet running?',
      el: 'Χρειάζεται το αρχείο σενάρια ή μακροεντολές για να δουλεύει;',
    },
    hint: {
      en: 'In Google Sheets, open the Extensions menu and choose Apps Script. If the editor opens with only an empty function called myFunction, the sheet has no script of its own. In Excel, open the View tab and choose Macros.',
      el: 'Στο Google Sheets, άνοιξε το μενού Επεκτάσεις και διάλεξε Apps Script. Αν ο επεξεργαστής ανοίξει μόνο με μια κενή συνάρτηση με το όνομα myFunction, το αρχείο δεν έχει δικό του σενάριο. Στο Excel, άνοιξε την καρτέλα Προβολή και διάλεξε Μακροεντολές.',
    },
    options: [
      {
        id: 'appsscript',
        label: {en: 'Apps Script in Google Sheets', el: 'Apps Script στο Google Sheets'},
        findings: [
          {
            lane: 'sheet',
            effect: 'limit',
            text: {
              en: 'Google caps Apps Script: 6 minutes per script run, and a daily total for triggers of 90 minutes on a consumer account or 6 hours on Google Workspace. Google says these quotas can change at any time without notice.',
              el: 'Η Google βάζει όρια στο Apps Script: 6 λεπτά για κάθε εκτέλεση σεναρίου, και συνολικό ημερήσιο χρόνο για τους ενεργοποιητές 90 λεπτά σε προσωπικό λογαριασμό ή 6 ώρες στο Google Workspace. Η Google γράφει ότι αυτά τα όρια μπορεί να αλλάξουν οποιαδήποτε στιγμή χωρίς ειδοποίηση.',
            },
            src: ['g-quotas'],
          },
          FORMULAS_LATER,
        ],
      },
      {
        id: 'vba',
        label: {en: 'Macros in Excel', el: 'Μακροεντολές στο Excel'},
        findings: [
          {
            lane: 'sheet',
            effect: 'note',
            text: {
              en: 'Co-authoring accepts the .xlsm format, as well as .xlsx and .xlsb.',
              el: 'Η σύνταξη από κοινού δέχεται και τη μορφή .xlsm, μαζί με τις .xlsx και .xlsb.',
            },
            src: ['ms-coauthor'],
          },
          FORMULAS_LATER,
        ],
      },
      {id: 'none', label: {en: 'Neither', el: 'Τίποτα από τα δύο'}},
      unsure(),
    ],
  },
  {
    id: 'slow',
    text: {
      en: 'Has the file become slow, or does it crash when many people have it open?',
      el: 'Έχει γίνει αργό το αρχείο, ή κολλάει όταν το έχουν ανοιχτό πολλοί;',
    },
    hint: {
      en: 'Note how long the file takes to open and to update, and whether it got slower as rows were added.',
      el: 'Σημείωσε πόση ώρα θέλει το αρχείο για να ανοίξει και να ενημερωθεί, και αν έγινε πιο αργό όσο έμπαιναν γραμμές.',
    },
    options: [
      yes([
        {
          lane: 'sheet',
          effect: 'fix',
          text: {
            en: 'For a Google file shared with many people that crashes or updates slowly, Google suggests deleting older information or moving data into a new document, and reducing the number of people with edit access.',
            el: 'Για ένα αρχείο Google που το μοιράζονται πολλά άτομα και κολλάει ή ενημερώνεται αργά, η Google προτείνει να διαγράψεις παλαιότερες πληροφορίες ή να μεταφέρεις δεδομένα σε νέο αρχείο, και να μειώσεις τον αριθμό των ατόμων που έχουν δικαίωμα επεξεργασίας.',
          },
          src: ['g-share'],
          platforms: ['gsheets'],
        },
        {
          lane: 'sheet',
          effect: 'limit',
          text: {
            en: 'Google lets one Google Sheets file be edited on up to 100 open tabs or devices at a time. Past 100, only the owner and some people with edit access can edit it.',
            el: 'Ένα αρχείο Google Sheets μπορεί να είναι ανοιχτό για επεξεργασία σε έως 100 καρτέλες ή συσκευές ταυτόχρονα. Πάνω από τις 100, μόνο ο κάτοχος και ορισμένοι χρήστες με δικαίωμα επεξεργασίας μπορούν να το επεξεργαστούν.',
          },
          src: ['g-share'],
          platforms: ['gsheets'],
        },
        {
          lane: 'sheet',
          effect: 'note',
          text: {
            en: 'An Excel worksheet holds at most 1,048,576 rows by 16,384 columns. A Google Sheets file holds up to 20 million cells or 100MB.',
            el: 'Ένα φύλλο εργασίας του Excel χωρά το πολύ 1.048.576 γραμμές επί 16.384 στήλες. Ένα αρχείο Google Sheets χωρά έως 20 εκατομμύρια κελιά ή 100 MB.',
          },
          src: ['ms-limits', 'g-limits'],
        },
        {
          lane: 'app',
          effect: 'adds',
          text: {
            en: 'The finished app adds a database.',
            el: 'Η τελική εφαρμογή προσθέτει βάση δεδομένων.',
          },
          src: ['F-fiji-073'],
        },
      ]),
      no(),
      unsure(),
    ],
  },
  {
    id: 'status',
    text: {
      en: 'When someone needs to know where an order or job stands, how do they find out?',
      el: 'Όταν κάποιος θέλει να μάθει πού βρίσκεται μια παραγγελία ή μια δουλειά, πώς το μαθαίνει;',
    },
    hint: {
      en: 'Count the calls and messages about one order or job in a normal week.',
      el: 'Μέτρα τα τηλέφωνα και τα μηνύματα για μία παραγγελία ή μία δουλειά σε μια κανονική εβδομάδα.',
    },
    options: [
      {id: 'lookup', label: {en: 'They look it up in the sheet', el: 'Το βρίσκει μόνος του στο αρχείο'}},
      {
        id: 'ask',
        label: {en: 'They ask the person who keeps the sheet', el: 'Ρωτά αυτόν που κρατά το αρχείο'},
        findings: [
          {
            lane: 'app',
            effect: 'note',
            text: {
              en: 'On the audit call we agree in writing 3 to 5 lines, each a screen, a role and an action, and the prototype is built from that list.',
              el: 'Στην πρώτη κλήση συμφωνούμε γραπτώς 3 έως 5 σημεία, το καθένα μια οθόνη, ένας ρόλος και μια ενέργεια, και το πρωτότυπο χτίζεται από αυτή τη λίστα.',
            },
            src: ['F-fiji-060'],
          },
          SCREEN_PER_ROLE,
        ],
      },
      unsure(),
    ],
  },
];

/** Every help page the findings rest on, read on 2026-10-21, in the language of the page that
 *  links it. Where Microsoft or Google has no Greek page, the Greek tool links the English one. */
export const SOURCES: Record<string, { title: Text; url: Text }> = {
  'ms-coauthor': {
    title: {
      en: 'Microsoft Support: Collaborate on Excel workbooks at the same time with co-authoring',
      el: 'Microsoft Support: Συνεργασία σε βιβλία εργασίας του Excel ταυτόχρονα με τη σύνταξη από κοινού',
    },
    url: {
      en: 'https://support.microsoft.com/en-us/excel/get-started/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring',
      el: 'https://support.microsoft.com/el-gr/excel/get-started/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring',
    },
  },
  'ms-shared': {
    title: {
      en: 'Microsoft Support: About the shared workbook feature',
      el: 'Microsoft Support: Πληροφορίες για τη δυνατότητα κοινόχρηστου βιβλίου εργασίας',
    },
    url: {
      en: 'https://support.microsoft.com/en-us/excel/about-the-shared-workbook-feature',
      el: 'https://support.microsoft.com/el-gr/excel/about-the-shared-workbook-feature',
    },
  },
  'ms-protect': {
    title: {en: 'Microsoft Support: Protect a worksheet', el: 'Microsoft Support: Προστασία φύλλου εργασίας'},
    url: {
      en: 'https://support.microsoft.com/en-us/excel/protect-a-worksheet',
      el: 'https://support.microsoft.com/el-gr/excel/protect-a-worksheet',
    },
  },
  'ms-versions': {
    title: {
      en: 'Microsoft Support: Restore a previous version of a file stored in OneDrive',
      el: 'Microsoft Support: Επαναφορά προηγούμενης έκδοσης ενός αρχείου που ήταν αποθηκευμένο στο OneDrive',
    },
    url: {
      en: 'https://support.microsoft.com/en-us/onedrive/restore-a-previous-version-of-a-file-stored-in-onedrive',
      el: 'https://support.microsoft.com/el-gr/onedrive/restore-a-previous-version-of-a-file-stored-in-onedrive',
    },
  },
  'ms-limits': {
    title: {en: 'Microsoft Support: Excel specifications and limits', el: 'Microsoft Support: Προδιαγραφές και όρια του Excel'},
    url: {
      en: 'https://support.microsoft.com/en-us/excel/excel-specifications-and-limits',
      el: 'https://support.microsoft.com/el-gr/excel/excel-specifications-and-limits',
    },
  },
  'g-versions': {
    title: {
      en: 'Google Docs Editors Help: Find what’s changed in a file',
      el: 'Βοήθεια Συντάκτες Εγγράφων Google: Εύρεση αλλαγών σε ένα αρχείο',
    },
    url: {
      en: 'https://support.google.com/docs/answer/190843?hl=en',
      el: 'https://support.google.com/docs/answer/190843?hl=el',
    },
  },
  'g-protect': {
    title: {
      en: 'Google Docs Editors Help: Protect, hide & edit sheets',
      el: 'Βοήθεια Συντάκτες Εγγράφων Google: Προστασία, απόκρυψη και επεξεργασία φύλλων',
    },
    url: {
      en: 'https://support.google.com/docs/answer/1218656?hl=en',
      el: 'https://support.google.com/docs/answer/1218656?hl=el',
    },
  },
  'g-share': {
    title: {
      en: 'Google Drive Help: Share files from Google Drive',
      el: 'Βοήθεια Google Drive: Κοινή χρήση αρχείων από το Google Drive',
    },
    url: {
      en: 'https://support.google.com/drive/answer/2494822?hl=en',
      el: 'https://support.google.com/drive/answer/2494822?hl=el',
    },
  },
  'g-importrange': {
    title: {en: 'Google Docs Editors Help: IMPORTRANGE', el: 'Βοήθεια Συντάκτες Εγγράφων Google: IMPORTRANGE'},
    url: {
      en: 'https://support.google.com/docs/answer/3093340?hl=en',
      el: 'https://support.google.com/docs/answer/3093340?hl=el',
    },
  },
  'g-limits': {
    title: {
      en: 'Google Drive Help: Files you can store in Google Drive',
      el: 'Google Drive Help: Files you can store in Google Drive (στα αγγλικά)',
    },
    url: {
      en: 'https://support.google.com/drive/answer/37603?hl=en',
      el: 'https://support.google.com/drive/answer/37603?hl=en',
    },
  },
  'g-quotas': {
    title: {
      en: 'Google for Developers: Quotas for Google Services, Apps Script',
      el: 'Google for Developers: Quotas for Google Services, Apps Script (στα αγγλικά)',
    },
    url: {
      en: 'https://developers.google.com/apps-script/guides/services/quotas?hl=en',
      el: 'https://developers.google.com/apps-script/guides/services/quotas?hl=en',
    },
  },
};
