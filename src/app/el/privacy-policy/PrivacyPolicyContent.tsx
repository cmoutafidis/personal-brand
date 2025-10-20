import React from 'react';
import {Shield, FileText, Lock, Users, Eye, Globe, Mail, MapPin} from 'lucide-react';

export default function PrivacyPolicyContent() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Πολιτική Απορρήτου
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Τελευταία ενημέρωση: 20 Οκτωβρίου 2025
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
              <div className="flex items-center justify-center mb-8">
                <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                  <Shield className="h-12 w-12 text-primary-600 dark:text-primary-400"/>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <FileText className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Εισαγωγή
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Η παρούσα Πολιτική Απορρήτου εξηγεί πώς η Fiji Solutions (&quot;εμείς&quot;, &quot;μας&quot; ή &quot;η εταιρεία μας&quot;) χειρίζεται τις πληροφορίες σε σχέση με τις εφαρμογές μας για κινητά (&quot;Εφαρμογές&quot;) που διατίθενται στο Google Play Store και το Apple App Store. Οι Εφαρμογές μας είναι απλές εφαρμογές webview που εμφανίζουν περιεχόμενο από τον ιστότοπό μας <a href="http://fijisolutions.net/" className="text-primary-600 dark:text-primary-400 hover:underline">http://fijisolutions.net/</a>. Δεσμευόμαστε να προστατεύουμε το απόρρητό σας και να εξασφαλίζουμε διαφάνεια σχετικά με τις πρακτικές μας για τα δεδομένα.
                  </p>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Πληροφορίες που Συλλέγουμε
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Οι Εφαρμογές μας δεν συλλέγουν, αποθηκεύουν ή επεξεργάζονται προσωπικά δεδομένα από τους χρήστες. Οι Εφαρμογές λειτουργούν αποκλειστικά ως webviews, δηλαδή εμφανίζουν περιεχόμενο απευθείας από τον ιστότοπό μας <a href="http://fijisolutions.net/" className="text-primary-600 dark:text-primary-400 hover:underline">http://fijisolutions.net/</a> χωρίς να συλλέγουν ή να αποθηκεύουν πληροφορίες χρηστών στη συσκευή ή μέσω των Εφαρμογών.
                  </p>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Lock className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Πώς Χρησιμοποιούμε τις Πληροφορίες
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Δεδομένου ότι οι Εφαρμογές μας δεν συλλέγουν προσωπικά δεδομένα, δεν χρησιμοποιούμε ούτε κοινοποιούμε προσωπικές πληροφορίες για εσάς. Οι Εφαρμογές έχουν σχεδιαστεί για να σας παρέχουν πρόσβαση στο περιεχόμενο του ιστότοπού μας σε μια βολική μορφή για κινητά.
                  </p>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Κοινοποίηση και Αποκάλυψη Δεδομένων
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Δεν συλλέγουμε, κοινοποιούμε ή αποκαλύπτουμε προσωπικά δεδομένα μέσω των Εφαρμογών μας. Το περιεχόμενο που εμφανίζεται στις Εφαρμογές προέρχεται απευθείας από τον ιστότοπό μας, και οποιεσδήποτε αλληλεπιδράσεις με τον ιστότοπο διέπονται από την πολιτική απορρήτου του ιστότοπου, η οποία βρίσκεται στη διεύθυνση <a href="http://fijisolutions.net/privacy-policy" className="text-primary-600 dark:text-primary-400 hover:underline">http://fijisolutions.net/privacy-policy</a>.
                  </p>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Globe className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Υπηρεσίες Τρίτων
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Οι Εφαρμογές μας δεν ενσωματώνουν υπηρεσίες τρίτων που συλλέγουν προσωπικά δεδομένα. Ωστόσο, επειδή οι Εφαρμογές εμφανίζουν περιεχόμενο από τον ιστότοπό μας, τυχόν υπηρεσίες τρίτων που χρησιμοποιούνται από τον ιστότοπο (όπως αναλυτικά στοιχεία ή διαφημίσεις, εάν υπάρχουν) υπόκεινται στην πολιτική απορρήτου του ιστότοπου.
                  </p>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Ασφάλεια Δεδομένων
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Καθώς οι Εφαρμογές μας δεν συλλέγουν ούτε αποθηκεύουν προσωπικά δεδομένα, δεν υπάρχουν δεδομένα χρηστών σε κίνδυνο εντός των Εφαρμογών. Λαμβάνουμε εύλογα μέτρα για να εξασφαλίσουμε την ασφάλεια των Εφαρμογών μας, συμπεριλαμβανομένης της διατήρησής τους ενημερωμένων και απαλλαγμένων από ευπάθειες.
                  </p>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Απόρρητο Παιδιών
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Οι Εφαρμογές μας δεν απευθύνονται σε παιδιά κάτω των 13 ετών, και δεν συλλέγουμε εν γνώσει μας προσωπικές πληροφορίες από παιδιά. Εάν πιστεύετε ότι ένα παιδί κάτω των 13 ετών έχει παράσχει προσωπικές πληροφορίες μέσω του ιστότοπού μας (που είναι προσβάσιμος μέσω των Εφαρμογών), παρακαλούμε επικοινωνήστε μαζί μας στο <a href="mailto:charis@fijisolutions.net" className="text-primary-600 dark:text-primary-400 hover:underline">charis@fijisolutions.net</a>, και θα αντιμετωπίσουμε το ζήτημα σύμφωνα με την πολιτική απορρήτου του ιστότοπού μας.
                  </p>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <FileText className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Αλλαγές στην Πολιτική Απορρήτου
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Ενδέχεται να ενημερώνουμε αυτήν την Πολιτική Απορρήτου από καιρό σε καιρό για να αντικατοπτρίζει αλλαγές στις πρακτικές μας ή νομικές απαιτήσεις. Θα σας ειδοποιήσουμε για τυχόν ουσιαστικές αλλαγές δημοσιεύοντας την ενημερωμένη πολιτική σε αυτήν τη σελίδα με αναθεωρημένη ημερομηνία &quot;Τελευταία ενημέρωση&quot;. Σας ενθαρρύνουμε να ελέγχετε αυτήν την πολιτική περιοδικά.
                  </p>
                </section>

                <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Επικοινωνία μαζί μας
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Εάν έχετε ερωτήσεις ή ανησυχίες σχετικά με αυτήν την Πολιτική Απορρήτου ή τις Εφαρμογές μας, παρακαλούμε επικοινωνήστε μαζί μας στο:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><strong>Fiji Solutions</strong></p>
                      <p>Χαράλαμπος Μουταφίδης</p>
                      <p className="flex items-center space-x-2">
                        <Mail className="h-4 w-4"/>
                        <a href="mailto:charis@fijisolutions.net" className="text-primary-600 dark:text-primary-400 hover:underline">charis@fijisolutions.net</a>
                      </p>
                      <p className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 mt-1"/>
                        <span>Μαρίνου Αντύπα 40<br/>Θεσσαλονίκη 570 01, Ελλάδα</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <Globe className="h-4 w-4"/>
                        <a href="http://fijisolutions.net/" className="text-primary-600 dark:text-primary-400 hover:underline">http://fijisolutions.net/</a>
                      </p>
                    </div>
                  </div>
                </section>

                <section className="text-center pt-4">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    Σας ευχαριστούμε που χρησιμοποιείτε τις Εφαρμογές μας!
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
