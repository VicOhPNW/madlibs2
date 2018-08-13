$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var madLibs = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    madLibs.forEach(function(madLib){
      var userInput = $("input#" + madLib).val();
      $("." + madLib).text(userInput);
      });

      $("#story").show();
      event.preventDefault();
    });
  });
