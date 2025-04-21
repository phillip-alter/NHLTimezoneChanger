var count = 0;
var max = 6;
var offset = new Date().getTimezoneOffset();
console.log(offset);
chrome.storage.local.get('observingDST', (data) => {
    const userPrefersDST = data.observingDST;
    const dst = userPrefersDST;

    if (dst) {
        console.log("(chrome local storage) DST offset is active");
    } else {
        console.log("(chrome local storage) DST offset is NOT active");
    }
    check(dst);
});

function check(dst) {
    const els = document.getElementsByClassName("game-state-container");
    setTimeout(() => {
        if (els.length > 0) {
            console.log(els.length);
            console.log("(check) Defined.");
            modifyTime(els,dst);
        } else if (count < max) {
            console.log("(check) Undefined.");
            count += 1;
            setTimeout(check(), 1000);
        }
    }, 1000);
}

function modifyTime(eles,dst) {
    if (eles.length > 0) {
        const hrs = /[0-9]{1,2}:/gi;
        const mins = /(00)|(30)/gi;
        const ampm = /(AM)|(PM)/gi;
        const zone = /(EST)|(EDT)/gi;
        for (var i = 0; i < eles.length; i++) {
            var cEl = eles[i].children;
            var str = cEl[0].textContent;
            var hr = str.match(hrs);
            var min = str.match(mins);
            var ampmCheck = str.match(ampm);
            var tz = str.match(zone);
            var ap;
            if (hr !== null && min !== null && ampmCheck !== null && tz !== null) {
                var utcTime = (parseInt(hr[0]) + 12) * 60;
                if (dst) {
                    utcTime += 240;
                } else {
                    utcTime += 300;
                }
                var localTime = (utcTime) - (offset);
                var leftoverMins = localTime % 60;
                localTime = parseInt(localTime / 60) % 24;
                if (localTime >= 12) {
                    ap = "PM";
                    if (localTime !== 12) localTime = (localTime - 12);
                } else {
                    ap = "AM";
                    if (localTime == 0) localTime += 12;
                }
                cEl[0].textContent = cEl[0].textContent.replace(hrs, localTime + ":");
                var minute = (Math.abs(parseInt(min[0]) - leftoverMins)).toString().padStart(2, '0');
                cEl[0].textContent = cEl[0].textContent.replace(mins, minute);
                cEl[0].textContent = cEl[0].textContent.replace(ampm, ap);
                cEl[0].textContent = cEl[0].textContent.replace(zone, "");
            }
        }
    }
}