function unique(arr) {
  return Array.from(new Set(arr));
}

/* Another Method */
function unique(arr){
let a = [];
new Set(arr).forEach(value=>a.push(value));
return a;
}
