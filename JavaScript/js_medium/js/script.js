window.addEventListener('DOMContentLoaded', ()=>{

  const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

  function hideTabContend(){
    tabsContent.forEach(item =>{
        item.classList.add('hide');
        item.classList.remove('show','fade');
    });

    tabs.forEach(tab => {
        tab.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(indexTab = 0){
      tabsContent[indexTab].classList.add('show', 'fade');
      tabsContent[indexTab].classList.remove('hide');
      tabs[indexTab].classList.add('tabheader__item_active')
  }

  hideTabContend();
  showTabContent();

  tabsParent.addEventListener('click', (event)=>{
    const target = event.target;

    if(target && target.classList.contains('tabheader__item')){
        tabs.forEach((item,i)=>{
            if(target == item){
                hideTabContend();
                showTabContent(i);
            }
        })
    }
  })
});