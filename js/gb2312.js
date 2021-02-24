function gene108(gene) {

    if (gene == 1) {
        document.getElementById('z001').innerHTML = '';
        document.getElementById('rightpane').innerHTML = '<div class="divcss5"><h3>这里是提示和说明区</h3><br/><br/><br/></div>';

        myhint();

        var divStr0 = '<div "id=';
        var divStr1 = ' class="layui-col-md1" style="background:#ffffff color:#000" onMouseOver="this.style.background=\'#ffffff\'; this.style.color=\'#0062c4\'" onMouseOut="this.style.background=\'#ffffff\'; this.style.color=\'#000\'"><br/><br/><p style="FONT-SIZE: 22px">';
        var divStr2 = '</p><br/><br/>';

        var divStr22 = '<input type="checkbox" style="zoom:150%" name="fbox" onclick="myalert(1)" id="myBox';
        //var divStr23 = (String(keytoID).trim());
        var divStr24 = '"><br/><br/></div>';

        //var obj = ["wo", "ni", "ta", "我", "你", "他", "和"];
        var obj = mylib();
        //debugger;
        var iH = '';
        var iHHH = '';

        for (let keyto in obj) {

            var keytoID = 0;
            keytoID = Number(keyto) + 1

            //var iH = document.getElementById('z001').innerHTML;
            iH = divStr0 + (String(keytoID).trim()) + divStr1 + obj[keyto] + divStr2 + divStr22 + (String(keytoID).trim()) + divStr24;
            //document.getElementById('z001').innerHTML = iH;
            iHHH = iHHH + iH;
        }
        //console.log(iHHH);
        //iH = document.getElementById('z001').innerHTML;
        // debugger;

        // myBott = '<br/><br/><br/> <div class="layui-row layui-col-space20" align="center"><div class="layui-col-md12"><br/><h2>汉字 - 识字数量统计</h2></div></div>'
        myBott = '';
        document.getElementById('z001').innerHTML = iHHH + myBott;


    } else {

        document.getElementById('z001').innerHTML = '';
        document.getElementById('rightpane').innerHTML = '<div class="divcss5"><h3>这里是提示和说明区</h3><br/><br/><br/></div>';

        document.getElementById("hintpane").innerHTML = '';


    }
}

function myexplain() {

    var thechoosebox = document.getElementById("cbox");
    var finalCount = myalert(0);
    var finalCal = 0;
    var finalAmount = 0;
    var finalStat = 0;

    if (!finalCount) {

    } else {

        if (thechoosebox.checked) { //不认识才勾选

            finalCal = 100 - finalCount;

            finalAmount = parseInt(finalCal * 6763 / 100);

            finalStat = 1.96 * Math.sqrt(6672 / 6673) * Math.sqrt(((finalCal / 100) * (1 - (finalCal / 100))) / 100);

            finalPercent = Math.round(finalStat * 10000) / 100;

            //debugger;

            document.getElementById("rightpane").innerHTML = "<div class=\"divcss5\"><h3>小朋友，在这 100 个随机汉字取样中，你认识 " + finalCal + " 个字，估计你认识的汉字数量为：" + finalAmount + " (在 95% 置信区间下，边际误差为： " + finalPercent + "%)</h3><br/><br/></div>";
        } else

        {
            //缺省状态：认识的勾选

            finalCal = finalCount;

            finalAmount = parseInt(finalCal * 6763 / 100);

            finalStat = 1.96 * Math.sqrt(6672 / 6673) * Math.sqrt(((finalCal / 100) * (1 - (finalCal / 100))) / 100);

            finalPercent = Math.round(finalStat * 10000) / 100;

            //debugger;

            document.getElementById("rightpane").innerHTML = "<div class=\"divcss5\"><h3>小朋友，在这 100 个随机汉字取样中，你认识 " + finalCal + " 个字，估计你认识的汉字数量为：" + finalAmount + " (在 95% 置信区间下，边际误差为： " + finalPercent + "%)</h3><br/><br/></div>";



        }

    }

}