import {isWebp}from './modules';
import nav from './modules/nav';
import gallery from './modules/gallery';
import slider from './modules/slider';
import form from './modules/form';

window.addEventListener('DOMContentLoaded', function(){
    isWebp()
    nav();
    gallery();
    slider();
    form();
});