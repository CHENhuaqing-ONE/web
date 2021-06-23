//div添加name
$(function (){
    var objs=document.getElementsByClassName("lang_en")[0].getElementsByTagName("div");

    for(var i=0;i<objs.length;i++)
    {

        objs[i].setAttribute("name","myname"+i);
    }
})

// 首页图片展示
$(function () {
    $(".bx_p15 .col_md_6")[0].style.display = 'none';

    var div_3 = "<div plugins_pos=\"1\" class=\"col_md_6 col_xs_12 bx_p15 img_animation\">\n" +
        "\t\t\t<a href=\"/collections/weed-accessories\"><img class=\"transition\" plugins_mod=\"Pic\" src=\"//ueeshop-cn.ly200-cdn.com/u_file/UPAR/UPAR410/2106/21/photo/b9b0a297ed.jpg?x-oss-process=image/format,webp\" alt=\"\"></a>\n" +
        "\t\t</div>" +
        "<div plugins_pos=\"2\" class=\"col_md_6 col_xs_12 bx_p15 img_animation\">\n" +
        "\t\t\t<a href=\"\"><img class=\"transition\" plugins_mod=\"Pic\" src=\"//ueeshop-cn.ly200-cdn.com/u_file/UPAR/UPAR410/2106/21/photo/656ec7927c.jpg?x-oss-process=image/format,webp\" alt=\"\"></a>\n" +
        "\t\t</div>";

    var vcurrent = document.querySelector(".bx_p15");
    var newNodeCenter = document.createElement("div");
    newNodeCenter.innerHTML = div_3;
    vcurrent.appendChild(newNodeCenter);

    var bx_p15 = document.getElementsByClassName("bx_p15")[0];
    bx_p15.style.width = "85%";
    bx_p15.style.margin = "auto";
})

//评论轮播
$(function () {

    var container = "<div class=\"container\" style=\"max-width: 80%;background-color: #FFFFFF\">\n" +
        "    <H1 style=\"margin: auto;text-align: center; font: bold;font-size: 2.8rem;margin-top: 16px;margin-bottom: 16px\">What People Are Saying</H1>\n" +
        "    <div id=\"sync2\" class=\"carousel\">\n" +
        "\n" +
        "        <div>\n" +
        "            <div class=\"div_c_1\">\n" +
        "                <img class=\"img_c_1\" src=\"//ueeshop-cn.ly200-cdn.com/u_file/UPAR/UPAR410/2106/04/photo/9917927267.jpg\" width=\"80px\"/>\n" +
        "            </div>\n" +
        "            <div style=\"color: #151515; text-align: center\">Nathan W.</div>\n" +
        "            <div class=\"div_c_2\">\n" +
        "                <img class=\"img_c_2\" src=\"//ueeshop-cn.ly200-cdn.com/u_file/UPAR/UPAR410/2106/04/photo/42ad39c6ae.png\"/>\n" +
        "            </div>\n" +
        "            <div style=\"color: #151515; text-align: center; font-weight: bold\">Very solid so far</div>\n" +
        "            <div class=\"div_c_3\">\n" +
        "\n" +
        "            </div>\n" +
        "        </div>\n" +
        "\n" +
        "        <div>\n" +
        "            <div class=\"div_c_1\">\n" +
        "                <img class=\"img_c_1\" src=\"//ueeshop-cn.ly200-cdn.com/u_file/UPAR/UPAR410/2106/04/photo/9917927267.jpg\" width=\"80px\"/>\n" +
        "            </div>\n" +
        "            <div style=\"color: #151515; text-align: center\">Nathan W.</div>\n" +
        "            <div class=\"div_c_2\">\n" +
        "                <img class=\"img_c_2\" src=\"//ueeshop-cn.ly200-cdn.com/u_file/UPAR/UPAR410/2106/04/photo/42ad39c6ae.png\"/>\n" +
        "            </div>\n" +
        "            <div style=\"color: #151515; text-align: center; font-weight: bold\">Very solid so far</div>\n" +
        "            <div class=\"div_c_3\">\n" +
        "\n" +
        "            </div>\n" +
        "        </div>\n" +
        "\n" +
        "        <div class=\"slide\">\n" +
        "            <span class=\"count\">3</span>\n" +
        "        </div>\n" +
        "\n" +
        "        <div class=\"slide\">\n" +
        "            <span class=\"count\">4</span>\n" +
        "        </div>\n" +
        "\n" +
        "        <div class=\"slide\">\n" +
        "            <span class=\"count\">5</span>\n" +
        "        </div>\n" +
        "\n" +
        "        <div class=\"slide\">\n" +
        "            <span class=\"count\">6</span>\n" +
        "        </div>\n" +
        "\n" +
        "        <div class=\"slide\">\n" +
        "            <span class=\"count\">7</span>\n" +
        "        </div>\n" +
        "\n" +
        "        <div class=\"slide\">\n" +
        "            <span class=\"count\">8</span>\n" +
        "        </div>\n" +
        "\n" +
        "        <div>\n" +
        "            <div class=\"div_c_1\">\n" +
        "                <img class=\"img_c_1\" src=\"//ueeshop-cn.ly200-cdn.com/u_file/UPAR/UPAR410/2106/04/photo/9917927267.jpg\" width=\"80px\"/>\n" +
        "            </div>\n" +
        "            <div style=\"color: #151515; text-align: center\">Nathan W.</div>\n" +
        "            <div class=\"div_c_2\">\n" +
        "                <img class=\"img_c_2\" src=\"//ueeshop-cn.ly200-cdn.com/u_file/UPAR/UPAR410/2106/04/photo/42ad39c6ae.png\"/>\n" +
        "            </div>\n" +
        "            <div style=\"color: #151515; text-align: center; font-weight: bold\">Very solid so far</div>\n" +
        "            <div class=\"div_c_3\">\n" +
        "\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>";

    var container_v = document.getElementsByName("myname96")[0];

    var newNodeBottom_v = document.createElement("div");
    newNodeBottom_v.innerHTML = container;
    container_v.parentNode.insertBefore(newNodeBottom_v, container_v.nextSibling)
});

$(function (){

    if (document.body.offsetWidth > 1080){

        Kineto.create('#sync2', {
            syncId: 'gallery',
            perView: 2,
            loop: true,
            pagination: false,
            stream: false,
            streamEvery: 3000,
            streamRewind: true,
            pauseOnFocus: true,
            pauseOnHover: false,
        });

    } else {

        Kineto.create('#sync2', {
            syncId: 'gallery',
            perView: 1,
            loop: true,
            pagination: false,
            stream: false,
            streamEvery: 3000,
            streamRewind: true,
            pauseOnFocus: true,
            pauseOnHover: false,
        });

    }

})

