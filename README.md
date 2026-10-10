# DIGITAL HAVIK

A personal digital marketing workspace created by **Mohammad Hassan**.

## Features

- SEO Workspace with seven ordered checklist phases, multiple projects, saved progress and project removal.
- Campaign Planner with campaign brief and guided execution checklist.
- Content Calendar with month/year/brand filters, editable spreadsheet-like rows, direct TSV paste import, CSV/TSV import and Excel-compatible CSV export.
- Marketing Tool Library with useful SEO and digital marketing links.
- Dedicated Google Ads Tools section for Keyword Planner, Google Ads, Trends, GA4, GTM, UTM Builder, Looker Studio and more.
- Separate KPI Calculator for CPC, CPM, CTR, CPA, conversion rate and ROAS.
- Brand workspaces with downloadable brand work summary.
- About / Contact page for Mohammad Hassan, including marketing skill areas.
- Local JSON backup and restore-ready structure.

## Run locally

Requires Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Before deploying, run `npm run build`.

## Data and integration notes

This prototype saves data in browser localStorage. It does not sync between devices or provide secure cloud backups. Export backups regularly and do not store passwords, access tokens or confidential customer information. External links are not authenticated integrations and no ads are launched from this application.

The Content Calendar accepts tab-separated rows copied from Excel or Google Sheets via the paste box, and can import CSV/TSV files. Export creates an Excel-compatible CSV file; native `.xlsx` formatting is not currently generated.

## Netlify

Push the project folder to GitHub, import that repository in Netlify and use `npm run build` as the build command. Netlify can detect Next.js and configure its runtime. Verify the build and test the live app after deployment. Browser-local data remains specific to each browser/device. Add authentication and a secure database before using this for confidential client records.

## Owner

Mohammad Hassan  
Digital / Performance Marketing Executive  
Phone: +91 8767714706  
Email: mohammad.hassan4994@gmail.com
