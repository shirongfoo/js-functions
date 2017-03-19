function maxThreeNum(arg1, arg2, arg3){
  if(arg1>arg2 && arg2 > arg3){
    return arg1
  } else if(arg2>arg3 && arg2 > arg1){
    return arg2
  } else{
    return arg3
  }
}

maxThreeNum(2,5,1)
