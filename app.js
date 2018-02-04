window.onload = function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var xoff = 0;

    render();

    function render() {
        context.clearRect(0, 0, width, height);
        xoff -= 1;
        context.translate(0, height / 2);
        for (var angle = 0; angle < Math.PI * 6; angle += 0.01) {
            var x = xoff + (angle * 200);
            var y = Math.sin(angle) * 200;
            context.fillRect(x, y, 10, 10);

            // console.debug('<render loop>', x, xoff, y)

            // var cy = Math.cos(angle) * 200;
            // context.fillRect(x, cy, 5, 5);
        }
        context.setTransform(1, 0, 0, 1, 0, 0);
        // // console.log('<render>', xoff);
        // context.fillRect(xoff, 100, 5, 5);
        requestAnimationFrame(render);
    }
};

