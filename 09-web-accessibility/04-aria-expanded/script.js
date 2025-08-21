document.addEventListener('DOMContentLoaded', function () {
//  Target the accordion header when the DOM is loaded.
  const header = document.querySelector('.accordion-header');
//  Listen to a click, if clicked, do the following logic:
  header.addEventListener('click', () => {
    // Get the next sibling to the accordion header (which is the accordion-content at this stage)
    const content = header.nextElementSibling;
    // Check if the expanded option is true (if expanded or collapsed)
    const expanded = header.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded attribute
    header.setAttribute('aria-expanded', !expanded);

    // Toggle aria-hidden attribute
    content.setAttribute('aria-hidden', expanded);

    console.log('Accordion header clicked');
    console.log('aria-expanded:', header.getAttribute('aria-expanded'));
  });
});
