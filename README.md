## Javascript view module

Super basic view engine to render content to HTML elements using (or not) templates.

## API

**render(options)**  
@param {Object} options  
.content {String|Array}  
.template {String} optional  
.useTemplate {Boolean} optional  
.mode {String} optional  
 ['APPEND'|'RESET']  
.viewElement {HTMLElement} optional

**render(context, template)**  
@param {Object} context
@param {String} template optional
