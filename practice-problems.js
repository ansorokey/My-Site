$("li").click(function(event){
    var windowSource = "/images/practice-problems/" + $(this).attr("id") + ".html";
    $("iframe").attr("src", windowSource);
});
