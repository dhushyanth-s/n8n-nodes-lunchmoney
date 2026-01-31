import { INodeProperties } from 'n8n-workflow';

export const summaryOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['summary'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get budget summary',
				description: 'Get a summary of the budget activity for the specified date range',
				routing: {
					request: {
						method: 'GET',
						url: '/summary',
					},
				},
			},
		],
		default: 'get',
	},
];

export const summaryFields: INodeProperties[] = [
	{
		displayName: 'Start Date',
		name: 'start_date',
		type: 'dateTime',
		default: '',
		displayOptions: {
			show: {
				resource: ['summary'],
				operation: ['get'],
			},
		},
		description: 'Start of date range in ISO 8601 date format (YYYY-MM-DD)',
		required: true,
		routing: {
			send: {
				type: 'query',
				property: 'start_date',
				value: '={{new Date($value).toISOString().split("T")[0]}}',
			},
		},
	},
	{
		displayName: 'End Date',
		name: 'end_date',
		type: 'dateTime',
		default: '',
		displayOptions: {
			show: {
				resource: ['summary'],
				operation: ['get'],
			},
		},
		description: 'End of date range in ISO 8601 date format (YYYY-MM-DD)',
		required: true,
		routing: {
			send: {
				type: 'query',
				property: 'end_date',
				value: '={{new Date($value).toISOString().split("T")[0]}}',
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
				resource: ['summary'],
				operation: ['get'],
			},
		},
		options: [
			{
				displayName: 'Include Exclude From Budgets',
				name: 'include_exclude_from_budgets',
				type: 'boolean',
				default: false,
				description: 'Whether to include categories that have the \'Exclude from Budgets\' flag set',
				routing: {
					send: {
						type: 'query',
						property: 'include_exclude_from_budgets',
					},
				},
			},
			{
				displayName: 'Include Occurrences',
				name: 'include_occurrences',
				type: 'boolean',
				default: false,
				description: 'Whether to include an occurrences array for each category',
				routing: {
					send: {
						type: 'query',
						property: 'include_occurrences',
					},
				},
			},
			{
				displayName: 'Include Past Budget Dates',
				name: 'include_past_budget_dates',
				type: 'boolean',
				default: false,
				description: 'Whether to include the three budget occurrences prior to the start date',
				routing: {
					send: {
						type: 'query',
						property: 'include_past_budget_dates',
					},
				},
			},
			{
				displayName: 'Include Rollover Pool',
				name: 'include_rollover_pool',
				type: 'boolean',
				default: false,
				description: 'Whether to include a rollover_pool section',
				routing: {
					send: {
						type: 'query',
						property: 'include_rollover_pool',
					},
				},
			},
			{
				displayName: 'Include Totals',
				name: 'include_totals',
				type: 'boolean',
				default: false,
				description: 'Whether to include a top-level totals section',
				routing: {
					send: {
						type: 'query',
						property: 'include_totals',
					},
				},
			},
		],
	},
];
