import rss from '@astrojs/rss';

export async function GET(context) {
	return rss({
		title: 'Chhatresh Khatri | Portfolio',
		description:
			'Chhatresh Khatri Portfolio. Full stack Web Developer passionate about latest trends in the tech industry. Crafting innovation with code.',
		site: 'https://www.chhatreshkhatri.com',
		// Add custom XML metadata
		customData: `
			<language>en</language>
			<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
			<atom:link href="https://www.chhatreshkhatri.com/rss.xml" rel="self" type="application/rss+xml" xmlns:atom="http://www.w3.org/2005/Atom" />
		`,
		items: [
			{
				title: 'Chhatresh Khatri | About',
				link: 'https://www.chhatreshkhatri.com/about',
				description:
					'Chhatresh Khatri About. Full Stack developer skilled in diverse tech including C/C++, Java, HTML5, CSS3, JavaScript, React.js, Next.js, and more.',
				pubDate: new Date('2024-06-17T12:00:00+05:30'),
			},
			{
				title: 'Chhatresh Khatri | Projects',
				link: 'https://www.chhatreshkhatri.com/projects',
				description:
					'Chhatresh Khatri Projects. Explore a collection of diverse projects, discover their unique features and access relevant links for more information.',
				pubDate: new Date('2024-06-17T12:05:00+05:30'),
			},
			{
				title: 'Chhatresh Khatri | Privacy Policy',
				link: 'https://www.chhatreshkhatri.com/privacy-policy',
				description:
					'Privacy Policy for chhatreshkhatri.com Website and Its Subdomains.',
				pubDate: new Date('2024-06-17T12:10:00+05:30'),
			},
		],
		context,
	});
}
