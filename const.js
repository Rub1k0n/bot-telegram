"use strict";

const commons = `
/start - Перезапустить бота
/help - Помощь
/frontend - Карта развития Frontend-Разработчика
/backend - Карта развития Backend-Разработчика
/git - git для начинающих
/cs - computer science`;

const infoHTML = `
Документация HTML <a href="https://developer.mozilla.org/ru/docs/Web/HTML">читать</a>
Обучение web-разработки от Mozilla <a href="https://developer.mozilla.org/ru/docs/Learn">читать</a>
Бесплатный курс по верстке <a href="https://www.youtube.com/playlist?list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr">Фрилансер по жизни</a>`;

const infoCSS = `
Документация CSS <a href="https://developer.mozilla.org/ru/docs/Web/CSS">читать</a>
Обучение web-разработки от Mozilla <a href="https://developer.mozilla.org/ru/docs/Learn">читать</a>
Бесплатный курс по верстке <a href="https://www.youtube.com/playlist?list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr">Фрилансер по жизни</a>`;

const infoJS = `
Документация JS <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript">читать</a>
Обучение web-разработки от Mozilla <a href="https://developer.mozilla.org/ru/docs/Learn">читать</a>
Бесплатный курс по верстке <a href="https://www.youtube.com/playlist?list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr">Фрилансер по жизни</a>
Глубокое обучение JavaScript <a href="https://learn.javascript.ru/">Ильи Кантора</a>`;

const infoNodeJs = `
Документация Node.js <a href="https://nodejs.org/en/docs/">читать</a>
Видео-курс Node.js <a href="https://www.youtube.com/playlist?list=PLHhi8ymDMrQZmXEqIIlq2S9-Ibh9b_-rQ">Тимура Шемсединова</a>
Руководство по Node.js <a href="https://metanit.com/web/nodejs/">читать</a>
Обучение Java на создании проекта <a href="https://www.youtube.com/playlist?list=PLyxk-1FCKqockmP-fXZmHQ7UlYP3qvZRa">тыць</a>`;

const infoGit = `
GitHub для начинающих <a href="https://www.youtube.com/watch?v=O00FTZDxD0o&t=1522s//githab">читать</a>`;

const infoCS = `
Язык C <a href="https://www.youtube.com/playlist?list=PLRDzFCPr95fLjzcv6nNdjMu_9RcZgIM9U">тыць</a>
Алгоритмы и структуры данных (на C++) <a href="https://www.youtube.com/playlist?list=PLRDzFCPr95fL_5Xvnufpwj2uYZnZBBnsr">тыць</a>
Компьютерные сети <a href="https://www.youtube.com/playlist?list=PLthfp5exSWEp5OGCCuPGu7Rj-SkTSKMv4">тыць</a>`;

module.exports.commands = commons;
module.exports.infoHTML = infoHTML;
module.exports.infoCSS = infoCSS;
module.exports.infoJS = infoJS;
module.exports.infoNodeJs = infoNodeJs;
module.exports.infoGit = infoGit;
module.exports.infoCS = infoCS;
