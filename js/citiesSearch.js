'use strict'

const citiesData = [
    {
        "district": "Урал",
        "regions": {
            "Свердловская область": ["Екатеринбург", "Оренбург", "Челябинск"],
            "Пермский Край": ["Пермь", "Березники"]
        },
    },
    {
        "district": "Дальневосточный",
        "regions": {
            "Забайкальский, край": ["Агинское", "Борзя", "Забойкальск", "Карымское"],
            "Камчатский край": ['Елизовский', 'Мильковский', 'Соболевский']
        } 
    }
]




const favoriteCities = document.querySelectorAll('.city-search__btn');


favoriteCities.forEach( elem => {
    elem.addEventListener('click', () => {
        finder.value = elem.textContent
    })
})


const finder = document.querySelector('.search-city__input')
finder.addEventListener('input', () => {
    const searchContent = document.querySelector('.search__by-click')
    searchContent.style.display = "none"
    let value = document.querySelector('.search-city__input').value
    value.toLowerCase()
    citiesData.forEach(function (element, i) {
        for (let key in this[i].regions ) {
            const cities = this[i].regions[key]
            console.log(cities)
            let matches = cities.filter( item => item.startsWith(value));

            if (matches.length) {
                let newLi = document.createElement('li')
                let cityUl = document.querySelector('.search-city__ul')
                newLi.innerHTML = matches
                cityUl.append(newLi)
                newLi.addEventListener('click', () => {
                    finder.value= newLi.textContent
                    cityUl.innerHTML = ''
                })
                finder.addEventListener('input', () => {
                    newLi.remove()
                })
              } 

            if (value == '') {
                let cityUl = document.querySelector('.search-city__ul')
                cityUl.innerHTML = ''
                searchContent.style.display = "block"
            } 
        }
    }, citiesData)
})



const appendDistrict = (place, elem) => {
        let oldP = place.querySelectorAll("p")
        if(oldP.length > 0) {
            oldP.forEach( elem => {
                elem.parentNode.removeChild(elem)
              
              
            })
        }
        elem.forEach( item => {
            let newP = document.createElement("p")
            newP.innerHTML = item
          
            place.append(newP)
            newP.addEventListener('click', function (event) {
                if (event.target) {
                    let nonActive = document.querySelectorAll('.city-col p')
                    nonActive.forEach( item => {
                        item.classList.remove('active-elem-search')
                    })
                    this.classList.add('active-elem-search')
                }
              })
           })
    }




citiesData.forEach(function (element, i) {
        const currentDistrict = this[i].district
        const districtContainer = document.querySelector('.district-col')
        let newP = document.createElement("p")
        newP.className = "district-p"
        newP.innerHTML = currentDistrict
        districtContainer.append(newP)
        const regionContainer = document.querySelector('.region-col')
        const cityContainer = document.querySelector('.city-col')
        newP.addEventListener('click',(event) => {
            console.log(event.target)
            if (event.target) {
                // newP.style.color ="red"
                let newPArray = document.querySelectorAll('.district-p')
                newPArray.forEach(function (elem) {
                    elem.classList.remove('active-elem-search')
                })
                let currentTarget = event.target
                currentTarget.classList.add('active-elem-search')
            }
            cityContainer.innerHTML = ""
            let oldPRegion = regionContainer.querySelectorAll("p")
            if(oldPRegion.length > 0) {
                oldPRegion.forEach( elem => {
                    elem.parentNode.removeChild(elem)

                
                })
            }
            if(newP.innerText == currentDistrict) {
                for (let key in this[i].regions ) {
                    let regionP = document.createElement("p")
                    regionP.innerHTML = key
                    regionContainer.append(regionP)
                    regionP.addEventListener('click', (event) => {
                        appendDistrict(cityContainer, this[i].regions[key] )
                        if (event.target) {
                            let nonActiveReg = document.querySelectorAll('.region-col p')
                            nonActiveReg.forEach( item => {
                                
                                item.classList.remove('active-elem-search')
                            })
                            let regionTarget = event.target
                            regionTarget.classList.add('active-elem-search')
                            
                        }
                    })
                }
            }
        })
    }, citiesData
    )

