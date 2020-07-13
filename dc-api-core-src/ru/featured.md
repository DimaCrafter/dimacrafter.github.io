---
pluginRepos: [
	{
		name: 'dc-api-mongo',
		fullname: 'DimaCrafter/dc-api-mongo',
		description: 'Плагин, добавляющий поддержку MongoDB. Регистрирует драйвер `mongo`.'
	}
]
otherRepos: [
	{
		name: 'dc-api-client',
		fullname: 'DimaCrafter/dc-api-client',
		description: 'HTTP клиент, созданный для работы с dc-api-core.'
	},
	{
		name: 'dc-api-examples',
		fullname: 'mayerdev/dc-api-examples',
		description: 'В данном репозитории собраны примеры использования экосистемы dc-api-core',
		npm: false
	}
]
---

# Рекомендуемые репозитории

## Плагины

<RepoCard v-for="repo of $frontmatter.pluginRepos" v-bind="repo" :key="repo.name" />

## Прочее

<RepoCard v-for="repo of $frontmatter.otherRepos" v-bind="repo" :key="repo.name" />
