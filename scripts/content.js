console.log("Before attempt");
check();

function check(){
    const els = document.getElementsByClassName("game-state-container");
    setTimeout(()=>{
        if (els.length > 0) {
            console.log(els.length);
            console.log("(check) Defined.");
            modifyTime(els);
        } else {
            console.log("(check) Undefined.");
            setTimeout(check(),1000);
        }
    },1000);
}

function modifyTime(eles){
    if (eles.length > 0){
        // console.log("(modifyTime if) before re");
        const re = /([0-9]+):([0-9]{2})\s?([A-Z]{2})\s?([A-Za-z]{3})/g;
        // console.log(`(modifyTime if) re: ${re}`);
        for (var i = 0; i < eles.length; i++){
            // console.log("(modifyTime for) inside of for loop");
            // console.log(`(modifyTime for) tagname: ${eles[i].tagName}`);
            var cEl = eles[i].children;
            // console.log(`(modifyTime for) child tag name: ${cEl[0].tagName}`)
            // console.log(`(modifyTime for) child text: ${cEl[0].textContent}`)
            var str = cEl[0].textContent;
            console.log(`(modifyTime for) str: ${str}`)
            var arr = Array.from(str.matchAll(re), (m) => m[0]);
            console.log(`(modifyTime for) ${arr[0]} and `)
            // if (str.matchAll(re) !== null){
            //     const arr = [...str.matchAll(re)]
            //     console.log(`(modifyTime for) words: ${arr[1]} ${arr[2]} ${arr[3]}`)
            //     var hours = words[1];
            //     hours -= 4;
            //     cEl[0].textContent = hours;
            // }
            // const words = c.matchAll(re);
            // const timeSep = [...words];
            // let hours = timeSep[0];
            // console.log(hours)
            // let mins = timeSep[1];
            // console.log(mins)
            // let ampm = timeSep[2];
            // console.log(ampm)
            // let zone = timeSep[3];
            // console.log(zone)
            // let pdtHours = hours - 4;
            // let pdtMins = mins;
            // let pdtAmpm = ampm;
            // let pdtZone = "PDT";
            // cEl[0].textContent = pdtHours + ":" + pdtMins + " " + pdtAmpm + " " + pdtZone;
        }
    }
}


// console.log("Outside of if statement")