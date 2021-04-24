
console.log('this is the script tag!!!!!!!! Finally....')
const header = $('header.site-header').parent();

header.prepend('<div>Hello this is the js from script tag </div>').css({'background-color':'orange', 'text-align': 'center'})