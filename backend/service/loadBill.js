var sd = require('silly-datetime');

module.exports = {
    searchBill: (item) => {
        var temp = new Date(parseInt(item.time));
        item.time = sd.format(temp, 'YYYY-MM-DD HH:mm');
        // 类型转化
        item.type =(item.type == '0') ? '支出' : '收入';
        // 分类转化
        switch(item.category) {
            case '1bcddudhmh':
                item.category = '车贷';
                break;
            case 'hc5g66kviq':
                item.category = '车辆保养';
                break;
            case '8s0p77c323':
                item.category = '房贷';
                break;
            case '0fnhbcle6hg':
                item.category = '房屋租赁';
                break;
            case 'odrjk823mj8':
                item.category = '家庭用品';
                break;
            case 'bsn20th0k2o':
                item.category = '交通';
                break;
            case 'j1h1nohhmmo':
                item.category = '旅游';
                break;
            case '3tqndrjqgrg':
                item.category = '日常饮食';
                break;
            case 's73ijpispio':
                item.category = '工资';
                break;
            case '1vjj47vpd28':
                item.category = '股票投资';
                break;
            case '5il79e11628':
                item.category = '基金投资';
                break;
            default: item.category = '其他';
        }
        // 金额保留两位小数
        item.amount = parseFloat(item.amount).toFixed(2)
        return item;
    },
    emptyParams: (paramArr) => {
       var arr = paramArr.filter((item) => {
            return item == ''
        })
        return arr;
    }
}