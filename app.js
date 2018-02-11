
var deepOrange = '#E65100';
var cosmicLatte = '#fff8e7';
var carminePink = '#E75151'

window.onload = reaching


function reaching() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    var iks = IKSystem.create(width / 2, height / 2)
    iks.addArm(100)
    iks.addArm(100)
    iks.addArm(100)
    
    document.body.addEventListener('mousemove', function(event) {
        iks.reach(event.clientX, event.clientY)
    })

    update()

    function update() {
        context.clearRect(0, 0, width, height)

        iks.render(context)

        requestAnimationFrame(update)
    }
}

function inverseKinematics() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    var iks = IKSystem.create(width / 2, height / 2)
    for (var i = 0; i < 10; i++) {
        iks.addArm(30)
    }

    document.body.addEventListener('mousemove', function(event) {
        iks.drag(event.clientX, event.clientY)
    })

    update()

    function update() {
        context.clearRect(0, 0, width, height)

        iks.render(context)

        requestAnimationFrame(update)
    }

}

