let kullaniciIsim = prompt("İsmini yazar mısın ?");
document.querySelector('#isim').innerHTML = "  " + kullaniciIsim;

function tarihYaz(){
  //tarih bilgisi alınıyor
  let tarih = new Date();
  let saat = tarih.getHours();
  let dakika = tarih.getMinutes();
  let saniye = tarih.getSeconds();
  let gun;
  
  //arka plan rengi belirleniyor
  let karsilamaYazisi = document.querySelector('h1');
  let saatYazisi = document.querySelector('#tarih');
  karsilamaYazisi.style.backgroundColor = `rgb(${saniye},${saat},${dakika})`;
  saatYazisi.style.backgroundColor = `rgb(${saniye*4},${saniye*3},${saniye*2})`;

  //getDay() değerine göre gün belirleniyor
  if(tarih.getDay() == 1){
    gun = 'Pazartesi';
  }
  else if(tarih.getDay() == 2){
    gun = 'Salı';
  }
  else if(tarih.getDay() == 3){
    gun = 'Çarşamba';
  }
  else if(tarih.getDay() == 4){
    gun = 'Perşembe';
  }
  else if(tarih.getDay() == 5){
    gun = 'Cuma';
  }
  else if(tarih.getDay() == 6){
    gun = 'Cumartesi';
  }
  else if(tarih.getDay() == 7){
    gun = 'Pazar';
  }

  //0'dan küçük olma durumuna göre saat,dakika ve saniye başına 0 ekleniyor
  if(saniye < 10){
    saniye =`0${saniye}`;
  }
  if(dakika < 10){
    dakika = `0${dakika}`;
  }
  if(saat < 10){
    saat = `0${saat}`;
  }
  //yazdırma işlemi gerçekleştiriliyor
  document.querySelector('#tarih').innerHTML = `${gun} günü ; ${saat}:${dakika}:${saniye} saatinde bu sayfadasınız.`;

  setTimeout(tarihYaz,1000);//her saniye fonksiyon kendini çağırıyor
  
}

tarihYaz();
