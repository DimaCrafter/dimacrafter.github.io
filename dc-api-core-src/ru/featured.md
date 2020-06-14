---
repos: [
	{
		name: 'dc-api-client',
		fullname: 'DimaCrafter/dc-api-client',
		description: 'HTTP клиент, созданный для работы с dc-api-core.'
	},
	{
		name: 'dc-api-mongo',
		fullname: 'DimaCrafter/dc-api-mongo',
		description: 'Плагин, добавляющий поддержку MongoDB. Регистрирует драйвер `mongo`.'
	},
	{
		name: 'dc-api-examples',
		fullname: 'mayerdev/dc-api-examples',
		description: 'В данном репозитории собраны примеры использования экосистемы dc-api-core',
		npm: false
	}
]
---

# Продвигаемые репозитории

<RepoCard v-for="repo of $frontmatter.repos" v-bind="repo" :key="repo.name" />
