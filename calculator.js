function display(show) {
    document.getElementById('edu').value += show
}

function solve() {
    let x = document.getElementById('edu').value
    let y = eval(x)
    document.getElementById('edu').value = y
}

function clr() {
    document.getElementById('edu').value = ""
}