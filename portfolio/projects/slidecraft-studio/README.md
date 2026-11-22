# SlideCraft Studio — PowerPoint & PDF Design

Self-initiated design project by **MD Nafis Musfiq Siam**. Navy + white + orange, matching the main portfolio.
Not paid client work. All sample companies, clients, figures and projections are fictional or illustrative and are labelled that way inside each file.

## Folder structure

```
projects/slidecraft-studio/
├── index.html                      Showcase page (hero, overview, services, galleries, process, tools, downloads, contact)
├── README.md                       This file
├── assets/
│   ├── preview.svg                 Thumbnail used by the main portfolio card
│   └── previews/*.jpg              Gallery images rendered from the real PPTX/PDF files
├── presentations/
│   ├── business-proposal.pptx      Digital Growth Strategy for Small Businesses (13 slides)
│   ├── ai-in-education.pptx        Future of Artificial Intelligence in Education (11 slides)
│   └── social-media-marketing.pptx Social Media Growth Strategy for a Digital Brand (12 slides)
└── pdfs/
    ├── business-proposal.pdf       3 pages
    ├── company-profile.pdf         3 pages (fictional company)
    ├── monthly-business-report.pdf 3 pages (sample data)
    ├── professional-cv-template.pdf 2 pages (ATS-friendly; page 2 is a guide to delete)
    └── project-report.pdf          4 pages (fictional sample project)
```

## What is in each file

**Presentations (fully editable PPTX, 16:9).** Shared theme (Cambria headings, Calibri body), consistent layouts, footers and slide numbers, native editable charts, icons and diagrams. Presentation 01 includes an illustrative budget and projections that are clearly labelled as such. Presentation 02 ends with real published references (UNESCO, OECD, U.S. Dept. of Education); verify editions and links before citing. Presentation 03 uses the fictional brand "Brightleaf".

**PDFs (A4).** Poppins headings and Helvetica body, branded cover, header, footer and page numbers. The CV template is plain single-column text with bracketed placeholders and no invented qualifications.

## Editing

- PPTX: open in PowerPoint, Keynote or Google Slides. Text, charts (right-click > Edit Data) and shapes are editable.
- PDFs: generated programmatically, so they are outputs rather than editable sources. To change one, recreate it in your editor or ask for a regenerated version.
- Fonts: Cambria and Calibri ship with Microsoft Office. Without them, PowerPoint substitutes a similar font and text may reflow slightly.

## Preview locally

Unzip and open `index.html` (no server needed). All links are relative. The page links back to `../../index.html#projects`.

## Main portfolio integration

A new featured card "SlideCraft Studio" (category: PowerPoint & PDF Design, id `slidecraft-studio`) sits after FlowPilot AI in the Projects section of the main `index.html` and links to `projects/slidecraft-studio/index.html`. No existing cards, links or content were changed.

## Quality checks performed

- PPTX: schema/relationship validation passed for all three files; every slide rendered and reviewed visually.
- PDF: page counts verified; text extraction checked; every page rendered and reviewed visually.
- Site: every local link and image checked against real files; no horizontal overflow at 1280, 820 and 390 px widths.

## Limitations

- Fonts in the PPTX files are Cambria and Calibri; rendering was checked with LibreOffice, not Microsoft PowerPoint itself. Please open each deck once in PowerPoint to confirm.
- Slide text in several cards is 12 pt (below the 14 pt body-text guideline) to keep slides uncrowded; increase if projecting to a large room.
- The PDFs are not editable sources; the CV PDF is a layout guide, not a fillable form.
- References in the AI deck were written from general knowledge and not re-verified online (no internet access in the build environment).
- Charts use illustrative sample data only.

Concept and creative direction: MD Nafis Musfiq Siam | Developed with AI-assisted tools.
