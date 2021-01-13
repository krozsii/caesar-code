//Ceasar-kódolás: megad egy karaktersort és eltolja tetszőleges számú karakterrel, pl abc ->cde (kettővel eltolva) (Nehéz)
var betuk = ["A", "Á", "B", "C", "D", "E", "É", "F", "G", "H", "I", "Í", "J", "K", "L", "M", "N", "O", "Ó", "Ö", "Ő", "P", "Q", "R", "S", "T", "U", "Ú", "Ü", "Ű","V", "W", "X","Y", "Z"]


function eltolF()
{
    document.getElementById("karakterMegold").innerHTML = " ";
    var kodolt = "";
    var beKarakter = document.getElementById('karakter').value;
    beKarakter = beKarakter.toUpperCase();
    beSzam = document.getElementById('eltol').value;

    if(beSzam == '')
    {
        document.getElementById("karakterMegold").innerHTML = "wrong input"; 
        return;
    }

    beSzam = parseFloat(beSzam);

    if(beSzam < 0 || beSzam % 1 != 0)
    {
        document.getElementById("karakterMegold").innerHTML = "wrong input"; 
        return;
    }


    for (let i = 0; i < beKarakter.length; i++)
    {
        var error = false;
        for (let j = 0; j < betuk.length; j++)
        {
            if(beKarakter[i] == ' ')
            {
                kodolt += " ";
                error = true;
            }
            else
                if(beKarakter[i] == betuk[j])
                {
                    error = true;
                    var seged = (j + beSzam) % betuk.length;
                    kodolt += betuk[seged];
                }
        };
            if(error != true)
                {
                    document.getElementById("karakterMegold").innerHTML = "wrong input"; 
                    return;
                }
    };
    

    document.getElementById('karakterMegold').innerHTML = kodolt;
}
