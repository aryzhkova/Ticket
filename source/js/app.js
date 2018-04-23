
$(document).ready(function() {
////////// menu
    $('.nav__hamburger').on("click",function(e){
       e.preventDefault();
       if($('.nav-group_position_vertical').hasClass('show-navgr')){
           $('.nav-group_position_vertical').removeClass('show-navgr');
       }else{
           $('.nav-group_position_vertical').addClass('show-navgr');
       }

    });

    $('.nav-group__link-triangle').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var navItem = $this.closest('.nav-group__item');
        if (navItem.hasClass('show')) {
            navItem.removeClass('show');
        } else {
            $('.nav-group__item').each(function () {
                $(this).removeClass('show');
            });
            navItem.addClass('show');
        }
    });


//////////////custom select
    function createLi(val) {
        var el = document.createElement("LI");
        $(el).attr("class", "form-search__currency-dd__item");
        var link = document.createElement("A");
        $(link).attr({
            "href": "#",
            "title": "#",
            "class": "form-search__currency-dd__link"
        });
        $(link).html(val);
        $(el).append($(link));

        return $(el);
    }

    function setSelected(val) {
        $('.form-search__currency-input').text(val);
        $("#select option").each(function () {

            if ($(this).val() == val) {
                console.log($(this).val());
                $(this).attr("selected", "selected");
            } else {
                $(this).removeAttr("selected");
            }
        });
    }

    function openSelect() {
        $('.form-search__currency-dd').addClass('show-dd');
        $(' .form-search__currency-input').addClass('hide-border');
    }

    function hideSelect() {
        $('.form-search__currency-dd').removeClass('show-dd');
        $(' .form-search__currency-input').removeClass('hide-border');
    }

    var dd = document.createElement("UL");
    $(dd).attr("class", "form-search__currency-dd");
    $('.form-search__currency').append($(dd));
    $("#select option").each(function () {
        $(dd).append(createLi($(this).val()));
        if ($(this).attr("selected") == "selected") {
            $('.form-search__currency-input').text($(this).val());
        }
    });
    $('.form-search__currency-dd__item').on('click', function (e) {
        e.preventDefault();
        var val = $(e.target).text();
        setSelected(val);
        hideSelect();
    });
    $('.form-search__currency-ddlink').on('click', function (e) {
        e.preventDefault();
        if ($('.form-search__currency-dd').hasClass('show-dd')) {
            hideSelect();
        } else {
            openSelect();
        }
    });


///////////////////datepicker
    $('#departureDate').datepicker(
        {dateFormat: 'dd.mm.yy'}
    );
    $('#returnDate').datepicker(
        {dateFormat: 'dd.mm.yy'}
    );

    $('.form-search__label-link').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('form-search__label-link_date_departure')) {
            $("#departureDate").focus();
        }
        if ($(this).hasClass('form-search__label-link_date_return')) {
            $('#returnDate').focus();
        }
    });
    ////////////// hide on click outsid dd, nav-group

    function hideOnClickOutside(e) {
        if (!$(e.target).closest('.nav-group__item').length) {
            if ($('.nav-group__item').hasClass('show')) {
                $('.nav-group__item').removeClass('show');
            }
        }
        if (!$(e.target).closest('.form-search__currency-dd').length && !$(e.target).hasClass('form-search__currency-ddlink')) {
            if ($('.form-search__currency-dd').hasClass('show-dd')) {
                hideSelect();
            }
        }
        if (!$(e.target).closest('.nav-group').length && !$(e.target).hasClass('nav__hamburger')) {
            if ($('.nav-group').hasClass('show-navgr')) {
                $('.nav-group').removeClass('show-navgr');
            }
        }

    }

    $(document).on('click', function (e) {
        hideOnClickOutside(e);
    });

    ////////////checkbox checked "Return date" set disable

    $('.form-search__checkbox').change(function () {
        if ($(this).prop("checked") == true) {
            $('#returnDate').prop("disabled", true);
        } else {
            $('#returnDate').prop("disabled", false);
        }
    });
    //////////// set example in input

    $('.form-search__example-link').on('click', function (e) {
        e.preventDefault();
        if($(e.target).hasClass('form-search__example-link_departure')){
            $('#departureCity').val($(e.target).text());
        }
        if($(e.target).hasClass('form-search__example-link_arrival')){
            $('#arrivalCity').val($(e.target).text());
        }
    });
    /////////// swap input values
    $('.form-search__swap').on('click',function (e) {
        e.preventDefault();
        var temp ="";
        temp = $('#arrivalCity').val();
        $('#arrivalCity').val($('#departureCity').val());
        $('#departureCity').val(temp);
    });
});