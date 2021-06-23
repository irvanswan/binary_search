class Binary{
    binary_search = (koleksi, kueri)=>{
        let m = 0;
        let n = koleksi.length - 1;
        let d;
        let result = -1;
        while(true){
            d = parseInt(m+n/2);

            if(m===d){
                if(koleksi[d]===kueri){
                    result = d;
                }
                break;  
            }else{
                if(koleksi[d]===kueri){
                    result = d;
                    break;
                }else if(koleksi[d] > kueri){
                    n=d;
                }else{
                    m=d;
                }
            }
        }
        return result;
    }
}

module.exports = Binary