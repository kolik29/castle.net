const tabs = Array.from(document.querySelectorAll('.tabs__title'))
let activeTab = {
	link: document.querySelector(`button[data-tab="standart"]`),
	tab: document.querySelector(`article[data-tab-id="standart"]`)
}

tabs.forEach(tab => {
	tab.addEventListener('click', ev => {
		const tabData = ev.target.getAttribute('data-tab')
		const newTab = document.querySelector(`article[data-tab-id="${tabData}"]`)
		const header = document.querySelector('.header-wrapper')

		if (newTab === activeTab.tab) {
			return null
		}

		activeTab.link.classList.remove('tabs__title--active')
		activeTab.tab.classList.remove('tab--active')
		
		
		ev.target.classList.add('tabs__title--active')
		newTab.classList.add('tab--active')

		header.style = `background-image: url(./img/repair/${tabData}/item-bg.jpg);`
		activeTab.link = ev.target
		activeTab.tab = newTab
	})
});

