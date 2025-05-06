// スムーススクロール ドロワーメニュー
jQuery('#js-drawer-menu a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-menu").slideUp(400).removeClass("is-checked");
});

// ドロワーメニュー呼び出し
const $trigger = jQuery("#js-drawer-icon, #js-open-txt");
const $menu = jQuery("#js-drawer-menu");

$trigger.on("click", function(e) {
  e.preventDefault();
  $trigger.toggleClass("is-checked");
  $menu.stop(true).slideToggle(300).toggleClass("is-checked");
  jQuery("body").toggleClass("is-checked");
});
