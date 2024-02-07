document.querySelector('button').addEventListener('click',() => {
    const weight = document.querySelector('input[type=number]').value
    const time = document.querySelector('select').value
    const bottles = document.querySelector('select[id=bottle]').value
    const radioButtonGroup = document.getElementsByName('gender')
    const checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked)
    const gender = checkedRadio.value
    let  promilles = 0
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const vauhti = weight / 10
    const gramsleft = grams - (vauhti * time)


    if (gender === "male") {
        promilles = gramsleft / (weight * 0.7)
    }   else {
        promilles = gramsleft / (weight * 0.6)
    }

    promilles = Math.max(promilles, 0)

    const result = document.querySelector('output')
    result.innerHTML = promilles.toFixed(2)
})

// litrat as litres = bottles * 0.33
// grammat as grams = litres * 8 * 4.5
// palamisvauhti as vauhti = weight / 10
// grammat(jälellä) as gramsleft = grams - (vauhti * hours)
// tulos(mies): grams / (weight * 0.7)
// tulos(nainen): grams / (weight * 0.6)