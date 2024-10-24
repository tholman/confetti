import React from 'react';

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

var css_248z = ".style-module_confettiScreen__nFcKI{bottom:0;left:0;overflow:hidden;perspective:800px;pointer-events:none;position:absolute;right:0;top:0;transform:translateZ(0);z-index:1}.style-module_confetti__tdzoz{animation:var(--speed) style-module_fall__CfJe- cubic-bezier(.45,0,.55,1) infinite var(--delay);bottom:105%;left:var(--posX);position:absolute;transform:scale(var(--size))}.style-module_confettiContent__SkjXj{animation:style-module_flip__00HTp calc(var(--speed)/4) linear alternate-reverse infinite;animation-delay:var(--delay);backface-visibility:visible;bottom:0;left:0;position:absolute;right:0;top:0;transform-style:preserve-3d}@keyframes style-module_fall__CfJe-{to{transform:translate3d(var(--posXDirection),calc(100% + 80px),0) rotate(calc(var(--rotate)*2))}}@keyframes style-module_flip__00HTp{to{transform:rotate(calc(var(--rotate)*-.5)) rotateY(-1turn)}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBSUUsUUFBUyxDQUNULE1BQU8sQ0FDUCxlQUFnQixDQUVoQixpQkFBa0IsQ0FEbEIsbUJBQW9CLENBTnBCLGlCQUFrQixDQUVsQixPQUFRLENBRFIsS0FBTSxDQU9OLHVCQUF3QixDQUN4QixTQUNGLENBRUEsOEJBSUUsK0ZBQWlGLENBRmpGLFdBQVksQ0FDWixnQkFBaUIsQ0FGakIsaUJBQWtCLENBSWxCLDRCQUNGLENBRUEscUNBT0UseUZBQXdFLENBQ3hFLDRCQUE2QixDQUM3QiwyQkFBNEIsQ0FMNUIsUUFBUyxDQUNULE1BQU8sQ0FKUCxpQkFBa0IsQ0FFbEIsT0FBUSxDQURSLEtBQU0sQ0FJTiwyQkFJRixDQUVBLG9DQUNFLEdBQ0UsNkZBQ0YsQ0FDRixDQUVBLG9DQUNFLEdBQ0UseURBQ0YsQ0FDRiIsImZpbGUiOiJzdHlsZS5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZldHRpU2NyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwZXJzcGVjdGl2ZTogODAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbmZldHRpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwNSU7XG4gIGxlZnQ6IHZhcigtLXBvc1gpO1xuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBmYWxsIGN1YmljLWJlemllcigwLjQ1LCAwLCAwLjU1LCAxKSBpbmZpbml0ZSB2YXIoLS1kZWxheSk7XG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tc2l6ZSkpO1xufVxuXG4uY29uZmV0dGlDb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGFuaW1hdGlvbjogZmxpcCBjYWxjKHZhcigtLXNwZWVkKSAvIDQpIGxpbmVhciBhbHRlcm5hdGUtcmV2ZXJzZSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1kZWxheSk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbkBrZXlmcmFtZXMgZmFsbCB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHZhcigtLXBvc1hEaXJlY3Rpb24pLCBjYWxjKDEwMCUgKyA4MHB4KSwgMCkgcm90YXRlKGNhbGModmFyKC0tcm90YXRlKSAqIDIpKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZsaXAge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoY2FsYyh2YXIoLS1yb3RhdGUpICogLTAuNSkpIHJvdGF0ZVkoLTM2MGRlZyk7XG4gIH1cbn1cbiJdfQ== */";
var styles = {"confettiScreen":"style-module_confettiScreen__nFcKI","confetti":"style-module_confetti__tdzoz","fall":"style-module_fall__CfJe-","confettiContent":"style-module_confettiContent__SkjXj","flip":"style-module_flip__00HTp"};
styleInject(css_248z);

function Confetti(_a) {
    var _b = _a.total, total = _b === void 0 ? 90 : _b, Component = _a.Component;
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
        // If Component is an array, pick a random one, otherwise use the single component
        var componentContent = Array.isArray(Component)
            ? Component[i % Component.length]
            : Component;
        confettiItems.push(React.createElement("div", { key: i, className: styles.confetti, style: style },
            React.createElement("span", { className: styles.confettiContent }, componentContent)));
    }
    return React.createElement("div", { className: styles.confettiScreen }, confettiItems);
}

export { Confetti as default };
//# sourceMappingURL=index.esm.js.map
