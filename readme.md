### React Confetti

A react component to show a neat css animated confetti effect I've used around 50 times over the last 10 years. Componentized for easy use, variablility and a few extra bells and whistles.

Credit where credit is due, after a lot of digging I believe [this](https://codepen.io/lukemeyrick/pen/oNoQROr) is the original? Although perhaps it too had some prior art.

#### Installation
Add to your project via npm or yarn

```bash
npm install @tholman/confetti --save
```

```bash
yarn add @tholman/confetti
```

#### Usage
Import in your react component, and apply generously.

```javascript
import Confetti, { Rectangle } from '@tholman/confetti';
```

```javascript
<Confetti total={99} Component={<Rectangle color="#333" />} />
```

You can also pass in an array of components to create a more varied effect.

```javascript
<Confetti total={99} Component={[
  <Rectangle color="red" />,
  <Circle color="blue" />,
]} />
```

#### Customization

We provide you with a couple of base confetti shapes, but you can also pass in your own components for more variety.

```javascript
<Confetti total={99} Component={<YourComponent />} />
```