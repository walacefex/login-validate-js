
var errors = null;

function post(url, dados, sucesso){
  $.support.cors = true;
  $.ajax({
    type: "POST",
    data : dados,
    crossDomain: true,
    crossOrigin: false,
    url: url,
    dataType: "json",
    contentEncoding:"gzip",
    success: sucesso,
    headers: {
    "Token" : "yBg5tGe/NjTJHaxCgKE7rQ=="
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
    alert('Erro na funcao:' +  url  +" - " + textStatus +" "+ errorThrown + " " + XMLHttpRequest.status + "");
        if (XMLHttpRequest.status == 403){
      }
    }
  });

} 

function retornoLogin(data){
  debugger;
  $(".msg").hide();
  if (data != undefined){
    if (data.codRetorno != undefined ){
      if (data.codRetorno>0){
        $(".msg").addClass("alert-danger");
        $(".msg").removeClass("alert-success");
      }
      else{
        $(".msg").removeClass("alert-danger");
        $(".msg").addClass("alert-success");
        $(".panel").hide(); // pronto era só isso aqui
        
      }
      if (data.mensagemRetorno!= undefined){
        $(".msg").html(data.mensagemRetorno);
        $(".msg").show();
      //alert(data.mensagemRetorno);
      } 
    }
  }
}
$(document).ready(function(){
  
  
    
  $("#btn-submit").click(function() {
    $(".msg").hide();  
    try{
  
      if(!$("#form-login").valid()) {
        return false;
       }
      var usuario = $('#usuario').val();
      var senha = $('#senha').val();
      var link = "http://cenw07w6279/api/curso/login"; 
      // window.location.href = 
      var dados= {"login": usuario, "senha": senha};
      post(link, dados, retornoLogin);
    }catch(e){
       console.error(e);
    }
               
    });
    return false;
});




//re037122
//mvpn@131099