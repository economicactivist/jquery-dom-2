$('form').on('submit', function(e){
    e.preventDefault()
    $('<div/>').appendTo('body')
    $('div').append(`<h1>Title: ${$('#title').val()}</h1>`)
    .append(`<h1>Rating: ${$('#rating').val()}</h1>`)
    .append('<button>Delete</button>')



    $('button').last().addClass('delete-button')
    $('.delete-button').on('click', function(e){
        $(this).closest('div').remove()
        
    })
 
    

})






