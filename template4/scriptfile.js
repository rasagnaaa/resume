$(document).ready(function() {
    $(document.getElementById('add_education')).click(function(e){ 
        e.preventDefault();
            $(document.getElementById('education')).append('<div class="new"><input type="text" size = "30" placeholder="Standard" class="p_info"><br><input type="text" size="30" class="p_info" placeholder="College"><br><input type="text" class="personalinfo" size = "10" placeholder="Start Year" style="border:none; margin-left:40px"><input type="text" class="personalinfo" size = "10" placeholder="End Year" style="border:none; margin-left:10px"><br><input type="text" class="personalinfo" size = "30" placeholder="GPA" style="border:none; margin-left:40px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('education')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_hobby')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('hobbies')).append('<div class="new"><input type="text" size = "30" placeholder="Hobby" class="p_info"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('hobbies')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_language')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('languages')).append('<div class="new"><input type="text" size = "30" placeholder="Language" class="p_info"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('languages')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_skill')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('technicalskills')).append('<div class="new"><input type="text" size = "30" placeholder="Skill" class="p_info" style="border:none; margin-left:0px"><input type="text" size = "30" placeholder="Skill" class="p_info" style="border:none; margin-left:44px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('technicalskills')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_internship')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('internships')).append('<div class="new"><input type="text" size = "30" placeholder="Company Name" class="p_info" style="border:none; margin-left:0px"><input type="text" size = "40" placeholder="Role / Subject" class="p_info" style="border:none; margin-left:4px"><br><input type="text" size = "30" placeholder="Duration" class="p_info" style="border:none; margin-left:0px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('internships')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_project')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('projects')).append('<div class="new"><input type="text" class="personalinfo" size = "30" placeholder="Name" style="border:none; margin-left:0px"><input type="text" class="personalinfo" size = "30" placeholder="Duration" style="border:none; margin-left:56px"><br><input type="text" class="personalinfo" size = "75" placeholder="One line Description" style="border:none; margin-left:0px"><br><input type="text" class="personalinfo" size = "40" placeholder="Role" style="border:none; margin-left:0px"><input type="text" class="personalinfo" size = "30" placeholder="Project Link" style="border:none; margin-left:10px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('projects')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_achievement')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('achievements')).append('<div class="new"><input type="text" class="personalinfo" size = "75" placeholder="Event" style="border:none; margin-left:0px"><br><input type="text" class="personalinfo" size = "75" placeholder="Reason" style="border:none; margin-left:0px"><br><input type="text" class="personalinfo" size = "30" placeholder="Position" style="border:none; margin-left:0px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('achievements')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_course')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('courses')).append('<div class="new"><input type="text" class="personalinfo" size = "80" placeholder="Field / Subject" style="border:none; margin-left:0px"><br><input type="text" class="personalinfo" size = "30" placeholder="Platform" style="border:none; margin-left:0px"><input type="text" class="personalinfo" size = "30" placeholder="% if any" style="border:none; margin-left:24px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('courses')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_publication')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('publications')).append('<div class="new"><input type="text" class="personalinfo" size = "90" placeholder="Paper Title" style="border:none; margin-left:0px"><br><input type="text" class="personalinfo" size = "90" placeholder="Journal with Volume of publication" style="border:none; margin-left:0px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('publications')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_eca')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('eca')).append('<div class="new"><input type="text" class="personalinfo" size = "30" placeholder="Role" style="border:none; margin-left:0px"><input type="text" class="personalinfo" size = "50" placeholder="Event" style="border:none; margin-left:14px"><input type="text" class="personalinfo" size = "90" placeholder="Club / Host" style="border:none; margin-left:0px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('eca')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	});