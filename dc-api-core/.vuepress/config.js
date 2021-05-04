const moment = require('moment');
const path = require('path');

module.exports = {
	base: '/dc-api-core/',
	head: [
		['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
	],
	themeConfig: {
		docsRepo: 'DimaCrafter/dimacrafter.github.io',
		docsDir: 'dc-api-core',
		docsBranch: 'master',
		editLinks: true,
		smoothScroll: true,
		title: null,

		logo: '/img/full.svg',
		locales: {
			'/en/': {
				selectText: 'Languages',
				label: 'English',
				nav: [
					{ text: 'CLI', link: '/en/cli/' },
					{ text: 'Featured', link: '/en/featured' }
				],
				sidebar: [
					{
						title: 'Quick start',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'/en/',
							'/en/featured'
						]
					},
					{
						title: 'API',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'/en/api/config',
							'/en/api/controller',
							'/en/api/core',
							'/en/api/plugin-context',
							'/en/api/database-driver',
							'/en/api/session',
							'/en/api/router'
						]
					},
					{
						title: 'Plugins',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'./en/plugins/basics'
						]
					}
				],
				lastUpdated: 'Last Updated',
				editLinkText: 'Help us improve this page!'
			},
			'/ru/': {
				selectText: 'Язык',
				label: 'Русский',
				nav: [
					{ text: 'Изменения v0.3', link: '/ru/changes' },
					{ text: 'Рекомендуемое', link: '/ru/featured' },
					{ text: 'API', link: '/ru/api/' },
				],
				sidebar: [
					{
						title: 'Быстрый старт',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'/ru/',
							'/ru/featured'
						]
					},
					{
						title: 'API',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'/ru/api/config',
							'/ru/api/controller',
							'/ru/api/core',
							'/ru/api/plugin-context',
							'/ru/api/database-driver',
							'/ru/api/session',
							'/ru/api/router'
						]
					},
					{
						title: 'Плагины',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'/ru/plugins/basics'
						]
					}
				],
				lastUpdated: 'Последнее обновление',
				editLinkText: 'Помогите улучшить эту страницу!'
			}
		},

		algolia: {
			apiKey: 'ef4744a184e3262bcb39b0c6dde37b2f',
			indexName: 'dc-api-core'
		}
	},
	locales: {
		'/en/': {
			lang: 'en-US',
			title: 'dc-api-core',
			description: 'Simple API core for your projects',
			label: 'English'
		},
		'/ru/': {
			lang: 'ru-RU',
			title: 'dc-api-core',
			description: 'Простое ядро API для Ваших проектов',
			label: 'Русский'
		}
	},

	evergreen: true,
	plugins: [
		['@vuepress/last-updated', {
			transformer (timestamp, lang) {
				moment.locale(lang);
				return moment(timestamp).fromNow()
			}
		}]
	],
	alias: {
		'styles': path.resolve(__dirname, './styles')
	}
};
