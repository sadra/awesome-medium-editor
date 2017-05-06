$(document).ready(function(){

    var dirRtl = $('#dir-rtl');
    var dirLtr = $('#dir-ltr');

    var extractToHtml_Btn = $('#extract-to-html');
    var extractToMarkdown_Btn = $('#extract-to-markdown');
    var extractToExo_Btn = $('#extract-to-hexo');

    toastr.options.closeButton = true;
    toastr.options.closeMethod = 'fadeOut';
    toastr.options.closeDuration = 200;
    toastr.options.timeOut = 2500;
    toastr.options.closeEasing = 'swing';
    toastr.options.preventDuplicates = true;
    toastr.options.positionClass = 'toast-top-center';
    toastr.options.progressBar = true;


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

    $(extractToHtml_Btn).click(function(){

        var content = document.getElementById('editable-container').innerHTML;

        copyTextToClipboard(content);

        toastr.success("Your post copied as a <b>HTML</b>, just press crtl+V to paste it into your blog. ");
    });

    $(extractToMarkdown_Btn).click(function(){

        var content = toMarkdown(document.getElementById('editable-container').innerHTML);

        content = content.replace(/<\/span>/g,'');
        content = content.replace(/<\/figure>/g,'');
        content = content.replace(/<figure contenteditable="false">/g,'');
        content = content.replace(/<\/div>/g,'');
        content = content.replace(/<div class="medium-insert-images">/g,'');
        content = content.replace(/<span style="color: inherit;">/g,'');

        copyTextToClipboard(content);

        toastr.success('Your post copied as a <b>MarkDown</b>, just press crtl+V to paste it into your blog. ');
    });


    function copyTextToClipboard(text) {
        var textArea = document.createElement("textarea");

        textArea.style.position = 'fixed';
        textArea.style.top = 0;
        textArea.style.left = 0;
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = 0;
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
        document.body.removeChild(textArea);
    }


});

