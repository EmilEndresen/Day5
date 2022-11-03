const toggleLayout = document.getElementById("flex-grid")
const emailCollector = document.getElementById("email-collector")
const checkboxLabel = document.getElementById("checkbox-label")
const mainForm = document.querySelector(".main-form")

function toggleFlex() {
   if (toggleLayout.checked) {
      mainForm.classList.add("grid")
      mainForm.classList.remove("flex")
      checkboxLabel.textContent = "Grid on"
   } else {
      mainForm.classList.add("flex")
      mainForm.classList.remove("grid")
      checkboxLabel.textContent = "Flex on"
   }
}

toggleLayout.addEventListener("click", toggleFlex)

const emailCollectorForm = document.getElementById("email-collector")
emailCollectorForm.addEventListener("submit", (event) => {
   event.preventDefault()

   const ourFormData = new FormData(event.target)

   const userFirstName = ourFormData.get("fName")
   const userLastName = ourFormData.get("lName")

   const updatedHtmlContent = `
                    <h2>Congratulations ${userFirstName} ${userLastName} </h2>

                    <p>You've just signed up for yet another newsletter</p>
                    
                    <p class="fine-print">We'll never share your information without your permission</p>
                    `
   const ourMainContent = document.getElementById("main-content")
   ourMainContent.innerHTML = updatedHtmlContent
})
