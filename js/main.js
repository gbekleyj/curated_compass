// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active")
    mobileMenu.classList.toggle("active")
  })

  // Close menu when a link is clicked
  const navLinks = mobileMenu.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuBtn.classList.remove("active")
      mobileMenu.classList.remove("active")
    })
  })
}

// Contact Form Handling
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const formNote = document.getElementById("formNote")
    const formData = new FormData(contactForm)

    try {
      // Collect form data
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        timestamp: new Date().toISOString(),
      }

      // In a real application, you would send this to a backend service
      console.log("[v0] Form submitted:", data)

      // Show success message
      formNote.textContent = "Thank you! Your message has been sent successfully. We will get back to you soon."
      formNote.classList.add("success")
      formNote.classList.remove("error")
      formNote.style.display = "block"

      // Reset form
      contactForm.reset()

      // Hide message after 5 seconds
      setTimeout(() => {
        formNote.style.display = "none"
      }, 5000)
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      formNote.textContent = "Something went wrong. Please try again or contact us directly."
      formNote.classList.add("error")
      formNote.classList.remove("success")
      formNote.style.display = "block"
    }
  })
}

// Set active nav link based on current page
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
})
