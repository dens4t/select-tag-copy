// ==UserScript==
// @name         Select Tag Copy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Can easily copy the value of select tag!
// @author       Densat
// @match        http://*/*
// @match        https://*/*
// @grant        none
// @run-at       context-menu
// @updateURL https://github.com/densat98/select-tag-copy/blob/main/build/select-tag-copy.user.js
// ==/UserScript==
let el = document.activeElement;
if (el.tagName !== "span") el = el.closest("SPAN");
if (el) prompt(el.innerText, el.innerText);
else alert('Not actually the select tag');