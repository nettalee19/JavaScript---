
const somthing = (n)=>{
    for(let i=1 ; i <=n ; i++){ //i=3
        let str = '';
        for(let k=1; k<=n ; k++){ //k=4
            if(k<=i){  //#@@
                        //##@
                str+='#';
            }
            else{
                str +='@';
            }

        }
        console.log(str)
    }
}

somthing(10);
//#
//##
