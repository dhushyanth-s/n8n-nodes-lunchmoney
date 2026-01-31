# n8n-nodes-lunchmoney

This is an n8n community node that allows you to automate your personal finances using the [Lunch Money](https://lunchmoney.app/) API.

[Lunch Money](https://lunchmoney.app/) is a delightfully simple, multi-currency budgeting tool for modern spenders and believers in financial independence.

![Lunch Money mascot](https://lunchmoney.app/assets/images/logos/mascot.png)

## Features

This node supports the following Lunch Money API (v2) resources:

- **Budget (Summary)**: Get a summary of your budget activity for a specified date range.
- **Categories**: Create, read, update, and manage your spending categories and category groups.
- **Manual Accounts**: Manage your manually tracked assets and accounts.
- **Plaid Accounts**: View details of your accounts synced via Plaid.
- **Recurring Items**: Access and manage your recurring spending and income items.
- **Tags**: Manage tags associated with your transactions.
- **Transactions**: Full CRUD support for transactions, including grouping, splitting, and file attachments.
- **User**: Get details about the current authenticated user and account settings.

## Installation

Install it manually, whether it be through Docker or NPM.

In general, you would need to:

1. Clone this repository.
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Copy the contents of the `dist` folder to your n8n nodes directory, which is usually something like `~/.n8n/nodes/`

## Credentials

To use this node, you'll need a Lunch Money API Access Token:

1. Log in to your [Lunch Money account](https://lunchmoney.app/login).
2. Go to **Settings > Developers**.
3. Generate a new **Access Token**.
4. Use this token in the **Lunchmoney API** credential section in n8n.

## Documentation

- [Lunch Money API Reference](https://lunchmoney.dev/)
- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)

## License

[MIT](LICENSE)
