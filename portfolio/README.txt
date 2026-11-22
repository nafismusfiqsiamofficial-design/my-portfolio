MD NAFIS MUSFIQ SIAM — PORTFOLIO WEBSITE
========================================

Files:
- index.html: Complete responsive, self-contained portfolio website.
  Your portrait is embedded in the HTML, so no separate image file is needed.
- projects/morrow-and-co/: The MORROW & CO. concept café website (see below).

------------------------------------------------------------
PROJECT STRUCTURE
------------------------------------------------------------
portfolio/
|-- index.html                      Main portfolio (your original content + new project card)
|-- README.txt                      This file
`-- projects/
    `-- morrow-and-co/
        |-- index.html              MORROW & CO. café website
        |-- style.css               Styles
        |-- script.js               Navigation, menu filter, form validation, animations
        `-- assets/
            `-- preview.jpg         Thumbnail used by the portfolio project card

All images inside the café site are inline vector illustrations, so there are
no external image files, no paid APIs, no fonts to download and no backend.

------------------------------------------------------------
WHERE MORROW & CO. WAS ADDED IN YOUR PORTFOLIO
------------------------------------------------------------
Main index.html  ->  "Projects" section (id="projects", nav link "Projects",
kicker "Selected initiatives").

1. A new full-width featured project card appears FIRST in the project grid,
   above StyliqueMuse, Rusty Spice and SNM On The Road (those three are unchanged).
   It has: preview thumbnail, "Self-Initiated Concept Project" label,
   category "Web Design & UI/UX", title, description, and a
   "View Live Demo" button linking to  projects/morrow-and-co/index.html
2. A "Case study" panel directly below the project grid (id="morrow-case-study")
   covering objective, design direction, main features, responsive behavior,
   tools & technologies, and an honest-scope note.
3. One sentence was appended to the Projects intro text. Nothing was removed.

The demo link is RELATIVE (projects/morrow-and-co/index.html), so it works
when opened locally and when deployed to Netlify. The café site has a
"Back to portfolio" link (../../index.html#projects) in the top bar and footer.

------------------------------------------------------------
PREVIEW LOCALLY
------------------------------------------------------------
Unzip the package, keep the folder structure as-is, and double-click index.html.
Click "View Live Demo" in the Projects section. No server is required.

------------------------------------------------------------
DEPLOY TO NETLIFY (Netlify Drop)
------------------------------------------------------------
1. Unzip the package on your computer.
2. Go to https://app.netlify.com/drop  (create / log in to a free account if asked).
3. Drag the whole unzipped "portfolio" FOLDER (the one containing index.html and
   the projects folder) onto the Drop area. Do not drag the ZIP file itself and
   do not drag only index.html.
4. Netlify gives you a live URL. Your portfolio is at the root of that URL and the
   café demo is at  <your-url>/projects/morrow-and-co/
5. Optional: Site configuration > Change site name to get a cleaner URL.

GitHub Pages also works: upload the entire folder contents (keeping "projects/")
to the repository root and enable Pages.

------------------------------------------------------------
HONEST-PRESENTATION NOTES
------------------------------------------------------------
- MORROW & CO. is a fictional brand and a self-initiated concept project. It is
  not paid client work and is labelled that way everywhere.
- All menu prices are labelled "illustrative concept-demo prices".
- The Visit section uses a concept location in Dhaka, Bangladesh. No real street
  address, phone number or business identity is invented.
- The reservation form validates input in the browser only. No booking is made
  and no email or data is sent unless you connect a backend.
- Social media icons in the café footer are placeholders.
- No testimonials, reviews, analytics or statistics have been invented.
- Credit: "Concept and creative direction: MD Nafis Musfiq Siam | Developed with
  AI-assisted tools."

Content note (from your original README):
Project cards describe initiatives and experience listed in the supplied CV. They are not represented as paid client case studies. Please add real work samples and verified profile links as they become available.


------------------------------------------------------------
FLOWPILOT AI (added)
------------------------------------------------------------
- New featured card "FlowPilot AI" sits right after MORROW & CO. in the Projects section (id="flowpilot-ai"). Thumbnail: projects/flowpilot-ai/assets/preview.svg
- Its "View Live Demo" button opens the Claude Artifact: https://claude.ai/artifact/19wTg52nimKVE2MqiWRCkP
- IMPORTANT: the artifact is private until you share it. In claude.ai open it, choose Share, and enable link access, otherwise visitors will not be able to open it. If your share link differs, replace this URL in two places inside the #flowpilot-ai card.
- Visitors need their own Claude account; AI use counts toward their own usage limits.
- FlowPilot AI is a self-initiated project, not paid client work. It drafts content only: nothing is posted, sent or scheduled.
- A copy of the app source is in projects/flowpilot-ai/flowpilot-ai.html (for reference; it only runs its AI features inside claude.ai).


------------------------------------------------------------
SLIDECRAFT STUDIO (added)
------------------------------------------------------------
- New featured card "SlideCraft Studio" (id="slidecraft-studio", category "PowerPoint & PDF Design") sits right after FlowPilot AI in the Projects section. Thumbnail: projects/slidecraft-studio/assets/preview.svg. Link: projects/slidecraft-studio/index.html
- Project folder: projects/slidecraft-studio/ with index.html, assets/, presentations/ (3 editable PPTX), pdfs/ (5 PDFs) and README.md (full details and limitations).
- Relative links only, so it works locally, on Netlify and on GitHub Pages. Drag the whole "portfolio" folder to Netlify Drop as before.
- SlideCraft Studio is a self-initiated project, not paid client work. Sample companies, figures and projections are fictional or illustrative and labelled as such.
- Please open each PPTX once in Microsoft PowerPoint to confirm fonts and layout (checks were done with LibreOffice rendering).
