// Slider
const slides = document.querySelectorAll(".slides li")
const pagination = document.querySelector(".pagination")

// To do
// Add click event on each dot

// Generate classes for each slides
slides.forEach((slide, i) => {
    if (i === 0) {
        slide.classList.add("current")
    } else {
        slide.classList.add("next")
    }

    slide.setAttribute("id", `slide-${i}`)

    // Add pagination
    pagination.innerHTML += `<li />`
})

// Pagination
const dots = document.querySelectorAll(".pagination li")
dots[0].classList.add("active")

dots.forEach((dot, i) => {
    dot.setAttribute("id", `dot-${i}`)
})

// Add logic for buttons
const nextButton = document.querySelector("#next")
const previousButton = document.querySelector("#previous")

nextButton.addEventListener("click", () => {
    const currentSlide = document.querySelector(".current")
    const nextSlide = currentSlide.nextElementSibling

    const lastSlide = slides[slides.length - 1]
    const firstSlide = slides[0]

    const currentDot = document.querySelector(".pagination li.active")
    const nextDot = currentDot.nextElementSibling
    const firstDot = dots[0]

    if (currentSlide === lastSlide) {
        slides.forEach(slide => {
            if (slide.getAttribute("class") === "previous") {
                slide.setAttribute("class", "next")
            }
        })

        firstSlide.setAttribute("class", "current")
        lastSlide.setAttribute("class", "next")

        // Pagination
        currentDot.classList.remove("active")
        firstDot.classList.add("active")
    } else {
        currentSlide.setAttribute("class", "previous")
        nextSlide.setAttribute("class", "current")

        // Pagination
        currentDot.classList.remove("active")
        nextDot.classList.add("active")
    }
})

previousButton.addEventListener("click", () => {
    const currentSlide = document.querySelector(".current")
    const previousSlide = currentSlide.previousElementSibling

    const lastSlide = slides[slides.length - 1]
    const firstSlide = slides[0]

    const currentDot = document.querySelector(".pagination li.active")
    const previousDot = currentDot.previousElementSibling
    const lastDot = dots[dots.length - 1]

    if (currentSlide === firstSlide) {
        slides.forEach(slide => {
            if (slide.getAttribute("class") === "next") {
                slide.setAttribute("class", "previous")
            }
        })

        lastSlide.setAttribute("class", "current")
        firstSlide.setAttribute("class", "previous")

        currentDot.classList.remove("active")
        lastDot.classList.add("active")
    } else {
        currentSlide.setAttribute("class", "next")
        previousSlide.setAttribute("class", "current")

        currentDot.classList.remove("active")
        previousDot.classList.add("active")
    }
})
