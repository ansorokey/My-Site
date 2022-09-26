$("li").click(function(event){
    var windowSource = "https://ansorokey.github.io/My-site/practice-problems/" + $(this).attr("id") + ".html";
    $("iframe").attr("src", windowSource);
});
