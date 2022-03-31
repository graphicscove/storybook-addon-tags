# storybook-addon-tags

A [Storybook](https://github.com/storybooks/storybook) addon for adding component tags to the sidebar.

## Requirements

- Storybook@>=6.0.0

## Getting started

### Install

```sh
npm install --save-dev storybook-addon-tags
# yarn add -D storybook-addon-tags
```

### Register the addon in `main.js`

```js
module.exports = {
  addons: ["storybook-addon-tags"],
};
```

### Include it with a story

Add tags to parameters, either globally (to all stories), or to a specific story:

```js
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

Primary.parameters = {
  tag: {
    title: "parent",
    color: "#fff",
    background: "orange"
  },
};
```
