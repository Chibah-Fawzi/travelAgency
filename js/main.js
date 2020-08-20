AOS.init({ duration: 700 });
$(document).ready(function () {

    $(".gallery-img").click(function () {
        var t = $(this).attr("alt");
        $(".modal-body").html("<img src='assets/" + t + "' class='modal-img'>");
        $("#myModal").modal();
    });

    $('#one').hover(function () {
        // over
        $('#one > i').hide();
        $('#one > ul').fadeIn(500);
    }, function () {
        // out
        $('#one > ul').hide();
        $('#one > i').fadeIn(500);
    }
    );
    $('#two').hover(function () {
        // over
        $('#two > i').hide();
        $('#two > .content').fadeIn(500);
    }, function () {
        // out
        $('#two > .content').hide();
        $('#two > i').fadeIn(500);
    }
    );
    $('#three').hover(function () {
        // over
        $('#three > i').hide();
        $('#three > .content').fadeIn(500);
    }, function () {
        // out
        $('#three > .content').hide();
        $('#three > i').fadeIn(500);
    }
    );
    $('#four').hover(function () {
        // over
        $('#four > i').hide();
        $('#four > .content').fadeIn(500);
    }, function () {
        // out
        $('#four > .content').hide();
        $('#four > i').fadeIn(500);
    }
    );
});