### React Confetti

A react component to show a neat css animated confetti effect I've used around 50 times over the last 10 years. Componentized for easy use, variablility and a few extra bells and whistles.

See it in [action](https://tholman.com/react-confetti/).

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
import Confetti from '@tholman/confetti';
```

```javascript
<Confetti total={99} />
```

You can also pass in an array of components to create a more controlled effect. There are a couple of base shapes provided.

```javascript
import Confetti, { Rectangle, Circle, Triangle } from '@tholman/confetti';
```

```javascript
<Confetti total={99} Component={[
  <Rectangle color="red" />,
  <Circle color="blue" />,
  <Triangle color="green" />,
]} />
```

The containter itself is absolutely positioned, and will try to expand into the space you give it, but you can also control its css as you would any element.

```javascript
<Confetti total={99} className="custom-class" />
```

#### Customization

The library provides you with a couple of base confetti shapes, but you can also pass in your own components for more variety.

```javascript
<Confetti total={99} Component={<YourComponent />} />
```

#### License
ISC
