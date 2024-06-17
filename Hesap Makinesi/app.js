var islem='';;
var ekran="";
var sayi1="";
var sayi2="";

function sayi(numara){
  if(islem==''){
     sayi1+=numara;
  }else{
    sayi2+=numara;
  }
  ekran=sayi1+""+islem+""+sayi2;
  document.getElementById("ekran").innerHTML=ekran;
}

function operasyon(karakter){
  islem=karakter;
  ekran=sayi1+""+islem+""+sayi2;
  document.getElementById("ekran").innerHTML=ekran;
}

function sonuc(){
  if(islem=='+'){
    document.getElementById("ekran").innerHTML=String(Number(Number(sayi1)+Number(sayi2)));
    console.log(String(Number(Number(sayi1)+Number(sayi2))));
  }else if(islem=='-'){
    document.getElementById("ekran").innerHTML=String(Number(Number(sayi1)-Number(sayi2)));
    console.log(String(Number(Number(sayi1)-Number(sayi2))));
  }else if(islem=='*'){
    document.getElementById("ekran").innerHTML=String(Number(Number(sayi1)*Number(sayi2)));
    console.log(String(Number(Number(sayi1)*Number(sayi2))));
  }else if(islem=='/'){
    document.getElementById("ekran").innerHTML=String(Number(Number(sayi1)/Number(sayi2)));
    console.log(String(Number(Number(sayi1)/Number(sayi2))));
  }
  sayi1="";
  sayi2="";
  ekran="";
  islem='';
  
}

function temizle(){
    sayi1="";
    sayi2="";
    ekran="";
    islem='';
    document.getElementById("ekran").innerHTML="";
}