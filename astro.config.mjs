import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://Kaiser117450.github.io',
	base: 'AkmLabDocs',
	integrations: [
		starlight({
			favicon: 'images/favicon.png',
			head: [
				// Add ICO favicon fallback for Safari.
				{
				  tag: 'link',
				  attrs: {
					rel: 'icon',
					href: '/favicon.png',
					sizes: '32x32',
				  },
				},
			],
			title: 'AkmLab',
			logo: {
				src: './src/assets/akmlogoikan.png',
			  },
			social: {
				email: 'https://akmal.marzuki@protonmail.com',
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			  ],
			sidebar: [
				
				{
					label: 'Introduction',
					autogenerate: { directory: 'introduction' },
				},
				{
					label: 'How it Work',
					autogenerate: { directory: 'how' },
				},
			],
		}),
	],
});
