function conVert() {
    var cel = document.getElementById("cel");
    var temp = document.getElementById("temp");
    var x;
    var y;
    var z;
    if (temp.value == "value") {
        alert("Select a unit to be converted and enter a value.");
        far0.value = "";
        cel0.value = "";
        kel0.value = "";
        return true;
    } else if (temp.value == "Celcius") {
        if (cel.value == "") {
            alert("Please enter a number");
            far0.value = "";
            cel0.value = "";
            kel0.value = "";
            return true;
        } else {
            x = cel.value * 9 / 5;
            y = x + 32;
            k = (y - 32) * (5 / 9) + 273.15;
            far0.value = parseFloat(y).toFixed(2);;
            cel0.value = parseFloat(cel.value).toFixed(2);
            kel0.value = parseFloat(k).toFixed(2);
        }
    } else if (temp.value == "Farenheit") {
        if (cel.value == "") {
            alert("Please enter a number");
            far0.value = "";
            cel0.value = "";
            kel0.value = "";
            return true;
        }
        else {
            x = cel.value - 32;
            y = x * 5 / 9;
            k = y + 273.15;
            r = k * (9 / 5);
            far0.value = parseFloat(cel.value).toFixed(2);
            cel0.value = parseFloat(y).toFixed(2);
            kel0.value = parseFloat(k).toFixed(2);
            return true;
        }
    }
    else if (temp.value == "Kelvin") {
        if (cel.value == "") {
            alert("Please enter a number");
            far0.value = ""
            cel0.value = "";
            kel0.value = "";
            return true;
        }
        else {
            y = (cel.value - 273.15) * (9 / 5) + 32;
            x = cel.value - 273.15;
            r = (x + 273.15) * (9 / 5);
            cel0.value = parseFloat(x).toFixed(2);
            far0.value = parseFloat(y).toFixed(2);
            kel0.value = parseFloat(cel.value).toFixed(2);
            return true;
        }
    }
}
