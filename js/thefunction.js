function mgene108(gene) {

    if (window.name != "refresh") {
        location.reload();
        window.name = "refresh";
    } else {
        window.name = "";
    }

    if (gene == 1) {
        document.getElementById('mz001').innerHTML = '';
        document.getElementById('mobileHint').innerHTML = '';

        var thechoosebox = getQueryVariable("id");
        //debugger;

        var hintHtml00 = '<div id="mobileHint" style="position:fixed; width:100%; height:2%; vertical-align:top; color:green; background:lightgrey; text-align:right; padding:15px; top:0px; right:0px">请勾选认识的字<br/><br/></div>'
        var hintHtml01 = '<div id="mobileHint" style="position:fixed; width:100%; height:2%; vertical-align:top; color:red; background:lightgrey; text-align:right; padding:15px; top:0px; right:0px">请勾选不认识的字<br/><br/></div>'

        if (thechoosebox == 1) { //1 -- 不认识模式， 0 -- 认识模式
            document.getElementById('mobileHint').innerHTML = hintHtml01;

        } else {

            document.getElementById('mobileHint').innerHTML = hintHtml00;


        }

        //document.getElementById('rightpane').innerHTML = '<div class="divcss5"><h3>这里是提示和说明区</h3><br/><br/><br/></div>';

        //myhint();

        var divStr0 = '<div "id=';
        //var divStr1 = ' style="background:#ffffff color:#000" onMouseOver="this.style.background=\'#ffffff\'; this.style.color=\'#0062c4\'" onMouseOut="this.style.background=\'#ffffff\'; this.style.color=\'#000\'">';
        var divStr1 = ' style="background:#ffffff color:#000">';
        var divStr2 = '';
        //<br/><p style="FONT-SIZE: 18px"></p>

        //var divStr22 = '<input type="checkbox" style="zoom:150%" name="fbox" id="myBox';

        //var divStr22 = '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <input type="checkbox" style="zoom:120%"';

        var divStr21 = ' &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'
        var divStr22 = '<input type="checkbox" style="zoom:125%; vertical-align:middle" name="fbox" onclick="mobileAlert(1)" id="myBox';
        var divStr23 = (String(keytoID).trim());
        var divStr24 = '"></div><br/>';

        //var divStr25 = '<br/><div><a href="m-info.html" style="color:blue"><font style="font-size: 12px"><u>下一步</u></font></div>'

        var divStr25 = '<br/><div><a href="" id="infoUrl" onclick="getinfoURL()" style="color:blue"><u>下一步</u></a></div>'

        //var divStr22 = '<input type="checkbox" style="zoom:150%" name="fbox" onclick="myalert(1)" id="myBox';
        //var divStr23 = (String(keytoID).trim());
        //var divStr24 = '"><br/><br/></div>';

        //var obj = ["wo", "ni", "ta", "我", "你", "他", "和"];
        var obj = mylib();;
        var iH = '';
        var iHHH = '';

        for (let keyto in obj) {

            var keytoID = 0;
            keytoID = Number(keyto) + 1

            //var iH = document.getElementById('z001').innerHTML;
            //iH = divStr0 + (String(keytoID).trim()) + divStr1 + obj[keyto] + divStr2 + divStr22 + (String(keytoID).trim()) + divStr24;
            iH = divStr0 + (String(keytoID).trim()) + divStr1 + obj[keyto] + divStr2 + divStr21 + divStr22 + (String(keytoID).trim()) + divStr24;;
            //document.getElementById('z001').innerHTML = iH;
            iHHH = iHHH + iH;
        }
        // //console.log(iHHH);
        // //iH = document.getElementById('z001').innerHTML;
        // // debugger;

        // // myBott = '<br/><br/><br/> <div class="layui-row layui-col-space20" align="center"><div class="layui-col-md12"><br/><h2>汉字 - 识字数量统计</h2></div></div>'
        myBott = divStr25;
        document.getElementById('mz001').innerHTML = iHHH + myBott;


    } else {

        // document.getElementById('z001').innerHTML = '';
        // document.getElementById('rightpane').innerHTML = '<div class="divcss5"><h3>这里是提示和说明区</h3><br/><br/><br/></div>';

        // document.getElementById("hintpane").innerHTML = '';


    }
}