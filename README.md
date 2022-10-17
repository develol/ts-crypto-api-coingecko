# ts-crypto-api-coingecko
[TypeScript] API module for [CoinGecko](https://www.coingecko.com/)

***Node.js v18.2.0+***\
***TypeScript v4.8.0+***

- [Getting started](#getting-started)
- [CoinGecko API](#coingecko-api)
  - [Ping](#ping)
  - [Simple](#simple)
  - [Coins](#coins)
  - [Contract](#contract)
  - [Asset platforms](#asset-platforms)
  - [Categories](#categories)
  - [Exchanges](#exchanges)
  - [Indexes](#indexes)
  - [Derivatives](#derivatives)
  - [NFTs](#nfts)
  - [Exchange rates](#exchange-rates)
  - [Search](#search)
  - [Trending](#trending)
  - [Global](#global)
  - [Companies](#companies)

## Getting started
1. Cloning this repository and...
```
npm i --save <path_to_repository>/ts-crypto-api-coingecko
```
2. Import module
```typescript
// Importing a module
import * as CoinGecko from 'ts-crypto-api-coingecko';
```
## CoinGecko [API](https://www.coingecko.com/en/api/documentation)

### Ping
```typescript
// Object declaration for ping
let ping = new CoinGecko.ping;
```
```typescript
// Check API server status
ping._main({
  other: {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```

### Simple
```typescript
// Object declaration for simple
let simple = new CoinGecko.simple;
```
```typescript
// Get the current price of any cryptocurrencies in any other supported currencies that you need
simple.price({
  vs_currencies: '<value>', // vs_currency of coins (see simple.supported_vs_currencies)
  ids:           '<value>', // id of coins (see coins.list)
  other:         { // Оptional parameters
    // include_market_cap:      '<true|false>',
    // include_24hr_vol:        '<true|false>',
    // include_24hr_change:     '<true|false>',
    // include_24hr_change:     '<true|false>',
    // include_last_updated_at: '<true|false>',
    // precision:               '<0-18>'
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Get current price of tokens for a given platform in any other currency that you need
simple.token_price({
  id:                 '<value>', // id of the platform issuing tokens (see asset_platforms._main)
  contract_addresses: '<value>', // contract_address of tokens, comma separated
  vs_currencies:      '<value>', // vs_currency of coins (see simple.supported_vs_currencies)
  other:              { // Оptional parameters
    // include_market_cap:      '<true|false>',
    // include_24hr_vol:        '<true|false>',
    // include_24hr_change:     '<true|false>',
    // include_24hr_change:     '<true|false>',
    // include_last_updated_at: '<true|false>',
    // precision:               '<0-18>'
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Get list of supported_vs_currencies
simple.supported_vs_currencies({
  other: {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```

### Coins
```typescript
// Object declaration for coins
let coins = new CoinGecko.coins;
```
```typescript
// List all supported coins id, name and symbol
coins.list({
  other: { // Оptional parameters
    include_platform:  '<true|false>'
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// List all supported coins price, market cap, volume, and market related data
coins.markets({
  vs_currency: '<value>', // vs_currency of coins (see simple.supported_vs_currencies)
  other: { // Оptional parameters
    // ids:                     '<value>',
    // category:                '<value>',
    // order:                   '<value>',
    // per_page:                '<0-250>',
    // page:                    '<value>',
    // sparkline:               '<true|false>',
    // price_change_percentage: '<1h|24h|7d|14d|30d|200d|1y>'
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Get current data for a coin.
coins._id({
  id:    '<value>', // id of coins (see coins.list)
  other: { // Оptional parameters
    // localization:   '<true|false>',
    // tickers:        '<true|false>',
    // market_data:    '<true|false>',
    // community_data: '<true|false>',
    // developer_data: '<true|false>',
    // sparkline:      '<true|false>'
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Get coin tickers
coins.tickers({
  id:    '<value>', // id of coins (see coins.list)
  other: { // Оptional parameters
    // exchange_ids:          '<value>',
    // include_exchange_logo: '<value>',
    // page:                  '<value>',
    // order:                 '<value>',
    // depth:                 '<value>'
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Get historical data at a given date for a coin
coins.history({
  id:    '<value>', // id of coins (see coins.list)
  date:  '<value>', // date of data snapshot in dd-mm-yyyy
  other: { // Оptional parameters
    // localization: '<value>'
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Get historical market data include price, market cap, and 24h volume
coins.market_chart({
  id:          '<value>', // id of coins (see coins.list)
  vs_currency: '<value>', // vs_currency of coins (see simple.supported_vs_currencies)
  days:        '<1|14|30|max>', // Data up to number of days ago
  other:       { // Оptional parameters
    // interval: '<value>'
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
coins.range({
  id:          '<value>', // id of coins (see coins.list)
  vs_currency: '<value>', // vs_currency of coins (see simple.supported_vs_currencies)
  from:        '<value>', // From date in UNIX Timestamp 
  to:          '<value>', // To date in UNIX Timestamp
  other:       {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
coins.ohlc({
  id:          '<value>', // id of coins (see coins.list)
  vs_currency: '<value>', // vs_currency of coins (see simple.supported_vs_currencies)
  days:        '<1|7|14|30|90|180|365|max>', // Data up to number of days ago
  other:       {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```

### Contract
```typescript
// Object declaration for contract
let contract = new CoinGecko.contract;
```
```typescript
// Get coin info from contract address
contract._main({
  id:               '<value>', // Asset platform (see asset_platforms._main)
  contract_address: '<value>', // Token's contract address
  other:            {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Get historical market data include price, market cap, and 24h volume
contract.market_chart({
  id:               '<value>', // id of the platform issuing tokens (see asset_platforms._main)
  contract_address: '<value>', // Token's contract address
  vs_currency:      '<value>', // vs_currency of coins (see simple.supported_vs_currencies)
  days:             '<1|14|30|max>', // Data up to number of days ago
  other:            {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Get historical market data include price, market cap, and 24h volume within a range of timestamp
contract.market_chart_range({
  id:               '<value>', // id of the platform issuing tokens (see asset_platforms._main)
  contract_address: '<value>', // Token's contract address
  vs_currency:      '<value>', // vs_currency of coins (see simple.supported_vs_currencies)
  from:             '<value>', // From date in UNIX Timestamp 
  to:               '<value>', // To date in UNIX Timestamp
  other:            {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```

### Asset platforms
```typescript
// Object declaration for asset platforms
let asset_platforms = new CoinGecko.asset_platforms;
```
```typescript
// List all asset platforms
asset_platforms._main({
  other: {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```

### Categories
```typescript
// Object declaration for categories
let categories = new CoinGecko.categories;
```
```typescript
// List all categories with market data
categories._main({
  other: { // Оptional parameters
    // order: '<value>'
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// List all categories
categories.list({
  other: {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```

### Exchanges
```typescript
// Object declaration for exchanges
let exchanges = new CoinGecko.exchanges;
```
```typescript
// List all exchanges
exchanges._main({
  other: { // Оptional parameters
    // per_page: '<1-250>',
    // page:     '<value>'
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// List all supported markets id and name
exchanges.list({
  other: {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Get exchange volume in BTC and top 100 tickers only
exchanges._id({
  id:    '<value>', // Pass the exchange id (see exchanges.list)
  other: {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Get exchange tickers
exchanges.tickers({
  id:    '<value>', // Pass the exchange id (see exchanges.list)
  other: { // Оptional parameters
    // coin_ids:              '<value>',
    // include_exchange_logo: '<value>',
    // page:                  '<value>',
    // depth:                 '<value>',
    // order:                 '<value>'
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Get exchange volume in BTC and top 100 tickers only
exchanges.volume_chart({
  id:    '<value>', // Pass the exchange id (see exchanges.list)
  days:  '<1|14|30>', // Data up to number of days ago
  other: {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```

### Indexes
```typescript
// Object declaration for indexes
let indexes = new CoinGecko.indexes;
```
```typescript
// List all market indexes
indexes._main({
  other: { // Оptional parameters
    // per_page: '<value>',
    // page:     '<value>'
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Get market index by market id and index id
indexes._id({
  id:        '<value>', // Pass the market id (see exchanges.list)
  market_id: '<value>', // Pass the index id (see indexes.list)
  other:     {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// List market indexes id and name
indexes.list({
  other: {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```

### Derivatives
```typescript
// Object declaration for derivatives
let derivatives = new CoinGecko.derivatives;
```
```typescript
// List all derivative tickers
derivatives._main({
  other: { // Оptional parameters
    // include_tickers: <all|unexpired>
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// List all derivative exchanges
derivatives.exchanges({
  other: { // Оptional parameters
    // order:    '<value>',
    // per_page: '<value>',
    // page:     '<value>'
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Show derivative exchange data
derivatives.exchanges_id({
  id: '<value>', // Pass the exchange id (see derivatives.exchanges_list)
  other: { // Оptional parameters
    // include_tickers: <all|unexpired>
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// List all derivative exchanges name and identifier
derivatives.exchanges_list({
  other: {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```

### NFTs
```typescript
// Object declaration for nfts
let nfts = new CoinGecko.nfts;
```
```typescript
// Use this to obtain all the NFT ids in order to make API calls, paginated to 100 items
nfts.list({
  other: { // Оptional parameters
    // order:             '<value>',
    // asset_platform_id: '<value>',
    // per_page:          '<value>',
    // page:              '<value>'
  }
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Get current data for an NFT collection
nfts._id({
  id:    '<value>', // id of nft collection (see nfts.list)
  other: {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Get current data for an NFT collection
nfts.contract({
  asset_platform_id: '<value>', // id of the platform issuing tokens (see asset_platforms._main)
  contract_address:  '<value>', // contract address of the nft collection (see nfts.list)
  other:             {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```

### Exchange rates
```typescript
// Object declaration for exchange rates
let exchange_rates = new CoinGecko.exchange_rates;
```
```typescript
// Get BTC-to-Currency exchange rates
exchange_rates._main({
  other: {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```

### Search
```typescript
// Object declaration for search
let search = new CoinGecko.search;
```
```typescript
// Search for coins, categories and markets listed on CoinGecko
search._main({
  query: '<value>', // Search string
  other: {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```

### Trending
```typescript
// Object declaration for trending
let trending = new CoinGecko.trending;
```
```typescript
// Top-7 trending coins on CoinGecko as searched by users in the last 24 hours
trending._main({
  other: {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```

### Global
```typescript
// Object declaration for global
let global = new CoinGecko.global;
```
```typescript
// Get cryptocurrency global data
global._main({
  other: {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```
```typescript
// Get Top 100 Cryptocurrency Global Eecentralized Finance(defi) data
global.decentralized_finance_defi({
  other: {}
}).then((r)=>{console.log(r)}); // And console.log(<response>)
```

### Companies
```typescript
// Object declaration for companies
let companies = new CoinGecko.companies;
```
```typescript
// Get public companies bitcoin or ethereum holdings
companies.public_treasury({
    coin_id: '<bitcoin|ethereum>', // Bitcoin or ethereum
    other:    {}
}).then((r)=>{console.log(r)});
```
