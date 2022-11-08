const sets = document.querySelectorAll('.uil-arrow-circle-down')
const panes = document.querySelectorAll('.animation')
sets.forEach((set,index)=>{
    var pane = panes[index]
    set.onclick = function(){
        document.querySelector('.animation.active').classList.remove('active')
        pane.classList.add('active')
    }
})