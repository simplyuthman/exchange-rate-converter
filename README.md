# Currency Converter

A simple React app that converts an amount from one currency to another using live exchange rates.

## Features

- Convert an amount between multiple currencies (USD, EUR, GBP, JPY, NGN, and more, depending on the API response)
- Live exchange rates fetched from an external API
- Loading state while rates are being fetched
- User-friendly error message if the rate fetch fails (no console-only errors — real users see what went wrong)
- Efficient recalculation: the expensive base-currency conversion only recomputes when the amount or "from" currency changes, not when the "to" currency changes

## Tech Stack

- React (Hooks: `useState`, `useEffect`, `useMemo`)
- [ExchangeRate API](https://www.exchangerate-api.com/) (or a compatible exchange rate endpoint) for live rates

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn

### Installation

git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install


### Running the App
npm run dev


The app will be available at `http://localhost:5173` (or whichever port your dev server reports).

## Usage

1. Enter an amount in the input field.
2. Select the currency you're converting **from**.
3. Select the currency you're converting **to**.
4. The converted amount updates automatically.

## Configuration

This app fetches rates from an exchange rate API keyed by the "from" currency:

https://open.er-api.com/v6/latest/{fromCurrency}



## Project Notes / Known Considerations

- Rates are refetched whenever the "from" currency changes.
- If the API request fails, an error message is shown in the UI instead of failing silently or logging only to the console.
- The "to" currency dropdown is populated from the same `rates` object returned by the API, so it will be empty until the first successful fetch completes.

## License

MIT