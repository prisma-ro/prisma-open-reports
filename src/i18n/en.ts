export const en = {
  generic: {
    backToMap: "Back to the map",
    cookieSettings: "Cookie settings",
    error: "Something went wrong",
  },

  navbar: {
    about: "About",
    help: "Help",
    dataProtection: "Data Protection",
    more: "Find out more",

    mode: {
      view: "View Only",
      add: "Create",
      tooltipView: "In this mode you can view previous reports",
      tooltipAdd:
        "In this mode you can add new reports, by clicking on the map",
    },
  },

  onboarding: {
    title: "Hello! 👋",
    newReport: {
      title: "Here's what you need to do to tell us what happened:",
      steps: {
        one: {
          title: "Step 1:",
          body: "Enter the adding mode by pressing the bottom right button",
        },
        two: {
          title: "Step 2:",
          body: "Tap / click anywhere on the map to add an incident",
        },
        three: {
          title: "Step 3:",
          body: "Give us a few more details, press 'Send' and that's it, the report has reached us 🌟",
        },
      },
    },
    viewReports: {
      card: {
        title: "Do you just want to discover the reports that already exist?",
        body: "Tap one of them!",
      },
      tips: {
        title: "Tips:",
        content:
          "For more options like the reports' region press the bottom left button!",
      },
    },
    cookies: {
      title: "Do you agree with the collection of statistical data?",
      privacy: {
        noWorries: "Don't worry!",
        content: "Your reports will be anonymous forever!",
        policy: "See the Privacy Policy",
      },
      no: "No, continue without optional cookies",
      yes: "Sure, it's ok!",
    },
    thanks: "Thanks for your help ❤️",
  },

  bottomControls: {
    addReport: "Add a report",
    satellite: "Satellite",
    countriesSelected: {
      singular: "Selected country",
      plural: "Sel. countries",
    },
    change: "Chnage",
    regionChangeModal: {
      title: "Select the countries whose reports you want to see",
      bodyHTML: /*html*/ `Soon you will be able to view reports from even more countries! Until then, reports can be added anywhere in Europe!<strong> Stay Safe! </strong>`,
      save: "Save",
    },
  },

  about: {
    title: "About Open Reports",
    sections: [
      {
        title: "Make your voice heard!",
        bodyHTML: /*html*/ `
        Due to rapid urbanization, many cities have become dangerous places. In
  recent years, cases of abuse and harassment have occurred much more frequently.
  <strong>8 out of 10 women do not feel safe</strong> when going out at night.
        <br />
        <br />
        And yet if a victim tries to get the help of a policeman and tells him
        that they were harassed, he will tell them that there's nothing he can do.
        `,
      },
      {
        title: "This is where you intervene!",
        bodyHTML: /*html*/ `
        We need your help to gather information about what is really happening
  on the street, because the authorities <i> do not make such information 
  publicly available </i>.
        `,
      },
      {
        title: "Why do I need an account?",
        bodyHTML: /*html*/ `
        We want you to know that all our reports are completely anonymous.
  However, to avoid situations of abuse and to be able to view certain details
  of the reports we will ask you for an account.
        `,
      },
      {
        title: "More info",
        bodyHTML: /*html*/ `
        More information about Prisma Safety and the cause can be found on
  <a class="text-primary" href="https://www.prisma-safety.com/" target="_blank" rel="noopener">
    our landing page
  </a>!
        `,
      },
    ],
  },

  dataProtection: {
    title: "Data Protection",
    sections: [
      {
        title: "All reports provided are anonymous.",
        bodyHTML: /*html*/ `
        At Prisma, protecting your data is our top priority.
        <br />
        <br />
        We want you to know that on the Open Reports platform we do not collect
  personal data, more precisely we do not collect:
        <ul class="mx-8 mb-4 list-disc md:my-4 md:mx-16 md:text-xl">
          <li>
          Name (and for legal reasons we ask you <strong> not to include 
  names, or other personally identifiable information of people </strong> 
  in the description of the report)
          </li>
          <li>
          Your address / location (we are interested in the location where 
  <strong>the incident happened</strong>)
          </li>
          <li> Identifiers (IP Addresses, Fingerprints, etc.) </li>
        <ul />
        `,
      },
      {
        title: "What happens to the data collected?",
        bodyHTML: /*html*/ `
        The data collected is subject to the <a
          href="docs/Acord_Prelucrarea_Datelor__Data_Processing_Agreement__Open_Reports.pdf"
          class="text-primary"
        >
          Provided Data Processing Agreement ("Acordul de Prelucrare a Datelor Furnizate")
        </a>. The most important thing to know is that they will remain 
  anonymous forever.
        `,
      },
      {
        title: "Cookies",
        bodyHTML: /*html*/ `
        Certain cookies are used to save various settings or to avoid situations
  of abuse. They are active automatically. There are also optional cookies, on
  this website they are for statistics (web traffic, popular pages, etc.).
        <br />
        <br />
        Prisma cookies can be recognized by the prefix:
        "<code>reports_v2__</code>".
        <br />
        <br />      
        <i> If you wish to change your preferences regarding these cookies,
  you can do so with the button at the bottom of the page. </i>
        `,
      },
      {
        title: "More info",
        bodyHTML: /*html*/ `
        More information about the protection of your data and other information
  about your safety on the Prisma websites can be found <a 
        class="text-primary"
        href="https://www.prisma-safety.com/privacy"
        target="_blank"
        rel="noopener">
          here
        </a>.
        `,
      },
    ],
  },

  account: {
    yourAccount: "Your account",
    login: {
      promptHTML: /*html*/ `
        Log in or create an account using one of the following options 👇
      `,
      dataPrivacy:
        "Important: Your account is not associated with any reports submitted by you, they remain anonymous forever 🔒",
      noticeHTML: /*html*/ `
        By using a Prisma Safety account, you agree to the <a
          class="text-primary"
          href="https://www.prisma-safety.com/terms"
          target="_blank"
          rel="noopener">
            Terms and Conditions
        </a> and the <a
          class="text-primary"
          href="https://www.prisma-safety.com/privacy"
          target="_blank"
          rel="noopener">
            Privacy Policy
        </a>.
      `,
    },
    loggedin: {},
  },
};
