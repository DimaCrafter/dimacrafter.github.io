const moment = require('moment');
const path = require('path');

module.exports = {
	base: '/dc-api-core/',
	head: [
		['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
	],
	themeConfig: {
		docsRepo: 'DimaCrafter/dimacrafter.github.io',
		docsDir: 'dc-api-core-src',
		docsBranch: 'master',
		editLinks: true,

		logo: '/img/logo.svg',
		locales: {
			'/en/': {
				selectText: 'Languages',
				label: 'English',
				nav: [
					{ text: 'CLI', link: '/en/cli/' },
					{ text: 'Featured', link: '/en/featured.html' }
				],
				sidebar: [
					{
						title: 'Quick start',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'/en/',
							'/en/featured.html'
						]
					},
					{
						title: 'API',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'/en/api/config.html',
							'/en/api/controller.html',
							'/en/api/core.html',
							'/en/api/plugin-context.html',
							'/en/api/database-driver.html',
							'/en/api/session.html'
						]
					},
					{
						title: 'Plugins',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'./en/plugins/basics.html'
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
					{ text: 'CLI', link: '/ru/cli/' },
					{ text: 'Рекомендуемое', link: '/ru/featured.html' },
					{ text: 'API', link: '/ru/api/' },
				],
				sidebar: [
					{
						title: 'Быстрый старт',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'/ru/',
							'/ru/featured.html'
						]
					},
					{
						title: 'API',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'/ru/api/config.html',
							'/ru/api/controller.html',
							'/ru/api/core.html',
							'/ru/api/plugin-context.html',
							'/ru/api/database-driver.html',
							'/ru/api/session.html'
						]
					},
					{
						title: 'Плагины',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'./ru/plugins/basics.html'
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
