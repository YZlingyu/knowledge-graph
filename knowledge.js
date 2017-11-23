//封装选择器
function $(str){
    var symbol=str.charAt(0);
    var name=str.substr(1);
    switch(symbol){
        case "#":
            return document.getElementById(name);
            break;
        case ".":
            return document.getElementsByClassName(name);
            break;
        default:
            return document.getElementsByTagName(str);
    }
}

//下载图片
function download() {
    var serializer = new XMLSerializer();
    var source = serializer.serializeToString(svg.node());
    //console.log(source);

    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
    var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
    document.write('<img src="' + url + '"/>');

    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    var context = canvas.getContext("2d");
    var image = new Image;
    image.src = document.getElementsByTagName('img')[0].src;
    document.getElementsByTagName("img")[0].style.display="none";
    document.getElementById("btn").onclick=function(){

        context.drawImage(image, 0, 0);

        var a = document.createElement("a");
        a.download = "fallback.png";
        a.href = canvas.toDataURL("image/png");
        a.click();
    }
}