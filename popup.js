document.addEventListener('DOMContentLoaded', () => {
    const dstCheckbox = document.getElementById('dst');
    chrome.storage.local.get('observingDST', (data) => {
      dstCheckbox.checked = data.observingDST; 
    });
  
    dstCheckbox.addEventListener('change', () => {
        console.log("Checkbox changed:", dstCheckbox.checked); 
      chrome.storage.local.set({ 'observingDST': dstCheckbox.checked });
    });
});