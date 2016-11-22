$(function()
{
var canvas;
var ctx;
var x = 50;
var y = 50;
var w = 150;
var h = 150;
var dragok = false;
var dragXOffset = 0;
var dragYOffset = 0;
var velocity = 0;
var direction = 0;
var xCoordinates = new Array();
var sampleSize = 10;
var velocity = 0;
var canvasElement = document.getElementById('canvas');
var space = 50;
var offset = 25;
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'thrall.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'baine.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'jaina.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'sylvanas.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'tyrande.jpg';

function rect(x, y, w, h)
{
	ctx.beginPath();
	ctx.rect(x, y, w, h);
	ctx.closePath();
	ctx.fill();
}

function clear()
{
	ctx.clearRect(0, 0, 1200, 800);
}

function init()
{
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	return setInterval(draw, 10);
}

function draw()
{
	xCoordinates.push(x);

	while (xCoordinates.length > sampleSize) xCoordinates.shift();

	clear();

	ctx.fillStyle = "#000000";	
	rect(0, 0, canvas.width, canvas.height);


	if (!dragok && velocity > 0)
	{
		if (direction == 1)
		{
			x += velocity / 20;
		}
		else
		{
			x -= velocity / 20;
		}

		for (var i=0; i<5; i++)
		{
			rect(getXCoordinate(i), getYCoordinate(i), w, h);
			ctx.drawImage(imgArray[i], getXCoordinate(i), getYCoordinate(i), w, h);
		}

		velocity -= 1;
	}
	else
	{

		for (var i=0; i<5; i++)
		{
			rect(getXCoordinate(i), getYCoordinate(i), w, h);
			ctx.drawImage(imgArray[i], getXCoordinate(i), getYCoordinate(i), w, h);
		}
	}
}

function myMove(e)
{	
	if (dragok)
	{
		x = getMouseX(e) - dragXOffset;
	}
}

function myDown(e)
{
	for (var i=0; i<3; i++)
	{
		if ((getMouseX(e) > getXCoordinate(i) && getMouseX(e) < getXCoordinate(i) + w))
		{
			dragXOffset = getMouseX(e) - getXCoordinate(0);
			dragok = true;
			addMoveListener();
			return;
		}
	}
}

function getXCoordinate(n)
{
	return x + (w*n) + (space*n);
}

function getYCoordinate(n)
{
	return y;
}

function myUp()
{	
	velocity = Math.abs(xCoordinates[0] - xCoordinates[sampleSize-1]);
	direction = (xCoordinates[0] < xCoordinates[sampleSize-1]) ? 1 : 0;
	dragok = false;
	canvas.onmousemove = null;	
}

function getMouseX(e)
{
	if (e.touches === undefined)
	{
		return e.pageX - canvas.offsetLeft;				
	}
	return e.touches[0].pageX - canvas.offsetLeft;	
	
}

function getMouseY(e)
{
	if (e.touches === undefined)
	{
		return e.pageY - canvas.offsetTop;
	}
	return e.touches[0].pageY - canvas.offsetTop;
}

function addStartListener()
{
	canvasElement.addEventListener('touchstart', function(e) { e.preventDefault(); myDown(e); }, false);
	canvasElement.addEventListener('mousedown', function(e) { e.preventDefault(); myDown(e); }, false);
}

function addEndListener()
{
	canvasElement.addEventListener('touchend', function(e) { e.preventDefault(); myUp(e); }, false);
	canvasElement.addEventListener('mouseup', function(e) { e.preventDefault(); myUp(e); }, false);
}

function addMoveListener()
{
	canvasElement.addEventListener('touchmove',function(e) { myMove(e); }, false);
	canvasElement.addEventListener('mousemove',function(e) { myMove(e); }, false);
}

init();
addStartListener();
addEndListener();
});

