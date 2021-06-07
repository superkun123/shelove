
if (  sessionStorage.getItem('showLoader') == 1 ) { 

//  $('.preloader').css('opacity', '0')
 $('.preloader').css('display', 'none')
 $('body').css('overflowY', 'scroll')
 console.log('Убрал лоадер')

} else {
  $('.preloader').css('display', 'flex')
  setTimeout(`$('.preloader').css('opacity', '0')`, 2200);
  setTimeout(`$('.preloader').css('display', 'none')`, 2700);
  setTimeout(`$('body').css('overflowY', 'scroll')`, 1900);
  console.log('Первый заход')

}



$( document ).ready(function() {

  // sessionStorage.setItem('showLoader', 1);


  setTimeout(`sessionStorage.setItem('showLoader', 1);`, 2500)

console.log(sessionStorage.getItem('showLoader'))



//  При первом заходе




  


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
        prevArrow: `<button type="button" class="slick-prev"><svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1.33722" height="5.65333" rx="0.668611" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 3.99805 7.99609)" fill="#EA0319"/>
        <rect width="1.32629" height="5.65629" rx="0.663145" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 4.93848 0.936523)" fill="#EA0319"/>
        </svg>
        </button>`,
        nextArrow: `<button type="button" class="slick-next"><svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1.33722" height="5.65333" rx="0.668611" transform="matrix(-0.707107 0.707107 0.707107 0.707107 0.945312 0)" fill="white"/>
        <rect width="1.32629" height="5.65629" rx="0.663145" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0.00488281 7.05957)" fill="white"/>
        </svg>
        </button>`
    });
    $('.slider-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        vertical:false,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        draggable: true,
        verticalSwiping:true,
        responsive: [
        {
            breakpoint: 992,
            settings: {
              vertical: false,
            }
        },
        {
          breakpoint: 768,
          settings: {
            vertical: false,
          }
        },
        {
          breakpoint: 580,
          settings: {
            vertical: false,
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 380,
          settings: {
            vertical: false,
            slidesToShow: 4,
          }
        }
        ]
    });


// Слайдер на главной
$.each($('.slider-js'), function() {

    $(this).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 500,
        fade: false,
        cssEase: 'linear',
        prevArrow: `<button type="button" class="slick-prev">
        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1.67159" height="7.06692" rx="0.835795" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 4.99707 9.99609)" fill="#EA0319"/>
<rect width="1.65792" height="7.07062" rx="0.828962" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 6.17188 1.17188)" fill="#EA0319"/>
</svg>

    
        </button>`,
        nextArrow: `<button type="button" class="slick-next"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1.67159" height="7.06692" rx="0.835795" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2.00293 0.00390625)" fill="white"/>
        <rect width="1.65792" height="7.07062" rx="0.828962" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0.828125 8.82812)" fill="white"/>
        </svg>
        </button>`
    
    });
});



$(".checkbox-filter").on( "click", function() {
  if ($(this).is(':checked')){
    console.log('радио-на мобиле чек')
    let currentParent = $(this).parent()
    $(currentParent).find('.checkmark').addClass('checked-red')

  } else {
    console.log('радио-на мобиле не чек')
  }
});


$('.checkbox-filter-radio').on('click', function() {
  $('.checkmark').removeClass('checked-red')
  if ($(this).is(':checked')){
    console.log('радио-на мобиле чек')
    let currentParent = $(this).parent()
    $(currentParent).find('.checkmark').addClass('checked-red')

  } else {
    console.log('радио-на мобиле не чек')
  }
})



if (window.matchMedia("(max-width: 480px)").matches) {
  $('.slider-js-cards').addClass('slider-js-cards-hidden')
  $('.slider-js-cards').removeClass('slider-js-cards')
}




$.each($('.slider-js-cards'), function() {

  $(this).slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      speed: 500,
      fade: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      ],
      // cssEase: 'linear',
      prevArrow: `<button type="button" class="slick-prev">
      <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1.67159" height="7.06692" rx="0.835795" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 4.99707 9.99609)" fill="#EA0319"/>
<rect width="1.65792" height="7.07062" rx="0.828962" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 6.17188 1.17188)" fill="#EA0319"/>
</svg>

  
      </button>`,
      nextArrow: `<button type="button" class="slick-next"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="white"/>
      <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="white"/>
      </svg></button>`
  
  });
});




// Ресайз слайдер для табов
$('.tab-with-slider').on('click', function() {
  $('.slider-for-tab').resize();
})



$('.anon-btn').on('click', function() {
  $('.slider-for-tab').resize();
})




$('.dropdown-content-list li a').on('click', function(e) {
  e.preventDefault()
})









$.each($('.slider-for-tab'), function() {

  $(this).slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      speed: 500,
      fade: false,
      // cssEase: 'linear',
      prevArrow: `<button type="button" class="slick-prev">
      <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1.67159" height="7.06692" rx="0.835795" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 4.99707 9.99609)" fill="#EA0319"/>
<rect width="1.65792" height="7.07062" rx="0.828962" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 6.17188 1.17188)" fill="#EA0319"/>
</svg>

  
      </button>`,
      nextArrow: `<button type="button" class="slick-next"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="white"/>
      <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="white"/>
      </svg></button>`
  
  });
});









if (window.matchMedia("(max-width: 480px)").matches) {




$.each($('.slider-js-cards-hidden'), function() {

  $(this).slick({
      infinite: false,
      slidesToShow: 1.25,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      speed: 500,
      fade: false,
      // cssEase: 'linear',
      prevArrow: `<button type="button" class="slick-prev">
      <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1.67159" height="7.06692" rx="0.835795" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 4.99707 9.99609)" fill="#EA0319"/>
<rect width="1.65792" height="7.07062" rx="0.828962" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 6.17188 1.17188)" fill="#EA0319"/>
</svg>

  
      </button>`,
      nextArrow: `<button type="button" class="slick-next"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="white"/>
      <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="white"/>
      </svg></button>`
  
  });
});


// Перепиши код


let sliderProgressBar = function (slider, bar, barLabel) {
  slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;

        
        bar
          .css('background-size', calc + '% 100%')
          .attr('aria-valuenow', calc );
        
        barLabel.text( calc + '% completed' );
  });
}



sliderProgressBar( $('#slider-js-card-hidden-1'), $('#progressBar1'), $('#progressBarLebel1')  )


sliderProgressBar( $('#slider-js-card-hidden-2'), $('#progressBar2'), $('#progressBarLebel2')  )


sliderProgressBar( $('#slider-js-card-hidden-3'), $('#progressBar3'), $('#progressBarLebel3')  )


sliderProgressBar( $('#slider-js-card-hidden-4'), $('#progressBar4'), $('#progressBarLebel4')  )


sliderProgressBar( $('#slider-js-card-hidden-5'), $('#progressBar5'), $('#progressBarLebel5')  )


sliderProgressBar( $('#slider-js-card-hidden-6'), $('#progressBar6'), $('#progressBarLebel6')  )

}



// Переключение ссылок списка категорий
$('.aside-menu__li').on('click', function() {
    $('.aside-menu__li').removeClass('aside-menu__li--active');
    $(this).addClass('aside-menu__li--active');
})


// Переключение пагинации
$('.pagination-list__li').on('click', function(e) {
  e.preventDefault()
    $('.pagination-list__li').removeClass('pagination-list__li--active');
    $(this).addClass('pagination-list__li--active')
})


// Показать всё
$('.showmore-btn').on('click', function(e) {
    e.preventDefault()
    $('.product-hidden').addClass('show-hidden-product ')
  })



  // Удалить товар из корзины корзины






// active-like


$('.like-btn').on('click', function() {
  // $(this).toggleClass('active-like')
})


//   Каунтер

$('.minus').on('click', function(e) {
    const counterParent = $(this).parent()
    const counterBody = $(counterParent).find('.counter-value')
    let counter = parseInt($(counterBody).val())
    $(counterBody).val(counter)
    if (counter <= 0) {
      counter = 0
    } else {
      counter -= 1
      $(counterBody).val(counter)
    }
  })
  
  
  $('.plus').on('click', function(e) {
    const counterParent = $(this).parent()
    const counterBody = $(counterParent).find('.counter-value')
    let counter = parseInt($(counterBody).val())
    $(counterBody).val(counter)
    console.log('плюс 1')
    counter += 1
    $(counterBody).val(counter)
  })


  // Табы


  
$('.js-tab-trigger').click(function() {
  var id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="'+ id +'"]');
  
  $('.js-tab-trigger.active').removeClass('active'); // 1
  $(this).addClass('active'); // 2
  
  $('.js-tab-content.active').removeClass('active'); // 3
  content.addClass('active'); // 4
});



// Табы категории для неё/для него



$('.category-btn').click(function(e) {
  e.preventDefault()
  var id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="'+ id +'"]');
  
  $('.category-btn.category-btn--active').removeClass('category-btn--active'); // 1
  $(this).addClass('category-btn--active'); // 2
  
  $('.js-tab-content.active-flex').removeClass('active-flex'); // 3
  content.addClass('active-flex'); // 4
});



// Табы для бонуснов и скидок



$('.bonus-tab').click(function(e) {
  e.preventDefault()
  var id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="'+ id +'"]');
  
  $('.bonus-tab.bonus-tab--active').removeClass('bonus-tab--active'); // 1
  $(this).addClass('bonus-tab--active'); // 2
  
  $('.js-tab-content.active-block').removeClass('active-block'); // 3
  content.addClass('active-block'); // 4
});




$('.aside-menu__li').click(function() {
  var id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="'+ id +'"]');
  
  $('.aside-menu__li.aside-menu__li--active').removeClass('aside-menu__li--active'); // 1
  $(this).addClass('aside-menu__li--active'); // 2
  
  $('.js-tab-content.active').removeClass('active'); // 3
  content.addClass('active'); // 4
});




// Открыть поиск по городу


$('.city-dropdown').on('click', function() {
  $('.city-search-main').addClass('block')
  $('body').addClass('overflow')
})


$('.cross-city').on('click', function() {
  $('.city-search-main').removeClass('block')
  $('body').removeClass('overflow')
})










// $('.aside-menu__li').click(function() {
//   var id = $(this).attr('data-tab'),
//       content = $('.js-tab-content[data-tab="'+ id +'"]');
  
//   $('.aside-menu__li.aside-menu__li--active').removeClass('active'); // 1
//   $(this).addClass('aside-menu__li--active'); // 2
  
//   $('.js-tab-content.active').removeClass('active'); // 3
//   content.addClass('active'); // 4
// });


$('.aside-menu__li a').click(function(e) {
  e.preventDefault()
})


// aside-menu__li aside-menu__li--active



// Многоуровневое меню для мобилок



const navExpand = [].slice.call(document.querySelectorAll('.nav-expand-header'))
const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		Назад
	</a>
</li>`

navExpand.forEach(item => {
	item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
	item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
	item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
})


const ham = document.getElementById('ham')
let toggled = false
if (ham) {
ham.addEventListener('click', function(e) {
  console.log('открыл меню')
  e.preventDefault()
  document.body.classList.toggle('nav-is-toggled-header')
  // $('.firstline').toggleClass('topLine')
  $('.secondline').toggleClass('middleLine')
  // $('.thirdline').toggleClass('bottomLine')
  if (toggled === false){


    $('.firstline').removeClass("topLine-reverse");
    $('.firstline').addClass('topLine')


    $('.thirdline').removeClass("bottomLine-reverse");
    $('.thirdline').addClass('bottomLine')



    toggled = true;
 } else {
 
  $('.firstline').addClass("topLine-reverse");
  $('.firstline').removeClass('topLine')


  $('.thirdline').addClass("bottomLine-reverse");
  $('.thirdline').removeClass('bottomLine')

    toggled = false; 
 }
})
}



// Второе меню



const navExpandFilter = [].slice.call(document.querySelectorAll('.nav-expand-header-filter'))
const backLinkFilter = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		Назад
	</a>
</li>`

navExpandFilter.forEach(item => {
	item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLinkFilter)
	item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
	item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
})


$('.category-sort-btn').on('click', function(e) {
  console.log('открыл фильтры')
  e.preventDefault()
  document.body.classList.toggle('nav-is-toggled-filter')

})
// 

$('.basket-btn-in-header').on('click', function(e) {
  e.preventDefault()
  $('.sidebar').toggleClass('show-sidebar')
  $('.fade-body ').toggleClass('fade-show')
})

$('.fade-body').on('click', function() {
  $('.sidebar').removeClass('show-sidebar')
  $('.fade-body ').removeClass('fade-show')
})

$('.cross-aside svg').on('click', function() {
  $('.sidebar').removeClass('show-sidebar')
  $('.fade-body ').removeClass('fade-show')
})





// Лайк в избранное

$('.showmore-btn').on('click', function() {
  console.log('click btn')
  let showMoreParen = $(this).parents('.col').get(0)
  console.log(showMoreParen)
  $(showMoreParen).find('.showmore-mask').toggleClass('disable')
  $(this).find('svg').toggleClass('rotate180')
})



$('.showmore-btn-2').on('click', function() {
  console.log('click btn')
  let showMoreParen = $(this).parents('.col').get(0)
  console.log(showMoreParen)
  $(showMoreParen).find('.showmore-mask').toggleClass('disable')
  $(this).find('svg').toggleClass('rotate180')
})



// Рендерю html для адаптива

if (window.matchMedia("(max-width: 1024px)").matches) {


  // Мобильное меню
$(".nav-drill-header .nav-drill__search").after($(".search"));
$('.like-btn-header').appendTo('.nav-drill-header__row-btns')
$('.like-btn-header svg').after('Избранное')
$('.profile').appendTo('.nav-drill-header__row-btns')
$('.profile svg').after('Вход/Регистрация')
$('.header-phone').appendTo('.nav-drill-header__row-btns')
$('.for-her-ul li').appendTo('.for-her-nav-content')
$('.for-him-ul li').appendTo('.for-him-nav-content')
$('.for-them-ul li').appendTo('.for-them-nav-content')
$('.for-brands-ul li').appendTo('.for-brands-nav-content')
$('.nav-drill-header .tabs-mobile-menu-content').after($('.sale-card'))
$('#product-items-list-1 li').appendTo('#accordion-poducts-1')
$('#product-items-list-2 li').appendTo('#accordion-poducts-2')
$('#product-items-list-3 li').appendTo('#accordion-poducts-3')
$('#product-items-list-4 li').appendTo('#accordion-poducts-4')




// aside

$('.aside-header').after($('.aside-product__total-price'))

// Меню фильтров для мобилок

$('.price-inputs').appendTo('.filter-prices')
$('.brand').appendTo('.brand-filter-menu')
$('.size').appendTo('.size-filter-menu')
$('.aroma').appendTo('.aroma-filter-menu')
$('.aside-menu__li').appendTo('.nav-drill-filter__filter-link')
$('.filter-btn button').appendTo('.nav-drill-filter__btns')



// Страница товара


$('.char__title').appendTo('.product-item__mobile-title-col')
$('.char-articul').appendTo('.product-item__mobile-title-col')
$('.product-item-desc-tab').appendTo('.product-item__description-card')
$('.review-block').appendTo('.product-item__reviews-card')
$('.anon').appendTo('.product-item__anonymus')
$('.garanty').appendTo('.product-item__garanty')
$('.char-in-tab').appendTo('.product-item__char')



// Футер


$('.about-shop-footer-desctop').appendTo('.about-shop-footer')
$('.footer-info-desctop').appendTo('.footer-info')
$('.footer-extra-desctop').appendTo('.footer-extra')
$('.footer-callback-desctop').appendTo('.footer-callback')
$('.footer-delivery__icon').appendTo('.mobile-parners')
$('.partners-footer-logos').appendTo('.mobile-parners')


// Страница личный кабинет

$('.aside-menu__ul').appendTo('.lk-card')


$('.aside-menu__li').on('click', function() {
  $('.lk-title').html('')
  $(this).clone().appendTo('.lk-title')
  $('.collapse').collapse('hide');	
})




}




$('.nav-drill-filter__cross').on('click', function() {
  $('body').removeClass('nav-is-toggled-filter')
})




// Toggle для неё и для него  десктоп








// Плавный скролл вверх

$('body').on('click', 'a.scroll', function(e){
  e.preventDefault()
  var id  = $(this).attr('href'),
  top = $(id).offset().top;
   $('body,html').animate({scrollTop: top}, 1500);
  
});





})
