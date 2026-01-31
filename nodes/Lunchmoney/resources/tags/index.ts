import { INodeProperties } from 'n8n-workflow';

export const tagsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['tags'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a tag',
				description: 'Create a new tag',
				routing: {
					request: {
						method: 'POST',
						url: '/tags',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a tag',
				description: 'Delete a tag by ID',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/tags/{{$parameter.id}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a tag',
				description: 'Get a single tag by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/tags/{{$parameter.id}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many tags',
				description: 'Get many tags',
				routing: {
					request: {
						method: 'GET',
						url: '/tags',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a tag',
				description: 'Update an existing tag',
				routing: {
					request: {
						method: 'PUT',
						url: '=/tags/{{$parameter.id}}',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const tagsFields: INodeProperties[] = [
	{
		displayName: 'Tag ID',
		name: 'id',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['tags'],
				operation: ['get', 'update', 'delete'],
			},
		},
		description: 'The ID of the tag',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['tags'],
				operation: ['create'],
			},
		},
		description: 'Name of the tag',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['tags'],
				operation: ['create'],
			},
		},
		description: 'Description of the tag',
		routing: {
			send: {
				type: 'body',
				property: 'description',
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
				resource: ['tags'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Archived',
				name: 'archived',
				type: 'boolean',
				default: false,
				description: 'Whether the tag is archived',
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
				description: 'Description of the tag',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name of the tag',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
		],
	},
	{
		displayName: 'Force',
		name: 'force',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['tags'],
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
];
