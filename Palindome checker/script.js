const hasil = document.getElementById("masukan")


function terbalik(str){
    return str.split("").reverse().join("");
}


function check(){
    const value = hasil.value
    const reverse = terbalik(value)
    if (value == reverse){
        alert("Kata palindrome")
    }else{
        alert("nope")
    }
    hasil.value="";


}