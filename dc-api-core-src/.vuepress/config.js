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
						title: 'Quick Start',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'/en/',
							'/en/featured.html'
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
					{ text: 'Продвигаемое', link: '/ru/featured.html' }
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
