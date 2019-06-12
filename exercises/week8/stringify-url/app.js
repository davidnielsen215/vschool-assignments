
// function stringify(web, query) {
//     return(
//         web + `${query.color}`+'/'+`${query.item}`    
//     )
// }

// const web = 'https://www.myspace.com/thing?';
// const query = {
//         color: 'red',

//         item: 'apple'
// }

// console.log(stringify(web, query))



function addThings(url, item, yes) {
return( url + `${item.color}`+'/'+`${item.number}`+'/'+`${yes}`)
}

const url = 'www.yourmomisthebomb.com//';
const item = {
    color: 'orange',
    number: 1000
}
const yes = 'whats up'

const myQueryString = addThings(url, item, yes)




function deconstruct(site) {
   
}
const site = 'www.coolmoviequotes.com/movie=pulpfiction/actor=johntravolta'

console.log(decontstruct(site))


