//Validation Order.Id
let RegExOrderId=/^O[0-9]{2}-[0-9]{3}$/;
$("#txtOrderId").keyup(function () {
    if($("#txtOrderId").val()==''){
        $("#txtOrderId").css('border','1px solid #ced4da');
        return;
    }
    let input=$("#txtOrderId").val();
    if(RegExOrderId.test(input)) {
        $("#txtOrderId").css('border','2px solid green');
    }
    else {
        $("#txtOrderId").css('border','2px solid red');
    }
});

//Validation Order.date
let RegExOrderDate=/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
$("#txtOrderDate").keyup(function () {
    if($("#txtOrderDate").val()==''){
        $("#txtOrderDate").css('border','1px solid #ced4da');
        return;
    }
    let input=$("#txtOrderDate").val();
    if(RegExOrderDate.test(input)){
        $("#txtOrderDate").css('border','2px solid green');
    }
    else {
        $("#txtOrderDate").css('border','2px solid red');
    }
});

//Validation Order.Customer
let RegExCusIdForSearch=/^(C00-)[0-9]{3,4}$/;
$("#txtCusIDForSearch").keyup(function () {
    if($("#txtCusIDForSearch").val()==''){
        $("#txtCusIDForSearch").css('border','1px solid #ced4da');
        return;
    }
    let input =$("#txtCusIDForSearch").val();
    if(RegExCusIdForSearch.test(input)){
        $("#txtCusIDForSearch").css('border','2px solid green');
    }
    else{
        $("#txtCusIDForSearch").css('border','2px solid red');
    }
});

//Validation Order.Item
let RegExItemIdForSearch=/^(I00-)[0-9]{3,4}$/;
$("#txtItemCodeForSearch").keyup(function () {
    if($("#txtItemCodeForSearch").val()==''){
        $("#txtItemCodeForSearch").css('border','1px solid #ced4da');
        return;
    }
    let input =$("#txtItemCodeForSearch").val();
    if(RegExItemIdForSearch.test(input)){
        $("#txtItemCodeForSearch").css('border','2px solid green');
    }
    else{
        $("#txtItemCodeForSearch").css('border','2px solid red');
    }
});

//Validation Order.Qty
let RegExQtyForOrder=/^[0-9]{2,10}$/;
$("#txtQtyForAdd").keyup(function () {
    if($("#txtQtyForAdd").val()==''){
        $("#txtQtyForAdd").css('border','1px solid #ced4da');
        return;
    }
    let input =$("#txtQtyForAdd").val();
    if(RegExQtyForOrder.test(input)){
        $("#txtQtyForAdd").css('border','2px solid green');
    }
    else{
        $("#txtQtyForAdd").css('border','2px solid red');
    }
});