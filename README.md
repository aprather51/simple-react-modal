# Simple-React-Modal

[DEMO](https://aprather51.github.io/simple-react-modal)

Simple React modal using ternary operator fetching `show` as `props`.

```js
  const showHideClassName = show ? 'modal show' : 'modal hide';

  return (
    <div className={showHideClassName}>
```
and css transition inserted into `className` to generate effects.
```css
transition: all 100ms 100ms ease-in-out;
```
_An expermental use only._

