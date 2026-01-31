import { INodeProperties } from 'n8n-workflow';

export const transactionsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a transaction',
				description: 'Create a new transaction',
				routing: {
					request: {
						method: 'POST',
						url: '/transactions',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a transaction',
				description: 'Delete a transaction by ID',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/transactions/{{$parameter.transactionId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a transaction',
				description: 'Get a single transaction by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/transactions/{{$parameter.transactionId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many transactions',
				description: 'Get many transactions',
				routing: {
					request: {
						method: 'GET',
						url: '/transactions',
					},
				},
			},
			{
				name: 'Group',
				value: 'group',
				action: 'Group transactions',
				description: 'Group multiple transactions into a single transaction group',
				routing: {
					request: {
						method: 'POST',
						url: '/transactions/group',
					},
				},
			},
			{
				name: 'Split',
				value: 'split',
				action: 'Split a transaction',
				description: 'Split a transaction into multiple child transactions',
				routing: {
					request: {
						method: 'POST',
						url: '=/transactions/split/{{$parameter.transactionId}}',
					},
				},
			},
			{
				name: 'Ungroup',
				value: 'ungroup',
				action: 'Ungroup transactions',
				description: 'Ungroup a transaction group',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/transactions/group/{{$parameter.transactionGroupId}}',
					},
				},
			},
			{
				name: 'Unsplit',
				value: 'unsplit',
				action: 'Unsplit a transaction',
				description: 'Unsplit a previously split transaction',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/transactions/split/{{$parameter.transactionId}}',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a transaction',
				description: 'Update an existing transaction',
				routing: {
					request: {
						method: 'PUT',
						url: '=/transactions/{{$parameter.transactionId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const transactionsFields: INodeProperties[] = [
	// IDs
	{
		displayName: 'Transaction ID',
		name: 'transactionId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['get', 'update', 'delete', 'split', 'unsplit'],
			},
		},
		description: 'The ID of the transaction',
	},
	{
		displayName: 'Transaction Group ID',
		name: 'transactionGroupId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['ungroup'],
			},
		},
		description: 'The ID of the transaction group',
	},

	// getAll Filters
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['transactions'],
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
				resource: ['transactions'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Category ID',
				name: 'category_id',
				type: 'number',
				default: 0,
				description: 'Filter by category ID',
				routing: {
					send: {
						type: 'query',
						property: 'category_id',
					},
				},
			},
			{
				displayName: 'End Date',
				name: 'end_date',
				type: 'dateTime',
				default: '',
				description: 'End date of the time period',
				routing: {
					send: {
						type: 'query',
						property: 'end_date',
						value: '={{new Date($value).toISOString().split("T")[0]}}',
					},
				},
			},
			{
				displayName: 'Is Group Parent',
				name: 'is_group_parent',
				type: 'boolean',
				default: false,
				description: 'Whether to filter by group parent status',
				routing: {
					send: {
						type: 'query',
						property: 'is_group_parent',
					},
				},
			},
			{
				displayName: 'Is Pending',
				name: 'is_pending',
				type: 'boolean',
				default: false,
				description: 'Whether to filter by pending status',
				routing: {
					send: {
						type: 'query',
						property: 'is_pending',
					},
				},
			},
			{
				displayName: 'Manual Account ID',
				name: 'manual_account_id',
				type: 'number',
				default: 0,
				description: 'Filter by manual account ID',
				routing: {
					send: {
						type: 'query',
						property: 'manual_account_id',
					},
				},
			},
			{
				displayName: 'Plaid Account ID',
				name: 'plaid_account_id',
				type: 'number',
				default: 0,
				description: 'Filter by Plaid account ID',
				routing: {
					send: {
						type: 'query',
						property: 'plaid_account_id',
					},
				},
			},
			{
				displayName: 'Recurring ID',
				name: 'recurring_id',
				type: 'number',
				default: 0,
				description: 'Filter by recurring item ID',
				routing: {
					send: {
						type: 'query',
						property: 'recurring_id',
					},
				},
			},
			{
				displayName: 'Start Date',
				name: 'start_date',
				type: 'dateTime',
				default: '',
				description: 'Start date of the time period',
				routing: {
					send: {
						type: 'query',
						property: 'start_date',
						value: '={{new Date($value).toISOString().split("T")[0]}}',
					},
				},
			},
			{
				displayName: 'Tag ID',
				name: 'tag_id',
				type: 'number',
				default: 0,
				description: 'Filter by tag ID',
				routing: {
					send: {
						type: 'query',
						property: 'tag_id',
					},
				},
			},
		],
	},

	// Create Fields
	{
		displayName: 'Date',
		name: 'date',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['create'],
			},
		},
		description: 'Date of the transaction',
		routing: {
			send: {
				type: 'body',
				property: 'transactions[0].date',
				value: '={{new Date($value).toISOString().split("T")[0]}}',
			},
		},
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['create'],
			},
		},
		description: 'Amount of the transaction',
		routing: {
			send: {
				type: 'body',
				property: 'transactions[0].amount',
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
				resource: ['transactions'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Category ID',
				name: 'category_id',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'transactions[0].category_id',
					},
				},
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'string',
				default: '',
				description: 'Currency code',
				routing: {
					send: {
						type: 'body',
						property: 'transactions[0].currency',
					},
				},
			},
			{
				displayName: 'External ID',
				name: 'external_id',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'transactions[0].external_id',
					},
				},
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				description: 'Notes for the transaction',
				routing: {
					send: {
						type: 'body',
						property: 'transactions[0].notes',
					},
				},
			},
			{
				displayName: 'Payee',
				name: 'payee',
				type: 'string',
				default: '',
				description: 'Payee of the transaction',
				routing: {
					send: {
						type: 'body',
						property: 'transactions[0].payee',
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{ name: 'Cleared', value: 'cleared' },
					{ name: 'Recurring', value: 'recurring' },
					{ name: 'Recurring Suggestion', value: 'recurring_suggestion' },
					{ name: 'Uncleared', value: 'uncleared' },
				],
				default: 'cleared',
				description: 'Status of the transaction',
				routing: {
					send: {
						type: 'body',
						property: 'transactions[0].status',
					},
				},
			},
		],
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Apply Rules',
				name: 'apply_rules',
				type: 'boolean',
				default: false,
				description: 'Whether to apply rules',
				routing: {
					send: {
						type: 'body',
						property: 'apply_rules',
					},
				},
			},
			{
				displayName: 'Skip Balance Update',
				name: 'skip_balance_update',
				type: 'boolean',
				default: false,
				description: 'Whether to skip balance update',
				routing: {
					send: {
						type: 'body',
						property: 'skip_balance_update',
					},
				},
			},
			{
				displayName: 'Skip Duplicates',
				name: 'skip_duplicates',
				type: 'boolean',
				default: false,
				description: 'Whether to skip duplicates',
				routing: {
					send: {
						type: 'body',
						property: 'skip_duplicates',
					},
				},
			},
		],
	},

	// Update Fields
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Amount',
				name: 'amount',
				type: 'number',
				default: 0,
				description: 'Amount of the transaction',
				routing: {
					send: {
						type: 'body',
						property: 'amount',
					},
				},
			},
			{
				displayName: 'Category ID',
				name: 'category_id',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'category_id',
					},
				},
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'string',
				default: '',
				description: 'Currency code',
				routing: {
					send: {
						type: 'body',
						property: 'currency',
					},
				},
			},
			{
				displayName: 'Date',
				name: 'date',
				type: 'dateTime',
				default: '',
				description: 'Date of the transaction',
				routing: {
					send: {
						type: 'body',
						property: 'date',
						value: '={{new Date($value).toISOString().split("T")[0]}}',
					},
				},
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				description: 'Notes for the transaction',
				routing: {
					send: {
						type: 'body',
						property: 'notes',
					},
				},
			},
			{
				displayName: 'Payee',
				name: 'payee',
				type: 'string',
				default: '',
				description: 'Payee of the transaction',
				routing: {
					send: {
						type: 'body',
						property: 'payee',
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{ name: 'Cleared', value: 'cleared' },
					{ name: 'Recurring', value: 'recurring' },
					{ name: 'Recurring Suggestion', value: 'recurring_suggestion' },
					{ name: 'Uncleared', value: 'uncleared' },
				],
				default: 'cleared',
				description: 'Status of the transaction',
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},
			},
		],
	},

	// Group Fields
	{
		displayName: 'Transaction IDs',
		name: 'transactionIds',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['group'],
			},
		},
		description: 'Comma-separated list of transaction IDs to group',
		routing: {
			send: {
				type: 'body',
				property: 'ids',
				value: '={{$value.split(",").map(id => parseInt(id.trim()))}}',
			},
		},
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['group'],
			},
		},
		description: 'Date for the new grouped transaction',
		routing: {
			send: {
				type: 'body',
				property: 'date',
				value: '={{new Date($value).toISOString().split("T")[0]}}',
			},
		},
	},
	{
		displayName: 'Payee',
		name: 'payee',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['group'],
			},
		},
		description: 'Payee for the new grouped transaction',
		routing: {
			send: {
				type: 'body',
				property: 'payee',
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
				resource: ['transactions'],
				operation: ['group'],
			},
		},
		options: [
			{
				displayName: 'Category ID',
				name: 'category_id',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'category_id',
					},
				},
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'notes',
					},
				},
			},
			{
				displayName: 'Tag IDs',
				name: 'tag_ids',
				type: 'string',
				default: '',
				description: 'Comma defined list of tag IDs',
				routing: {
					send: {
						type: 'body',
						property: 'tag_ids',
						value: '={{$value.split(",").map(id => parseInt(id.trim()))}}',
					},
				},
			},
		],
	},

	// Split Fields
	{
		displayName: 'Split Transactions',
		name: 'splitTransactions',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['split'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Split',
				name: 'split',
				values: [
					{
						displayName: 'Amount',
						name: 'amount',
						type: 'number',
						default: 0,
							required:	true,
						description: 'Amount of the split',
					},
					{
						displayName: 'Category ID',
						name: 'category_id',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'Date',
						name: 'date',
						type: 'dateTime',
						default: '',
						description: 'Date of the split',
					},
					{
						displayName: 'Notes',
						name: 'notes',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Payee',
						name: 'payee',
						type: 'string',
						default: '',
						description: 'Payee of the split',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'child_transactions',
				value: '={{$value.split.map(item => ({ ...item, date: item.date ? new Date(item.date).toISOString().split("T")[0] : undefined }))}}',
			},
		},
	},
];
