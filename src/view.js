const VIEW_ELEMENT_DEFAULT = document.getElementById("app");
const MODE_DEFAULT = "APPEND";
const TEMPLATE_DEFAULT = '<div class="item">{{content}}</div>';
const TEMPLATE_USE_DEFAULT = true;

/**
 * Renders content to viewElement by mode, using template if defined by useTemplate (default)
 * @param {Object} options
 *  .content {String|Array}
 *  .template {String} optional
 *  .useTemplate {Boolean} optional
 *  .mode {String} optional
 *    ['APPEND'|'RESET']
 *  .viewElement {HTMLElement} optional
 */
const render = options => {
  let content = options.content || "";
  let template = options.template || TEMPLATE_DEFAULT;
  let useTemplate =
    options.useTemplate !== undefined
      ? options.useTemplate
      : TEMPLATE_USE_DEFAULT;
  let mode = options.mode || MODE_DEFAULT;
  let viewElement = options.viewElement || VIEW_ELEMENT_DEFAULT;

  // Get current
  let previousContent = mode === "APPEND" ? viewElement.innerHTML : "";

  let newContent = "";

  // Content is Array
  if (Array.isArray(content)) {
    newContent = content.reduce((html, newContentItem) => {
      return html + _getContent(newContentItem, template, useTemplate);
    }, "");
    // Content is String
  } else {
    console.log("STING CONTENT");
    newContent = _getContent(content, template, useTemplate);
  }

  viewElement.innerHTML = previousContent + newContent;
};

/**
 * Returns content compiled into template or naked
 * @param {String} content
 * @param {String} template
 * @param {Boolean} useTemplate
 * @return {String}
 */
const _getContent = (content, template, useTemplate) => {
  return useTemplate ? compile({ content: content }, template) : content;
};

/**
 * Compiles template with context data
 * @param {Object} context
 * @param {String} template
 * @usage
 *  compile({
 *    content: 'Hello'
 *  })
 *  compile(
 *    {
 *      name: 'Karl',
 *      age: 56,
 *      color: 'blue'
 *    },
 *    '{{name}}, {{age}}, {{color}}'
 *  )
 */
const compile = (context, template = TEMPLATE_DEFAULT) => {
  let compiled = template;
  for (let contentId in context) {
    const search = "{{" + contentId + "}}";
    const replace = context[contentId];
    compiled = compiled.replace(search, replace);
  }
  return compiled;
};

export default render;

export { compile };
