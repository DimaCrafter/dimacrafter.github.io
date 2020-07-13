const moment = require('moment');
module.exports = {
	base: '/dc-api-core/',
	dest: '../dc-api-core',
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
							'/en/api/session.html'
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
							'/ru/api/session.html'
						]
					}
				],
				lastUpdated: 'Последнее обновление',
				editLinkText: 'Помогите улучшить эту страницу!'
			}
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
	plugins: [
		['@vuepress/last-updated', {
			transformer (timestamp, lang) {
				moment.locale(lang);
				return moment(timestamp).fromNow()
			}
		}]
	]
};
