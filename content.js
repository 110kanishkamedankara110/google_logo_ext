var logo = document.getElementsByClassName("lnXdpd");
logo[0].src = "";
logo[0].srcset = "";



var today = new Date()
var curHr = today.getHours()
    // var curHr = 13;
var time = null;
var url;
if (curHr < 12) {
    url = "https://animeshelter.com/wp-content/uploads/2018/05/how-to-have-more-google-hits.gif";

} else if (curHr < 18) {
    url = "https://media.tenor.com/X2nnlorReAAAAAAC/google-anime.gif";

} else {
    url = "https://media.tenor.com/YM91d6z3icQAAAAC/anime.gif";

}






document.getElementsByClassName("LLD4me")[0].style = "height:500px";
document.getElementsByClassName("rSk4se")[0].style = "max-height:500px";



logo[0].style = "height:500px";
logo[0].src = url;
logo[0].srcset = url;