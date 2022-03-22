const backdrop = document.querySelector('.backdrop')
const selectPlanBtns =document.querySelectorAll('.plan button')

const modal = document.querySelector('.modal')
const modalNoBtn = document.querySelector('.modal__action--negative')

const toggleBtn = document.querySelector('.toggle-button')
const mobileNav = document.querySelector('.mobile-nav')

selectPlanBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    modal.classList.add('open')
    backdrop.style.display = 'block'
    setTimeout(() => backdrop.classList.add('open'), 10)
  })
)

backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open')
  closeModal()
})

modalNoBtn && modalNoBtn.addEventListener('click', closeModal)

function closeModal() {
  modal && modal.classList.remove('open')
  backdrop.classList.remove('open')
  setTimeout(() => (backdrop.style.display = 'none'), 200)
}

toggleBtn.addEventListener('click', () => {
  mobileNav.classList.add('open')
  backdrop.style.display = 'block'
  setTimeout(() => backdrop.classList.add('open'), 10)
})
