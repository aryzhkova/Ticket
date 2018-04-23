
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbi8vLy8vLy8vLy8gbWVudVxyXG4gICAgJCgnLm5hdl9faGFtYnVyZ2VyJykub24oXCJjbGlja1wiLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgaWYoJCgnLm5hdi1ncm91cF9wb3NpdGlvbl92ZXJ0aWNhbCcpLmhhc0NsYXNzKCdzaG93LW5hdmdyJykpe1xyXG4gICAgICAgICAgICQoJy5uYXYtZ3JvdXBfcG9zaXRpb25fdmVydGljYWwnKS5yZW1vdmVDbGFzcygnc2hvdy1uYXZncicpO1xyXG4gICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgJCgnLm5hdi1ncm91cF9wb3NpdGlvbl92ZXJ0aWNhbCcpLmFkZENsYXNzKCdzaG93LW5hdmdyJyk7XHJcbiAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm5hdi1ncm91cF9fbGluay10cmlhbmdsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIG5hdkl0ZW0gPSAkdGhpcy5jbG9zZXN0KCcubmF2LWdyb3VwX19pdGVtJyk7XHJcbiAgICAgICAgaWYgKG5hdkl0ZW0uaGFzQ2xhc3MoJ3Nob3cnKSkge1xyXG4gICAgICAgICAgICBuYXZJdGVtLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLm5hdi1ncm91cF9faXRlbScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbmF2SXRlbS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vY3VzdG9tIHNlbGVjdFxyXG4gICAgZnVuY3Rpb24gY3JlYXRlTGkodmFsKSB7XHJcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxJXCIpO1xyXG4gICAgICAgICQoZWwpLmF0dHIoXCJjbGFzc1wiLCBcImZvcm0tc2VhcmNoX19jdXJyZW5jeS1kZF9faXRlbVwiKTtcclxuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJBXCIpO1xyXG4gICAgICAgICQobGluaykuYXR0cih7XHJcbiAgICAgICAgICAgIFwiaHJlZlwiOiBcIiNcIixcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIiNcIixcclxuICAgICAgICAgICAgXCJjbGFzc1wiOiBcImZvcm0tc2VhcmNoX19jdXJyZW5jeS1kZF9fbGlua1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChsaW5rKS5odG1sKHZhbCk7XHJcbiAgICAgICAgJChlbCkuYXBwZW5kKCQobGluaykpO1xyXG5cclxuICAgICAgICByZXR1cm4gJChlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U2VsZWN0ZWQodmFsKSB7XHJcbiAgICAgICAgJCgnLmZvcm0tc2VhcmNoX19jdXJyZW5jeS1pbnB1dCcpLnRleHQodmFsKTtcclxuICAgICAgICAkKFwiI3NlbGVjdCBvcHRpb25cIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSB2YWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKFwic2VsZWN0ZWRcIiwgXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlblNlbGVjdCgpIHtcclxuICAgICAgICAkKCcuZm9ybS1zZWFyY2hfX2N1cnJlbmN5LWRkJykuYWRkQ2xhc3MoJ3Nob3ctZGQnKTtcclxuICAgICAgICAkKCcgLmZvcm0tc2VhcmNoX19jdXJyZW5jeS1pbnB1dCcpLmFkZENsYXNzKCdoaWRlLWJvcmRlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVTZWxlY3QoKSB7XHJcbiAgICAgICAgJCgnLmZvcm0tc2VhcmNoX19jdXJyZW5jeS1kZCcpLnJlbW92ZUNsYXNzKCdzaG93LWRkJyk7XHJcbiAgICAgICAgJCgnIC5mb3JtLXNlYXJjaF9fY3VycmVuY3ktaW5wdXQnKS5yZW1vdmVDbGFzcygnaGlkZS1ib3JkZXInKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVUxcIik7XHJcbiAgICAkKGRkKS5hdHRyKFwiY2xhc3NcIiwgXCJmb3JtLXNlYXJjaF9fY3VycmVuY3ktZGRcIik7XHJcbiAgICAkKCcuZm9ybS1zZWFyY2hfX2N1cnJlbmN5JykuYXBwZW5kKCQoZGQpKTtcclxuICAgICQoXCIjc2VsZWN0IG9wdGlvblwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKGRkKS5hcHBlbmQoY3JlYXRlTGkoJCh0aGlzKS52YWwoKSkpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJzZWxlY3RlZFwiKSA9PSBcInNlbGVjdGVkXCIpIHtcclxuICAgICAgICAgICAgJCgnLmZvcm0tc2VhcmNoX19jdXJyZW5jeS1pbnB1dCcpLnRleHQoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKCcuZm9ybS1zZWFyY2hfX2N1cnJlbmN5LWRkX19pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHZhbCA9ICQoZS50YXJnZXQpLnRleHQoKTtcclxuICAgICAgICBzZXRTZWxlY3RlZCh2YWwpO1xyXG4gICAgICAgIGhpZGVTZWxlY3QoKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLmZvcm0tc2VhcmNoX19jdXJyZW5jeS1kZGxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoJCgnLmZvcm0tc2VhcmNoX19jdXJyZW5jeS1kZCcpLmhhc0NsYXNzKCdzaG93LWRkJykpIHtcclxuICAgICAgICAgICAgaGlkZVNlbGVjdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wZW5TZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vZGF0ZXBpY2tlclxyXG4gICAgJCgnI2RlcGFydHVyZURhdGUnKS5kYXRlcGlja2VyKFxyXG4gICAgICAgIHtkYXRlRm9ybWF0OiAnZGQubW0ueXknfVxyXG4gICAgKTtcclxuICAgICQoJyNyZXR1cm5EYXRlJykuZGF0ZXBpY2tlcihcclxuICAgICAgICB7ZGF0ZUZvcm1hdDogJ2RkLm1tLnl5J31cclxuICAgICk7XHJcblxyXG4gICAgJCgnLmZvcm0tc2VhcmNoX19sYWJlbC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2Zvcm0tc2VhcmNoX19sYWJlbC1saW5rX2RhdGVfZGVwYXJ0dXJlJykpIHtcclxuICAgICAgICAgICAgJChcIiNkZXBhcnR1cmVEYXRlXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdmb3JtLXNlYXJjaF9fbGFiZWwtbGlua19kYXRlX3JldHVybicpKSB7XHJcbiAgICAgICAgICAgICQoJyNyZXR1cm5EYXRlJykuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vLy8vLy8vLy8vLy8vIGhpZGUgb24gY2xpY2sgb3V0c2lkIGRkLCBuYXYtZ3JvdXBcclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlT25DbGlja091dHNpZGUoZSkge1xyXG4gICAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnLm5hdi1ncm91cF9faXRlbScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoJCgnLm5hdi1ncm91cF9faXRlbScpLmhhc0NsYXNzKCdzaG93JykpIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXYtZ3JvdXBfX2l0ZW0nKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tc2VhcmNoX19jdXJyZW5jeS1kZCcpLmxlbmd0aCAmJiAhJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Zvcm0tc2VhcmNoX19jdXJyZW5jeS1kZGxpbmsnKSkge1xyXG4gICAgICAgICAgICBpZiAoJCgnLmZvcm0tc2VhcmNoX19jdXJyZW5jeS1kZCcpLmhhc0NsYXNzKCdzaG93LWRkJykpIHtcclxuICAgICAgICAgICAgICAgIGhpZGVTZWxlY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISQoZS50YXJnZXQpLmNsb3Nlc3QoJy5uYXYtZ3JvdXAnKS5sZW5ndGggJiYgISQoZS50YXJnZXQpLmhhc0NsYXNzKCduYXZfX2hhbWJ1cmdlcicpKSB7XHJcbiAgICAgICAgICAgIGlmICgkKCcubmF2LWdyb3VwJykuaGFzQ2xhc3MoJ3Nob3ctbmF2Z3InKSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdi1ncm91cCcpLnJlbW92ZUNsYXNzKCdzaG93LW5hdmdyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaGlkZU9uQ2xpY2tPdXRzaWRlKGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vY2hlY2tib3ggY2hlY2tlZCBcIlJldHVybiBkYXRlXCIgc2V0IGRpc2FibGVcclxuXHJcbiAgICAkKCcuZm9ybS1zZWFyY2hfX2NoZWNrYm94JykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICQoJyNyZXR1cm5EYXRlJykucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNyZXR1cm5EYXRlJykucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vLy8vLy8vLy8vLyBzZXQgZXhhbXBsZSBpbiBpbnB1dFxyXG5cclxuICAgICQoJy5mb3JtLXNlYXJjaF9fZXhhbXBsZS1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Zvcm0tc2VhcmNoX19leGFtcGxlLWxpbmtfZGVwYXJ0dXJlJykpe1xyXG4gICAgICAgICAgICAkKCcjZGVwYXJ0dXJlQ2l0eScpLnZhbCgkKGUudGFyZ2V0KS50ZXh0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKGUudGFyZ2V0KS5oYXNDbGFzcygnZm9ybS1zZWFyY2hfX2V4YW1wbGUtbGlua19hcnJpdmFsJykpe1xyXG4gICAgICAgICAgICAkKCcjYXJyaXZhbENpdHknKS52YWwoJChlLnRhcmdldCkudGV4dCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vLy8vLy8vLy8vIHN3YXAgaW5wdXQgdmFsdWVzXHJcbiAgICAkKCcuZm9ybS1zZWFyY2hfX3N3YXAnKS5vbignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciB0ZW1wID1cIlwiO1xyXG4gICAgICAgIHRlbXAgPSAkKCcjYXJyaXZhbENpdHknKS52YWwoKTtcclxuICAgICAgICAkKCcjYXJyaXZhbENpdHknKS52YWwoJCgnI2RlcGFydHVyZUNpdHknKS52YWwoKSk7XHJcbiAgICAgICAgJCgnI2RlcGFydHVyZUNpdHknKS52YWwodGVtcCk7XHJcbiAgICB9KTtcclxufSk7Il19
