function charCount(str) {
    let freq = {};
    
    for(let i = 0; i <= str.length; i++) {
        let newstr = str.toLowerCase();
        let char = newstr.charAt(i);
        if (freq[char]) {
            freq[char]++;
        } else if(char===" " || char===""){
            null;
        }
        
        else {
            freq[char] = 1;
        }
    }
    return freq;
};

console.log(charCount('py .fjf 1'))
