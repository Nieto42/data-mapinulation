//// Version 1
/*
const input = document.querySelector('.input')
const video = document.querySelector('.video')
let link = "";

input.addEventListener('input', (e) => {
  link = changeLink(e.target.value); 

 console.log(link)
   if (link) {
       video.innerHTML = `<iframe width="1346" height="694" src="${link}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
});

const changeLink = (linkToChange) => {

    let embed = linkToChange;
    
    embed = embed.replace('watch?v=', 'embed/');
     console.log(embed);


    embed = embed.replace('youtu.be/', 'youtube.com/embed/');
    return embed.split('?')[0];
  
}
*//
    

// https://www.youtube.com/embed/QB1DTl7HFnc
// https://www.youtube.com/watch?v=QB1DTl7HFnc
// https://youtu.be/QB1DTl7HFnc?t=5998

// Version 2

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

    let embed = linkToChange.replace('watch?v=', "embed/"); // //https://www.youtube.com/watch?v=QB1DTl7HFnc
    link = embed.split('?')[0]; // https://www.youtube.com/embed/QB1DTl7HFnc
// 
    let be = link.replace('https://youtu.be/', 'https://youtube.com/embed/'); //https://www.youtube.com/embed/QB1DTl7HFnc
    link = be.split('?'[0])
}
