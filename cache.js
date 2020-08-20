let cache = {};
function compute(a){
    let result;
    let key = a.toString();
    if(this.cache[a]){
        result = this.cache[a];
    }else{
        this.cache[key] = longTime(a);
    }
    return result;
}
compute.prototype.cache = cache;
new compute(1);