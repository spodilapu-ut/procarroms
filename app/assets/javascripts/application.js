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

/*function test()
{
 	var option_one = document.getElementById('team_one_select');
 	var option_two = document.getElementById('team_two_select');
 	var team_one = option_one.options[option_one.selectedIndex].text;
 	var team_two = option_two.options[option_two.selectedIndex].text;
	alert(team_one);
	alert(team_two);
}*/