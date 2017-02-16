//Your code below
function buildPath(p,h){
  let path = [];
  for(let c=0;c,n-1;c++;){
    let r = Math.random
    if(r<=p){
      path.push(false);
    }
    else{
      path.push(true);
    }
  }
  path.push(true);
  return path;
}

function stroll(path,c){
  if(c==path.length-1){
    return 1;
  }
  else if(path[c]==false){
    return 0;
  }
  else{
    stroll(path,c=1);
  }
}

function rsj(path,c){
  if(c==path.length-1){
    return 1;
  }
  else if(path[c]==false){
    return 0;
  }
  else if(c>=path.length){
    return 0;
  }
  else{
  return rsj(path,c+1)+rsj(path,c+2)+rsj(path,c+5);
  }
}

//Test code
let testpath1 = buildPath(0.10,15);
let testpath2 = buildPath(0.50,15);
console.log(testpath1);
console.log(testpath2);
console.log("---------------------");
console.log(stroll([true,false,true],0));
console.log(stroll([true,true,true],0));
console.log(rsj(testpath1,0));
console.log(rsj(testpath2,0));
