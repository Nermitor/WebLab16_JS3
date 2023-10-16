function normalize(s = '') {
  return s[0].toLocaleUpperCase() + s.slice(1).toLocaleLowerCase()
}

// console.log(normalize("каК Я лЮблю уЧиться"))

document.addEventListener('DOMContentLoaded', () => {

  const kgInput = document.getElementById('kg')
  const pudInput = document.getElementById('pud')
  const lbInput = document.getElementById('lb')

  kgInput.addEventListener('input', (event) => {
    let kg;
    if (isNaN(kg = Number(event.target.value))) return;

    pudInput.value = kg / 16;
    lbInput.value = kg / 0.4;

  })
})
