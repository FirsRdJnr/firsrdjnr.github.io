// (function() {
//     var canvas = this.__canvas = new fabric.Canvas('canvas');
//
//     var rect = new fabric.Rect({
//         width: 50,
//         height: 50,
//         left: 100,
//         top: 100,
//         stroke: '#aaf',
//         fill: '#faa',
//         selectable: false
//     });
//     canvas.add(rect);
//
//     var animateBtn = document.getElementById('animate');
//
//     animateBtn.onclick = function() {
//         animateBtn.disabled = true;
//         rect.animate('left', rect.left === 100 ? 400 : 100, {
//             duration: 1000,
//             onChange: canvas.renderAll.bind(canvas),
//             easing: fabric.util.ease.easeOutExpo
//         });
//     };
// })();


var docW = window.innerWidth,
    docH = window.innerHeight;

// copy node multiple times
function multiplyNode(node, count, deep) {
    for (var i = 0; i < count - 1; i++) {
        var copy = node.cloneNode(deep);
        copy = addRandomContent(copy);
        node.parentNode.insertBefore(copy, node);
    }
}

addRandomContent = function(orb) {
    var orbW = orb.offsetWidth,
        orbH = orb.offsetHeight,
        maxW = docW - orbW,
        maxH = docH - orbH,

        posT = Math.floor( Math.random() * maxH) + 'px',
        posL = Math.floor( Math.random() * maxW) + 'px',
        mgnL = -1 * (orb.width / 2) + 'px',
        mgnT = -1 * (orb.height / 2) + 'px';

    orb.style.top = posT;
    orb.style.left = posL;
    orb.style.marginLeft = mgnL;
    orb.style.marginTop = mgnT;

    return orb;
}

multiplyNode(document.querySelector('article'), 10, true);
