$(document).ready(function() {
       $(".botones #tecla").click(function(){
            nuevo=$(this).val();
            viejo=$(".screen #pantalla").val()
            $(".screen #pantalla").val(viejo+nuevo);
        });
        
        $(".botones #result").click(function(){
            ecuacion=$(".screen #pantalla").val();
            $(".screen #pantalla").val("");
            $(".screen #pantalla").val(eval(ecuacion));
        });
        
        $(".botones #borrar").click(function(){
            $(".screen #pantalla").val("");
        });
});