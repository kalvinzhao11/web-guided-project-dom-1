// USING THE DOM TO EDIT ELEMENTS ON THE PAGE (AND ADD NEW ONES)

// 1- Finding an element on the page and saving a reference to it
//  getElementById, getElementsByTagName, getElementsByClassName
//  querySelector
//  querySelectorAll

const firstCard = document.querySelector('.card:nth-of-type(1)')
const pageHeading = document.querySelector('#logoTitle') //return only the first dom 
// const firstCardTitle = document.querySelector('.card:nth-of-type(1) .card-title')
const firstCardTitle = firstCard.querySelector('h2')
const firstCardSubTitle = firstCard.querySelector('h3')
const firstCardText = firstCard.querySelector('p')
const firstCardLink1 = firstCard.querySelector('a')
const firstCardLink2 = firstCardLink1.nextElementSibling
const firstCardImg = firstCard.querySelector('img')

// console.log(firstCardTitle)

// console.log(pageHeading)
// console.dir(pageHeading)

const allLinks = document.querySelectorAll('a')
const theVeryFirstLink = allLinks[0]

// console.log(allLinks)
// console.log(theVeryFirstLink)

allLinks.forEach(links => {
    // console.log(links.textContent)
})

// 2- Changing an element's text content
//  textContent, innerText

pageHeading.textContent = 'Lambda Dog'
pageHeading.innerText = 'Cool Lambda Dog'
firstCardTitle.textContent = 'Cool Dog'
firstCardSubTitle.textContent = 'Rulez'
firstCardText.textContent = 'Doggo ipsum fat boi. Wow very biscit fluffer h*ck, big ol. Length boy heckin good boys and girls clouds pupperino smol maximum borkdrive heckin, shoob many pats boof wow such tempt.'
firstCardLink2.textContent = 'Dog Ipsum'
// 3- Changing any property
//  with dot notation
//  setAttribute, getAttribute
firstCardLink1.href = 'https://www.pexels.com/search/dog/'
// firstCardLink1.className = 'foo bar baz'
// firstCardLink2.href = 'https://doggoipsum.com/'
firstCardLink2.setAttribute('href', 'https://doggoipsum.com/')
// firstCardLink2.setAttribute('class', 'foo var baz')
firstCardImg.setAttribute('src', 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')

// 4- Changing the style
//  by changing the class names on the element
const header = document.querySelector('header')
header.classList.add('sky')
header.classList.remove('sky')
setInterval(() => {
    header.classList.toggle('sky')
}, 1000)
//  by manipulating inline styles on the element
firstCardText.style.color = 'blue'  //hard to overwrite css person has to do important to overwrite it
firstCardText.style.fontWeight = 'bold'
// 5- Creating new elements and appending them
const blogLink = document.createElement('a')
blogLink.textContent = 'Blog'
blogLink.classList = 'menu-item'
blogLink.href = '#'
const nav = document.querySelector('nav')
nav.appendChild(blogLink)

// 6- Removing an existing element and putting it back
blogLink.remove()
nav.append(blogLink)

// 7- Making a copy of the card and appending it to the card group
const secondCard = firstCard.cloneNode(true)
document.querySelector('.card-group').appendChild(secondCard)
