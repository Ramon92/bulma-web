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