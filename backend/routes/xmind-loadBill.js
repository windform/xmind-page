var path = require('path');
const csv=require('csvtojson');
const fs = require('fs');
var loadBill = require('../service/loadBill');
//
module.exports = [
    {
      method: 'GET',
      path: '/loadBill',
      handler: (request, reply) => {
        // 接收参数
        var query = request.query;
        var month = query.month;
        var type = query.type;
        var category = query.category;
        var arr = []; 
        var arr1 = [];
        var arr2 = [];       
        var fileName = path.join(process.cwd(), '/data/bill.csv');
        csv().fromFile(fileName).then((jsonObj)=>{
            jsonObj.forEach((item,index) => {
                // 时间戳转化为北京标准时间
                var temp = new Date(parseInt(item.time));
                var itemMonth = temp.getMonth() + 1;
                if (month == '') {
                    arr.push(item)
                } else {
                    if(itemMonth == month) {
                        arr.push(item)
                    } 
                }
            })
            arr.filter((arrItem) => {
                if(type == '') {
                    arr1.push(arrItem)
                } else {
                    if(arrItem.type == type) {
                        arr1.push(arrItem)
                    }
                }
            })
            arr1.filter((arr1Item) => {
                if(category == '') {
                    var tempItem = loadBill.searchBill(arr1Item)
                    arr2.push(tempItem)
                } else {
                    if(arr1Item.category == category) {
                        var tempItem = loadBill.searchBill(arr1Item)
                        arr2.push(tempItem)
                    }
                }
            })
            reply({data: arr2});
        });
        
      },
      config: {
        tags: ['api', 'tests'],
        description: '测试hello-hapi',
      },
    },
    {
        method: 'POST',
        path: '/addBill',
        handler: (request, reply) => {
            var receive = request.payload
            var data = '\n' + receive.type + ',' + receive.time + ',' + receive.category + ',' + receive.amount
            console.log(data)
            var fileName = path.join(process.cwd(), '/data/bill.csv');
            fs.appendFile(fileName,data,function(error){
                if(error){
                    console.log(error)
                } else {
                    console.log('success')
                }
            })
            reply({data: 'add success'})
        }
    }
  ];