var red = document.getElementById("red-btn");
var orange = document.getElementById("orange-btn");
var yellow = document.getElementById("yellow-btn");
var lime = document.getElementById("lime-btn");
var green = document.getElementById("green-btn");
var bluegreen = document.getElementById("bluegreen-btn");
var ltblue = document.getElementById("ltblue-btn");
var blue = document.getElementById("blue-btn");
var drkblue = document.getElementById("drkblue-btn");
var purple = document.getElementById("purple-btn");
var pink = document.getElementById("pink-btn");
var majenta = document.getElementById("majenta-btn");
var themeColorHolder = localStorage.getItem('themeColor');

document.documentElement.style.setProperty('--theme-color', themeColorHolder);

red.onclick = function(){
    document.documentElement.style.setProperty('--theme-color', '#FF0000');
    localStorage.setItem('themeColor', '#FF0000');}
orange.onclick = function(){
    document.documentElement.style.setProperty('--theme-color', '#FF8000');
    localStorage.setItem('themeColor', '#FF8000');}
yellow.onclick = function(){
    document.documentElement.style.setProperty('--theme-color', '#FFFF00');
    localStorage.setItem('themeColor', '#FFFF00');}
lime.onclick = function(){
    document.documentElement.style.setProperty('--theme-color', '#80FF00');
    localStorage.setItem('themeColor', '#80FF00');}
green.onclick = function(){
    document.documentElement.style.setProperty('--theme-color', '#00FF00');
    localStorage.setItem('themeColor', '#00FF00');}
bluegreen.onclick = function(){
    document.documentElement.style.setProperty('--theme-color', '#00FF80');
    localStorage.setItem('themeColor', '#00FF80');}
ltblue.onclick = function(){
    document.documentElement.style.setProperty('--theme-color', '#00FFFF');
    localStorage.setItem('themeColor', '#00FFFF');}
blue.onclick = function(){
    document.documentElement.style.setProperty('--theme-color', '#0080FF');
    localStorage.setItem('themeColor', '#0080FF');}
drkblue.onclick = function(){
    document.documentElement.style.setProperty('--theme-color', '#0000FF');
    localStorage.setItem('themeColor', '#0000FF');}
purple.onclick = function(){
    document.documentElement.style.setProperty('--theme-color', '#7F00FF');
    localStorage.setItem('themeColor', '#7F00FF');}
pink.onclick = function(){
    document.documentElement.style.setProperty('--theme-color', '#FF00FF');
    localStorage.setItem('themeColor', '#FF00FF');}
majenta.onclick = function(){
    document.documentElement.style.setProperty('--theme-color', '#FF007F');
    localStorage.setItem('themeColor', '#FF007F');}