//////////// our services section solution //////////////////////
const ourServicesLi = $('.click__info');
const ourServicesDiv = $('.change__3rd');

ourServicesDiv.eq(0).addClass('toggle1');
ourServicesLi.eq(0).css('background-color', '#18CFAB');
ourServicesLi.eq(0).css('color', 'white');
ourServicesLi.eq(0).css('border-bottom', '1px solid #18CFAB');
ourServicesLi.eq(0).css('border-top', '1px solid #18CFAB');
ourServicesLi.eq(0).css('border-left', '.5px solid #18CFAB');
ourServicesLi.eq(0).css('border-right', '.5px solid #18CFAB');
$('.click__info__arrow').eq(0).css('opacity', '1');


for (let i = 0; i < ourServicesLi.length; i++) {
    ourServicesLi.eq(i).click(function () {
        ourServicesDiv.removeClass('toggle1');
        ourServicesLi.css('background-color', '#F8FCFE');
        ourServicesLi.css('color', '#717171');
        ourServicesLi.css('border-bottom', '1px solid #EDEFEF');
        ourServicesLi.css('border-top', '1px solid #EDEFEF');
        ourServicesLi.css('border-left', '.5px solid #EDEFEF');
        ourServicesLi.css('border-right', '.5px solid #EDEFEF');
        $('.click__info__arrow').css('opacity', '0');

        ourServicesDiv.eq(i).addClass('toggle1');
        $(this).css('background-color', '#18CFAB');
        $(this).css('color', 'white');
        $(this).css('border-bottom', '1px solid #18CFAB');
        $(this).css('border-top', '1px solid #18CFAB');
        $(this).css('border-left', '.5px solid #18CFAB');
        $(this).css('border-right', '.5px solid #18CFAB');
        $('.click__info__arrow').eq(i).css('opacity', '1');

        ourServicesLi.removeClass('activeLi__amazing__work');
        ourServicesLi.addClass('notActiveLi__amazing__work');

        $(this).removeClass('notActiveLi__amazing__work');
        $(this).addClass('activeLi__amazing__work');
    });
}
//////////// our services section solution //////////////////////

//////////////What People Say About theHam///////////////////////

const commentAuthor = $('.small__photo');
const commenterDescription = $('.commenter__description');
const bigFace = $('#big__face');
const carouselBtn = $('.carousel__btn');
let current = 0;

commentAuthor.eq(0).css('margin-top', '10px');
commenterDescription.eq(0).css('display', 'block');

for (let iCarousel = 0; iCarousel < commentAuthor.length; iCarousel++) {

    commentAuthor.eq(iCarousel).click(function () {
        commentAuthor.css('margin-top', '15px');
        commentAuthor.css('transition', 'margin-top 1s');
        commenterDescription.css('display', 'none');
        current = iCarousel;

        $(this).css('margin-top', '10px');
        commenterDescription.eq(iCarousel).css('display', 'block');
        bigFace.css('background-image', $(this).css('background-image'));
    });
}

carouselBtn.eq(0).click(function () {
    current--;
    if (current < 0) {
        current = commentAuthor.length - 1;
    }


    for (let iCarousel = 0; iCarousel < commentAuthor.length; iCarousel++) {
        commentAuthor.css('margin-top', '15px');
        commentAuthor.css('transition', 'margin-top 1s');
        commenterDescription.css('display', 'none');

        commenterDescription.eq(current).css('display', 'block');
        commentAuthor.eq(current).css('margin-top', '10px');
        bigFace.css('background-image', commentAuthor.eq(current).css('background-image'));
    }

});

carouselBtn.eq(1).click(function () {
    current++;
    if (current > commentAuthor.length - 1) {
        current = 0;
    }

    for (let iCarousel = 0; iCarousel < commentAuthor.length; iCarousel++) {
        commentAuthor.css('margin-top', '15px');
        commentAuthor.css('transition', 'margin-top 1s');
        commenterDescription.css('display', 'none');

        commenterDescription.eq(current).css('display', 'block');
        commentAuthor.eq(current).css('margin-top', '10px');
        bigFace.css('background-image', commentAuthor.eq(current).css('background-image'));
    }

});
//////////////What People Say About theHam///////////////////////

/////////////Our Amazing work///////////////////////
const workSection = $('.our__amazing__work');
const workBtn = $('#amazing__work__load');
const gdBtn = $('#amazing__work__load__gd');
const wdBtn = $('#amazing__work__load__wd');
const lpBtn = $('#amazing__work__load__lp');
const wpBtn = $('#amazing__work__load__wp');

const allImages = $('.amazing__photo__wrapper');
const graphicDesignImages = $('.graphic__design');
const webDesignImages = $('.web__design');
const wordpressImages = $('.wordpress');
const landingPagesImages = $('.landing__pages');

const itemLi = $('.our__amazing__work__li__item > li');
const workLoader = $('#loader__oaw');

itemLi.eq(0).addClass('activeLi__amazing__work');


allImages.hide();
let numberOfPhotos = 12;
let numberOfPhotos__gd = 4;
let numberOfPhotos__wd = 4;
let numberOfPhotos__lp = 4;
let numberOfPhotos__wp = 4;
let currentLiValue = 'All';

workBtn.show();
gdBtn.hide();
wdBtn.hide();
lpBtn.hide();
wpBtn.hide();

for (let i = 0; i < numberOfPhotos; i++) {
    allImages.eq(i).show();
}

workBtn.click(function () {
    workLoader.fadeIn(1600).fadeOut(800);


    numberOfPhotos += 12;

    function showAllPhotos() {
        for (let i = 0; i < numberOfPhotos; i++) {
            allImages.eq(i).show().delay(2400);
        }
    }


    setTimeout(showAllPhotos, 2400);
    if (numberOfPhotos === allImages.length) {
        $(this).remove();
    }
});

document.addEventListener('click', function (event) {
    let target = event.target;

    switch (target.id) {
        case 'amazing__work__load__gd':
            workLoader.fadeIn(1600).fadeOut(800);

            numberOfPhotos__gd = graphicDesignImages.length;

        function showItem1() {
            graphicDesignImages.show();
        }

            setTimeout(showItem1, 2400);

            $(`#amazing__work__load__gd`).remove();
            break;
        case 'amazing__work__load__wd':
            workLoader.fadeIn(1600).fadeOut(800);

            numberOfPhotos__wd = webDesignImages.length;

        function showItem2() {
            webDesignImages.show();
        }

            setTimeout(showItem2, 2400);

            $(`#amazing__work__load__wd`).remove();
            break;
        case 'amazing__work__load__lp':
            workLoader.fadeIn(1600).fadeOut(800);

            numberOfPhotos__lp = landingPagesImages.length;

        function showItem3() {
            landingPagesImages.show();
        }

            setTimeout(showItem3, 2400);

            $(`#amazing__work__load__lp`).remove();
            break;
        case 'amazing__work__load__wp':
            workLoader.fadeIn(1600).fadeOut(800);
            numberOfPhotos__wp = wordpressImages.length;

        function showItem4() {
            wordpressImages.show();
        }

            setTimeout(showItem4, 2400);

            $(`#amazing__work__load__wp`).remove();
            break;
    }

});


for (let i = 0; i < itemLi.length; i++) {
    itemLi.eq(i).click(function () {
        itemLi.removeClass('activeLi__amazing__work');
        itemLi.addClass('notActiveLi__amazing__work');


        currentLiValue = $(this).text();

        if (currentLiValue === 'All') {
            allImages.hide();

            for (let i = 0; i < numberOfPhotos; i++) {
                allImages.eq(i).show();
            }

            workBtn.show();
            gdBtn.hide();
            wdBtn.hide();
            lpBtn.hide();
            wpBtn.hide();
        }

        if (currentLiValue === 'Graphic Design') {
            allImages.hide();
            for (let i = 0; i < numberOfPhotos__gd; i++) {
                graphicDesignImages.eq(i).css('display', 'block');
            }

            workBtn.hide();
            gdBtn.show();
            gdBtn.css('margin-top', '-100px');
            wdBtn.hide();
            lpBtn.hide();
            wpBtn.hide();
        }

        if (currentLiValue === 'Web Design') {
            allImages.hide();
            for (let i = 0; i < numberOfPhotos__wd; i++) {
                webDesignImages.eq(i).css('display', 'block');
            }

            workBtn.hide();
            gdBtn.hide();
            wdBtn.show();
            wdBtn.css('margin-top', '-150px');
            lpBtn.hide();
            wpBtn.hide();
        }

        if (currentLiValue === 'Landing Pages') {
            allImages.hide();
            for (let i = 0; i < numberOfPhotos__lp; i++) {
                landingPagesImages.eq(i).css('display', 'block');
            }

            workBtn.hide();
            gdBtn.hide();
            wdBtn.hide();
            lpBtn.show();
            lpBtn.css('margin-top', '-200px');
            wpBtn.hide();
        }

        if (currentLiValue === 'Wordpress') {
            allImages.hide();
            for (let i = 0; i < numberOfPhotos__wp; i++) {
                wordpressImages.eq(i).css('display', 'block');
            }

            workBtn.hide();
            gdBtn.hide();
            wdBtn.hide();
            lpBtn.hide();
            wpBtn.show();
            wpBtn.css('margin-top', '-250px');
        }
    });
}


itemLi.click(function () {
    $(this).removeClass('notActiveLi__amazing__work');
    $(this).addClass('activeLi__amazing__work');
});
/////////////Our Amazing work///////////////////////


//////////////masonry block/////////////
$('.last__extensible__block').masonry({
    columnWidth: 370,
    itemSelector: '.big__item',
    gutter: 10,
});

const masonryPhotos = document.querySelectorAll('.big__item');
const masonryInnerBlock = document.querySelector('.last__extensible__block');
const masonryLoadMore = document.querySelector('#masonry__button');
const masonryLoader = document.querySelector('#loader__masonry');

for (let i = 9; i < masonryPhotos.length; i++) {
    masonryPhotos[i].classList.add('masonry__display__none');
}

masonryInnerBlock.style.height = '900px';

masonryLoadMore.onclick = function () {
    masonryLoader.style.top = '-30px';

    function removeLoader() {
        masonryLoadMore.style.opacity = '0';
        for (let i = 9; i < masonryPhotos.length; i++) {
            masonryPhotos[i].classList.remove('masonry__display__none');
        }
        masonryInnerBlock.style.height = '2200px';
    }
    setTimeout(removeLoader, 2400);

};


//////////////masonry block/////////////
