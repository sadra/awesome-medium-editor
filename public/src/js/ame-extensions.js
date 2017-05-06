/**
 * Created by sadra on 5/6/17.
 */


var insertImageExtension = MediumEditor.Extension.extend({
    name: 'insertImage',

    init: function () {
        this.button = this.document.createElement('button');
        this.button.classList.add('medium-editor-action');
        this.button.innerHTML = '<i class="fa fa-picture-o" aria-hidden="true"></i>';
        this.button.title = 'Insert Image';

        this.on(this.button, 'click', this.handleClick.bind(this));
    },

    getButton: function () {
        return this.button;
    },

    handleClick: function (event) {
        this.base.checkContentChanged();

        console.log(this.document.getSelection().toString().trim());

        var imgSrc = this.document.getSelection().toString().trim();
        var theHTML = '<div class="medium-insert-images">' + '<figure contenteditable="false">' +
            '<img src="'+imgSrc+'" alt=""></figure></div><br/>';

        insertImageElements(theHTML, '')
    }

});

function insertImageElements(html, selectPastedContent){

    var sel, range;
    if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            // Range.createContextualFragment() would be useful here but is
            // only relatively recently standardized and is not supported in
            // some browsers (IE9, for one)
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            var firstNode = frag.firstChild;
            range.insertNode(frag);

            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                if (selectPastedContent) {
                    range.setStartBefore(firstNode);
                } else {
                    range.collapse(true);
                }
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if ( (sel = document.selection) && sel.type != "Control") {
        // IE < 9
        var originalRange = sel.createRange();
        originalRange.collapse(true);
        sel.createRange().pasteHTML(html);
        if (selectPastedContent) {
            range = sel.createRange();
            range.setEndPoint("StartToStart", originalRange);
            range.select();
        }
    }


}

var editor = new MediumEditor('.editable', {
    placeholder: false,
    buttonLabels: 'fontawesome',
    toolbar: {
        /* These are the default options for the toolbar,
         if nothing is passed this is what is used */
        allowMultiParagraphSelection: true,
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h1', 'h2', 'h3', 'quote', 'strikethrough', 'orderedlist', 'unorderedlist', 'indent', 'outdent', 'justifyCenter', 'justifyFull', 'justifyLeft', 'justifyRight', 'removeFormat', 'insertImage'],
        diffLeft: 0,
        diffTop: -10,
        firstButtonClass: 'medium-editor-button-first',
        lastButtonClass: 'medium-editor-button-last',
        relativeContainer: null,
        standardizeSelectionStart: false,
        static: false,

        /* options which only apply when static is true */
        align: 'center',
        sticky: false,
        updateOnEmptySelection: false
    },
    extensions: {
        'insertImage': new insertImageExtension(),
        'multi_placeholder': new MediumEditorMultiPlaceholders({
            placeholders: [
                {
                    tag: 'h1',
                    text: 'Title'
                },
                {
                    tag: 'p',
                    text: 'Tell your story...'
                }
            ]
        })
    }
});

$(function () {
    $('.editable').mediumInsert({
        editor: editor
    });
});

