//SaveOrUpdate Functions ...(Customer) Need To redesign
$("#btnSaveOrUpdate").click(function () {
    //gather customer information
    let customerID = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerTP = $("#txtCusTP").val();
    let index=isExists(customerID);
    if(index!=-1){
        alert("Customer Updated");
        customer[index].setCustomerName(customerName);
        customer[index].setCustomerAddress(customerAddress);
        customer[index].setCustomerTelephone(customerTP);
        loadAllCustomers()
        bindEvent();
        return;
    }
    //Add To DB..
    let c1=new Customer(customerID,customerName,customerAddress,customerTP);
    customer.push(c1);
    loadAllCustomers();
    bindEvent();
});

//Search Function Search bar..



function isExists(id){
    let x=-1;
    for(let i=0;i<customer.length;i++){
        if(customer[i].getCustomerID()==id) {
            x = i;
        }
    }
    return x;
}
function loadAllCustomers() {
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











//Validation-Customer.Id
let RegExCusID=/^(C00-)[0-9]{3,4}$/;
$("#txtCusID").keyup(function () {
    let input =$("#txtCusID").val();
    if(RegExCusID.test(input)){
        $("#txtCusID").css('border','2px solid green');
        $("#validationTextId").css('display','none');
    }
    else{
        $("#txtCusID").css('border','2px solid red');
        $("#validationTextId").css('display','block');
    }
});
//Validation-Customer.Name
let RegExCusName=/^[A-z]{5,10}$/;
$("#txtCusName").keyup(function () {
    let input =$("#txtCusName").val();
    if(RegExCusName.test(input)){
        $("#txtCusName").css('border','2px solid green');
        $("#validationTextName").css('display','none');
    }
    else{
        $("#txtCusName").css('border','2px solid red');
        $("#validationTextName").css('display','block');
    }
});

//Validation-Customer.address
let RegExCusAddress=/^(No.)[0-9]{2} [A-z]{4,100}$/;
$("#txtCusAddress").keyup(function () {
    let input =$("#txtCusAddress").val();
    if(RegExCusAddress.test(input)){
        $("#txtCusAddress").css('border','2px solid green');
        $("#validationTextAddress").css('display','none');
    }
    else{
        $("#txtCusAddress").css('border','2px solid red');
        $("#validationTextAddress").css('display','block');
    }
});

//Validation-Customer.TP
let RegExCusTP=/^(07)[0-9]{8,9}$/;
$("#txtCusTP").keyup(function () {
    let input =$("#txtCusTP").val();
    if(RegExCusTP.test(input)){
        $("#txtCusTP").css('border','2px solid green');
        $("#validationTextTp").css('display','none');
    }
    else{
        $("#txtCusTP").css('border','2px solid red');
        $("#validationTextTp").css('display','block');
    }
});