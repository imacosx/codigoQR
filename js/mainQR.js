$(document).ready(function(){
    $('#codigo_qr').val('');
    $('#descripcion').val('');
    $('#codigo_qr').focus();
    $('#descripcion').focus();
    var miCodigoQR = new QRCode("qr-final");
    $('#btn_generar').click(function(){
        var string = $('#codigo_qr').val();
        var string2 = $('#descripcion').val();

            if(string2 == ''){
                $('#descripcion').addClass('is-invalid');
                $('#resp_desc').html('<span class="text-danger">Este campo es requerido</span>');
                setTimeout(function(){ 
                            $('#descripcion').removeClass('is-invalid');
                            $('#resp_desc').text('');
                         }, 3000);
            }else if(string == ''){  
                $('#codigo_qr').addClass('is-invalid'); 
                $('#resp_cod').html('<span class="text-danger">Este campo es requerido</span>');
                setTimeout(function(){ 
                    $('#codigo_qr').removeClass('is-invalid');
                    $('#resp_cod').text('');
                 }, 3000); 
            }else{
                $("#qr-final").css("display","inline-block");
                $("#qr-final").css("display","inline-block");
                $("#btn_descargar").removeAttr("style",false);
                miCodigoQR.makeCode(string);
            }   
    });

    $("#btn_descargar").on("click",function(){
        var base64 = $("#qr-final img").attr('src');
        var desc = $('#descripcion').val();
       
        $("#btn_descargar").attr('href', base64);
        $("#btn_descargar").attr('download', desc);
        $("#btn_descargar").trigger("click");
      });
});