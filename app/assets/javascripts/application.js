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
	$('#newTeamModal').on('shown.bs.modal', function () {
  		if($('#team_name').val().length > 0)
  		{
  			$('#errorDiv').attr("hidden", true)
  			$('#team_name').val('');
  		}
	});
});


$(function(){
	$('#newUserModal').on('shown.bs.modal', function () {
		var selectGender = $('#gender_select')[0];
  		if($('#name').val().length > 0)
  		{
  			$('#errorDiv').attr("hidden", true)
  			$('#name').val('');
  			$('#age').val('');
  		}
	});
});

$(function(){
	$('#add-new-user').on('click', function(){
		
		var name_regex = /^[a-zA-Z]+$/;

		var selectGender = $('#gender_select')[0];
		var gender = selectGender.options[selectGender.selectedIndex].value;
	  	if($('#name').val().length == 0 && $('#age').val().length == 0 && gender == 0)
	  	{
	  		$('#errorDiv').attr("hidden", false)
	  		$('#errorDiv').text('Name, Age and Gender cannot be blank');
	  	}
	  	
	  	else if($('#name').val().length == 0 && $('#age').val().length == 0)
	  	{
	  		$('#errorDiv').attr("hidden", false)
	  		$('#errorDiv').text('Name and Age cannot be blank');
	  	}

	  	else if($('#name').val().length == 0 && gender == 0)
	  	{
	  		$('#errorDiv').attr("hidden", false)
	  		$('#errorDiv').text('Name and Gender cannot be blank');
	  	}

	  	else if($('#age').val().length == 0 && gender == 0)
	  	{
	  		$('#errorDiv').attr("hidden", false)
	  		$('#errorDiv').text('Age and Gender cannot be blank');
	  	}

	  	else if($('#name').val().length == 0)
	  	{
	  		$('#errorDiv').attr("hidden", false)
	  		$('#errorDiv').text('Name cannot be blank');
	  	}

	  	else if ( ($('#name').val().length > 0) && (!($('#name').val().match(name_regex))) )
	  	{
	  		$('#errorDiv').attr("hidden", false)
	  		$('#errorDiv').text('Name should contain only characters');
	  	}

	  	else if($('#age').val().length == 0)
	  	{
	  		$('#errorDiv').attr("hidden", false)
	  		$('#errorDiv').text('Age cannot be blank');
	  	}

	  	else if(gender == 0)
	  	{
	  		$('#errorDiv').attr("hidden", false)
	  		$('#errorDiv').text('Gender cannot be blank');
	  	}
	  	
	  	else
	  	{
	    	$('#new_user').submit();
	  	}
	});
});


$(function(){
	$('#add-new-team').on('click', function(){

		var team_name_regex = /^[a-zA-Z]+$/;
		if($('#team_name').val().length == 0)
		{
			$('#errorDiv').attr("hidden", false)
	  		$('#errorDiv').text('Please Enter a Team Name');
		}
		else if (($('#team_name').val().length > 0) && (!($('#team_name').val().match(team_name_regex))))
	  	{
	  		$('#errorDiv').attr("hidden", false)
	  		$('#errorDiv').text('Team Name should contain only characters');
	  	}
		else
		{
			$('#new_team').submit();
		}
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
		$('#team_two_select').prepend('<option value="">Please Select</option>');

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

		$('#toss_select').empty();
		$('#toss_select').prepend('<option value="">Please Select</option>');

		var optionTeamOne = $('<option></option>');
		optionTeamOne.val(option_team_one.options[option_team_one.selectedIndex].value);
		optionTeamOne.text(option_team_one.options[option_team_one.selectedIndex].text);
		if(optionTeamOne.val() > 0)
		{
			$('#toss_select').append(optionTeamOne);
		}

		var optionTeamTwo = $('<option></option>');
		optionTeamTwo.val(option_team_two.options[option_team_two.selectedIndex].value);
		optionTeamTwo.text(option_team_two.options[option_team_two.selectedIndex].text);
		if(optionTeamTwo.val() > 0)
		{
			$('#toss_select').append(optionTeamTwo);
		}

		$('#toss_select').prop('disabled', false);
	});
});

$(function(){
	$('#team_two_select').on('focus', function()
	{
		var option_team_one = $('#team_one_select')[0];
		var option_team_two = $('#team_two_select')[0];
		
		$('#toss_select').empty();
		$('#toss_select').prepend('<option value="">Please Select</option>');

		var optionTeamOne = $('<option></option>');
		optionTeamOne.val(option_team_one.options[option_team_one.selectedIndex].value);
		optionTeamOne.text(option_team_one.options[option_team_one.selectedIndex].text);
		if(optionTeamOne.val() > 0)
		{
			$('#toss_select').append(optionTeamOne);
		}

		var optionTeamTwo = $('<option></option>');
		optionTeamTwo.val(option_team_two.options[option_team_two.selectedIndex].value);
		optionTeamTwo.text(option_team_two.options[option_team_two.selectedIndex].text);
		if(optionTeamTwo.val() > 0)
		{
			$('#toss_select').append(optionTeamTwo);
		}

		$('#toss_select').prop('disabled', false);
	});
});
