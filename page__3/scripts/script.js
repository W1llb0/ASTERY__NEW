let questionsAndAnswersItems = document.querySelectorAll('.catalog-categories-top__accordion-item');
questionsAndAnswersItems.forEach(function(item){
    item.addEventListener('click', function(){
        this.classList.toggle('active');
        // this.style.maxHeight = `${this.scrollHeight}px`;
    })
})

