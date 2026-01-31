import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { userOperations, userFields } from './resources/user';
import { summaryOperations, summaryFields } from './resources/summary';
import { categoriesOperations, categoriesFields } from './resources/categories';
import { manualAccountsOperations, manualAccountsFields } from './resources/manualAccounts';
import { plaidAccountsOperations, plaidAccountsFields } from './resources/plaidAccounts';
import { recurringItemsOperations, recurringItemsFields } from './resources/recurringItems';
import { tagsOperations, tagsFields } from './resources/tags';
import { transactionsOperations, transactionsFields } from './resources/transactions';

export class Lunchmoney implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Lunchmoney',
		name: 'lunchmoney',
		// eslint-disable-next-line
		icon: 'file:lunchmoney.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Lunchmoney API',
		defaults: {
			name: 'Lunchmoney',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		// eslint-disable-next-line @n8n/community-nodes/no-credential-reuse
		credentials: [{ name: 'lunchmoneyApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.lunchmoney.dev/v2',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Budget',
						value: 'summary',
					},
					{
						name: 'Category',
						value: 'categories',
					},
					{
						name: 'Manual Account',
						value: 'manualAccounts',
					},
					{
						name: 'Plaid Account',
						value: 'plaidAccounts',
					},
					{
						name: 'Recurring Item',
						value: 'recurringItems',
					},
					{
						name: 'Tag',
						value: 'tags',
					},
					{
						name: 'Transaction',
						value: 'transactions',
					},
					{
						name: 'User',
						value: 'user',
					},
				],
				default: 'user',
			},
			...userOperations,
			...userFields,
			...summaryOperations,
			...summaryFields,
			...categoriesOperations,
			...categoriesFields,
			...manualAccountsOperations,
			...manualAccountsFields,
			...plaidAccountsOperations,
			...plaidAccountsFields,
			...recurringItemsOperations,
			...recurringItemsFields,
			...tagsOperations,
			...tagsFields,
			...transactionsOperations,
			...transactionsFields,
		],
	};
}
