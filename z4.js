function findMissing(list) { 
    let d=(list[list.length-1]-list[0])/list.length;
        for(let i=0;i<list.length;i++){
            if(list[i+1]-list[i]!=d){
                return list[i]+d;
            }
    }
}
console.log(findMissing([1,3,4]));
