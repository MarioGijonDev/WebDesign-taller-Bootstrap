
const bsCollapse = new bootstrap.Collapse('#navbarNavDropdown', {toggle : false});

const dropdownItems = document.getElementsByClassName("dropdown-item");

[...dropdownItems].forEach(item => {
    item.addEventListener("click", ()=> bsCollapse.hide())
});