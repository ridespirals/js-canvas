
var deepOrange = '#E65100';
var cosmicLatte = '#fff8e7';
var carminePink = '#E75151'

window.onload = reaching


function reaching() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var mouseX = 0
    var mouseY = 0

    var iks = IKSystem.create(250, height)
    iks.addArm(240)
    iks.addArm(180)
    iks.addArm(120)
    
    var iks2 = IKSystem.create(width - 250, height)
    iks2.addArm(240)
    iks2.addArm(180)
    iks2.addArm(120)

    var topsystems = []
    var spacing = 10
    for (var i = 0; i < spacing; i++) {
        var system = IKSystem.create(i * (width / spacing) + spacing, 0)
        var armColor = `hsl(${(360/spacing)*i}, 98%, 54%)`
        for (var j = 0; j < 12; j++) {
            system.addArm(20, armColor)
        }
        topsystems.push(system)
    }

    var ball = getABall(width, height)
    var colorH = 0

    // document.body.addEventListener('mousemove', function(event) {
    //     mouseX = event.clientX
    //     mouseY = event.clientY
    // })

    update()

    function update() {
        context.clearRect(0, 0, width, height)

        context.fillStyle = `hsl(${(colorH++) % 360}, 98%, 54%)`

        // iks.reach(mouseX, mouseY)
        // iks2.reach(mouseX, mouseY)
        iks.reach(ball.x, ball.y)
        iks2.reach(ball.x, ball.y)

        iks.render(context)
        iks2.render(context)

        for (var i = 0; i < topsystems.length; i++) {
            topsystems[i].reach(ball.x, ball.y)
            topsystems[i].render(context)
        }

        ball.update()
        ball.render(context)

        requestAnimationFrame(update)
    }
}

function ikArm() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    var iks = IKSystem.create(width / 2, height / 2)
    for (var i = 0; i < 20; i++) {
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

function getABall(areaW, areaH) {
    return {
        x: 100,
        y: 100,
        vx: 3,
        vy: 0,
        radius: 26,
        gravity: 0.15,
        bounce: -1,
        areaW: areaW,
        areaH: areaH,
        update: function() {
            this.x += this.vx
            this.y += this.vy
            this.vy += this.gravity

            if (this.x + this.radius > this.areaW) {
                this.x = this.areaW - this.radius
                this.vx *= this.bounce
            } 
            else if (this.x < this.radius) {
                this.x = this.radius
                this.vx *= this.bounce
            }
            else if (this.y + this.radius > this.areaH) {
                this.y = this.areaH - this.radius
                this.vy *= this.bounce
            }
            else if (this.y < this.radius) {
                this.y = this.radius
                this.vy *= this.bounce
            }
        },
        render: function(context) {
            context.beginPath()
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
            context.fill()
        }
        
    }
}
