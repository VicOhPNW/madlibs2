$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var madLibs = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

      for (var index = 0; index < madLibs.length; index ++){
        var userInput = $("input#" + madLibs[index]).val();
        $("." + madLibs[index]).text(userInput);
      }

    // madLibs.forEach(function(madLib){
    //   var userInput = $("input#" + madLib).val();
    //   $("." + madLib).text(userInput);
    //   });

      $("#story").show();
      event.preventDefault();
    });
  });
