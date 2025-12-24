export function setupPage() {
  const details = document.getElementById('act2-details');
  const summary = document.getElementById('act2-summary');
  const dialog = document.getElementById('warning-dialog');
  
  const openActButton = document.getElementById('open-act');
  const closeDialogButton = document.getElementById('cancel-dialog');
  
  const WARNING_LS_KEY = 'OPEN_ACT_2';
  
  summary.addEventListener('click', (e) => {
    const open = e.target.closest('details')?.open;
  
    if (open) {
      return;
    }
  
    const itWasOpen = localStorage.getItem(WARNING_LS_KEY);
  
    if (!itWasOpen) {
      e.preventDefault()
      dialog.showModal();
    }
  });
  
  function closeDialog(event) {
    const { target } = event;
    const { value } = target;
  
    if (value === 'cancel') {
      return;
    }
  
    if (value === 'open') {
      localStorage.setItem(WARNING_LS_KEY, 'open');
      details.open = true;
    }
  }
  
  openActButton.addEventListener('click', closeDialog);
  closeDialogButton.addEventListener('click', closeDialog);
}
