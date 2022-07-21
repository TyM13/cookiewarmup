function clicked(details) {
    Cookies.set(`click_count`, 0)
    let value = Cookies.get(`click_count`)
    value++
    Cookies.get(``)
}





let click_me = document.getElementById(`button_one`)
click_me.addEventListener(`click`, clicked)