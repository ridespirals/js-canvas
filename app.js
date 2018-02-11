
var deepOrange = '#E65100';
var cosmicLatte = '#fff8e7';
var carminePink = '#E75151'

window.onload = inverseKinematics

function inverseKinematics() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    var fks = FKSystem.create(width / 2, height / 2)
    fks.addArm(200)
    fks.addArm(150)
    fks.addArm(100)

    // fks.rotateArm(0, 1.3)
    // fks.rotateArm(1, -1.7)
    // fks.rotateArm(2, 0.98)

    // var arm = Arm.create(width / 2, height / 2, 100, 0)
    // var arm2 = Arm.create(arm.getEndX(), arm.getEndY(), 100, 1.3)
    // var arm3 = Arm.create(arm2.getEndX(), arm2.getEndY(), 100, 1.3)

    // arm2.parent = arm
    // arm3.parent = arm2

    var angle = 0

    update()

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

