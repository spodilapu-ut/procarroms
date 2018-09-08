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

$(function(){
	$('#team_one_select').on('change', function()
	{
		var selectTeamOne = $('#team_one_select')[0];
		var team_one = $('#team_one_select option:selected').text();
		var size = $('#team_one_select').children('option').length;
		var option;

		$('#team_two_select').empty()

		for (var i = 1; i < size; i++)
		{
			if(selectTeamOne.options[i].text != team_one)
			{
    			option = $('<option></option>');
     			option.val(selectTeamOne.options[i].value);
     			option.text(selectTeamOne.options[i].text);
     			$('#team_two_select').append(option);
			}
  		}

  		$('#team_two_select').prop('disabled', false);
	});
});

$(function(){
	$('#team_two_select').on('change', function()
	{
		var option_team_one = $('#team_one_select')[0];
		var option_team_two = $('#team_two_select')[0];
		var option;

		$('#toss_select').empty();
		
		option = $('<option></option>');
		option.val(option_team_one.options[option_team_one.selectedIndex].value);
		option.text(option_team_one.options[option_team_one.selectedIndex].text);
		$('#toss_select').append(option);
		
		option = $('<option></option>');
		option.val(option_team_two.options[option_team_two.selectedIndex].value);
		option.text(option_team_two.options[option_team_two.selectedIndex].text);
		$('#toss_select').append(option);
		
		$('#toss_select').prop('disabled', false);
	});
});

$(function(){
	$('#team_two_select').on('focus', function()
	{
		var option_team_one = $('#team_one_select')[0];
		var option_team_two = $('#team_two_select')[0];
		var option;

		$('#toss_select').empty();
		
		option = $('<option></option>');
		option.val(option_team_one.options[option_team_one.selectedIndex].value);
		option.text(option_team_one.options[option_team_one.selectedIndex].text);
		$('#toss_select').append(option);
		
		option = $('<option></option>');
		option.val(option_team_two.options[option_team_two.selectedIndex].value);
		option.text(option_team_two.options[option_team_two.selectedIndex].text);
		$('#toss_select').append(option);

		$('#toss_select').prop('disabled', false);
	});
});