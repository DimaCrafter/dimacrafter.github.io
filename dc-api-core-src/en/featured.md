---
pluginRepos: [
	{
		name: 'dc-api-mongo',
		fullname: 'DimaCrafter/dc-api-mongo',
		description: 'Plugin, that adds MongoDB support. Registers `mongo` driver.'
	}
]
otherRepos: [
	{
		name: 'dc-api-client',
		fullname: 'DimaCrafter/dc-api-client',
		description: 'HTTP client for working with dc-api-core.'
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

## Plugins

<RepoCard v-for="repo of $frontmatter.pluginRepos" v-bind="repo" :key="repo.name" />

## Other

<RepoCard v-for="repo of $frontmatter.otherRepos" v-bind="repo" :key="repo.name" />
