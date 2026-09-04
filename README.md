# ModelMargin Lite

Free, local-first tools for checking the unit economics of an AI SaaS before
launching it.

ModelMargin Lite helps answer practical questions such as:

- What does one AI request actually cost?
- How many requests can a plan include without missing its target margin?
- What subscription price covers model cost, payment fees, refunds, support,
  and fixed overhead?
- How many customers are needed to break even?

## Try it

- [Interactive product demo](https://modelmargin-kit.breezy-joy-3404.chatgpt.site/demo)
- [Hosted free calculator](https://modelmargin-kit.breezy-joy-3404.chatgpt.site/calculator)
- [Product overview](https://modelmargin-kit.breezy-joy-3404.chatgpt.site)

To run the calculator locally, download this repository and open `index.html`
in a modern browser. It has no build step and sends no
data to a server.

## Lite versus Universal

This repository contains the free browser calculator only. It does **not**
contain provider credentials or the paid production starter.

The paid ModelMargin Universal kit adds a portable Windows demo, server-side
OpenAI and Anthropic adapters, prepaid balances, actual-token metering, cost and
margin controls, signed payment webhooks, admin metrics, tests, Docker files,
deployment guidance, and a commercial-use license.

[See the Universal kit and current offer](https://modelmargin-kit.breezy-joy-3404.chatgpt.site)

## Important boundaries

- Bring your own legitimate provider and payment accounts.
- API keys, model accounts, credits, and token balances are not included.
- This project does not trade, share, or resell provider accounts or API keys.
- Example prices are placeholders. Verify current provider and payment fees.
- No profitability, uptime, or financial-return guarantee is made.

## Feedback

Bug reports and focused feature requests are welcome. Please do not include API
keys, customer information, payment data, or other secrets in an issue.

## License

See [LICENSE.md](LICENSE.md). The calculator is free for personal and internal
analysis, but it may not be resold as a competing calculator or template.
