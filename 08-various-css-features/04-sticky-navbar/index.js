// 'document' object is provided by the Browser API (default). The entire page is a document object
// addEventListener() is a document method (method = function inside object) that waits for a certain
// event (listens) to happen, then, it does a function (as the syntax shown below)
// 'DOMContentLoaded' waits for the Document Object Model (DOM) to be loaded. This is the tree of the 
// structure (HTML+CSS). So we're basically saying "once the page loads up completely".

document.addEventListener('DOMContentLoaded',function(){
    // querySelector() finds and returns the first element that matches the given CSS selector, 
    // as a DOM element object.
    const header = document.querySelector('.header');
    // console.log(header);

    // Here, we add another event listener that listens to scrolls. We can log the values. But here is where
    // we implement the logic for being transparent
    this.addEventListener('scroll',function(){
        // console.log(window.scrollY)

        // window is the global object representing the browser window/tab and gives access to properties 
        // like scrollY, location, and methods for event handling.

        // window object can detect scrolls.
        if(window.scrollY === 0)
        {
            header.classList.remove('transparent');
        }
        else
        {
            header.classList.add('transparent');
        }
    })

})