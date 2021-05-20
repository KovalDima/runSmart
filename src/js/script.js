$(document).ready(function () {
  $(".carousel__wrapper").slick({
    dots: false,
    adaptiveHeight: true,
    infinite: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/arrows/arrow-left.png" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/arrows/arrow-right.png" /></button>',
    responsive: [
      {
        breakpoint: 920,
        settings: {
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.catalog__wrapper")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );

  // $(".catalog__item-link").each(function (i) {
  //   $(this).on("click", function (e) {
  //     e.preventDefault();
  //     $(".catalog__item-front").eq(i).toggleClass("catalog__item-front_active");
  //     $(".catalog__item-back").eq(i).toggleClass("catalog__item-back_active");
  //   });
  // });

  // $(".catalog__item-link-back").each(function (i) {
  //   $(this).on("click", function (e) {
  //     e.preventDefault();
  //     $(".catalog__item-front").eq(i).toggleClass("catalog__item-front_active");
  //     $(".catalog__item-back").eq(i).toggleClass("catalog__item-back_active");
  //   });
  // });

  function toggleCard(className) {
    $(className).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog__item-front")
          .eq(i)
          .toggleClass("catalog__item-front_active");
        $(".catalog__item-back").eq(i).toggleClass("catalog__item-back_active");
      });
    });
  }

  toggleCard(".catalog__item-link");
  toggleCard(".catalog__item-link-back");

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, .modal").fadeOut("slow");
  });
  $(".btn_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog__item-title").eq(i).text());
      $(".overlay, #order").fadeIn("slow");
    });
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format(
            "Минимальное количество символов - {0}"
          ),
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неверный формат почты",
        },
      },
    });
  }

  validateForms("#consultation-form");
  validateForms("#consultation form");
  validateForms("#order form");

  $("input[name=phone]").mask("+38(099)9999999");

  /* $("form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $("form").trigger("reset");
    });
    return false;
  }); */
});
