// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2024 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense

Script.requireExtension("Console");
Script.requireExtension("Application");
Script.requireExtension("Pixel32");

var name = Application.getArgument(1, "");

if (name.length == 0) {
	return;
};

var source = "temp/png-1/" + name + ".png";
var destination = "temp/png-2/" + name + ".png";

var img = Pixel32.pngLoad(source);

if (img == null) {
	return;
};

for (y = 0; y < img.getHeight(); ++y) {
	for (x = 0; x < img.getWidth(); ++x) {
		var pixel = img.getPixel(x, y);
		if (pixel.getA() != 0x00) {
			if ((pixel.getR() != 0xFF) && (pixel.getG() != 0xFF) && (pixel.getB() != 0xFF)) {
				pixel.setR(0);
				pixel.setG(0);
				pixel.setB(0);
				pixel.setA(255);
				img.setPixel(x, y, pixel);
				continue;
			};
		};
		pixel.setR(255);
		pixel.setG(255);
		pixel.setB(255);
		pixel.setA(255);
		img.setPixel(x, y, pixel);
	};
};

img.pngSave(destination);
