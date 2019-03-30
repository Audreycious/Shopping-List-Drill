$(function(){
    
    //Trigger the clicking events
    $('.shopping-list').on('click', 'button', function(event) {
        //toggle check button
        if ($(this).attr('class') === 'shopping-item-toggle') {
            $(this).parents('li').find('.shopping-item').toggleClass('shopping-item__checked');
        } 
    });

        //delete list item 
    $('.shopping-item-delete').click(function() { 
        $(this).closest('li').remove(); 
    });

        //submit form
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        let textInput = $(this).find('input#shopping-list-entry').val();
        $(this).siblings('.shopping-list').prepend( `<li>
        <span class="shopping-item">${textInput}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>` );
    });
});




// console.log(this.tagName);
// 
// .closest('span')

// classOf = $(this).prop('class');
//         console.log(classOf);
//         classOf = $(this).parents('li').prop('class');
//         console.log(classOf);
// let classOf = $(this).parents('li').find('.shopping-item').prop('class');
//         console.log(classOf);