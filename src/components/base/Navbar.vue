<style scoped>
.nav-links {
    font-family: 'poppins', serif;
    /* font-family: 'Bitter', serif; */
    text-transform: uppercase;
    font-size: 16px;
    /*    margin-top: 14px;*/
}

.navbar-brand {
    font-family: 'Montserrat', sans-serif;
    margin-right: auto;
    display: inline-block;
    text-align: center;
    /* width: calc(100% - 82px); */
    margin: 0 auto;
}

.navbar-brand p {
    color: white;
}

.navbar-toggler:focus {
    color: transparent;
}

.navbar-brand>img {
    height: 50px;
}

.navbar-dark {
    background-color: #000;
}

nav.navbar {
    /*    position: fixed;*/
    top: 0;
    right: 0;
    left: 0;
    z-index: 125;
}

.navbar-dark .navbar-toggler {
    color: #ffffff;
    border-color: #000 !important;
    margin-right: 25px !important;
    box-shadow: none !important;
    z-index: 130;
}

.navbar-dark .navbar-toggler-icon {
    background-image: url(../img/menu.png) !important;
    background-size: 30px !important;
}

.first-half {
    display: flex;
    gap: 12pt;
    align-items: center;
    justify-content: space-between;
}

.navbar-brand {
    padding: 0 0 0 0;
    padding-left: 18px;
    z-index: 140;
}

.menu-deskt .navbar-nav {
    display: block;
}

.menu-deskt .navbar-nav li {
    display: inline-block;
    padding: 0 12px;
}

.navbar>.container-fluid {
    justify-content: space-between;
}

.navbar-brand p {
    all: unset;
}

.brand-desk img,
.brand-desk p {
    height: 84pt;
    font-size: 12pt;
}

.navbar {
    border: 1px solid lime !important;
    background-color: black;
    width: 99.7%;
    margin: auto;
}

@media screen and (max-width: 450px) {
    .navbar {
        width: 99.7%;
    }
}

@media screen and (max-width: 1000px) {
    .menu_ {
        border-bottom: 1px solid lime;
    }
}

/*HAMBURGER MENU BACKGROUND COLOR*/
/* .nav-toggle-btn {
    background-color: #000;
} */
</style>
