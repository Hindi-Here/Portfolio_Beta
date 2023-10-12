/* animation text column-body */
function text_animation3(){
    $('#column-text3').show();
    $('#column-text3').css('animation', 'discraption-text-animation 3s forwards');
}
function text_animation31(){
    $('#column-text3').hide();
}
function text_animation2(){
    $('#column-text2').show();
    $('#column-text2').css('animation', 'discraption-text-animation 3s forwards');
}
function text_animation21(){
    $('#column-text2').hide();
}
function text_animation1(){
    $('#column-text1').show();
    $('#column-text1').css('animation', 'discraption-text-animation 3s forwards');
}
function text_animation11(){
    $('#column-text1').hide();
}

/* hide/Show block Header */
function Main_Click(){
    $('.column-body').show(200).css('display', 'grid');
    $('.photoshop-body').css('display', 'none');
    $('.programs-body').css('display', 'none');
    $('.videos-body').css('display', 'none');
    $('.MyWork').css('display', 'none');
    $('.AboutMe').css('display', 'none');
    $('.messageMe').css('display', 'none');
    $('.dark-preview').css('display', 'none');
}
function MyWork_Click(){
    $('.MyWork').fadeIn(200).css('display', 'block');
    $('.AboutMe').css('display', 'none');
    $('.messageMe').css('display', 'none');
    $('.dark-preview').css('display', 'none');
}
function aboutMe_Click(){
    $('.MyWork').css('display', 'none');
    $('.AboutMe').fadeIn(200).css('display', 'block');
    $('.messageMe').css('display', 'none');
    $('.dark-preview').css('display', 'none');
}
function messageMe_Click(){
    $('.MyWork').css('display', 'none');
    $('.AboutMe').css('display', 'none');
    $('.messageMe').fadeIn(200).css('display', 'block');
    $('.dark-preview').css('display', 'none');
}
function OutZone_Click(){
    $('.MyWork').css('display', 'none');
    $('.messageMe').css('display', 'none');
    $('.AboutMe').css('display', 'none');
    $('.dark-preview').css('display', 'none');
}

/* header-bar MyWork panels*/
function photoshop_work(){
    $('.MyWork').css('display', 'none');
    $('.column-body').css('display', 'none');
    $('.photoshop-body').show(200).css('display', 'grid');
    $('.programs-body').css('display', 'none');
    $('.videos-body').css('display', 'none');
}

function programs_work(){
    $('.MyWork').css('display', 'none');
    $('.column-body').css('display', 'none');
    $('.photoshop-body').css('display', 'none');
    $('.programs-body').show(200).css('display', 'grid');
    $('.videos-body').css('display', 'none');
}
function video_work(){
    $('.MyWork').css('display', 'none');
    $('.column-body').css('display', 'none');
    $('.photoshop-body').css('display', 'none');
    $('.programs-body').css('display', 'none');
    $('.videos-body').show(200).css('display', 'grid');
}

// protoshop/programs work dark-preview-mode
$(document).on('click', '.photoshop-body-image', function(){
    if(window.innerWidth > 600)
    {
        $('.dark-preview').css('display', 'block');
        var a = $(this).attr('src');
        $('.dark-preview-image').attr('src', a);
    }
});
$(document).on('click', '.image-programs', function(){
    if(window.innerWidth > 600)
    {
        $('.dark-preview').css('display', 'block');
        var a = $(this).attr('src');
        $('.dark-preview-image').attr('src', a);
    }
});

var programs_image_css = {
    "width" : "600px",
    "height" : "300px",
    "margin" :"225px auto",
}
$(document).on('click', '.programs-line-body-image', function(){
    if(window.innerWidth > 600)
    {
        $('.dark-preview-block').css(programs_image_css);
        $('.dark-preview').css('display', 'block');
        var a = $(this).attr('src');
        $('.dark-preview-image').attr('src', a);
    }
});

$(document).on('click', '.dark-preview', function(){
    $('.dark-preview').css('display', 'none');
});

// hide panels 3 & 4 if small width page
timer = setInterval(() => { if(window.innerWidth < 500)
    {
    $('.AboutMe').hide(100),
    $('.messageMe').hide(100)
    }
}, 100);
