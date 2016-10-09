var Main = {};

Main.Avenger = function(firstName, lastName, codeName)
{
	this.FirstName = firstName;
	this.LastName = lastName;
	this.CodeName = codeName;
}

Main.Avenger.prototype.GetAvengerName = function()
{
	return this.CodeName + " - " + this.FirstName + " " + this.LastName;
}

Main.Avenger.prototype.setFirstName = function(fname)
{
	this.FirstName = fname;
}

Main.Avenger.prototype.setLastName = function(lname)
{
	this.LastName = lname;
}

Main.Avenger.prototype.setCodeName = function(cname)
{
	this.CodeName = cname;
}

Main.Hawkeye = new Main.Avenger("Clint", "Barton", "Hawkeye");
Main.CaptainAmerica = new Main.Avenger("Steve", "Rogers", "Captain America");
Main.BlackWidow = new Main.Avenger("Natalya", "Romanov", "Black Widow");
Main.Falcon = new Main.Avenger("Sam", "Wilson", "Falcon");

document.body.innerHTML = Main.Falcon.GetAvengerName();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.BlackWidow.GetAvengerName();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Hawkeye.GetAvengerName();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.CaptainAmerica.GetAvengerName();
document.body.innerHTML += "<br/>";
document.body.innerHTML += "Oh no! Captain America is dead! Who will replace him?!";
document.body.innerHTML += "<br/>";
Main.CaptainAmerica.setFirstName("Bucky");
Main.CaptainAmerica.setLastName("Barnes");
document.body.innerHTML += Main.CaptainAmerica.GetAvengerName();
document.body.innerHTML += "<br/>";
document.body.innerHTML += "Wait! What?! Wasn't he...";
document.body.innerHTML += "<br/>";
Main.CaptainAmerica.setCodeName("Winter Soldier");
document.body.innerHTML += Main.CaptainAmerica.GetAvengerName();