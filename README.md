# Nordic Analytics — Fund Intelligence Dashboard

## Running locally

``` bash
git clone https://github.com/SarahSolkar/nordic-dashboard.git
npm install && npm run dev
```

## Technical decisions

- **Vite + React + TypeScript** - fast dev server, strong typing end-to-end
- **Zustand** - minimal global state for fund selection and multi-fund overlay; avoids prop-drilling without Redux ceremony
- **Highcharts** - Built-in axis/tooltip formatters and multi-series support needed for the overlay bonus
- **material-react-table v3** - TanStack Table v8 under the hood; declarative column sorting and conditional row styling in ~20 lines
- **Tailwind CSS v4** - utility-first, no custom CSS files, consistent spacing

## What I'd add with more time

- Unit tests for formatting utils (Vitest + Testing Library)
- Skeleton loading states
- Dark mode (Tailwind dark: variants + Highcharts dark theme)
- Storybook for isolated component development

## Known limitations

- Dataset is static, no real-time updates
- No error boundary around the Highcharts chart