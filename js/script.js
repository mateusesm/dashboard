const handleSideBarToggle = () => {
  const navBarOfSide = document.querySelector('.side-bar')
  navBarOfSide.classList.toggle('side-bar-deactive')
  
  if (document.querySelector('.bi-chevron-left')) {
    const chevron = document.querySelector('.bi-chevron-left')
    chevron.classList.remove('bi-chevron-left')
    chevron.classList.add('bi-chevron-right')
  } else {
    const chevron = document.querySelector('.bi-chevron-right')
    chevron.classList.remove('bi-chevron-right')
    chevron.classList.add('bi-chevron-left')
  }
}

const sideBarToggle = document.querySelector('.side-bar-toggle')

sideBarToggle.addEventListener('click', handleSideBarToggle)


