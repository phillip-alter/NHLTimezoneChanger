// console.log("Before attempt");
check();

function check(){
    const els = document.getElementsByClassName("game-state-container");
    setTimeout(()=>{
        if (els.length > 0) {
            console.log(els.length);
            // console.log("(check) Defined.");
            modifyTime(els);
        } else {
            // console.log("(check) Undefined.");
            setTimeout(check(),1000);
        }
    },1000);
}

function modifyTime(eles){
    if (eles.length > 0){
        // console.log("(modifyTime if) before re");
        const hrs = /[0-9]{1,2}:/gi;
        const mins = /30/gi;
        const ampm = /(AM)|(PM)/gi;
        const zone = /(EST)|(EDT)$/gi;
        // console.log(`(modifyTime if) re: ${re}`);
        for (var i = 0; i < eles.length; i++){
            // console.log("(modifyTime for) inside of for loop");
            // console.log(`(modifyTime for) tagname: ${eles[i].tagName}`);
            var cEl = eles[i].children;
            // console.log(`(modifyTime for) child tag name: ${cEl[0].tagName}`)
            // console.log(`(modifyTime for) child text: ${cEl[0].textContent}`)
            var str = cEl[0].textContent;
            // console.log(`(modifyTime for) str: ${str}`)
            var hr = str.match(hrs);
            var min = str.match(mins);
            var ap = str.match(ampm);
            var tz = str.match(zone);

            if (hr !== null){
                var pdtHour = parseInt(hr[0]) - 4;
                // console.log(`(modifyTime for if) output: ${pdtHour}`);
                cEl[0].textContent = cEl[0].textContent.replace(hrs,pdtHour+":"); 
            }
            if (min !== null){
                var pdtMins = (parseInt(min[0]) - 0).toString().padStart(2,'0');
                // console.log(`(modifyTime for if2) output: ${pdtMins}`);
                cEl[0].textContent = cEl[0].textContent.replace(mins,pdtMins); 
            }
            if (ap !== null){
                var pdtAmpm = "PM";
                cEl[0].textContent = cEl[0].textContent.replace(ampm,pdtAmpm); 
            }
            if (tz !== null){
                var pdtZone = "PDT";
                cEl[0].textContent = cEl[0].textContent.replace(zone,pdtZone);
            }
        }
    }
}


// console.log("Outside of if statement")