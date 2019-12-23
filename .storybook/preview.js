import {addParameters, addDecorator, setCustomElements, withA11y } from '@open-wc/demoing-storybook';
 
  
async function run(){

const customElements = await (
    await fetch(new URL('../custom-elements.json', import.meta.url))
  ).json();
console.log(customElements);
  setCustomElements(customElements);

  addDecorator(withA11y);

  addParameters({
    options: {
      hierarchyRootSeparator: /\|/,
    },
  });
}

run();
