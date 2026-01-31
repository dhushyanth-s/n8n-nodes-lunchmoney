import { INodeProperties } from 'n8n-workflow';

export const categoriesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['categories'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a category',
				description: 'Create a new category or category group',
				routing: {
					request: {
						method: 'POST',
						url: '/categories',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a category',
				description: 'Delete a category by ID',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/categories/{{$parameter.categoryId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a category',
				description: 'Get a single category or category group by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/categories/{{$parameter.categoryId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many categories',
				description: 'Get many categories',
				routing: {
					request: {
						method: 'GET',
						url: '/categories',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a category',
				description: 'Update an existing category',
				routing: {
					request: {
						method: 'PUT',
						url: '=/categories/{{$parameter.categoryId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const categoriesFields: INodeProperties[] = [
	{
		displayName: 'Category ID',
		name: 'categoryId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['categories'],
				operation: ['get', 'update', 'delete'],
			},
		},
		description: 'The ID of the category',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['categories'],
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
				resource: ['categories'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		description: 'Max number of results to return',
	},
	// Create Fields
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['categories'],
				operation: ['create'],
			},
		},
		description: 'Name of the category',
		routing: {
			send: {
				type: 'body',
				property: 'name',
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
				resource: ['categories'],
				operation: ['create', 'update'],
			},
		},
		options: [
			{
				displayName: 'Archived',
				name: 'archived',
				type: 'boolean',
				default: false,
				description: 'Whether the category is archived',
				routing: {
					send: {
						type: 'body',
						property: 'archived',
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description of the category',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
			},
			{
				displayName: 'Exclude From Budget',
				name: 'exclude_from_budget',
				type: 'boolean',
				default: false,
				description: 'Whether transactions in this category will be excluded from the budget',
				routing: {
					send: {
						type: 'body',
						property: 'exclude_from_budget',
					},
				},
			},
			{
				displayName: 'Exclude From Totals',
				name: 'exclude_from_totals',
				type: 'boolean',
				default: false,
				description: 'Whether transactions in this category will be excluded from totals',
				routing: {
					send: {
						type: 'body',
						property: 'exclude_from_totals',
					},
				},
			},
			{
				displayName: 'Group ID',
				name: 'group_id',
				type: 'number',
				default: 0,
				description: 'ID of the category group this category belongs to',
				routing: {
					send: {
						type: 'body',
						property: 'group_id',
					},
				},
			},
			{
				displayName: 'Is Group',
				name: 'is_group',
				type: 'boolean',
				default: false,
				displayOptions: {
					show: {
						operation: ['create'],
					},
				},
				description: 'Whether the category is created as a category group',
				routing: {
					send: {
						type: 'body',
						property: 'is_group',
					},
				},
			},
			{
				displayName: 'Is Income',
				name: 'is_income',
				type: 'boolean',
				default: false,
				description: 'Whether transactions in this category will be treated as income',
				routing: {
					send: {
						type: 'body',
						property: 'is_income',
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
				description: 'Name of the category',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
		],
	},
	// Delete Options
	{
		displayName: 'Force',
		name: 'force',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['categories'],
				operation: ['delete'],
			},
		},
		description: 'Whether to force deletion even if there are dependencies',
		routing: {
			send: {
				type: 'query',
				property: 'force',
			},
		},
	},
	// GetAll Options
	{
		displayName: 'Format',
		name: 'format',
		type: 'options',
		options: [
			{ name: 'Nested', value: 'nested' },
			{ name: 'Flattened', value: 'flattened' },
		],
		default: 'nested',
		displayOptions: {
			show: {
				resource: ['categories'],
				operation: ['getAll'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'format',
			},
		},
	},
];
