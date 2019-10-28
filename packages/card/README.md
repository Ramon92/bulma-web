# card
`bw-card` is an easy customizable card with css custom properties, styling for bulma is included

## Usage
#### installation
```bash
npm i -S @bulma-web/card
# or
yarn add -S @bulma-web/card
```
```javascript
import '@bulma-web/card'
```
#### Example
```html
<bw-card>
    <div slot="content">
        <h2>
            “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
        </h2>
        <p>Jeff Atwood</p>
    </div>
</bw-card>
```

### API
#### Slots
|slot name          |Description                |
|-------------------|---------------------------|
|content            |Content to display in card |
|header-title       |title ot be placed for card header|
|header-icon        |icon to be displayed in the outer right of the card header|
|image              |image to be added in the card|
|footer-item        |items to be placed in the footer of the card|

#### custom css variables for customization
|Variable           |Description                    |Type               |
|-------------------|-------------------------------|-------------------|
|`--card-color`     |text color for the card        |color code         |
|`--card-background-color`|background color of the card|color code      |
|`--card-shadow`    |card shadow                    |box shadow         |
|`--card-header-background-color`|background color for the card header|color code|
|`--card-header-color`|text color for the card header|color code        |
|`--card-header-padding`|padding size for the card header|unit size|
|`--card-header-shadow`|shadow for card header|nox shadow notation|
|`--card-header-weight`|font weight for card header|units|
|`--card-content-background-color`|background color for card|color code|
|`--card-content-padding`|padding for card content|unit size|
|`--card-footer-background-color`|background color for the card footer|color code|
|`--card-footer-border-top`|border top of card footer|cdd border shorthand notation|
|`--card-footer-padding`|padding for card footer|unit size|
|`--card-media-margin`|margin for card media|unit size|