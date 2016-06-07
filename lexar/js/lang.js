// preparing language file
var aLangKeys=new Array();
aLangKeys['en']=new Array();
aLangKeys['es']=new Array();

aLangKeys['en']['content']='content';
aLangKeys['en']['footer']='footer';
aLangKeys['en']['menu-inicio']='INDEX';
aLangKeys['en']['menu-servicios']='SERVICES';
aLangKeys['en']['menu-esp']='ESPECIALIZACIONES (TRAD)';
aLangKeys['en']['menu-conocenos']='CONOCENOS (TRAD)';
aLangKeys['en']['menu-sumate']='JOIN OUT TEAM';
aLangKeys['en']['menu-contacto']='CONTACT US';
aLangKeys['en']['menu-presupuesto']='PRESUPUESTO (TRAD)';
aLangKeys['en']['css']='CSS';
aLangKeys['en']['contact_us']='Contact us';
aLangKeys['en']['contactus-title']='Contact us';

aLangKeys['es']['content']='Contenido';
aLangKeys['es']['footer']='Pie';
aLangKeys['es']['menu-inicio']='INICIO';
aLangKeys['es']['menu-servicios']='SERVICIOS';
aLangKeys['es']['menu-esp']='ESPECIALIZACIONES';
aLangKeys['es']['menu-conocenos']='CONOCENOS';
aLangKeys['es']['menu-sumate']='SUMATE AL EQUIPO';
aLangKeys['es']['menu-contacto']='CONTACTANOS';
aLangKeys['es']['menu-presupuesto']='PRESUPUESTO';
aLangKeys['es']['contact_us']='Напишите нам';
aLangKeys['es']['contactus-title']='Contactanos!';


$(document).ready(function() {
    // onclick behavior
    $('.lang').click( function() {
        var lang = $(this).attr('id'); // obtain language id
        // translate all translatable elements
        $('.tr').each(function(i){
          $(this).text(aLangKeys[lang][ $(this).attr('key') ]);
        });

    } );

});
