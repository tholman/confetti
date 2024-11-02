'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

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

var css_248z = ".style-module_confettiScreen__nFcKI{bottom:0;left:0;overflow:hidden;perspective:800px;pointer-events:none;position:absolute;right:0;top:0;transform:translateZ(0);z-index:1}.style-module_confetti__tdzoz{animation:var(--speed) style-module_fall__CfJe- cubic-bezier(.45,0,.55,1) infinite var(--delay);bottom:calc(105% + 10px);left:var(--posX);position:absolute;transform:scale(var(--size))}.style-module_confettiContent__SkjXj{animation:style-module_flip__00HTp calc(var(--speed)/4) linear alternate-reverse infinite;backface-visibility:visible;bottom:0;left:0;position:absolute;right:0;top:0;transform-style:preserve-3d}@keyframes style-module_fall__CfJe-{to{transform:translate3d(var(--posXDirection),calc(var(--containerHeight, 100vh) + var(--containerHeight, 100vh)*.1),0) rotate(calc(var(--rotate)*2))}}@keyframes style-module_flip__00HTp{to{transform:rotate(calc(var(--rotate)*-.5)) rotateY(-1turn)}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBSUUsUUFBUyxDQUNULE1BQU8sQ0FDUCxlQUFnQixDQUVoQixpQkFBa0IsQ0FEbEIsbUJBQW9CLENBTnBCLGlCQUFrQixDQUVsQixPQUFRLENBRFIsS0FBTSxDQU9OLHVCQUF3QixDQUN4QixTQUNGLENBRUEsOEJBSUUsK0ZBQWlGLENBRmpGLHdCQUF5QixDQUN6QixnQkFBaUIsQ0FGakIsaUJBQWtCLENBSWxCLDRCQUNGLENBRUEscUNBT0UseUZBQXdFLENBQ3hFLDJCQUE0QixDQUo1QixRQUFTLENBQ1QsTUFBTyxDQUpQLGlCQUFrQixDQUVsQixPQUFRLENBRFIsS0FBTSxDQUlOLDJCQUdGLENBRUEsb0NBQ0UsR0FDRSxrSkFNRixDQUNGLENBRUEsb0NBQ0UsR0FDRSx5REFDRixDQUNGIiwiZmlsZSI6InN0eWxlLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmV0dGlTY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBlcnNwZWN0aXZlOiA4MDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29uZmV0dGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogY2FsYygxMDUlICsgMTBweCk7XG4gIGxlZnQ6IHZhcigtLXBvc1gpO1xuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBmYWxsIGN1YmljLWJlemllcigwLjQ1LCAwLCAwLjU1LCAxKSBpbmZpbml0ZSB2YXIoLS1kZWxheSk7XG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tc2l6ZSkpO1xufVxuXG4uY29uZmV0dGlDb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGFuaW1hdGlvbjogZmxpcCBjYWxjKHZhcigtLXNwZWVkKSAvIDQpIGxpbmVhciBhbHRlcm5hdGUtcmV2ZXJzZSBpbmZpbml0ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuQGtleWZyYW1lcyBmYWxsIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoXG4gICAgICAgIHZhcigtLXBvc1hEaXJlY3Rpb24pLFxuICAgICAgICBjYWxjKHZhcigtLWNvbnRhaW5lckhlaWdodCwgMTAwdmgpICsgY2FsYyh2YXIoLS1jb250YWluZXJIZWlnaHQsIDEwMHZoKSAqIDAuMSkpLFxuICAgICAgICAwXG4gICAgICApXG4gICAgICByb3RhdGUoY2FsYyh2YXIoLS1yb3RhdGUpICogMikpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmxpcCB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZShjYWxjKHZhcigtLXJvdGF0ZSkgKiAtMC41KSkgcm90YXRlWSgtMzYwZGVnKTtcbiAgfVxufVxuIl19 */";
var styles = {"confettiScreen":"style-module_confettiScreen__nFcKI","confetti":"style-module_confetti__tdzoz","fall":"style-module_fall__CfJe-","confettiContent":"style-module_confettiContent__SkjXj","flip":"style-module_flip__00HTp"};
styleInject(css_248z);

function ConfettiScreen(_a) {
    var total = _a.total, Component = _a.Component, props = __rest(_a, ["total", "Component"]);
    var containerRef = React.useRef(null);
    var _b = React.useState([]), confettiItems = _b[0], setConfettiItems = _b[1];
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
    React.useEffect(function () {
        var items = [];
        for (var i = 0; i < total; i++) {
            var posX = "".concat(Math.floor(Math.random() * 100), "%");
            var delay = "".concat((Math.random() * 5).toFixed(2), "s");
            var speed = "".concat((3 + Math.random() * 2).toFixed(2), "s");
            var posXDirection = "".concat(((Math.random() - 0.5) * 800).toFixed(0), "%");
            var size = (1 + Math.random() * 0.2).toFixed(2);
            var rotate = "".concat(Math.floor(Math.random() * 360) - 180, "deg");
            var inlineStyles = {
                "--posX": posX,
                "--delay": delay,
                "--speed": speed,
                "--posXDirection": posXDirection,
                "--size": size,
                "--rotate": rotate,
            };
            var componentContent = Array.isArray(Component)
                ? Component[i % Component.length]
                : Component;
            items.push(React.createElement("div", { key: i, className: styles.confetti, style: inlineStyles },
                React.createElement("span", { className: styles.confettiContent }, componentContent)));
        }
        setConfettiItems(items);
    }, [total, Component]);
    return (React.createElement("div", __assign({ ref: containerRef, className: styles.confettiScreen }, props), confettiItems));
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
function Triangle(_a) {
    var color = _a.color;
    var size = Math.floor(8 + Math.random() * 6);
    return (React.createElement("div", { style: {
            width: 0,
            height: 0,
            borderLeft: "".concat(size / 2, "px solid transparent"),
            borderRight: "".concat(size / 2, "px solid transparent"),
            borderBottom: "".concat(size, "px solid ").concat(color),
        } }));
}
function Confetti(_a) {
    var _b = _a.total, total = _b === void 0 ? 90 : _b, Component = _a.Component, props = __rest(_a, ["total", "Component"]);
    var colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
    if (Component) {
        return React.createElement(ConfettiScreen, __assign({ total: total, Component: Component }, props));
    }
    var availableComponents = [Rectangle, Circle, Triangle];
    var defaultComponents = Array.from({ length: total }, function () {
        var RandomComponent = availableComponents[Math.floor(Math.random() * availableComponents.length)];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        return React.createElement(RandomComponent, { color: randomColor });
    });
    return React.createElement(ConfettiScreen, __assign({ total: total, Component: defaultComponents }, props));
}

exports.Circle = Circle;
exports.Confetti = Confetti;
exports.Rectangle = Rectangle;
exports.Triangle = Triangle;
exports.default = Confetti;
//# sourceMappingURL=index.cjs.js.map
