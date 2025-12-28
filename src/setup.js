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

export const setupData = (data) => {
  const { name, image, introduction, invitation, secondAct } = data;

  const avatar = document.getElementById('avatar');
  const nameEl = document.getElementById('name');
  const introductionEl = document.getElementById('introduction');
  const invitationEl = document.getElementById('invitation');
  const verdictEl = document.getElementById('verdict');
  const secondActEl = document.getElementById('secondAct');

  avatar.src = `./avatars/${image}.jpg`;
  nameEl.textContent = name;

  const makeParagrapshList = (array) => array.map(text => {
    const p = document.createElement('p');
    p.textContent = text;
    p.classList.add('text')
    return p;
  })

  introductionEl.append(...makeParagrapshList(introduction));
  invitationEl.append(...makeParagrapshList(invitation));

  verdictEl.textContent = secondAct.verdict;
  secondActEl.append(...makeParagrapshList(secondAct.text))
}
