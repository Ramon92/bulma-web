# button
`bw-button` is an easy customizable button with css custom properties, styling for bulma is included

## Usage
#### installation
```
npm i -S @bulma-web/button
// or
yarn add -S @bulma-web/button
```
```
import '@bulma-web/button'
```
#### Example
```
<bw-button type="is-primary">Button Text</bw-button>
```

### API

|Property   |Description                            |Type       |Values                         |
|-----------|---------------------------------------|-----------|-------------------------------|
|type       |Type (color) of the button, optional   |String     |`is-white`, `is-light`, `is-black`, `is-dark`, `is-text`, `is-primary`, `is-link`, `is-info`, `is-success`, `is-warning`, `is-danger`                      |
|size       |Size of the button, optional           |String     |`is-small`, `is-normal`, `is-medium`, `is-large`|
|display    |display of the button normal or full-width|String  | `is-fullwidth`                |
|outlined   |Set the button to outlined version     |Boolean    |default `false`                |
|inverted   |Set the button inverted, for use on a colored background|Boolean|dafault `false`   |
|loading    |Set the button to the loading state    |Boolean    |default `false`                |
|disabled   |Set the button to the disabled state   |Boolean    |default `false`                |
|rounded    |Make the button rounded                |Boolean    |default `false`                |

### Custom CSS Variables for customization
|Variable                   |Description            |Type       |
|---------------------------|-----------------------|-----------|
|`--button-color`           |color      |color code |
|`--button-background-color`|background color|color code |
|`--button-border-color`    | border color    |color code |
|`--button-border-width`    | border size     |color code |
|`--button-padding-vertical`| vertical padding|px units   |
|`--button-padding-horizontal`| horizontal padding|px units|
|`--button-hover-color`     | color on hover  |color code |
|`--button-hover-border-color`| border color on hover|color code|
|`--button-focus-color`     | color in focused state|color code|
|`--button-focus-border-color`| border color in focused state|color code|
|`--button-focus-box-shadow-size`| shadow size when in focused state| box shadow notation|
|`--button-active-color`    | color in active state|color code|
|`--button-active-border-color`| border color in active state|color code|
|`--button-text-color`      | text color      |color code|
|`--button-text-hover-color`|text color on hover|color code|
|`--button-disabled-background-color`| background color when disabled|color code|
|`--button-disabled-border-color`|border color when disabled|color code|
|`-button-disabled-shadow`  |disabled shadow    |string|
|`--button-disabled-opacity`|opacity when disabled  |unitless|
|`--button-static-color`    |static color   |color code|
|`--button-static-background-color`|static background color|color code|
|`--button-static-border-color`|static border color|color code|
