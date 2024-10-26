'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".style-module_confettiScreen__nFcKI{bottom:0;left:0;overflow:hidden;perspective:800px;pointer-events:none;position:absolute;right:0;top:0;transform:translateZ(0);z-index:1}.style-module_confetti__tdzoz{animation:var(--speed) style-module_fall__CfJe- cubic-bezier(.45,0,.55,1) infinite var(--delay);bottom:105%;left:var(--posX);position:absolute;transform:scale(var(--size))}.style-module_confettiContent__SkjXj{animation:style-module_flip__00HTp calc(var(--speed)/4) linear alternate-reverse infinite;backface-visibility:visible;bottom:0;left:0;position:absolute;right:0;top:0;transform-style:preserve-3d}@keyframes style-module_fall__CfJe-{to{transform:translate3d(var(--posXDirection),calc(var(--containerHeight, 100vh) + var(--containerHeight, 100vh)*.1),0) rotate(calc(var(--rotate)*2))}}@keyframes style-module_flip__00HTp{to{transform:rotate(calc(var(--rotate)*-.5)) rotateY(-1turn)}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBSUUsUUFBUyxDQUNULE1BQU8sQ0FDUCxlQUFnQixDQUVoQixpQkFBa0IsQ0FEbEIsbUJBQW9CLENBTnBCLGlCQUFrQixDQUVsQixPQUFRLENBRFIsS0FBTSxDQU9OLHVCQUF3QixDQUN4QixTQUNGLENBRUEsOEJBSUUsK0ZBQWlGLENBRmpGLFdBQVksQ0FDWixnQkFBaUIsQ0FGakIsaUJBQWtCLENBSWxCLDRCQUNGLENBRUEscUNBT0UseUZBQXdFLENBQ3hFLDJCQUE0QixDQUo1QixRQUFTLENBQ1QsTUFBTyxDQUpQLGlCQUFrQixDQUVsQixPQUFRLENBRFIsS0FBTSxDQUlOLDJCQUdGLENBRUEsb0NBQ0UsR0FDRSxrSkFNRixDQUNGLENBRUEsb0NBQ0UsR0FDRSx5REFDRixDQUNGIiwiZmlsZSI6InN0eWxlLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmV0dGlTY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBlcnNwZWN0aXZlOiA4MDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29uZmV0dGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTA1JTtcbiAgbGVmdDogdmFyKC0tcG9zWCk7XG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGZhbGwgY3ViaWMtYmV6aWVyKDAuNDUsIDAsIDAuNTUsIDEpIGluZmluaXRlIHZhcigtLWRlbGF5KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1zaXplKSk7XG59XG5cbi5jb25mZXR0aUNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgYW5pbWF0aW9uOiBmbGlwIGNhbGModmFyKC0tc3BlZWQpIC8gNCkgbGluZWFyIGFsdGVybmF0ZS1yZXZlcnNlIGluZmluaXRlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG5Aa2V5ZnJhbWVzIGZhbGwge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChcbiAgICAgICAgdmFyKC0tcG9zWERpcmVjdGlvbiksXG4gICAgICAgIGNhbGModmFyKC0tY29udGFpbmVySGVpZ2h0LCAxMDB2aCkgKyBjYWxjKHZhcigtLWNvbnRhaW5lckhlaWdodCwgMTAwdmgpICogMC4xKSksXG4gICAgICAgIDBcbiAgICAgIClcbiAgICAgIHJvdGF0ZShjYWxjKHZhcigtLXJvdGF0ZSkgKiAyKSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmbGlwIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKGNhbGModmFyKC0tcm90YXRlKSAqIC0wLjUpKSByb3RhdGVZKC0zNjBkZWcpO1xuICB9XG59XG4iXX0= */";
var styles = {"confettiScreen":"style-module_confettiScreen__nFcKI","confetti":"style-module_confetti__tdzoz","fall":"style-module_fall__CfJe-","confettiContent":"style-module_confettiContent__SkjXj","flip":"style-module_flip__00HTp"};
styleInject(css_248z);

function ConfettiScreen(_a) {
    var _b = _a.total, total = _b === void 0 ? 90 : _b, Component = _a.Component;
    var containerRef = React.useRef(null);
    React.useEffect(function () {
        var updateHeight = function () {
            if (containerRef.current) {
                var height = containerRef.current.offsetHeight;
                containerRef.current.style.setProperty("--containerheight", "".concat(height, "px"));
            }
        };
        updateHeight();
        var resizeObserver = new ResizeObserver(updateHeight);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
        return function () {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, []);
    var confettiItems = [];
    for (var i = 0; i < total; i++) {
        var posX = "".concat(Math.floor(Math.random() * 100), "%");
        var delay = "".concat((Math.random() * 5).toFixed(2), "s");
        var speed = "".concat((3 + Math.random() * 2).toFixed(2), "s");
        var posXDirection = "".concat(((Math.random() - 0.5) * 800).toFixed(0), "%");
        var size = (1 + Math.random() * 0.2).toFixed(2);
        var rotate = "".concat(Math.floor(Math.random() * 360) - 180, "deg");
        var style = {
            "--posX": posX,
            "--delay": delay,
            "--speed": speed,
            "--posXDirection": posXDirection,
            "--size": size,
            "--rotate": rotate,
        };
        var componentContent = Array.isArray(Component) ? Component[i % Component.length] : Component;
        confettiItems.push(React.createElement("div", { key: i, className: styles.confetti, style: style },
            React.createElement("span", { className: styles.confettiContent }, componentContent)));
    }
    return (React.createElement("div", { ref: containerRef, className: styles.confettiScreen }, confettiItems));
}
function Rectangle(_a) {
    var color = _a.color;
    var width = Math.floor(6 + Math.random() * 6);
    var height = Math.floor(6 + Math.random() * 6);
    return (React.createElement("div", { style: {
            width: "".concat(width, "px"),
            height: "".concat(height, "px"),
            backgroundColor: color,
        } }));
}
function Circle(_a) {
    var color = _a.color;
    var size = Math.floor(6 + Math.random() * 6);
    return (React.createElement("div", { style: {
            width: "".concat(size, "px"),
            height: "".concat(size, "px"),
            borderRadius: "50%",
            backgroundColor: color,
        } }));
}
function Confetti(props) {
    var colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
    if (props.Component) {
        return React.createElement(ConfettiScreen, { total: props.total, Component: props.Component });
    }
    var availableComponents = [Rectangle, Circle];
    var defaultComponents = Array.from({ length: props.total }, function () {
        var RandomComponent = availableComponents[Math.floor(Math.random() * availableComponents.length)];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        return React.createElement(RandomComponent, { color: randomColor });
    });
    return React.createElement(ConfettiScreen, { total: props.total, Component: defaultComponents });
}

exports.Circle = Circle;
exports.Confetti = Confetti;
exports.Rectangle = Rectangle;
exports.default = Confetti;
//# sourceMappingURL=index.cjs.js.map
