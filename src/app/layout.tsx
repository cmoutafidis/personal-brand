export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png"/>
        <title>Fiji Solutions | We help your business grow online</title>
        <meta name="description"
        content="Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development."/>
        <meta name="keywords"
        content="software development, IT consulting, custom software development, mobile app development, big data consulting, enterprise software development, solution consulting, software consulting, Thessaloniki Greece"/>
        <meta name="author" content="Fiji Solutions"/>
        <meta name="robots" content="index, follow"/>
        <link rel="canonical" href="https://fijisolutions.net/en"/>

        {/*Open Graph / Facebook*/}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://fijisolutions.net/en"/>
        <meta property="og:title" content="Fiji Solutions | We help your business grow online"/>
        <meta property="og:description"
        content="Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development."/>
        <meta property="og:image" content="https://fijisolutions.net/fijisolutions.png"/>
        <meta property="og:site_name" content="Fiji Solutions"/>

        {/*Twitter*/}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:url" content="https://fijisolutions.net/en"/>
        <meta name="twitter:title" content="Fiji Solutions | We help your business grow online"/>
        <meta name="twitter:description"
        content="Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development."/>
        <meta name="twitter:image" content="https://fijisolutions.net/fijisolutions.png"/>
        <meta name="twitter:site" content="@fiji_solutions"/>

        {/*LinkedIn*/}
        <meta property="linkedin:title" content="Fiji Solutions | We help your business grow online"/>
        <meta property="linkedin:description"
        content="Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development."/>
        <meta property="linkedin:image" content="https://fijisolutions.net/fijisolutions.png"/>

        {/*Language alternates*/}
        <link rel="alternate" hrefLang="en" href="https://fijisolutions.net/en"/>
        <link rel="alternate" hrefLang="el" href="https://fijisolutions.net/el"/>
        <link rel="alternate" hrefLang="x-default" href="https://fijisolutions.net/en"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;700&display=swap"
        rel="stylesheet"/>

        {/*Additional SEO*/}
        <meta name="theme-color" content="#0086ff"/>
        <meta name="msapplication-TileColor" content="#0086ff"/>
        <link rel="apple-touch-icon" href="/favicon.png"/>

        <script id="vtag-ai-js" async src="https://r2.leadsy.ai/tag.js" data-pid="18ImLiEFzTBP83210"
        data-version="062024"></script>
      </head>
      <body suppressHydrationWarning={true}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
