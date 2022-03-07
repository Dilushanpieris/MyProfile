//SaveOrUpdate Functions ...(Item) Need To redesign
clearValidation();
$("#btnItemSearch").click(function () {
    //gather customer information
    let itemID = $("#txtItemCode").val();
    let itemName = $("#txtItemName").val();
    let itemQty= $("#txtItemQty").val();
    let itemPrice = $("#txtItemPrice").val();
    let index=isItemExists(itemID);
    if(index!=-1){
        alert("Item Updated");
        item[index].setItemName(itemName);
        item[index].setItemQty(itemQty);
        item[index].setItemPrice(itemPrice);
        loadAllItem()
        bindEvent();
        return;
    }
    //Add To DB..
    let i1=new Item(itemID,itemName,itemQty,itemPrice);
    item.push(i1);
    loadAllItem();
    bindEvent();
});

//Search Function Search bar..
$("#btnItemSearch").click(function () {
    //gather Address Or ID
    let property=$("#srcItemProperty").val();
    let index=isItemExists(property);
    if(index!=-1){
        alert("Item Found");
        $("#txtItemCode").val(item[index].getItemCode());
        $("#txtItemName").val(item[index].getItemName());
        $("#txtItemQty").val(item[index].getItemQty());
        $("#txtItemPrice").val(item[index].getItemPrice());
        return;
    }
    alert("Item Not Found");
});

//Delete Function ..
$("#itemDelete").click(function () {
    let itemID=$("#txtItemCode").val();
    let index=isItemExists(itemID);
    if(index!=-1){
        item.splice(index,1);
        loadAllItem();
        alert("Item "+itemID+" Deleted");
        return;
    }
    alert("No Item Found");
});


function isItemExists(id){
    let x=-1;
    for(let i=0;i<item.length;i++){
        if(item[i].getItemCode()==id) {
            x = i;
        }
    }
    return x;
}
//Update From Here..

function loadAllItem() {
    $("#customerTable>tr").remove();
    for(let i=0;i<customer.length;i++){
        let customerID=customer[i].getCustomerID();
        let customerName=customer[i].getCustomerName();
        let customerAddress=customer[i].getCustomerAddress();
        let customerTP=customer[i].getCustomerTelephone();
        let row = `<tr><td>${customerID}</td><td>${customerName}</td><td>${customerAddress}</td><td>${customerTP}</td></tr>`;
        $("#customerTable").append(row);
    }

}
function bindEvent() {
    //bind the event after the row was added
    $("#customerTable>tr").off("click");
    $("#customerTable>tr").click(function(){
        let Row=$(this);
        let CustomerID = $(Row.children().get(0)).text();
        let CustomerName = $(Row.children().get(1)).text();
        let CustomerAddress = $(Row.children().get(2)).text();
        let CustomerTP = $(Row.children().get(3)).text();
        //Assignment
        $("#txtCusID").val(CustomerID);
        $("#txtCusName").val(CustomerName);
        $("#txtCusAddress").val(CustomerAddress);
        $("#txtCusTP").val(CustomerTP);
    });
}

function clearValidation() {
    $("#validationTextId").css('display','none');
    $("#validationTextName").css('display','none');
    $("#validationTextAddress").css('display','none');
    $("#validationTextTp").css('display','none');
}

// //Save Functions ...(Item)
//
// $("#itemSaveOrUpdate").click(function () {
//
//     //gather customer information
//     let itemCode = $("#txtItemCode").val();
//     let itemName = $("#txtItemName").val();
//     let itemQTY = $("#txtItemQty").val();
//     let itemPrice = $("#txtItemPrice").val();
//
//     /*create a html row*/
//     let row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemQTY}</td><td>${itemPrice}</td></tr>`;
//
//     /*select the table body and append the row */
//     $("#itemTable").append(row);
//
//
//     //bind the event after the row was added
//     $("#itemTable>tr").click(function(){
//         let Row=$(this);
//         let itemCode = $(Row.children().get(0)).text();
//         let itemName = $(Row.children().get(1)).text();
//         let itemQTY = $(Row.children().get(2)).text();
//         let itemPrice = $(Row.children().get(3)).text();
//         //Assignment
//         $("#txtItemCode").val(itemCode);
//         $("#txtItemName").val(itemName);
//         $("#txtItemQty").val(itemQTY);
//         $("#txtItemPrice").val(itemPrice);
//     });
//
// });

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
