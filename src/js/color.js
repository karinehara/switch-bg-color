let color = document.getElementById("color-range");
color.onchange = function() {
    document.body.style.backgroundColor = this.value;
    color.textContent = this.value;
}