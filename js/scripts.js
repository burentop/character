$(document).ready(function () {
  $(".profile form").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var talking = parseInt($("#talking").val());
    var reading = parseInt($("#reading").val());
    var problem = parseInt($("#problem").val());
    var better = parseInt($("#better").val());
    var code = "";
    
    if ((!name)) {
      $(".input-name").addClass("has-error");
      $("#name-warning").text("Please enter your name.");
    } else {
      if (talking === 0) {
        code += "T";
      } else {
        code += "L";
      }
      if (reading === 0) {
        code += "R";
      }
      if (problem === 0) {
        code += "C";
      } else {
        code += "L";
      }
      if (better === 0) {
        code += "P";
      } else {
        code += "I";
      }
      $("#character-name").text(code);
      $("#character-reason").text("I really have no idea what that code means, but I am certain that it reflects your character.");
      $(".results").show();
    }
  });
});