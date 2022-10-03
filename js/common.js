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

    const scrollContentXY = document.querySelectorAll('.scroll-content-xy');
    if (scrollContentXY.length > 0) {
        scrollContentXY.forEach((scrollContentItem) => {
            OverlayScrollbars(scrollContentItem, {
                overflowBehavior: {
                    x: "scroll",
                    y: "scroll"
                },
            });
        });
    }    

    const headerSearch = document.querySelector('.search-header__content');
    const headerSearchField = document.querySelector('.search-header__input');
    const headerSearchDropdown = document.querySelector('.search-dropdown');
    const headerAudioplayerElement = document.querySelector('.header__audioplayer');

    if (headerSearchField) {
        headerSearchField.addEventListener('input', (event) => {
            if (event.target.value === '') {
                hideHeaderDropdown();
            } else {
                showHeaderDropdown();
            }
        });
    }

    function expandHeaderSearch() {
        if (headerAudioplayerElement) {
            if (headerAudioplayerElement.classList.contains('header__audioplayer--active')) {
                headerAudioplayerElement.classList.add('header__audioplayer--hidden');
            }
        }
    }

    function collapseHeaderSearch() {
        if (headerAudioplayerElement) {
            if (headerAudioplayerElement.classList.contains('header__audioplayer--active')) {
                headerAudioplayerElement.classList.remove('header__audioplayer--hidden');
            }
        }
    }

    function showHeaderDropdown() {
        if (headerSearchDropdown) {
            headerSearchDropdown.classList.add('search-dropdown--active');
        }
    }

    function hideHeaderDropdown() {
        if (headerSearchDropdown) {
            headerSearchDropdown.classList.remove('search-dropdown--active');
        }        
    }    

    if (headerSearch && headerAudioplayerElement) {
        headerSearch.addEventListener('click', () => {
            expandHeaderSearch();
        });      
    }

    const fileTree = document.querySelectorAll('[data-tree=true]');
    if (fileTree.length > 0) {
        fileTree.forEach((tree) => {
            tree.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                const item = event.target.closest('.file-tree__item');
                if (event.target.classList.contains('file-tree__name')) {
                    // Выбор итема
                    if (item.classList.contains('file-tree__item--active')) {
                        item.classList.remove('file-tree__item--active');
                    } else {
                        const prevActive = tree.querySelector('.file-tree__item--active');
                        if (prevActive) {
                            prevActive.classList.remove('file-tree__item--active');
                        }
                        item.classList.add('file-tree__item--active');
                    }
                } else if (event.target.classList.contains('file-tree__folder-handler--collapsed')) {
                    // "Раскрывание" директории
                    event.target.classList.add('file-tree__folder-handler--expanded');
                    event.target.classList.remove('file-tree__folder-handler--collapsed');
                    event.target.nextElementSibling.classList.add('file-tree--active');
                } else if (event.target.classList.contains('file-tree__folder-handler--expanded')) {
                    // "Скрывание" директории
                    event.target.classList.add('file-tree__folder-handler--collapsed');
                    event.target.classList.remove('file-tree__folder-handler--expanded');
                    event.target.nextElementSibling.classList.remove('file-tree--active');
                }
            });
        });
    }

    const diskFilesList = document.querySelector('.disk-files-list');
    function diskFilesCloseContextMenu() {
        if (diskFilesList) {
            const activeContextMenu = diskFilesList.querySelector('.disk-files-item__context-menu.disk-files-item__context-menu--active');
            if (!activeContextMenu) return;
            activeContextMenu.classList.remove('disk-files-item__context-menu--active');
        }
    }

    const diskFilesListItems = document.querySelectorAll('.disk-files-item');
    if (diskFilesListItems.length > 0) {
        diskFilesListItems.forEach((item) => {
            item.addEventListener('contextmenu', (event) => {
                if (!event.target.closest('.disk-files-actions')) {
                    event.preventDefault();
                    const rect = item.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;
                    const dropDown = item.querySelector('.disk-files-item__context-menu');
                    if (dropDown) {
                        diskFilesCloseContextMenu();
                        dropDown.style.top = `${y}px`;
                        dropDown.style.left = `${x}px`;
                        dropDown.classList.add('disk-files-item__context-menu--active');
                    }
                }
            });
        });
    }

    document.addEventListener('click', function(event) {
        diskFilesCloseContextMenu();
        if (!event.target.closest('.search-header__content')) {
            collapseHeaderSearch();
            hideHeaderDropdown();
        }        
    }); 

    document.addEventListener('keydown', function(event){
        if (event.key === "Escape"){
            diskFilesCloseContextMenu();
            collapseHeaderSearch();
        }
    });    

    const reservList = document.querySelectorAll('.table-reserv-item__row');
    if (reservList.length > 0) {
        reservList.forEach((item) => {
            item.addEventListener('click', (event) => {
                if (event.target.closest('.table-reserv-item__name')) {
                    item.classList.toggle('table-reserv-item__row--collapsed');
                }
            });
        });
    }
    
    const clubTabs = document.querySelectorAll('.club-tabs');
    if (clubTabs.length > 0) {
        clubTabs.forEach((item) => {
            item.addEventListener('click', (event) => {
                if (event.target.classList.contains('club-tabs-nav__item') && !event.target.classList.contains('club-tabs-nav__item--active')) {
                    const tabAlias = event.target.dataset.tab;
                    const prevNavActive = item.querySelector('.club-tabs-nav__item--active');
                    const prevTabActive = item.querySelector('.club-tabs-content--active');
                    const tabContentElement = item.querySelector(`.club-tabs-content[data-tab=${tabAlias}]`);
                    if (prevNavActive && prevTabActive && tabContentElement) {
                        prevNavActive.classList.remove('club-tabs-nav__item--active');
                        prevTabActive.classList.remove('club-tabs-content--active');
                        event.target.classList.add('club-tabs-nav__item--active');
                        tabContentElement.classList.add('club-tabs-content--active');
                    }
                }
            });
        });
    }       

    const titleToggle = document.querySelector('.title-toggler');
    const trainingEdit = document.querySelector('.training-edit');
    if (titleToggle && trainingEdit) {
        titleToggle.addEventListener('click', () => {
            titleToggle.classList.toggle('title-toggler--collapsed');
            trainingEdit.classList.toggle('training-edit--collapsed');
        });
    }
}


