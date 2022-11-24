function distinct(s,k){
        if( k == 0){
            return 0;
        }
        let map=new Map();
        let j=0;
        let count = 0;
        for(let i=0;i<s.length;i++){
            map[s[i]]++;
       
            while(map.size > k & j<=i){
                // console.log(map)
                let p = map[s[j]]--;
                if(p == 1){
                    map.delete(s[j]);
                    
                }

                j++;
             
            }
            count += (i-j+1);
        }
        // console.log(count);
    }
 distinct("aabc",3)