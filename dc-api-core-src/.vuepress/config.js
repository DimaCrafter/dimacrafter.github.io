module.exports = {
	base: '/dc-api-core/',
	dest: '../dc-api-core',
	head: [
		['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
	],
	themeConfig: {
		logo: '/img/logo.svg',
		locales: {
			'/en/': {
				selectText: 'Languages',
				label: 'English',
				nav: [
					{ text: 'CLI', link: '/en/cli/' },
					{ text: 'Client', link: '/en/client/' }
				],
				sidebar: 'auto'
			},
			'/ru/': {
				selectText: 'Язык',
				label: 'Русский',
				nav: [
					{ text: 'CLI', link: '/ru/cli/' },
					{ text: 'Клиент', link: '/ru/client/' }
				],
				sidebar: 'auto'
				// sidebar: [
				// 	{
				// 		title: 'Самое основное',
				// 		collapsable: false,
				// 		sidebarDepth: 2,
				// 		childrens: [
				// 			{ title: 'Быстрый старт', link: '/quick-start' }
				// 		]
				// 	}
				// ]
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
	}
};
