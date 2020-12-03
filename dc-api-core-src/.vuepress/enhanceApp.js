import './styles/main.less'

export default ({
	Vue, // the version of Vue being used in the VuePress app
	options, // the options for the root Vue instance
	router, // the router instance for the app
	siteData // site metadata
}) => {
	router.beforeResolve((to, from, next) => {
		if (to.path == '/') {
			const lang = window.navigator.userLanguage || window.navigator.language;
			for (const locale in siteData.locales) {
				if (siteData.locales[locale].lang == lang) {
					return next(locale);
				}
			}
			return next(Object.keys(siteData.locales)[0]);
		} else {
			next();
		}
	});
};
