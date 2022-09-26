$("li").click(function(event){
    var imgSolution = "images/problem-solutions/" + $(this).attr("id") + "-solution.png";
    var imgScenario = "images/problem-scenarios/" + $(this).attr("id") + "-scenario.png";
    $("#scenario").attr("src", imgScenario);
    $("#solution").attr("src", imgSolution);
});
