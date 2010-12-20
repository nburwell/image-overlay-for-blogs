$(document).ready(function(){
$('a[href$=jpg|JPG]:has(img)').lightBox();
$('a[href$=png]:has(img)').lightBox();
$('a[href$=PNG]:has(img)').lightBox();
$('a[href$=gif]:has(img)').lightBox();
$('a[href$=GIF]:has(img)').lightBox();
});