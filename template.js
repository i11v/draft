/*
 * draft
 *
 * Copyright (c) 2014 Ilnur Khalilov
 * Licensed under the MIT license.
 */

"use strict";

// Краткое описание шаблона
exports.description = "Шаблон простого статичного сайта. Можно добавить динамики";

// Покажем пользователю инструкцию после того, как он ответил на все вопросы
exports.after = "Теперь необходимо установить зависимости проекта командой _npm install_. После этого вы сможете запускать задачи Гранта. Инструкцию по установке и другую информацию вы можете найти на сайте:\n\n http://gruntjs.com/getting-started";

exports.template = function (grunt, init, done) {
  init.process({}, [
      init.prompt("name"),
      init.prompt("title"),
      init.prompt("description")
    ], function (err, props) {
    props.devDependencies = {
      "grunt-contrib-jade": "0.7.x",
      "grunt-contrib-watch": "0.4.x",
      "grunt-contrib-stylus": "0.6.x"
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON("package.json", props);

    // All done!
    done();
  });
};
