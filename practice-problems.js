$("li").click(function(event){
    var windowSource = "/practice-problems/" + $(this).attr("id") + ".html";
    $("iframe").attr("src", windowSource);
});
