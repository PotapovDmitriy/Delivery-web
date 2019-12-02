
$(document).ready(function () {
    console.log("submit")

    $('#submit-button').click( function(){
        if($('#news-text').val().length == 0){
            $('#news-text').css({
                'color': 'red',
                'border-color': 'red'
            });
        }

        try{
            var file = document.getElementById('input-container').files[0]; 
            console.log(file.name);
            console.log(file.type);
        }
        catch{
            console.log("null")
            // console.log($('#input-container').val.length)
            // $('#input-container__input-title').css({
            //     "color": "red"
            // })
        }
    })


    $('#news-text').bind('input', function(){
        $('#currChar').html($(this).val().length);
        
    });
    $('#news-text').click( function(){
        $(this).css({
            "color": "black" ,
            'border-color':'black'                   
        });
    });
    
    $('#input-container').change( function(){
         $('#file-name').css({
                "display": "inline"                        
            });
            var file = document.getElementById('input-container').files[0]; 
            if(file.type != "image/png"  && file.type != "image/jpeg"){

                $('#file-name').html("Неверный формат файла");
                $("#submit-button").prop('disabled', true);
                // $("#input-container__input-title").css({
                //     "color": "red"                  
                // });
                $('#file-name').css({
                    "color": "red"                        
                });
                // $('#submit-button').css({
                //     "background": "red" 
                // });

            }else{
                $('#file-name').html(file.name);
                $("#submit-button").prop('disabled', false);
                $('#file-name').css({
                    "color": "black"                        
                });
                // $('#submit-button').css({
                //     'background': '#E5E31F'
                // });
                // preview(file);
            }

    });
    
}); 
// function preview(file) {
//     var reader = new FileReader();
//     reader.addEventListener('load', function(event) {
//         var img = document.createElement('img');

//         var itemPreview = itemPreviewTemplate.clone();

//         itemPreview.find('#img-wrap img').attr('src', event.target.result);
//         $("#img-wrap").css({
//             "display":"inline"
//         });
//         itemPreview.data('id', file.name);

//         imagesList.append(itemPreview);

//         queue[file.name] = file;

//     });
//     reader.readAsDataURL(file);
// }


