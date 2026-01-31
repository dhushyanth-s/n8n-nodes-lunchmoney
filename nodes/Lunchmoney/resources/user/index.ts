import { INodeProperties } from 'n8n-workflow';

export const userOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['user'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get current user',
				description: 'Get details about the user associated with the supplied authorization token',
				routing: {
					request: {
						method: 'GET',
						url: '/me',
					},
				},
			},
		],
		default: 'get',
	},
];

export const userFields: INodeProperties[] = [];
