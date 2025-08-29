let heartCount = parseInt(document.getElementById('heart-count').innerText);
let balance = parseInt(document.getElementById('balance').innerText);

//national emergency number
//-------------------------

//heart 
document.getElementById('heart-icon-national').addEventListener('click', function(){

    const heartIcon = document.querySelector('#heart-icon-national i');
    heartIcon.className = 'fa-solid fa-heart text-red-500';

    heartCount += 1;
    document.getElementById('heart-count').innerText = heartCount;
});

//copy 
document.getElementById('national-copy-btn').addEventListener('click', function () {
    const textToCopy = document.getElementById('emergency-title1').innerText;

    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert(`Copied: ${textToCopy}`);

    copyCount += 1;
    document.getElementById('copy-count').innerText = copyCount;
});

//balance 
document.getElementById('national-call-btn').addEventListener('click', function(){
    const emergencyTitle = document.getElementById("emergency-title").innerText;
    const emergencyNumber = document.getElementById("emergency-title1").innerText;

    if(balance <= 0){
        alert("You don't have sufficient balance. To make a call you need atleast 20 coins ");
        return;
    }
    
        alert("Calling"+" "+emergencyTitle+" "+emergencyNumber+"...");
        balance = balance - 20;
        document.getElementById('balance').innerText = balance;
        
        //call history
        const callHistoryTitle = document.getElementById('call-history-title');
        const callHistoryDescription = document.getElementById('call-history-description');
        const localTime = document.getElementById('local-time');

        const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});

        const historyEntry = document.createElement('div');
        historyEntry.className = "call history-class";

        historyEntry.innerHTML = `
            <div class="rounded-[8px] p-4 mb-3 flex justify-between items-center bg-[#fafafa]">
                <div>
                    <h3 class="inter font-semibold">${emergencyTitle}</h3>
                    <p class="hind-madurai-regular text-[#5C5C5C]">${emergencyNumber}</p>
                </div>
                <p class="hind-madurai-regular ml-[3px]">${timeString}</p>
            </div>
            `;
        const callHistoryContainer = document.getElementById('call-history');
        callHistoryContainer.appendChild(historyEntry);
});



//Police Helpline Number
//-----------------------

//heart 
document.getElementById('heart-icon-police').addEventListener('click', function(){

    const heartIcon = document.querySelector('#heart-icon-police i');
    heartIcon.className = 'fa-solid fa-heart text-red-500';

    heartCount += 1;
    document.getElementById('heart-count').innerText = heartCount;
});

//copy 
document.getElementById('police-copy-btn').addEventListener('click', function () {
    const textToCopy = document.getElementById('police-title1').innerText;

    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert(`Copied: ${textToCopy}`);

    copyCount += 1;
    document.getElementById('copy-count').innerText = copyCount;
});

//balance 
document.getElementById('police-call-btn').addEventListener('click', function(){
    const policeTitle = document.getElementById("police-title").innerText;
    const policeNumber = document.getElementById("police-title1").innerText;


    if(balance <= 0){
        alert("You don't have sufficient balance. To make a call you need atleast 20 coins ");
        return;
    }
    
        alert("Calling"+" "+policeTitle+" "+policeNumber+"...");
        balance = balance - 20;
        document.getElementById('balance').innerText = balance;
        
        //call history
        const callHistoryTitle = document.getElementById('call-history-title');
        const callHistoryDescription = document.getElementById('call-history-description');
        const localTime = document.getElementById('local-time');

        const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});

        const historyEntry = document.createElement('div');
        historyEntry.className = "call history-class";

        historyEntry.innerHTML = `
            <div class="rounded-[8px] p-4 mb-3 flex justify-between items-center bg-[#fafafa]">
                <div>
                    <h3 class="inter font-semibold">${policeTitle}</h3>
                    <p class="hind-madurai-regular text-[#5C5C5C]">${policeNumber}</p>
                </div>
                <p class="hind-madurai-regular ml-[3px]">${timeString}</p>
            </div>
            `;
        const callHistoryContainer = document.getElementById('call-history');
        callHistoryContainer.appendChild(historyEntry);
});



//fire service number
//-----------------------

//heart 
document.getElementById('heart-icon-fire').addEventListener('click', function(){

    const heartIcon = document.querySelector('#heart-icon-fire i');
    heartIcon.className = 'fa-solid fa-heart text-red-500';

    heartCount += 1;
    document.getElementById('heart-count').innerText = heartCount;
});

//copy 
document.getElementById('fire-copy-btn').addEventListener('click', function () {
    const textToCopy = document.getElementById('fire-title1').innerText;

    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert(`Copied: ${textToCopy}`);

    copyCount += 1;
    document.getElementById('copy-count').innerText = copyCount;
});

//balance 
document.getElementById('fire-call-btn').addEventListener('click', function(){
    const fireTitle = document.getElementById("police-title").innerText;
    const fireNumber = document.getElementById("police-title1").innerText;


    if(balance <= 0){
        alert("You don't have sufficient balance. To make a call you need atleast 20 coins ");
        return;
    }
    
        alert("Calling"+" "+fireTitle+" "+fireNumber+"...");
        balance = balance - 20;
        document.getElementById('balance').innerText = balance;
        
        //call history
        const callHistoryTitle = document.getElementById('call-history-title');
        const callHistoryDescription = document.getElementById('call-history-description');
        const localTime = document.getElementById('local-time');

        const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});

        const historyEntry = document.createElement('div');
        historyEntry.className = "call history-class";

        historyEntry.innerHTML = `
            <div class="rounded-[8px] p-4 mb-3 flex justify-between items-center bg-[#fafafa]">
                <div>
                    <h3 class="inter font-semibold">${fireTitle}</h3>
                    <p class="hind-madurai-regular text-[#5C5C5C]">${fireNumber}</p>
                </div>
                <p class="hind-madurai-regular ml-[3px]">${timeString}</p>
            </div>
            `;
        const callHistoryContainer = document.getElementById('call-history');
        callHistoryContainer.appendChild(historyEntry);
});



//ambulance service number
//-----------------------

//heart 
document.getElementById('heart-icon-ambulance').addEventListener('click', function(){

    const heartIcon = document.querySelector('#heart-icon-ambulance i');
    heartIcon.className = 'fa-solid fa-heart text-red-500';

    heartCount += 1;
    document.getElementById('heart-count').innerText = heartCount;
});

//copy 
document.getElementById('ambulance-copy-btn').addEventListener('click', function () {
    const textToCopy = document.getElementById('ambulance-title1').innerText;

    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert(`Copied: ${textToCopy}`);

    copyCount += 1;
    document.getElementById('copy-count').innerText = copyCount;
});

//balance 
document.getElementById('ambulance-call-btn').addEventListener('click', function(){
    const ambulanceTitle = document.getElementById("ambulance-title").innerText;
    const ambulanceNumber = document.getElementById("ambulance-title1").innerText;


    if(balance <= 0){
        alert("You don't have sufficient balance. To make a call you need atleast 20 coins ");
        return;
    }
    
        alert("Calling"+" "+ambulanceTitle+" "+ambulanceNumber+"...");
        balance = balance - 20;
        document.getElementById('balance').innerText = balance;
        
        //call history
        const callHistoryTitle = document.getElementById('call-history-title');
        const callHistoryDescription = document.getElementById('call-history-description');
        const localTime = document.getElementById('local-time');

        const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});

        const historyEntry = document.createElement('div');
        historyEntry.className = "call history-class";

        historyEntry.innerHTML = `
            <div class="rounded-[8px] p-4 mb-3 flex justify-between items-center bg-[#fafafa]">
                <div>
                    <h3 class="inter font-semibold">${ambulanceTitle}</h3>
                    <p class="hind-madurai-regular text-[#5C5C5C]">${ambulanceNumber}</p>
                </div>
                <p class="hind-madurai-regular ml-[3px]">${timeString}</p>
            </div>
            `;
        const callHistoryContainer = document.getElementById('call-history');
        callHistoryContainer.appendChild(historyEntry);
});


//women & child helpline
//-----------------------

//heart 
document.getElementById('heart-icon-women').addEventListener('click', function(){

    const heartIcon = document.querySelector('#heart-icon-women i');
    heartIcon.className = 'fa-solid fa-heart text-red-500';

    heartCount += 1;
    document.getElementById('heart-count').innerText = heartCount;
});

//copy 
document.getElementById('women-copy-btn').addEventListener('click', function () {
    const textToCopy = document.getElementById('women-title1').innerText;

    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert(`Copied: ${textToCopy}`);

    copyCount += 1;
    document.getElementById('copy-count').innerText = copyCount;
});

//balance 
document.getElementById('women-call-btn').addEventListener('click', function(){
    const womenTitle = document.getElementById("women-title").innerText;
    const womenNumber = document.getElementById("women-title1").innerText;

    if(balance <= 0){
        alert("You don't have sufficient balance. To make a call you need atleast 20 coins ");
        return;
    }
    
        alert("Calling"+" "+womenTitle+" "+womenNumber+"...");
        balance = balance - 20;
        document.getElementById('balance').innerText = balance;
        
        //call history
        const callHistoryTitle = document.getElementById('call-history-title');
        const callHistoryDescription = document.getElementById('call-history-description');
        const localTime = document.getElementById('local-time');

        const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});

        const historyEntry = document.createElement('div');
        historyEntry.className = "call history-class";

        historyEntry.innerHTML = `
            <div class="rounded-[8px] p-4 mb-3 flex justify-between items-center bg-[#fafafa]">
                <div>
                    <h3 class="inter font-semibold">${womenTitle}</h3>
                    <p class="hind-madurai-regular text-[#5C5C5C]">${womenNumber}</p>
                </div>
                <p class="hind-madurai-regular ml-[3px]">${timeString}</p>
            </div>
            `;
        const callHistoryContainer = document.getElementById('call-history');
        callHistoryContainer.appendChild(historyEntry);
});


//electricity
//-----------------------

//heart 
document.getElementById('heart-icon-electricity').addEventListener('click', function(){

    const heartIcon = document.querySelector('#heart-icon-electricity i');
    heartIcon.className = 'fa-solid fa-heart text-red-500';

    heartCount += 1;
    document.getElementById('heart-count').innerText = heartCount;
});

//copy 
document.getElementById('electricity-copy-btn').addEventListener('click', function () {
    const textToCopy = document.getElementById('electricity-title1').innerText;

    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert(`Copied: ${textToCopy}`);

    copyCount += 1;
    document.getElementById('copy-count').innerText = copyCount;
});

//balance 
document.getElementById('electricity-call-btn').addEventListener('click', function(){
    const electricityTitle = document.getElementById("electricity-title").innerText;
    const electricityNumber = document.getElementById("electricity-title1").innerText;

    if(balance <= 0){
        alert("You don't have sufficient balance. To make a call you need atleast 20 coins ");
        return;
    }
    
        alert("Calling"+" "+electricityTitle+" "+electricityNumber+"...");
        balance = balance - 20;
        document.getElementById('balance').innerText = balance;
        
        //call history
        const callHistoryTitle = document.getElementById('call-history-title');
        const callHistoryDescription = document.getElementById('call-history-description');
        const localTime = document.getElementById('local-time');

        const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});

        const historyEntry = document.createElement('div');
        historyEntry.className = "call history-class";

        historyEntry.innerHTML = `
            <div class="rounded-[8px] p-4 mb-3 flex justify-between items-center bg-[#fafafa]">
                <div>
                    <h3 class="inter font-semibold">${electricityTitle}</h3>
                    <p class="hind-madurai-regular text-[#5C5C5C]">${electricityNumber}</p>
                </div>
                <p class="hind-madurai-regular ml-[3px]">${timeString}</p>
            </div>
            `;
        const callHistoryContainer = document.getElementById('call-history');
        callHistoryContainer.appendChild(historyEntry);
});



//brac
//-----------------------

//heart 
document.getElementById('heart-icon-brac').addEventListener('click', function(){

    const heartIcon = document.querySelector('#heart-icon-brac i');
    heartIcon.className = 'fa-solid fa-heart text-red-500';

    heartCount += 1;
    document.getElementById('heart-count').innerText = heartCount;
});

//copy 
document.getElementById('brac-copy-btn').addEventListener('click', function () {
    const textToCopy = document.getElementById('brac-title1').innerText;

    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert(`Copied: ${textToCopy}`);

    copyCount += 1;
    document.getElementById('copy-count').innerText = copyCount;
});

//balance 
document.getElementById('brac-call-btn').addEventListener('click', function(){
    const bracTitle = document.getElementById("brac-title").innerText;
    const bracNumber = document.getElementById("brac-title1").innerText;

    console.log('clicked');

    if(balance <= 0){
        alert("You don't have sufficient balance. To make a call you need atleast 20 coins ");
        return;
    }
    
        alert("Calling"+" "+bracTitle+" "+bracNumber+"...");
        balance = balance - 20;
        document.getElementById('balance').innerText = balance;
        
        //call history
        const callHistoryTitle = document.getElementById('call-history-title');
        const callHistoryDescription = document.getElementById('call-history-description');
        const localTime = document.getElementById('local-time');

        const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});

        const historyEntry = document.createElement('div');
        historyEntry.className = "call history-class";

        historyEntry.innerHTML = `
            <div class="rounded-[8px] p-4 mb-3 flex justify-between items-center bg-[#fafafa]">
                <div>
                    <h3 class="inter font-semibold">${bracTitle}</h3>
                    <p class="hind-madurai-regular text-[#5C5C5C]">${bracNumber}</p>
                </div>
                <p class="hind-madurai-regular ml-[3px]">${timeString}</p>
            </div>
            `;
        const callHistoryContainer = document.getElementById('call-history');
        callHistoryContainer.appendChild(historyEntry);
});


document.getElementById('heart-icon-railway').addEventListener('click', function(){

    const heartIcon = document.querySelector('#heart-icon-railway i');
    heartIcon.className = 'fa-solid fa-heart text-red-500';

    heartCount += 1;
    document.getElementById('heart-count').innerText = heartCount;
});

//copy 
document.getElementById('railway-copy-btn').addEventListener('click', function () {
    const textToCopy = document.getElementById('railway-title1').innerText;

    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert(`Copied: ${textToCopy}`);

    copyCount += 1;
    document.getElementById('copy-count').innerText = copyCount;
});

//balance 
document.getElementById('railway-call-btn').addEventListener('click', function(){
    const railwayTitle = document.getElementById("railway-title").innerText;
    const railwayNumber = document.getElementById("railway-title1").innerText;

    console.log('clicked');

    if(balance <= 0){
        alert("You don't have sufficient balance. To make a call you need atleast 20 coins ");
        return;
    }
    
        alert("Calling"+" "+railwayTitle+" "+railwayNumber+"...");
        balance = balance - 20;
        document.getElementById('balance').innerText = balance;
        
        //call history
        const callHistoryTitle = document.getElementById('call-history-title');
        const callHistoryDescription = document.getElementById('call-history-description');
        const localTime = document.getElementById('local-time');

        const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});

        const historyEntry = document.createElement('div');
        historyEntry.className = "call history-class";

        historyEntry.innerHTML = `
            <div class="rounded-[8px] p-4 mb-3 flex justify-between items-center bg-[#fafafa]">
                <div>
                    <h3 class="inter font-semibold">${railwayTitle}</h3>
                    <p class="hind-madurai-regular text-[#5C5C5C]">${railwayNumber}</p>
                </div>
                <p class="hind-madurai-regular ml-[3px]">${timeString}</p>
            </div>
            `;
        const callHistoryContainer = document.getElementById('call-history');
        callHistoryContainer.appendChild(historyEntry);
});

document