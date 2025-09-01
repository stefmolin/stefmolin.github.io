async function copyCodeBlock(elem) {
  const code = elem.parentNode.parentNode.querySelector('code');

  await navigator.clipboard.writeText(code.innerText.trim());

  elem.innerHTML = 'Copied!';

  setTimeout(() => {
    elem.innerHTML = '<i class="fa fa-copy" aria-hidden="true"></i>';
  }, 700);
}
