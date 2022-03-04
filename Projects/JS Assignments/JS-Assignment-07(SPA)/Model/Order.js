function Customer(id,date,custID,ItemCode,Qty,price) {
    var __Oid=id;
    var __Odate=date;
    var __OcustID=custID;
    var __OPrice=price;

    this.getOrderId=function () {
        return __Oid;
    }
    this.getOrderDate=function () {
        return __Odate;
    }
    this.getOrder_CustomerID=function () {
        return __OcustID;
    }
    this.getOrderPrice=function () {
        return __OPrice;
    }

    this.setOrderId=function (id) {
        __Oid=id;
    }
    this.setOrderDate=function (date) {
        __Odate=date;
    }
    this.setOrder_CustomerID=function (custId) {
        __OcustID=custId;
    }
    this.setOrderPrice=function (price) {
        __OPrice=price;
    }
}
