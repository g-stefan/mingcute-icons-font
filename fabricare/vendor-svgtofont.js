// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2024 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense

messageAction("vendor - svgtofont");

Shell.mkdirRecursivelyIfNotExists("archive");

// Self
if (Shell.fileExists("archive/svgtofont.7z")) {
	if (Shell.getFileSize("archive/svgtofont.7z") > 16) {
		return;
	};
	Shell.removeFile("archive/svgtofont.7z");
};

Shell.mkdirRecursivelyIfNotExists("archive/svgtofont");

runInPath("archive/svgtofont", function() {
	Shell.system("npm install svgtofont");
	exitIf(Shell.system("7z a -mx9 -mmt4 -r- -sse -w. -y -t7z ../svgtofont.7z *"));
});

Shell.removeDirRecursively("archive/svgtofont");
