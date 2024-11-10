require('./styles.scss');

var Flickity = require('flickity');
require('flickity-imagesloaded');

var $carousels = new Array();

// Modals

var rootEl = document.documentElement;
var $modals = getAll('.modal');
var $modalTriggers = getAll('.modal-trigger');
var $modalCloses = getAll('.modal-card-head .delete, .modal-card-foot .button');

if ($modalTriggers.length > 0) {
    $modalTriggers.forEach(function ($el) {
        $el.addEventListener('click', function () {
            var target = $el.dataset.target;
            openModal(target);
        });
    });
}

if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
        $el.addEventListener('click', function () {
            closeModals();
        });
    });
}

// JavaScript to toggle dropdown visibility
document.addEventListener('DOMContentLoaded', () => {
    // Get dropdown button and dropdown menu
    const dropdownButton = document.querySelector('.dropdown-trigger button');
    const dropdownMenu = document.querySelector('.dropdown');

    // Add event listener to toggle dropdown menu visibility
    dropdownButton.addEventListener('click', () => {
      // Toggle 'is-active' class to show/hide the dropdown
      dropdownMenu.classList.toggle('is-active');
    });

    // Close the dropdown if the user clicks outside of it
    document.addEventListener('click', (event) => {
      const isClickInside = dropdownMenu.contains(event.target) || dropdownButton.contains(event.target);
      if (!isClickInside) {
        dropdownMenu.classList.remove('is-active');
      }
    });
  });

function openModal(target) {
    var $target = document.getElementById(target);
    rootEl.classList.add('is-clipped');
    $target.classList.add('is-active');
    var carouselId = target + '-carousel';

    if (document.querySelector('#' + carouselId)) {
        // Initialize each carousel one time only
        if ($carousels.length === 0) {
            $carousels.push(initCarousel(carouselId));
        }
        else {
            var index = $carousels.findIndex(c => c.element.id == carouselId);
            if (index === -1) {
                $carousels.push(initCarousel(carouselId));
            }
        }
    }
}

function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
        $el.classList.remove('is-active');
    });
}

// Functions

function initCarousel(id) {
    return new Flickity('#' + id, {
        imagesLoaded: true,
        adaptiveHeight: true // https://github.com/metafizzy/flickity/issues/11
    });
}

function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}