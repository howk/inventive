window.onload = function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    })

    let slideUp = (target, duration = 500) => {

        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.boxSizing = 'border-box';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            //alert("!");
        }, duration);
    }

    let slideDown = (target, duration = 500) => {

        target.style.removeProperty('display');
        let display = window.getComputedStyle(target).display;
        if (display === 'none') display = 'block';
        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    }

    //  Кнопка меню
    const menuTrigger = document.querySelector('.btn-nav-mobile-js');
    const sidebar = document.querySelector('.sidebar-main--js');
    const speed = 700;

    if (menuTrigger) {
        menuTrigger.addEventListener("click", function (e) {
            //sidebar.classList.toggle('open');
            if (this.classList.contains('active')) {
                slideUp(sidebar, speed);
                this.classList.remove('active');
            }
            else {
                slideDown(sidebar, speed);
                this.classList.add('active');
            }
        });
    }

    //  Кнопка профиля
    const btnProfile = document.querySelector('.card-coin__icon_btn');
    const popupWrap = document.querySelector('.popup-card-coin');
    const popupBg = document.querySelector('.card-coin__popup-bg');

    if (btnProfile) {
        btnProfile.addEventListener("click", function (e) {
            popupWrap.classList.toggle('open');
            popupBg.classList.toggle('open');
        });
    }

    if (popupBg) {
        popupBg.addEventListener("click", function (e) {
            popupWrap.classList.remove('open');
            this.classList.remove('open');
        });
    }

    // Кнопка лайка
    const btnLike = document.querySelectorAll('.initiatives__like-wrap');
    if (btnLike.length > 0) {
        for (var i = 0; i < btnLike.length; i++) {
            btnLike[i].addEventListener("click", function (e) {
                if (this.classList.contains('initiatives__like-wrap--active')) {
                    this.classList.remove('initiatives__like-wrap--active');
                }
                else {
                    this.classList.add('initiatives__like-wrap--active');
                }
            })
        }
    }

    //Количество карточек
    const postCount = 5;
    const postCatalog = document.querySelector('.post-catalog--length_js');
    if (postCatalog) {
        const postCatalogItems = document.querySelectorAll('.post-catalog__item');
        if (postCatalogItems.length > postCount) {
            postCatalog.classList.add('post-catalog--two_column');
        }
    }

    //Фильтр партнерских скидок 
    const postFilterWrap = document.querySelector('.post-filter');
    if (postFilterWrap) {
        postFilterWrap.addEventListener("click", function (e) {
            let postFilterTarget = e.target;
            if (postFilterTarget.classList.contains('post-filter__item')) {
                let dataFilterValue = postFilterTarget.getAttribute('data-sort-value');
                postCardSort(dataFilterValue);
            }
            if (!postFilterTarget.classList.contains('current')) {
                let postFilterItems = postFilterWrap.querySelectorAll('.post-filter__item');
                postFilterItems.forEach((postFilterItem) => {
                    postFilterItem.classList.remove('current')
                })
                postFilterTarget.classList.add('current');
            }
        });
    }

    function postOpenCurrent() {
        let postFilterDefItems = document.querySelectorAll('.post-filter__item');
        postFilterDefItems.forEach((postFilterDefItem) => {
            if (postFilterDefItem.classList.contains('current')) {
                let dataFilterdefValue = postFilterDefItem.getAttribute('data-sort-value');
                postCardSort(dataFilterdefValue);
            }
        })
    }

    postOpenCurrent();

    function postCardSort(sortData) {
        const postCardSortItems = document.querySelectorAll('.post-catalog__item');
        if (postCardSortItems.length > 0) {
            for (let i = 0; i < postCardSortItems.length; i++) {
                let postCardSortItem = postCardSortItems[i];
                let postCardSortItemDataValue = postCardSortItem.getAttribute('data-card-value');
                if (!sortData || postCardSortItemDataValue == sortData) {
                    if (!postCardSortItem.classList.contains('visible')) {
                        postCardSortItem.classList.add('visible');
                    }
                }
                else {
                    postCardSortItem.classList.remove('visible');
                }
            }
        }
    }

    const btnLikeInst = document.querySelectorAll('.like-wrap');
    if (btnLikeInst.length > 0) {
        for (var i = 0; i < btnLikeInst.length; i++) {
            btnLikeInst[i].addEventListener("click", function (e) {
                if (this.classList.contains('like-wrap--active')) {
                    this.classList.remove('like-wrap--active');
                }
                else {
                    this.classList.add('like-wrap--active');
                }
            })
        }
    }

    const fileSelector = document.querySelector('.file-input');
    if (fileSelector) {
        fileSelector.addEventListener('change', (event) => {
            const fileList = event.target.files[0].name;
            console.log(fileList);
            const fileInfo = document.querySelector('.file-input__info');
            fileInfo.innerHTML = fileList;
            fileInfo.classList.add('active');
        });
    }


    const fileItems = document.querySelectorAll('.file-sec');
    if (fileItems.length > 0) {
        fileItems.forEach(fileItem => {
            fileItem.addEventListener("click", (e) => {
                let fileItemTarget = e.target;
                if (fileItemTarget.classList.contains('file-sec__input')) {
                    let fileBtn = fileItem.querySelector('.file-sec__input');
                    let fileText = fileItem.querySelector('.file-sec__text');
                    fileBtn.addEventListener('change', (event) => {
                        let fileListInfo = event.target.files[0].name;
                        fileText.value = fileListInfo;
                    });
                }
            });
        });
    }

    const timeItemBtn = document.querySelectorAll('.time-calend__heading');
    const timeItemBodyAll = document.querySelectorAll('.time-calend__body');

    if (timeItemBtn.length > 0) {
        for (var i = 0; i < timeItemBtn.length; i++) {
            timeItemBtn[i].addEventListener("click", function () {
                const timeItem = this.parentNode;
                const timeItemBody = timeItem.querySelector('.time-calend__body');
                const timeItemContent = timeItemBody.querySelector('.time-calend__content');
                const timeItemContentHeight = timeItemContent.offsetHeight + 10;

                if (this.classList.contains('current')) {
                    this.classList.remove('current');
                    timeItemBody.style.height = 0;
                }
                else {
                    timeItemBtn.forEach(function (item, j) {
                        timeItemBtn[j].classList.remove('current');
                    });
                    timeItemBodyAll.forEach(function (item, n) {
                        timeItemBodyAll[n].style.height = 0;
                    });
                    this.classList.add('current');
                    timeItemBody.style.height = timeItemContentHeight + 'px';
                }
            })
            if (timeItemBtn[i].classList.contains('current')) {
                const timeItemDef = timeItemBtn[i].parentNode;
                const timeItemBodyDef = timeItemDef.querySelector('.time-calend__body');
                const timeItemContentDef = timeItemBodyDef.querySelector('.time-calend__content');
                const timeItemContentHeightDef = timeItemContentDef.offsetHeight + 10;
                timeItemBodyDef.style.height = timeItemContentHeightDef + 'px';
            }
        }
    }

    const selectItem = document.querySelectorAll('.select');
    if (selectItem.length > 0) {
        for (var i = 0; i < selectItem.length; i++) {
            const selectItemBtn = selectItem[i].querySelector('.select__label');
            selectItemBtn.addEventListener("click", function () {
                if (this.parentElement.classList.contains('select--open')) {
                    this.parentElement.classList.remove('select--open');
                }
                else {
                    selectItem.forEach(function (item, n) {
                        selectItem[n].classList.remove('select--open');
                    });
                    this.parentElement.classList.add('select--open');
                }
            })
            const selectItemOption = selectItem[i].querySelectorAll('.select__item');
            for (var j = 0; j < selectItemOption.length; j++) {
                selectItemOption[j].addEventListener("click", function () {
                    selectItemOption.forEach(function (item, k) {
                        selectItemOption[k].classList.remove('select__item--current');
                    });
                    const selectItemOptionValue = this.textContent;
                    this.classList.add('select__item--current');
                    selectItemBtn.innerHTML = selectItemOptionValue;
                    selectItemBtn.parentElement.classList.remove('select--open');
                })
            }
        }
    }

    const inputPlace = document.querySelector('.place');
    if (inputPlace) {
        inputPlace.addEventListener('input',
            function (e) {
                this.value = this.value.replace(/[^\d.]/g, '');
            }
        )
    }

    //Карьерный рост
    const modalCareer = document.querySelector('.modal--career');
    if (modalCareer) {
        const modalCareerList = modalCareer.querySelector('.careerListModalWrap');
        modalCareerList.classList.add('blocked');
        const btnModalCareer = document.querySelector('.openModalCareer');
        if (btnModalCareer) {
            btnModalCareer.addEventListener("click", function () {
                let modalCareerBootstrap = new bootstrap.Modal(document.getElementById('careerModal'));
                if (!modalCareer.classList.contains('opened')) {
                    modalCareerBootstrap.show();
                    setTimeout(career, 200);
                    modalCareer.classList.add('opened');
                    modalCareerList.classList.remove('blocked');
                }
                else {
                    modalCareerBootstrap.show();
                }
            });
        }
    }

    function career() {
        const lineWrap = document.querySelectorAll('.careerListModalWrap');
        if (lineWrap.length > 0) {
            lineWrap.forEach(lineWrapItem => {
                if (!lineWrapItem.classList.contains('blocked')) {
                    let lineWrapContent = lineWrapItem.querySelector('.lineWrapCareer');
                    let lineBody = lineWrapItem.querySelector('.lineWrapCareer__body');
                    let lineFooter = lineWrapItem.querySelector('.lineWrapCareer__footer');
                    let lineItem = lineWrapItem.querySelector('.lineWrapCareer__line-item');
                    let lineBodyItemHeight = lineItem.offsetHeight;
                    let lineHeadingHeight = lineWrapItem.querySelector('.lineWrapCareer__heading').offsetHeight;
                    let lineFooterHeight = lineFooter.offsetHeight;
                    let lineWrapHeight = lineWrapContent.offsetHeight;
                    let lineHeightTotal = lineWrapHeight - lineBodyItemHeight - lineHeadingHeight - lineFooterHeight;
                    if (lineHeightTotal > 0) {
                        let lineCount = Math.round(lineHeightTotal / lineBodyItemHeight);
                        if (lineCount % 2 === 0) {
                            addLineItem(lineBody, lineCount);
                        }
                        else {
                            addLineItem(lineBody, lineCount);
                            lineFooter.classList.add('lineWrapCareer__footer--rotate');
                        }
                    }
                    let careerItem = lineWrapItem.querySelectorAll('.careerList__item');
                    if (careerItem.length == 1) {
                        lineWrapContent.classList.add('lineWrapCareer--one');
                    }
                    lineWrapItem.classList.add('blocked');
                }
            })
        }
    }

    function addLineItem(element, count) {
        for (let i = 0; i < count; i++) {
            let addLine = document.createElement('div');
            addLine.className = "lineWrapCareer__line-item";
            element.append(addLine);
        }
    }

    career();

    //Скролл в блоках
    const scrollContent = document.querySelectorAll('.scroll-content');
    if (scrollContent.length > 0) {
        scrollContent.forEach((scrollContentItem) => {
            OverlayScrollbars(scrollContentItem, {
                overflowBehavior: {
                    y: "scroll"
                },
            });
        });
    }

}


