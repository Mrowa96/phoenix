import throttle from 'lodash/throttle';

export class Slider {
  #sliderElement: HTMLElement;

  constructor(options: {
    sliderElement: HTMLElement | null;
    nextButtonElement: HTMLElement | null;
    prevButtonElement: HTMLElement | null;
  }) {
    const { nextButtonElement, prevButtonElement, sliderElement } = options;

    if (!sliderElement) {
      throw new Error('options.sliderElement cannot be empty.');
    }

    this.#sliderElement = sliderElement;

    if (!prevButtonElement || !nextButtonElement) {
      throw new Error('Slider has to have defined buttons.');
    }

    prevButtonElement.dataset.ready = nextButtonElement.dataset.ready = '1';

    prevButtonElement.addEventListener(
      'click',
      function onPrevButtonClick(this: Slider) {
        this.#sliderElement.scrollBy({
          behavior: 'smooth',
          left: this.slideWidth * -1,
        });
      }.bind(this),
    );

    nextButtonElement.addEventListener(
      'click',
      function onNextButtonClick(this: Slider) {
        this.#sliderElement.scrollBy({
          behavior: 'smooth',
          left: this.slideWidth,
        });
      }.bind(this),
    );

    sliderElement.addEventListener(
      'scroll',
      throttle(
        function onSliderScroll(this: Slider) {
          if (sliderElement.scrollLeft === 0) {
            prevButtonElement.setAttribute('disabled', 'disabled');
          } else {
            prevButtonElement.removeAttribute('disabled');
          }

          const offsetRight = sliderElement.scrollWidth - sliderElement.scrollLeft - this.slideWidth - this.slidesGap;

          if (offsetRight >= -1 && offsetRight <= 1) {
            nextButtonElement.setAttribute('disabled', 'disabled');
          } else {
            nextButtonElement.removeAttribute('disabled');
          }
        }.bind(this),
        250,
      ),
    );
  }

  get #slides(): [HTMLElement, ...HTMLElement[]] {
    const slides = this.#sliderElement.querySelectorAll<HTMLElement>(':scope > li');

    if (!slides[0]) {
      throw new Error('There have to be at least one slide in slider.');
    }

    return [slides[0], ...[...slides].slice(1)];
  }

  get slidesQuantity() {
    return this.#slides.length;
  }

  get slideWidth() {
    return this.#slides[0].getBoundingClientRect().width;
  }

  get slidesGap() {
    const rawValue = getComputedStyle(this.#sliderElement).getPropertyValue('--slides-gap');
    const value = parseInt(rawValue);

    if (parseInt(rawValue) === Number.NaN) {
      return 0;
    }

    return value;
  }
}
