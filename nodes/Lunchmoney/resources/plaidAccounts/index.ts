import { INodeProperties } from 'n8n-workflow';

export const plaidAccountsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['plaidAccounts'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get a plaid account',
				description: 'Get a single plaid account by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/plaid_accounts/{{$parameter.id}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many plaid accounts',
				description: 'Get many plaid accounts',
				routing: {
					request: {
						method: 'GET',
						url: '/plaid_accounts',
					},
				},
			},
			{
				name: 'Trigger Fetch',
				value: 'fetch',
				action: 'Trigger plaid fetch',
				description: 'Trigger a fetch for latest data from Plaid',
				routing: {
					request: {
						method: 'POST',
						url: '/plaid_accounts/fetch',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const plaidAccountsFields: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'id',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['plaidAccounts'],
				operation: ['get'],
			},
		},
		description: 'The ID of the plaid account',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['plaidAccounts'],
				operation: ['getAll'],
			},
		},
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		displayOptions: {
			show: {
				resource: ['plaidAccounts'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		description: 'Max number of results to return',
	},
];
