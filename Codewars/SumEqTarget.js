function twoSum(array,target){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(j===i)
            continue;
            if(array[i]+array[j]===target)
                return [i,j];
        }
    }
    return 0;
}