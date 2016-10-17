function createRaidParty()
{
	return{
			"guild" : "Revengeageance",
			"raidName" : "Raid-y's Night",
			"raidSize" : 10,
			"raiders" : [
									{
									"charName" : "Meatwall",
									"race" : "Tauren",
									"class" : "Warrior",
									"spec" : "Protection",
									"role" : "MainTank"
									},
									{
									"charName" : "Gungajin",
									"race" : "Troll",
									"class" : "Shaman",
									"spec" : "Restoration",
									"role" : "PrimaryHealer"
									},
									{
									"charName" : "Dorado",
									"race" : "Troll",
									"class" : "Hunter",
									"spec" : "Marksman",
									"role" : "RangeDPS"
									},
									{
									"charName" : "Healga",
									"race" : "Tauren",
									"class" : "Priest",
									"spec" : "Holy",
									"role" : "SecondaryHealer"
									},
									{
									"charName" : "Goraga",
									"race" : "Orc",
									"class" : "Deathknight",
									"spec" : "Blood",
									"role" : "SecondaryTank"
									},
									{
									"charName" : "Greedoh",
									"race" : "Goblin",
									"class" : "Rogue",
									"spec" : "Assassin",
									"role" : "MeleeDPS"
									},
									{
									"charName" : "Belladonna",
									"race" : "BloodElf",
									"class" : "Warrior",
									"spec" : "Fury",
									"role" : "MeleeDPS"
									},
									{
									"charName" : "Copperfeeld",
									"race" : "Forsaken",
									"class" : "Mage",
									"spec" : "Fire",
									"role" : "RangeDPS"
									},
									{
									"charName" : "Stabbatha",
									"race" : "Forsaken",
									"class" : "Rogue",
									"spec" : "Subtlety",
									"role" : "MeleeDPS"
									},
									{
									"charName" : "Hobojojo",
									"race" : "Pandaren",
									"class" : "Monk",
									"spec" : "Mistweaver",
									"role" : "DPSHealer"
									}
			]
	}
}

$(document).ready(function()
{
	$(".button").click(function()
	{
		var roster = createRaidParty();
		addRoster(roster);
	});
	
});

function addRoster(roster)
{
	$("#roster").append($("<div></div>").text("Guild: " + roster.guild).addClass("header"));
	$("#roster").append($("<div></div>").text("Raid Party: " + roster.raidName).addClass("header"));
	//alert(roster.raidName);
	
	for(var i = 0; i < roster.raiders.length; i++) 
	{
		var raider = roster.raiders[i];
		$("#roster").append($("<div></div>").text(raider.charName).addClass("char"));
		$("#roster").append($("<div></div>").text(raider.race).addClass("raider"));
		$("#roster").append($("<div></div>").text(raider.spec + " " + raider.class).addClass("raider"));
		$("#roster").append($("<div></div>").text("Role: " + raider.role).addClass("raider"));
		$("#roster").append($("<br />"));
		//alert(raider.charName);
	
	}
}