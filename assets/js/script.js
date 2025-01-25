$(function () {
  const $modal = $("#modal");
  // modalを開く
  $(".btn-openModal").click((e) => {
    const $this = $(e.currentTarget);
    const field = $this.data("field");
    const $modalContent = $(`#modal section[data-field="${field}"]`);

    $modal.addClass("is-active");
    $modalContent.addClass("is-show");
    $("body").addClass("is-modal");
  });
  // modalを閉じる
  $(".btn-closeModal").click((e) => {
    const $this = $(e.currentTarget);
    const $modalContent = $this.parents("section.is-show");

    $modalContent.removeClass("is-show");
    $modal.removeClass("is-active");
    $("body").removeClass("is-modal");
  });

  // upsell
  $("#upsell .btn-close").click((e) => {
    const $this = $(e.currentTarget);
    const $upsellContent = $this.parents("section.is-show");

    $upsellContent.removeClass("is-show");
  });

  // alert
  $(".alert .btn-close").click((e) => {
    const $this = $(e.currentTarget);
    const $alert = $this.parents(".alert");

    $alert.addClass("is-hide");
  });

  // switchBtn
  $(".switchBtn a").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const $switchBtn = $this.parents(".switchBtn");
    const field = $this.data("field");
    const wrap = $this.parents(".switchBtn-wrap");

    $switchBtn.find("a").removeClass("is-selected");
    $this.addClass("is-selected");
    wrap.find(".switchBtn-contentInner").removeClass("is-selected");
    wrap.find(`.switchBtn-contentInner[data-field="${field}"]`).addClass("is-selected");
  });

  // nav-underline
  $(".nav-underline .navLink").click((e) => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const $nav = $this.parents(".nav-underline");

    $nav.find(".navLink").removeClass("is-selected");
    $this.addClass("is-selected");
  });

  // globalNav
  $(".btn-openNav").click(() => {
    $("#globalNav").addClass("is-active");
  });
  $("#globalNav .btn-closeNav").click(() => {
    $("#globalNav").removeClass("is-active");
  })
});
