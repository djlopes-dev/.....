function sim(){
    window.location.href = "https://www.youtube.com/watch?v=v4_QpiPvodM";}

  function desvia(t) {
     var btn = t;
     btn.style.position = 'absolute';
     btn.style.bottom = geraposiçao(10, 90);
     btn.style.left =geraposiçao(10, 90);
     console.log("opa...desviei");}
 
  function geraposiçao(min, max) {
    return (Math.random() * (max-min)+min)+"%";
}
