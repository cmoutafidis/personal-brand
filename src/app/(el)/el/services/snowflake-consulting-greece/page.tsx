import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import ServicePage from '@/components/ServicePage';

const siteUrl = 'https://www.fijisolutions.net';
const path = '/services/snowflake-consulting-greece';

export const metadata: Metadata = {
  title: "Snowflake Consulting Ελλάδα | Select Partner | Fiji Solutions",
  description: "Υλοποίηση, μετάβαση και ρύθμιση Snowflake AI Data Cloud. Είμαστε Snowflake AI Data Cloud Select Partner.",
  keywords: "Snowflake Ελλάδα, Snowflake partner Ελλάδα, μετάβαση σε Snowflake, αποθήκη δεδομένων, ETL ELT, μηχανική δεδομένων Ελλάδα",
  alternates: buildAlternates(path, 'el'),
  openGraph: {
    type: 'website',
    url: `${siteUrl}/el${path}`,
    title: "Snowflake Consulting Ελλάδα | Select Partner | Fiji Solutions",
    description: "Υλοποίηση, μετάβαση και ρύθμιση Snowflake AI Data Cloud. Είμαστε Snowflake AI Data Cloud Select Partner.",
    images: [{url: `${siteUrl}/fijisolutions.png`, width: 1200, height: 630, alt: "Snowflake Consulting Ελλάδα"}],
  },
};

export default function Page() {
  return (
    <ServicePage
      lang="el"
      eyebrow={"Snowflake Ελλάδα"}
      h1={"Snowflake, υλοποιημένο ή διορθωμένο"}
      lead={"Όταν τα δεδομένα ξεπερνούν τα υπολογιστικά φύλλα, το επόμενο βήμα συνήθως αγοράζεται πριν σχεδιαστεί — και μετά είναι αργό, ακριβό, ή και τα δύο. Το υλοποιούμε, μεταφέρουμε πάνω του, ή διορθώνουμε αυτό που ήδη έχεις."}
      heroCta={"Κλείσε δωρεάν έλεγχο διαδικασιών"}
      outcomesTitle={"Τι κάνουμε"}
      outcomes={[{title: "Κατασκευή αποθήκης δεδομένων", body: "Σχεδιασμένη γύρω από τις ερωτήσεις που κάνεις πραγματικά, όχι γύρω από μια αρχιτεκτονική αναφοράς από παρουσίαση προμηθευτή."}, {title: "Διοχετεύσεις ETL/ELT", body: "Η φόρτωση που τρέχει προγραμματισμένα, που χτυπάει δυνατά όταν αποτύχει και που δεν θέλει κάποιον να την προσέχει."}, {title: "Μετάβαση στο Snowflake", body: "Από ό,τι κι αν τρέχει τώρα, με τις αναφορές να βγάζουν τα ίδια νούμερα και από την άλλη πλευρά."}, {title: "Ρύθμιση κόστους και απόδοσης", body: "Το Snowflake χρεώνει ό,τι τρέχεις. Οι περισσότερες εγκαταστάσεις πληρώνουν για ερωτήματα που δεν διαβάζει κανείς και για μηχανές που δεν διαστασιολόγησε κανείς."}]}
      closingH2={"Είσαι ήδη σε Snowflake και πληρώνεις περισσότερα από όσα περίμενες;"}
      closingBody={"Στείλε μας τον λογαριασμό και το βαρύτερο ερώτημα. Συνήθως αυτό αρκεί για να πούμε πού πάνε τα χρήματα."}
      closingCta={"Κλείσε δωρεάν έλεγχο διαδικασιών"}
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: "Snowflake Consulting Ελλάδα",
        serviceType: "Snowflake consulting and data engineering",
        provider: {'@type': 'ProfessionalService', name: 'Fiji Solutions', url: siteUrl},
        areaServed: {'@type': 'Country', name: 'Greece'},
        description: "Υλοποίηση, μετάβαση, διοχετεύσεις και ρύθμιση κόστους Snowflake AI Data Cloud για επιχειρήσεις στην Ελλάδα.",
      }}
    />
  );
}
