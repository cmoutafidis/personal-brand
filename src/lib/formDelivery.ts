// The one delivery path every form on this site uses: a JSON POST to the AWS API Gateway endpoint,
// which emails the submission to the shared inbox. Moved here from ContactForm.tsx on 2026-10-18 so
// the Atlas application form (src/components/AtlasApplicationForm.tsx) sends through the SAME
// endpoint and the same notification, as offer-os gtm/atlas/DECISIONS.md AT-D12 requires ("Same
// thing as when someone submits my form"). No second service, no new secret.
//
// The endpoint emails `name`, `email`, `company`, `question` and `message` and ignores every other
// key, so anything else a form asks rides inside `message` as labelled lines. `question` is the
// lead-source marker that tells the surfaces apart in the inbox. `website` is the honeypot and
// `elapsed_ms` the time the form was on screen: the endpoint drops a filled honeypot or a submit
// under three seconds without emailing it.

export const FORM_ENDPOINT = 'https://np40nkw6be.execute-api.us-east-1.amazonaws.com/Prod/personal-brand/form';

export type FormPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
  question: string;
  website: string;
  elapsed_ms: number;
};

/** POSTs one submission. Throws on a network failure or a non-2xx answer. */
export async function sendForm(payload: FormPayload): Promise<void> {
  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}
