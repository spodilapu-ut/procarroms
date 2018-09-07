// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery3
//= require popper
//= require bootstrap
//= require_tree .

$(function(){
  $('#add-new-user').on('click', function(){
    $('#new_user').submit();
  });
});

$(function(){
	$('#add-new-team').on('click', function(){
		$('#new_team').submit();
	});
});

function populate_team_one()
{
	var index;
	var selectToss = document.getElementById("toss_select");
	var tossDiv = document.getElementById("div-toss");
	var option_one = document.getElementById("team_one_select");
	var option_two = document.getElementById("team_two_select");
	var team_one = option_one.options[option_one.selectedIndex].text;
	var option = document.createElement("option");
	var teams = new Array();

	for (var i = option_two.options.length - 1 ; i > 0 ; i--)
	{
    	option_two.remove(i);
	}

	for(var i=1;i<option_one.length;i++)
	{
		if(option_one.options[i].text != team_one)
		{
			teams.push(option_one.options[i]);
		}
	}
	for(var i=0;i<teams.length;i++)
	{
		var option_team = document.createElement("option");
		option_team.value = teams[i].value;
		option_team.text = teams[i].text;
		option_two.appendChild(option_team);
	}

	document.getElementById("team_two_select").disabled = false;
}

function populate_team_two()
{
	var selectToss = document.getElementById('toss_select');
	var option_one = document.getElementById('team_one_select');
	var option_two = document.getElementById('team_two_select');
	var team_one = option_one.options[option_one.selectedIndex].text;
	var team_two = option_two.options[option_two.selectedIndex].text;
	var option = document.createElement("option");
	var toss = new Array();
	var index;

	for (var i = selectToss.options.length - 1 ; i > 0 ; i--)
	{
    	selectToss.remove(i);
	}
	toss.push(team_one);
	toss.push(team_two);

	
	for(var i=0;i<toss.length;i++)
	{
		var option_toss = document.createElement("option");
		option_toss.value = i+1;
		option_toss.text = toss[i];
		selectToss.appendChild(option_toss);
	}
	document.getElementById("toss_select").disabled = false;
}

function check_toss_option(data)
{	
	var selectToss = document.getElementById("toss_select");
	for(var i=0; i<selectToss.length-1; i++)
	{
		if(selectToss.options[i].text == data)
		{
			return i;
		}
	}
}

function check_team_two_option(data)
{	
	var option_two = document.getElementById("team_two_select");
	for(var i=0; i<option_two.length; i++)
	{
		if(option_two.options[i].text == data)
		{
			return i;
		}
	}
}