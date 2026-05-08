import './style.css'

document.querySelector('#app').innerHTML = `
<section id="center">
  <div>
    Бекенд был бы на ${import.meta.env.VITE_API_URL},
	Так как установлен режим ${import.meta.env.VITE_ENV}
  </div>
</section>
`
