let a = document.getElementById("show");
let b = document.getElementById("input");
let random = "";
let point = "";
 function easy(){
      a.innerHTML = " 0-dan 10-a qeder reqem sec (3 sansiniz var)";
      random = Math.floor(Math.random() *11);
      console.log(random);
      point = 3;
 }

 function hard(){
    a.innerHTML = "0-dan 25-e qeder reqem sec (5 sansiniz var)";
    random = Math.floor(Math.random() *26);
    console.log(random);
    point = 5;
 }

 function submit(){
     point --;
     if ( point == 0){
        document.getElementById("a").disabled = true;
     }
      if ( b.value == random ){
        a.innerHTML = "HALALDIR " + " sizin qalan sansiniz:" + point;
                      } 
     else if( b.value < random) {
        a.innerHTML = "yuxari qalx -->" + " sizin qalan sansiniz:" + point;
     }
     else if( b.value > random) {
        a.innerHTML = "asaqi dus -->" + " sizin qalan sansiniz:" + point;
             }
             else{
        a.innerHTML = `GAME OVER! The Answer is ${random}`;
     }
 }