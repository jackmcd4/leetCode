var addNum = function(num){
    var count = 0;
    var str = num.toString();
    for(var i = 0; i < str.length; i++){
        count += +str[i];
    }
    if(count.toString().length > 1){
      return addNum(count);
    } else{
      return count;  
    }
};

addNum(65536)//7