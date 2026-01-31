import { INodeProperties } from 'n8n-workflow';

export const recurringItemsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['recurringItems'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get a recurring item',
				description: 'Get a single recurring item by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/recurring_items/{{$parameter.id}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many recurring items',
				description: 'Get many recurring items',
				routing: {
					request: {
						method: 'GET',
						url: '/recurring_items',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const recurringItemsFields: INodeProperties[] = [
	{
		displayName: 'Recurring Item ID',
		name: 'id',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['recurringItems'],
				operation: ['get'],
			},
		},
		description: 'The ID of the recurring item',
	},
	{
		displayName: 'Start Date',
		name: 'start_date',
		type: 'dateTime',
		default: '',
		displayOptions: {
			show: {
				resource: ['recurringItems'],
				operation: ['getAll', 'get'],
			},
		},
		description: 'Start date for matching occurrences (YYYY-MM-DD)',
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
				resource: ['recurringItems'],
				operation: ['getAll', 'get'],
			},
		},
		description: 'End date for matching occurrences (YYYY-MM-DD)',
		routing: {
			send: {
				type: 'query',
				property: 'end_date',
				value: '={{new Date($value).toISOString().split("T")[0]}}',
			},
		},
	},
	{
		displayName: 'Include Suggested',
		name: 'include_suggested',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['recurringItems'],
				operation: ['getAll'],
			},
		},
		description: 'Whether to include suggested recurring items',
		routing: {
			send: {
				type: 'query',
				property: 'include_suggested',
			},
		},
	},
];
