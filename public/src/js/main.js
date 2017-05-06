$(document).ready(function(){

    var dirRtl = $('#dir-rtl');
    var dirLtr = $('#dir-ltr');
    var editableContainer = document.getElementById("editable-container");

    $(dirRtl).click(function(){
        if (!$(this).hasClass("active")) {
            dirRtl.removeClass('btn-default');
            dirRtl.addClass('btn-warning');
            dirLtr.removeClass('btn-warning');
            dirLtr.addClass('btn-default');
            document.getElementById("editable-container").style.direction = 'rtl';
        }
    });

    $(dirLtr).click(function(){
        if (!$(this).hasClass("active")) {
            dirLtr.removeClass('btn-default');
            dirLtr.addClass('btn-warning');
            dirRtl.removeClass('btn-warning');
            dirRtl.addClass('btn-default');
            document.getElementById("editable-container").style.direction = 'ltr';
        }
    });


});

