// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2024 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense

const svgtofont = require('svgtofont');
const path = require('path');

svgtofont({
	src : path.resolve(process.cwd(), 'temp/svg'),
	dist : path.resolve(process.cwd(), 'output'),
	fontName : 'mingcute-icons',
	classNamePrefix : 'mgc',
	css : true,
	svgicons2svgfont : {
		fontHeight : 1536,
		normalize : false
	},
	website : {
		title : "Custom MingCute Icons Font",
		version : "2.92",
		logo : "",
		meta : {
			description : "",
			keywords : ""
		},
		description : ``,
		links : [
			{
				title: "MingCute Icons",
				url: "https://github.com/Richard9394/MingCute"
      			}
		],
		footerInfo : `Licensed under Apache-2.0 license.`
	}
}).then(() => {
	console.log('done!');
});
