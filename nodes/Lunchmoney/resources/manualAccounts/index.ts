import { INodeProperties } from 'n8n-workflow';

export const manualAccountsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['manualAccounts'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a manual account',
				description: 'Create a new manual account',
				routing: {
					request: {
						method: 'POST',
						url: '/manual_accounts',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a manual account',
				description: 'Delete a manual account by ID',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/manual_accounts/{{$parameter.id}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a manual account',
				description: 'Get a single manual account by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/manual_accounts/{{$parameter.id}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many manual accounts',
				description: 'Get many manual accounts',
				routing: {
					request: {
						method: 'GET',
						url: '/manual_accounts',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a manual account',
				description: 'Update an existing manual account',
				routing: {
					request: {
						method: 'PUT',
						url: '=/manual_accounts/{{$parameter.id}}',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const manualAccountsFields: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'id',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['manualAccounts'],
				operation: ['get', 'update', 'delete'],
			},
		},
		description: 'The ID of the manual account',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['manualAccounts'],
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
				resource: ['manualAccounts'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		description: 'Max number of results to return',
	},
	// Create required
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['manualAccounts'],
				operation: ['create'],
			},
		},
		description: 'Name of the account',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		required: true,
		default: 'cash',
		options: [
			{ name: 'Cash', value: 'cash' },
			{ name: 'Credit', value: 'credit' },
			{ name: 'Cryptocurrency', value: 'cryptocurrency' },
			{ name: 'Employee Compensation', value: 'employee compensation' },
			{ name: 'Investment', value: 'investment' },
			{ name: 'Liability', value: 'liability' },
			{ name: 'Loan', value: 'loan' },
			{ name: 'Other', value: 'other' },
			{ name: 'Real Estate', value: 'real estate' },
			{ name: 'Vehicle', value: 'vehicle' },
		],
		displayOptions: {
			show: {
				resource: ['manualAccounts'],
				operation: ['create'],
			},
		},
		description: 'Type of the account',
		routing: {
			send: {
				type: 'body',
				property: 'type',
			},
		},
	},
	{
		displayName: 'Balance',
		name: 'balance',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['manualAccounts'],
				operation: ['create'],
			},
		},
		description: 'Current balance of the account',
		routing: {
			send: {
				type: 'body',
				property: 'balance',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['manualAccounts'],
				operation: ['create', 'update'],
			},
		},
		options: [
			// Create & Update
			{
				displayName: 'Balance',
				name: 'balance',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['update'],
					},
				},
				description: 'Current balance of the account',
				routing: {
					send: {
						type: 'body',
						property: 'balance',
					},
				},
			},
			{
				displayName: 'Balance As Of',
				name: 'balance_as_of',
				type: 'dateTime',
				default: '',
				description: 'Date and time of the balance',
				routing: {
					send: {
						type: 'body',
						property: 'balance_as_of',
						value: '={{new Date($value).toISOString()}}',
					},
				},
			},
			{
				displayName: 'Closed On',
				name: 'closed_on',
				type: 'dateTime',
				default: '',
				description: 'Date when the account was closed',
				routing: {
					send: {
						type: 'body',
						property: 'closed_on',
						value: '={{new Date($value).toISOString().split("T")[0]}}',
					},
				},
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'string',
				default: '',
				description: 'Three-letter currency code (iso 4217)',
				routing: {
					send: {
						type: 'body',
						property: 'currency',
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description of the account',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
			},
			{
				displayName: 'Display Name',
				name: 'display_name',
				type: 'string',
				default: '',
				description: 'Display name of the account',
				routing: {
					send: {
						type: 'body',
						property: 'display_name',
					},
				},
			},
			{
				displayName: 'Exclude From Transactions',
				name: 'exclude_from_transactions',
				type: 'boolean',
				default: false,
				description: 'Whether transactions will not be imported for this account',
				routing: {
					send: {
						type: 'body',
						property: 'exclude_from_transactions',
					},
				},
			},
			{
				displayName: 'Institution Name',
				name: 'institution_name',
				type: 'string',
				default: '',
				description: 'Name of the institution',
				routing: {
					send: {
						type: 'body',
						property: 'institution_name',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['update'],
					},
				},
				description: 'Name of the account',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'cash',
				options: [
					{ name: 'Cash', value: 'cash' },
					{ name: 'Credit', value: 'credit' },
					{ name: 'Cryptocurrency', value: 'cryptocurrency' },
					{ name: 'Employee Compensation', value: 'employee compensation' },
					{ name: 'Investment', value: 'investment' },
					{ name: 'Liability', value: 'liability' },
					{ name: 'Loan', value: 'loan' },
					{ name: 'Other', value: 'other' },
					{ name: 'Real Estate', value: 'real estate' },
					{ name: 'Vehicle', value: 'vehicle' },
				],
				displayOptions: {
					show: {
						operation: ['update'],
					},
				},
				description: 'Type of the account',
				routing: {
					send: {
						type: 'body',
						property: 'type',
					},
				},
			},
		],
	},
];
