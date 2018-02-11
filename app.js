
var deepOrange = '#E65100';
var cosmicLatte = '#fff8e7';
var carminePink = '#E75151'

window.onload = inverseKinematics

function inverseKinematics() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    var leg0 = FKSystem.create(width / 2, height / 2)
    var leg1 = FKSystem.create(width / 2, height / 2)
    leg1.phase = Math.PI

    leg0.addArm(200, Math.PI / 2, Math.PI / 4, 0)
    leg0.addArm(180, 0.87, 0.87, -1.5)
    leg1.addArm(200, Math.PI / 2, Math.PI / 4, 0)
    leg1.addArm(180, 0.87, 0.87, -1.5)

    var angle = 0

    walkCycle()

    function walkCycle() {
        context.clearRect(0, 0, width, height)

        leg0.update()
        leg1.update()

        leg0.render(context)
        leg1.render(context)

        requestAnimationFrame(walkCycle)
    }

    function update() {
        context.clearRect(0, 0, width, height)

        fks.rotateArm(0, Math.sin(angle) * 1.3)
        fks.rotateArm(1, Math.sin(angle * 1.2) * -0.9)
        fks.rotateArm(2, Math.sin(angle) * 1.3)

        fks.update()
        fks.render(context)

        angle += 0.05

        requestAnimationFrame(update)
    }

    function update2() {
        context.clearRect(0, 0, width, height)
        arm.angle = Math.sin(angle) * 1.2
        arm2.angle = Math.cos(angle * 0.5) * 0.92
        arm3.angle = Math.sin(angle * 1.5) * 1.34
        arm2.x = arm.getEndX()
        arm2.y = arm.getEndY()
        arm3.x = arm2.getEndX()
        arm3.y = arm2.getEndY()
        angle += 0.05
        arm.render(context)
        arm2.render(context)
        arm3.render(context)
        requestAnimationFrame(update)
    }
}

function sineWave () {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    var xoff = 0;
    window.inc = 0.01;

    render();

    function render() {
        context.clearRect(0, 0, width, height);
        xoff += inc;
        context.translate(0, height / 2);
        for (var angle = 0; angle < Math.PI * 2; angle += 0.01) {
            var x = angle * 300;
            var y = Math.sin(xoff + angle) * 200;

            context.fillStyle = carminePink;
            context.fillRect(x, y, 10, 10);
        }

        context.resetTransform();
        requestAnimationFrame(render);
    }
};

