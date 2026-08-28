# ikomida-shared-types

The vocabulary of the platform — 58 domain classes and 28 type sets.

> Part of the **iKomida** platform. See **[ikomida-k8s-config](https://github.com/kaitbellahs/ikomida-k8s-config)** for the architecture overview of all 31 repositories.

---

## Role

Every other repository depends on this one. It defines what an order, a product, a contract or an AMQP payload *is*, along with the enums that constrain them (order status, user roles, payment states) and the serialization contracts that move them across process boundaries.

Because the front ends consume the same package as the services, a field cannot be renamed on the server and quietly forgotten in the app — the compiler objects. This is the mechanism that keeps eleven services and four applications speaking one language.

## Contents

| Directory | Contents |
|---|---|
| `Classes/` | 58 domain classes with `fromObject` / serialization contracts |
| `Types/` | 28 enum and union type sets |
| `Interfaces/` | Structural contracts |
| `Decorators/` | Metadata decorators shared with the back end |

## Stack

TypeScript · rollup · API Extractor · published as a versioned npm package

## Build

```bash
yarn install
yarn build
yarn build:types   # API Extractor rollup of .d.ts
```

## Status

Built in 2022. The platform is no longer deployed; this repository is published as a record of the work. **The commit history predates generative AI coding assistants.**

## License

Licensed under the [Apache License 2.0](LICENSE) — free for commercial use, provided the copyright notice and [NOTICE](NOTICE) are retained.

Copyright 2022 Khalid Ait Bellahs.
