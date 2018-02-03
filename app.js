window.onload = function() {
    console.debug('<app> onload');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    context.translate(0, height / 2);
    for (var angle = 0; angle < Math.PI * 2; angle += 0.01) {
        var x = angle * 200;
        var y = Math.sin(angle) * 200;

        context.fillRect(x, y, 5, 5);
    }
};
console.debug('app.js loaded')
