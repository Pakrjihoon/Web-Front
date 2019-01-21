var $popup=$("#popup");
var $loginForm=$("#loginForm");
var $findForm=$("#findForm");
$("#login").click(function(e) {
    e.preventDefault();
    $popup.show();
    $loginForm.show();
});
$popup.click(function(e) {
    e.preventDefault();
    $(this).hide();
    $(".form").hide();
});
$("#find").click(function(e) {
    e.preventDefault();
    $loginForm.hide();
    $findForm.show();
});
$(".tab a").click(function () {
    $(".on").removeClass("on");
    $(this).addClass("on");
})
$("#findIDBtn").click(function (e) {
    e.preventDefault();
    $("#findID").show();
    $("#findPW").hide();
});
$("#findPWBtn").click(function (e) {
    e.preventDefault();
    $("#findPW").show();
    $("#findID").hide();
});
$(".change").click(function (e) {
    e.preventDefault();
    $findForm.hide();
    $("#chanePWForm").show();
});
$(".return").click(function (e) {
    e.preventDefault();
    $(".form").hide();
    $("#loginForm").show();
});
$("#profileImage").click(function () {
    $("#personalMenu").show();
    return false;
});
$(document).click(function () {
    $("#personalMenu").hide();
});