$("#ManageItemPage").css("display","none");
$("#PlaceOrderPage").css("display","none");
//First Btn Func
$("#HomeBtn").click(function () {
    $("#ManageCustomePage").css("display","block");
    $("#ManageItemPage").css("display","none");
    $("#PlaceOrderPage").css("display","none");
});
//Sec Btn Func
$("#ItemsBtn").click(function () {
    $("#ManageCustomePage").css("display","none");
    $("#ManageItemPage").css("display","block");
    $("#PlaceOrderPage").css("display","none");
});
//Third Btn Func
$("#OrdersBtn").click(function () {
    $("#ManageCustomePage").css("display","none");
    $("#ManageItemPage").css("display","none");
    $("#PlaceOrderPage").css("display","block");
});

