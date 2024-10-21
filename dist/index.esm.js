import React, { useEffect } from 'react';

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

var css_248z = ".style-module_confettiScreen__nFcKI{bottom:0;left:0;overflow:hidden;perspective:800px;pointer-events:none;position:absolute;right:0;top:0;transform:translateZ(0);z-index:1}.style-module_confetti__tdzoz{animation:style-module_fall__CfJe- var(--speed,5s) cubic-bezier(.45,0,.55,1) infinite var(--delay,0s);bottom:105%;left:var(--posX);position:absolute}.style-module_confettiContent__SkjXj{animation:style-module_flip__00HTp calc(var(--speed)/5) linear alternate-reverse infinite;backface-visibility:visible;bottom:0;left:0;position:absolute;right:0;top:0;transform-style:preserve-3d}@keyframes style-module_fall__CfJe-{to{transform:translate3d(var(--posXDirection,0),calc(100vh + 500px),0) rotate(calc(var(--rotate, 0deg)*2))}}@keyframes style-module_flip__00HTp{to{transform:rotate(calc(var(--rotate)*-.5)) rotateY(-1turn)}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBSUUsUUFBUyxDQUNULE1BQU8sQ0FDUCxlQUFnQixDQUVoQixpQkFBa0IsQ0FEbEIsbUJBQW9CLENBTnBCLGlCQUFrQixDQUVsQixPQUFRLENBRFIsS0FBTSxDQU9OLHVCQUF3QixDQUN4QixTQUNGLENBRUEsOEJBSUUscUdBQXlGLENBRnpGLFdBQVksQ0FDWixnQkFBaUIsQ0FGakIsaUJBSUYsQ0FFQSxxQ0FPRSx5RkFBd0UsQ0FFeEUsMkJBQTRCLENBTDVCLFFBQVMsQ0FDVCxNQUFPLENBSlAsaUJBQWtCLENBRWxCLE9BQVEsQ0FEUixLQUFNLENBSU4sMkJBSUYsQ0FFQSxvQ0FDRSxHQUNFLHVHQUNGLENBQ0YsQ0FFQSxvQ0FDRSxHQUNFLHlEQUNGLENBQ0YiLCJmaWxlIjoic3R5bGUubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25mZXR0aVNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcGVyc3BlY3RpdmU6IDgwMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jb25mZXR0aSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMDUlO1xuICBsZWZ0OiB2YXIoLS1wb3NYKTtcbiAgYW5pbWF0aW9uOiBmYWxsIHZhcigtLXNwZWVkLCA1cykgY3ViaWMtYmV6aWVyKDAuNDUsIDAsIDAuNTUsIDEpIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyk7XG59XG5cbi5jb25mZXR0aUNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgYW5pbWF0aW9uOiBmbGlwIGNhbGModmFyKC0tc3BlZWQpIC8gNSkgbGluZWFyIGFsdGVybmF0ZS1yZXZlcnNlIGluZmluaXRlO1xuICBcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuQGtleWZyYW1lcyBmYWxsIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QodmFyKC0tcG9zWERpcmVjdGlvbiwgMCksIGNhbGMoMTAwdmggKyA1MDBweCksIDApIHJvdGF0ZShjYWxjKHZhcigtLXJvdGF0ZSwgMGRlZykgKiAyKSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmbGlwIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKGNhbGModmFyKC0tcm90YXRlKSAqIC0wLjUpKSByb3RhdGVZKC0zNjBkZWcpO1xuICB9XG59XG4iXX0= */";
var styles = {"confettiScreen":"style-module_confettiScreen__nFcKI","confetti":"style-module_confetti__tdzoz","fall":"style-module_fall__CfJe-","confettiContent":"style-module_confettiContent__SkjXj","flip":"style-module_flip__00HTp"};
styleInject(css_248z);

// src/CoolConfetti.tsx
function CoolConfetti(_a) {
    var _b = _a.total, total = _b === void 0 ? 10 : _b, Component = _a.Component;
    var confettiItems = [];
    useEffect(function () {
        console.log("hi");
    }, [total]);
    for (var i = 0; i < total; i++) {
        var posX = "".concat(Math.floor(Math.random() * 100), "%");
        var delay = "".concat((Math.random() * 5).toFixed(2), "s");
        var speed = "".concat((4 + Math.random() * 2).toFixed(2), "s");
        var posXDirection = "".concat(((Math.random() - 0.5) * 800).toFixed(0), "%");
        var size = (1 + Math.random() * 0.2).toFixed(2);
        var rotate = "".concat(Math.floor(Math.random() * 360) - 180, "deg");
        var style = {
            '--posX': posX,
            '--delay': delay,
            '--speed': speed,
            '--posXDirection': posXDirection,
            '--size': size,
            '--rotate': rotate,
        };
        confettiItems.push(React.createElement("div", { key: i, className: styles.confetti, style: style },
            React.createElement("span", { className: styles.confettiContent }, Component)));
    }
    return React.createElement("div", { className: styles.confettiScreen }, confettiItems);
}

export { CoolConfetti as default };
//# sourceMappingURL=index.esm.js.map
