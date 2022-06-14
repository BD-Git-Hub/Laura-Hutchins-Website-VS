export const elements = {
    
    modal: document.querySelector('.modal'),
    categoryBtn: document.getElementById('categoryBtn'),
    aboutMeBtn: document.getElementById('aboutMeBtn'),
    contactBtn: document.getElementById('contactBtn'),
    socialBtn: document.getElementById('socialBtn'),
    menuGrpBtnGrp: document.querySelector('.menuGrp__BtnGrp'),
    closeBtn: document.querySelector('.close'),


    messageInput: document.querySelector('.message__input'),
    nameInput: document.querySelector('.name__input'),
    emailInput: document.querySelector('.email__input'),
    clearBTN: document.querySelector('.message__button'),

    sectionsContainerSection: document.querySelector('.sectionsContainer__section'),
    
    
    sectionOneID: document.getElementById('sectionOneDiv'),
    sectionTwoID: document.getElementById('sectionTwoDiv'),
    sectionThreeID: document.getElementById('sectionThreeDiv'),
    sectionFourID: document.getElementById('sectionFourDiv'),
    sectionFiveID: document.getElementById('sectionFiveDiv'),
    sectionSixID: document.getElementById('sectionSixDiv'),
    sectionsContainerSection: document.querySelector('.sectionsContainer__section'),
    cateImgOne: document.getElementById('cateImgOne'),
    clickedSectionsContainer: document.querySelector('.clickedSectionsContainer'),
    galleryDiv: document.querySelector('.clickedSectionsContainer__galleryDiv'),
    galleryDivEnlargedImgDiv: document.querySelector('.galleryDiv__enlargedImgDiv'),
    // galleryDivImgDivImg: document.querySelector('.galleryDiv__imgDiv__img'), - Dynamically generated.
    galleryDivEnlargedImgDivImg: document.querySelector('.galleryDiv__enlargedImgDiv__img'),
    galleryDivElargedImgDivI: document.querySelectorAll('.galleryDiv__enlargedImgDiv__i'),
    
    galleryDivImgDiv: document.getElementsByClassName('galleryDiv__imgDiv'),

    sectionCentered: document.querySelector('.section__centered'),
    sectionCenteredGrp: document.querySelectorAll('.section__centered'),
    centeredI: document.querySelector('.centered__i'),

    navbar: document.querySelector('.wrapper__navbar'),

    leftArrow: document.querySelector('.fa-arrow-left'),
    rightArrow: document.querySelector('.fa-arrow-right'),
    crossArrow: document.querySelector('.fa-times'),
    
    
    introSectionWrapper: document.querySelector('.introSection--wrapper'),
    introSectionBg: document.querySelector('.introSection--background'),

    contactIntroContainer: document.querySelector('.contactIntroContainer'),
    contactIntroHeader: document.querySelectorAll('.contactIntro__header'),
    contactIntroBtnDiv: document.querySelector('.contactIntro__BtnDiv'),

    contactSectionContainer: document.querySelector('.contactSectionContainer'),
    leftContactSection: document.querySelector('.contactSectionContainer__leftContactSection'), //leftContactSection__name
    rightContactSection: document.querySelector('.contactSectionContainer__rightContactSection'),//rightContactSection__email
    footerfootContainer: document.querySelector('.footer__footContainer'),
    footerContainer: document.querySelector('.footer__footContainer'),


};



export function nodeToArray(el) {

    let node = el;
    let array = Array.from(node);
    return array;
    
}








