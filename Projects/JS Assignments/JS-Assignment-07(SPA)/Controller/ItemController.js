//Save Functions ...(Item)

$("#itemSaveOrUpdate").click(function () {

    //gather customer information
    let itemCode = $("#txtItemCode").val();
    let itemName = $("#txtItemName").val();
    let itemQTY = $("#txtItemQty").val();
    let itemPrice = $("#txtItemPrice").val();

    /*create a html row*/
    let row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemQTY}</td><td>${itemPrice}</td></tr>`;

    /*select the table body and append the row */
    $("#itemTable").append(row);


    //bind the event after the row was added
    $("#itemTable>tr").click(function(){
        let Row=$(this);
        let itemCode = $(Row.children().get(0)).text();
        let itemName = $(Row.children().get(1)).text();
        let itemQTY = $(Row.children().get(2)).text();
        let itemPrice = $(Row.children().get(3)).text();
        //Assignment
        $("#txtItemCode").val(itemCode);
        $("#txtItemName").val(itemName);
        $("#txtItemQty").val(itemQTY);
        $("#txtItemPrice").val(itemPrice);
    });

});

//Validation-Item.Id
let RegExItemID=/^(I00-)[0-9]{3,4}$/;
$("#txtItemCode").keyup(function () {
    let input =$("#txtItemCode").val();
    if(RegExItemID.test(input)){
        $("#txtItemCode").css('border','2px solid green');
    }
    else{
        $("#txtItemCode").css('border','2px solid red');
    }
});

//Validation-Item.Name
let RegExItemName=/^[A-z]{4,100}$/;
$("#txtItemName").keyup(function () {
    let input =$("#txtItemName").val();
    if(RegExItemName.test(input)){
        $("#txtItemName").css('border','2px solid green');
    }
    else{
        $("#txtItemName").css('border','2px solid red');
    }
});

//Validation-Item.Qty
let RegExItemQty=/^[0-9]{1,5}$/;
$("#txtItemQty").keyup(function () {
    let input =$("#txtItemQty").val();
    if(RegExItemQty.test(input)){
        $("#txtItemQty").css('border','2px solid green');
    }
    else{
        $("#txtItemQty").css('border','2px solid red');
    }
});

//Validation-Item.Price
let RegExItemPrice=/^[0-9]{1,9}(.)[0-9]{2}$/;
$("#txtItemPrice").keyup(function () {
    let input =$("#txtItemPrice").val();
    if(RegExItemPrice.test(input)){
        $("#txtItemPrice").css('border','2px solid green');
    }
    else{
        $("#txtItemPrice").css('border','2px solid red');
    }
});
