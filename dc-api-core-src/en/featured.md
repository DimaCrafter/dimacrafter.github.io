---
repos: [
	{
		name: 'dc-api-client',
		fullname: 'DimaCrafter/dc-api-client',
		description: 'HTTP client for working with dc-api-core.'
	},
	{
		name: 'dc-api-mongo',
		fullname: 'DimaCrafter/dc-api-mongo',
		description: 'Plugin, that adds MongoDB support. Registers `mongo` driver.'
	},
	{
		name: 'dc-api-examples',
		fullname: 'mayerdev/dc-api-examples',
		description: 'This repository contains examples of dc-api-core ecosystem usage',
		npm: false
	}
]
---

# Featured repositories

<RepoCard v-for="repo of $frontmatter.repos" v-bind="repo" :key="repo.name" />
