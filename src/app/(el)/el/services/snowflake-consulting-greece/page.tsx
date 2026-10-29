import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import ServicePage from '@/components/ServicePage';
import {OFFERS_BY_SERVICE} from '@/data/offerLinks';
import {ORGANISATION_ID} from '\@/lib/person';

const siteUrl = 'https://www.fijisolutions.net';
const path = '/services/snowflake-consulting-greece';

export const metadata: Metadata = {
  title: "Snowflake Consulting Ελλάδα | Select Partner | Fiji Solutions",
  description: "Υλοποίηση, μετάβαση και ρύθμιση Snowflake AI Data Cloud. Είμαστε Snowflake AI Data Cloud Select Partner.",
  keywords: "Snowflake Ελλάδα, Snowflake partner Ελλάδα, μετάβαση σε Snowflake, αποθήκη δεδομένων, ETL ELT, μηχανική δεδομένων Ελλάδα",
  alternates: buildAlternates(path, 'el'),
  openGraph: {
    locale: 'el_GR',
    type: 'website',
    url: `${siteUrl}/el${path}`,
    title: "Snowflake Consulting Ελλάδα | Select Partner | Fiji Solutions",
    description: "Υλοποίηση, μετάβαση και ρύθμιση Snowflake AI Data Cloud. Είμαστε Snowflake AI Data Cloud Select Partner.",
    images: [{url: `${siteUrl}/og/fiji-solutions-el.png`, width: 1200, height: 630, alt: "Snowflake Consulting Ελλάδα"}],
  },
};

export default function Page() {
  return (
    <ServicePage
      lang="el"
      eyebrow={"Snowflake Ελλάδα"}
      h1={"Snowflake στην Ελλάδα: υλοποίηση, μετάβαση και βελτιστοποίηση"}
      lead={"Η Fiji Solutions είναι εταιρεία λογισμικού στη Θεσσαλονίκη και Snowflake AI Data Cloud Select Partner. Στήνουμε πλατφόρμες δεδομένων στη Snowflake, φορτώνουμε τα δεδομένα σου σε αυτές προγραμματισμένα, σε τακτά διαστήματα, και φτιάχνουμε τις αναφορές που διαβάζει εκεί η ομάδα σου. Μιλάς απευθείας με τον μηχανικό που τα στήνει."}
      heroCta={"Κλείσε δωρεάν κλήση 30 λεπτών για τα δεδομένα σου στη Snowflake"}
      outcomesTitle={"Τι κάνουμε"}
      outcomes={[{title: "Κατασκευή αποθήκης δεδομένων", body: "Warehouses, βάση, schemas, file formats και ρόλοι, στημένα ως κώδικας."}, {title: "Ροές δεδομένων ETL/ELT", body: "Προγραμματισμένες φορτώσεις στη Snowflake από τις βάσεις και τα εργαλεία που ήδη χρησιμοποιείς, με διαδικασίες ανάκτησης για τη μέρα που μια εκτέλεση θα αποτύχει."}, {title: "Μετάβαση στη Snowflake", body: "Τα δεδομένα και οι αναφορές σου περνούν στη Snowflake από το σύστημα όπου τρέχουν σήμερα, με αντικείμενο εργασιών που συμφωνούμε μαζί σου γραπτά."}, {title: "Ρύθμιση κόστους και απόδοσης", body: "Η Snowflake χρεώνει την υπολογιστική ισχύ σε credits, για όσο χρόνο τρέχει ένα warehouse. Σε βοηθάμε να διαστασιολογήσεις και να προγραμματίσεις τα warehouses σου για τη δουλειά που κάνουν."}]}
      engagementsTitle={"Τυπικά έργα"}
      engagements={[{title: "Ένα πρώτο workspace στη Snowflake", body: "Warehouses, βάση, schema, file formats και table stages, με ρόλο μόνο για ανάγνωση, ρόλο για ανάγνωση και εγγραφή και ρόλο αναλυτή, και με δικαιώματα στους υπάρχοντες και στους μελλοντικούς πίνακες. Όλα γραμμένα ως κώδικας. Έτσι στήσαμε το workspace για την Alumil, ελληνική βιομηχανία συστημάτων αλουμινίου για παράθυρα, πόρτες και προσόψεις."}, {title: "Νυχτερινές φορτώσεις από πολλές πηγές", body: "Προγραμματισμένες εργασίες που φέρνουν δεδομένα από τα δικά σου συστήματα στη Snowflake. Για τη New Era Learning, εταιρεία διαδικτυακής εκπαίδευσης στα Ηνωμένα Αραβικά Εμιράτα, εργασίες μεταφέρουν κάθε βράδυ δεδομένα από PostgreSQL, PostHog και ClickHouse στη Snowflake. Τρέχει και μηνιαία φόρτωση με διαδικασίες ανάκτησης, και παράγωγοι πίνακες παρακολουθούν πληρωμές, διακράτηση και μετακινήσεις ανάμεσα σε προγράμματα."}, {title: "Dashboards μέσα στη Snowflake", body: "Dashboards σε Streamlit που τρέχουν στη Snowflake και ανοίγουν από το web περιβάλλον της. Ο ιδιοκτήτης, το προσωπικό και οι εκπαιδευτές της New Era Learning διαβάζουν εκεί στοιχεία πελατών και εσόδων, με πρόσβαση μόνο προβολής στα dashboards και καμία πρόσβαση στους πίνακες. Κάθε dashboard έχει γλωσσάριο, και ένα καθημερινό email σύνοψης βγαίνει από τα ίδια νούμερα."}, {title: "Proof of concept με τα δεδομένα σου", body: "Μία ερώτηση δοκιμάζεται σε πραγματικά δεδομένα πριν από ένα μεγαλύτερο έργο. Για την Alumil φορτώσαμε δεδομένα διέλασης και ελαττωμάτων από σύστημα Oracle, μέσω Azure Blob Storage, στη Snowflake, τα αναλύσαμε μαζί σε Snowpark και καταχωρίσαμε ένα πρώτο μοντέλο στο model registry της Snowflake."}]}
      processTitle={"Πώς τρέχει ένα έργο Snowflake"}
      process={[{title: "Δωρεάν κλήση 30 λεπτών", body: "Μας λες πού βρίσκονται σήμερα τα δεδομένα σου και τι θέλεις να διαβάζεις από αυτά. Μιλάς απευθείας με τον μηχανικό που τα στήνει."}, {title: "Αντικείμενο και τιμή γραπτά", body: "Συμφωνούμε γραπτά τι φτιάχνουμε και πόσο κοστίζει, πριν ξεκινήσει η δουλειά: τις πηγές, τους πίνακες, τους ρόλους και τις αναφορές. Στο ίδιο έγγραφο γράφουμε ποιος έχει τον κώδικα, τα δεδομένα και τους λογαριασμούς."}, {title: "Υλοποίηση", body: "Φτιάχνουμε ό,τι συμφωνήσαμε, και το βλέπεις να παίρνει μορφή στην πορεία. Στην Alumil, το στήσιμο του workspace γράφτηκε ως κώδικας, ώστε να διαβάζεται και να ξανατρέχει."}, {title: "Παράδοση, και μετά φροντίδα", body: "Μόλις μπει σε λειτουργία, το φροντίζουμε εμείς ή το αναλαμβάνεις εσύ, με τους όρους που συμφωνήσαμε γραπτά. Στη New Era Learning, οι φορτώσεις και τα dashboards ανανεώνονται κάθε βράδυ, κάθε εβδομάδα ή κάθε μήνα."}]}
      integrationsTitle={"Εργαλεία και συστήματα που δουλεύουμε"}
      integrationsIntro={"Αυτά είναι τα εργαλεία και τα συστήματα από τα δύο έργα Snowflake αυτής της σελίδας."}
      integrations={["Snowflake", "Snowpark", "Streamlit in Snowflake", "COPY INTO", "Table stages", "Stored procedures", "Scheduled tasks", "Roles and grants", "Model registry", "PostgreSQL", "PostHog", "ClickHouse", "Oracle", "Azure Blob Storage", "Python", "SQL", "pandas", "scikit-learn", "XGBoost"]}
      pricingTitle={"Πώς τιμολογείται η δουλειά"}
      howPriced={["Κάθε έργο έχει σταθερή αμοιβή για ένα συμφωνημένο αντικείμενο, γραμμένη πριν ξεκινήσει η δουλειά.", "Τα μεγαλύτερα έργα συνήθως ξεκινούν με ένα πρωτότυπο ή έναν κύκλο ανάπτυξης, ώστε το πρώτο βήμα να είναι μικρό και να δοκιμάζεται στα δικά σου δεδομένα. Για την Alumil, η δουλειά ήταν ένα proof of concept στα δικά της δεδομένα παραγωγής."]}
      questions={[{q: "Είναι η Fiji Solutions Snowflake partner στην Ελλάδα;", a: "Ναι. Η Snowflake μάς έχει στον δικό της κατάλογο συνεργατών ως Snowflake AI Data Cloud Select Partner, με έδρα την Ελλάδα. Το δίκτυο συνεργατών υπηρεσιών της Snowflake έχει τρεις βαθμίδες, Select, Premier και Elite, πάνω από το επίπεδο Registered. Η βαθμίδα ανήκει στην εταιρεία, και μπορείς να ελέγξεις την καταχώριση στο site της Snowflake."}, {q: "Πώς χρεώνει η Snowflake;", a: "Η Snowflake χρεώνει την υπολογιστική ισχύ σε credits και την αποθήκευση με σταθερή μηνιαία τιμή ανά terabyte. Ένα warehouse χρεώνεται ανά δευτερόλεπτο όσο τρέχει, με ελάχιστο 60 δευτερόλεπτα κάθε φορά που ξεκινά. Στα standard warehouses, κάθε μεγαλύτερο μέγεθος διπλασιάζει τα credits ανά ώρα. Η εισαγωγή δεδομένων δεν χρεώνεται. Χρεώνεται η μεταφορά τους σε άλλη περιοχή ή άλλο cloud."}, {q: "Πόσο κοστίζει ένα έργο Snowflake με τη Fiji Solutions;", a: "Κάθε έργο έχει σταθερή αμοιβή για ένα συμφωνημένο αντικείμενο, που τη γράφουμε μαζί σου πριν ξεκινήσει η δουλειά. Την ορίζουμε όταν το αντικείμενο είναι ξεκάθαρο, μετά τη δωρεάν κλήση 30 λεπτών. Τα μεγαλύτερα έργα συνήθως ξεκινούν με ένα πρωτότυπο ή έναν κύκλο ανάπτυξης, οπότε η πρώτη αμοιβή καλύπτει ένα μικρό, δοκιμασμένο βήμα."}, {q: "Μπορούμε να ξεκινήσουμε με ένα proof of concept στη Snowflake;", a: "Ναι. Ένα proof of concept δοκιμάζει μία ερώτηση στα δικά σου δεδομένα πριν από ένα μεγαλύτερο έργο. Για την Alumil φορτώσαμε δεδομένα παραγωγής στη Snowflake με πρόσβαση ανά ρόλο, εκπαιδεύσαμε ένα πρώτο μοντέλο που συσχετίζει τα δεδομένα διέλασης με τα ποσοστά ελαττωμάτων, και παρουσιάσαμε τα ευρήματα, τα όρια των δεδομένων και τα επόμενα βήματα σε σύνοψη αποτελεσμάτων μίας σελίδας."}]}
      closingH2={"Σκέφτεσαι τη Snowflake ή τη χρησιμοποιείς ήδη;"}
      closingBody={"Κλείσε δωρεάν κλήση 30 λεπτών και πες μας πού βρίσκονται τα δεδομένα σου, τι τρέχει σήμερα στη Snowflake και τι θέλεις να διαβάζεις από αυτά. Δουλεύουμε με επιχειρήσεις στην Ελλάδα και στο εξωτερικό."}
      closingCta={"Κλείσε δωρεάν κλήση 30 λεπτών για τα δεδομένα σου στη Snowflake"}
      cta="booking"
      offers={OFFERS_BY_SERVICE['services/snowflake-consulting-greece']}
      path={path}
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: "Snowflake Consulting Ελλάδα",
        serviceType: "Snowflake consulting and data engineering",
        provider: {'@id': ORGANISATION_ID},
        areaServed: {'@type': 'Country', name: 'Greece'},
        description: "Υλοποίηση, μετάβαση, διοχετεύσεις και ρύθμιση κόστους Snowflake AI Data Cloud για τον ιδιοκτήτη που η επιχείρησή του λειτουργεί με ξαναπληκτρολογημένα δεδομένα, καθυστερημένες υπενθυμίσεις και έναν άνθρωπο που ξέρει πώς δουλεύουν όλα.",
      }}
    />
  );
}
