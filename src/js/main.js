/* SCSS */
import '../scss/main.scss';

/* Libs */
import 'whatwg-fetch';

/* Commons */
import {imageRequire} from './common/imageRequire';
import {commonFunctions} from './common/commonFunctions';

/* Pages */
import {indexPage} from './index/indexPage';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    imageRequire();
    commonFunctions();

    indexPage();

    /* Test Assign */
    // let a = {x: 1, y: 2};
    // let b = Object.assign({}, a);
    // console.log(b);

    /* Test Promise */
    // let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve('result');
    //     }, 1000);
    // });

    // promise.then(
    //     result => {
    //         alert('Fulfilled: ' + result);
    //     },
    //     error => {
    //         alert('Rejected: ' + error);
    //     }
    // );

    /* Test Spred */
    // let parts = ['плечи', 'колени'];
    // let lyrics = ['голова', ...parts, 'и', 'пальцы'];
    // console.log(lyrics);
});

window.addEventListener('load', () => {
    console.log('window loaded');
});
