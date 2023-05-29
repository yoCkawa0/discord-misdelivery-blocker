(() => {
  const app = document.querySelector('#app-mount');
  app.addEventListener('keydown', (e) => {
    const pressedShiftEnter = e.shiftKey && e.key === 'Enter';
    if (pressedShiftEnter) {
      return;
    }

    const MsgTextBox = e.target.role === 'textbox' && e.target.ariaMultiline;
    if (MsgTextBox === false) {
      return;
    }

    const pressedEnter = e.altKey === false && e.ctrlKey === false && e.key === 'Enter';
    if (pressedEnter) {
      e.stopPropagation();
    }
  }, true);

})();