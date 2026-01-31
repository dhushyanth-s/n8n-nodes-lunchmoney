import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class LunchmoneyApi implements ICredentialType {
	name = 'lunchmoneyApi';

	displayName = 'Lunchmoney API';
	// eslint-disable-next-line
	icon = 'file:lunchmoney.png' as any;

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-lunchmoney?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.lunchmoney.dev/v2',
			url: '/me',
		},
	};
}
