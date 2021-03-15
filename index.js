const array = ['Paris', 'Lyon', 'Montreal', 'Bordeaux'];
const array1 = ['Paris', 33, ['Montreal', 'Bordeaux'], true]

for (i = 0; i < array1.length; i++) {
    console.log (typeof array1[i])
}
const numbers = [21,45,1,22,44,7]
numbers.sort();
console.log(numbers.sort())

// *******************************
const input = document.querySelector('.input')
const video = document.querySelector('.video')
let link = "";

input.addEventListener('input', (e) => {
    changeLink(e.target.value);

    if (link) {
    video.innerHTML = `<iframe width="1346" height="694" src="${link}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
})

const changeLink = (linkToChange) => {

    let embed = linkToChange.replace('watch?v=', "embed/");
    link = embed.split('?')[0];

    let be = linkToChange.replace('https://youtu.be/', 'https://youtube.com/embed/');
    link = be.split('?'[1])
}






// https://www.youtube.com/embed/QB1DTl7HFnc
// https://www.youtube.com/watch?v=QB1DTl7HFnc
// https://youtu.be/QB1DTl7HFnc?t=5998