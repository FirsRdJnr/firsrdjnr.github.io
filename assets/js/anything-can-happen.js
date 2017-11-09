var canvas = document.getElementById('canvas');
canvas.width = document.getElementsByClassName('anything-can-happen__stage')[0].clientWidth;
canvas.height = document.getElementsByClassName('anything-can-happen__stage')[0].clientHeight;

var ctx = canvas.getContext('2d');

var colorHue = function() {
    return Math.floor(Math.random() * 255);
}

var image = function() {
    var images = ['source1', 'source2'];
    var imageRand = images[Math.floor(Math.random() * images.length)];
    return document.getElementById(imageRand);
}

// create one random circle
function Circle(image, x, y, dx, dy, radius) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;


    // flat circle

    // var color = 'rgba('+colorHue()+', '+colorHue()+', '+colorHue()+', '+Math.random()+')';
    // this.draw = function() {
    //     ctx.beginPath();
    //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    //     ctx.fillStyle = color;
    //     ctx.fill();
    //     ctx.shadowBlur = 50;
    //     ctx.shadowColor = color;
    // }

    this.draw = function() {
        ctx.drawImage(this.image, this.x, this.y, this.radius, this.radius);
    }

    this.move = function() {
        if (this.x + this.radius > canvas.width ||
            this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height ||
            this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

// create all the circles
var circleArray = [];

for (var i = 0; i < 60; i++) {
    var x = Math.random() * (canvas.width - radius * 2) + radius;
    var y = Math.random() * (canvas.height - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 20;
    var dy = (Math.random() - 0.5) * 20;
    var radius = Math.random() * 80;

    circleArray.push(new Circle(image(), x, y, dx, dy, radius));
}

// animate the circles
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].move();
    }
}

animate();
