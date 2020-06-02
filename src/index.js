import "./styles.css";

import render, { compile } from "./view";

render({
  content: "Module view",
  template: '<div class="title">{{content}}</div>'
});

render({
  content: "With default template"
});

render({
  content: "With custom template",
  template: "<h4>{{content}}</h4>"
});

render({
  content: "Without template",
  useTemplate: false
});

render({
  content: compile(
    {
      info: "Using compile directly",
      name: "Karl",
      age: 56,
      color: "blue"
    },
    "{{info}}: {{name}}, {{age}}, {{color}}"
  )
});

render({
  content: ["Content is Array: item 1", "Content is Array: item 2"]
});

render({
  content: "Module date-helper",
  template: '<div class="title">{{content}}</div>'
});
