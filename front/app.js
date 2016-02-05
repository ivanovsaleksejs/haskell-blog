var wrapper = false

var page = {
    header:  false,
    center: false,
    footer:  false    
}

jsMath.Font.Message = function () {}

window.onload = function() {
    View.include("/front/controllers.js", false, function(t){
        new Function(t)()
        View.include("/front/rules.js", false, function(t){
            new Function(t)()
        }, true)
    }, true)

    wrapper = create({
        tag:"div",
        className: "wrapper",
        click:handleClick
    }).appendTo(document.body)

    for (var i in page) {
        page[i] = create("tag=div,className=" + i).appendTo(wrapper)
    }

    window.onpopstate = Router.Route
    Router.Route()
}
