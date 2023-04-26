$(document).ready(function(){



let y =$("input[name='envoyer']").click(function(e){
    e.preventDefault()
    console.log(nom,prenom); 
    let displayNom =$("#nomComplet").html($("option").val()+" "+$("input#nom ").val() + " "+$("input#prenom ").val())

    let civil =$("option").val()
    console.log(civil);
    
})
// ===============================================
// récupération de la valeur du RANGE
// ===========================================
$("#niveau").on("input", function(){
  let range=  $("#niveau_display").html($(this).val());
  console.log(range);
  });

//   =================================================
// récupération du mot de passe et affichage 
// =====================================================



$("#checked_pass").click( function addValue(){
    if ($("#checked_pass").is(":checked")) {
        // console.log('test');
    let displayY=  $("#confirm_pass").attr("type",'text').html($("#motDePasse").val());
    
    let displayZ=  $("#display_pass").attr("type","text").html($("#motDePasse").val());
        return displayY , displayZ
    }
    isMatch(displayY,displayZ)
    // console.log(displayY);
});

$("#checked_pass").click(function iMatch(z,y){
    let compter =0

    // compter=y
    // compter=z
    console.log(compter);
    console.log($("input"));

    var nb_input_actif =3
    var input_length=2
    var nb_div_pass = $("#motDePasse");

    console.log(nb_div_pass.length);

    if ($("#nom").val()==""&&$("#prenom").val()==""&&$("#motDePasse").val()=="") {
      let connect=  $("#envoyer").attr("disabled",true)
      //   $("#envoyer").css("background","red")
      
      // $("#envoyer")[0].css('background','red')
    }else{
        
        let connect=  $("#envoyer").attr("disabled",false)
        console.log('veillez remplir tous les champs');
        
    }
    
    if ($("#nom").val()==""||$("#prenom").val()==""||$("#motDePasse").val()=="") {
        $("#label_nom").css("color","red")
        $("#label_prenom").css("color","red")
        $("#label_pass").css("color","red")
        let connect=  $("#envoyer").attr("disabled",true)
        
    }
    

    // console.log(corriger);



























   
    //     if (  $("#confirm_pass").val()===" " && $("#display_pass").val()===" "){
      
    //     return    $("#envoyer").css("background",'green')
    //  }
    //  else{
    //     return   $("#envoyer").css("background",'red')
          
    //    }
    
})

// let mot_de_pass=$("#display_pass").click(function(){
//     $("#confirm_pass").html=($("#motDePasse").val())
// })
// console.log(mot_de_pass);
// console.log(y);
// console.log(nomComplet);

// récupération des input 














})