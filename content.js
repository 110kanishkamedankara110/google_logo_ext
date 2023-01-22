try {

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

    var mobLo = document.getElementById("hplogo");
    var logo = document.getElementsByClassName("lnXdpd");
    var logoo = document.getElementById("hplogoo");
    if (logo[0] != null) {

        logo[0].src = "";
        logo[0].srcset = "";

        document.getElementById("gws-output-pages-elements-homepage_additional_languages__als").style.display = "none ";







        document.getElementsByClassName("LLD4me")[0].style = "height:500px";
        if (document.getElementsByClassName("rSk4se")[0] != null) {
            document.getElementsByClassName("rSk4se")[0].style = "max-height:500px";
        }
        if (document.getElementsByTagName("source")[0] != null) {
            document.getElementsByTagName("source")[0].srcset = url;
        }


        logo[0].style = "height:500px";
        logo[0].src = url;
        logo[0].srcset = url;

    } else if (logo != null) {
        document.getElementById("hplogo").src = "";
        if (logoo !== null) {
            document.getElementById("hplogoo").style.height = "fit-content";
            document.getElementById("hplogoo").style.width = "fit-content";

        }

        document.getElementById("hplogo").style.height = "200px";
        document.getElementById("hplogo").src = url;
        document.getElementById("SIvCob").style.display = "none";
    }
} catch (e) {

}