export const ro = {
  generic: {
    backToMap: 'Înapoi la hartă',
    cookieSettings: 'Setări cookies',
    error: 'Ceva nu a mers bine',
  },
  
  navbar: {
    about: "Despre",
    help: "Ajutor",
    dataProtection: "Protecția Datelor",
    login: "Loghează-te",
    more: "Află mai multe",

    mode: {
      view: "Vizualizare",
      add: "Adăugare",
      tooltipView: "În aces mod puteți vizualiza rapoartele anterioare",
      tooltipAdd: "În aces mod puteți adăuga noi rapoarte, apăsând pe hartă",
    },
  },

  onboarding: {
    title: "Bun venit! 👋",
    newReport: {
      title: "Uite ce trebuie să faci pentru a ne spune ce s-a întâmplat:",
      steps: {
        one: {
          title: "Pasul 1:",
          body: "Intră în modul de adăugare apăsând butonul din dreapta jos",
        },
        two: {
          title: "Pasul 2:",
          body: "Apasă oriunde pe hartă pentru a adăuga un incident",
        },
        three: {
          title: "Pasul 3:",
          body: "Ne mai dai încă câteva detalii, apeși 'Trimite' și gata, raportul a ajuns la noi 🌟",
        },
      },
    },
    viewReports: {
      card: {
        title: "Dorești doar să descoperi rapoartele deja existente?",
        body: "Apasă pe unul dintre ele!",
      },
      tips: {
        title: "Tips:",
        content:
          "Pentru mai multe opțiuni, precum regiunea rapoartelor apasă butonul din stânga jos!",
      },
    },
    cookies: {
      title: "Dorim să colectăm date statistice, ești de acord?",
      privacy: {
        noWorries: "Stai fără griji!",
        content: "Rapoartele tale vor fi anonime pentru totdeauna!",
        policy: "Consultă Politica de Confidențialitate",
      },
      no: "Nu, continuă fără cookie-uri opționale",
      yes: "Sigur, e ok!",
    },
    thanks: "Mulțumim de ajutor ❤️",
  },

  bottomControls: {
    addReport: "Adaugă un raport",
    satellite: "Satelit",
    countriesSelected: {
      singular: "Țara selectată",
      plural: "Țări selectate",
    },
    change: "Schimbă",
    regionChangeModal: {
      title: "Selectează țările ale căror rapoarte vrei să le vezi",
      bodyHTML: /*html*/ `În curând vei putea vizualiza rapoarte din și mai multe țări! Până atunci, pot fi adaugate rapoarte oriunde în Europa!<strong> Stay Safe! </strong>`,
      save: "Salvează",
    },
  },

  about: {
    title: "Despre Open Reports",
    sections: [
      {
        title: "Fă-ți vocea auzită!",
        bodyHTML: /*html*/ `
        Din cauza urbanizarii rapide, foarte multe orase au devenit locuri
  periculoase. În ultimii ani, cazurile de abuz și hărțuire au avut loc mult
  mai frecvent. <strong>8 din 10 femei nu se simt în siguranță</strong> când 
  circulă în oraș pe timp de noapte.
        <br />
        <br />
        Și totuși dacă o victimă încearcă să apeleze la ajutorul unui polițist
  și să îi spună că a fost hărțuită, acesta îi va spune ca nu are ce face.
        `,
      },
      {
        title: "Aici intervi tu!",
        bodyHTML: /*html*/ `
        Avem nevoie de ajutorul tău pentru a aduna informatii despre ce se 
  întâmplă cu adevărat pe stradă, deoarece autoritățile <i> nu pun astfel de 
  informații la dispoziția publicului </i>.
        `,
      },
      {
        title: "De ce am nevoie de un cont?",
        bodyHTML: /*html*/ `
        Vrem să știi că toate rapoartele noastre sunt complet anonime. Totuși,
  pentru a evita situațiile de abuz, pentru a putea vizualiza anumite detalii
  ale rapoartelor îți vom solicita un cont.
        `,
      },
      {
        title: "Mai multe",
        bodyHTML: /*html*/ `
        Mai multe informații despre Prisma Safety și despre cauză se gasesc pe
  <a class="text-primary" href="https://www.prisma-safety.com/" target="_blank" rel="noopener">
    pagina noastră principală
  </a>!
        `,
      },
    ],
  },

  dataProtection: {
    title: "Protecția Datelor Tale",
    sections: [
      {
        title: "Toate rapoartele furnizate sunt anonime.",
        bodyHTML: /*html*/ `
        La Prisma, protectia datelor tale e principala noastră prioritate.
        <br />
        <br />
        Vrem să știi că pe platforma Open Reports nu colectăm date cu caracter
  personal, mai exact nu colectăm:
        <ul class="mx-8 mb-4 list-disc md:my-4 md:mx-16 md:text-xl">
          <li>
            Nume (și din considerente legale te rugam si pe tine <strong> să nu 
  incluzi nume de persoane sau alte date de identificare personală </strong>
  în descrierea raportului)
          </li>
          <li>
            Adresa / Locatia ta (ne intereseaza locatia unde <strong> s-a 
  întâmplat incidentul</strong>)
          </li>
          <li> Identificatori (Adrese IP, Fingerprints, etc.) </li>
        <ul />
        `,
      },
      {
        title: "Ce se întâmplă cu datele colectate?",
        bodyHTML: /*html*/ `
        Datele colectate sunt supuse <a
          href="docs/Acord_Prelucrarea_Datelor__Data_Processing_Agreement__Open_Reports.pdf"
          class="text-primary"
        >
          Acordului de Prelucrare a Datelor Furnizate
        </a>. Cel mai important lucru ce trebuie să îl știi este că acestea 
  vor rămâne anonime pentru totdeauna.
        `,
      },
      {
        title: "Cookie-uri",
        bodyHTML: /*html*/ `
        Anumite cookie-uri sunt folosite pentru a salva diverse setări sau
  pentru a evita situațiile de abuz. Acestea sunt active automat. Există și
  cookie-uri opționale, pe acest website ele fiind cele pentru statistică (
  trafic web, pagini populare, etc.).
        <br />
        <br />
        Cookie-urile Prisma pot fi recunoscute după prefixul:
        "<code>reports_v2__</code>".
        <br />
        <br />      
        <i> Dacă dorești să modifici preferințele tale în privința acestor
  cookie-uri, poți face asta cu butonul de la finalul paginii. </i>
        `,
      },
      {
        title: "Mai multe",
        bodyHTML: /*html*/ `
        Mai multe informații despre protecția datelor tale cât și alte 
  informații despre siguranța ta pe site-urile Prisma se găsesc <a 
        class="text-primary"
        href="https://www.prisma-safety.com/privacy"
        target="_blank"
        rel="noopener">
          aici
        </a>.
        `,
      },
    ],
  },
};
