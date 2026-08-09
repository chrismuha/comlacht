<template>
    <section>
        <div class="top-row">
            <div class="nav-links">
                <a href="/">Service 1</a>
                <a href="">Service 2</a>
                <a href="">Service 3</a>
                <a href="">Service 4</a>
            </div>
            <div class="notes">
                <p>Note: This is a placeholder for the business name.</p>
                <p>Note: This is a placeholder for the business address.</p>
            </div>
        </div>
        <div class="logo">
            <router-link to="/">
                <img src="/src/assets/images/logo.jpg" alt="logo">
            </router-link>
            <h1>BUSINESS NAME</h1>
            <p>BUSINESS SLOGAN</p>
            <p>BUSINESS DESCRIPTION</p>
        </div>
        <div class="bottom-row">
            <div class="text">
                <p> <strong>BUSINESS NAME</strong> </p>
                <p> <strong>BUSINESS ADDRESS</strong> </p>
                <p> <strong>BUSINESS PHONE</strong> </p>
                <p> <strong>BUSINESS EMAIL</strong> </p>
                <p> <strong>BUSINESS HOURS</strong> </p>
                <p> <strong>BUSINESS SOCIAL MEDIA</strong> </p>
            </div>
            <div class="text">
                Owner: <strong>OWNER NAME</strong>
                <p>Owner Phone: <strong>OWNER PHONE</strong></p>
                <p>Owner Email: <strong>OWNER EMAIL</strong></p>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    background: white;
    border-bottom: 4px solid #666;
}

.top-row {
    display: flex;
    justify-content: space-between;
    background: #f7f7f7;
    padding: 1rem 3rem;
    align-items: center;
}

.top-row .nav-links {
    white-space: nowrap;
}

.top-row .nav-links a {
    display: inline-block;
    font-size: 16pt;
    color: black;
    text-decoration: none;
    font-weight: 300;
    font-family: 'Avenir';
    padding-left: 0;
    padding-right: 35px;
}

.top-row .notes {
    font-size: 12pt;
    font-family: 'Brandon Grot';
    font-weight: 300;
}

.top-row .notes p {
    display: block;
    margin: 0.5em 0;
}

.logo {
    width: fit-content;
    margin: 2rem auto;
    padding: 2rem 1rem;
    text-align: center;
}

.logo h1 {
    font-size: 2rem;
    margin-bottom: 0.75rem;
    margin-top: 1.5rem;
}

.logo p {
    font-size: 1rem;
    margin: 0.5rem;
}

.logo img {
    width: 100px;
    max-width: 100%;
    height: auto;
    border: 2px solid #7979799a;
    box-shadow: 0px 0px 10px 2px #7979799a;
    border-radius: 2px;
    margin-top: auto;
}

.logo img {
    border: 2px solid #7979799a;
    box-shadow: 0px 0px 10px 2px #7979799a;
    border-radius: 2px;
    width: 112px;
}

.bottom-row {
    display: flex;
    /* justify-content: space-evenly; */
    font-size: 16pt;
    font-family: 'Josefin Slab';
    padding-bottom: 1rem;
    /* letter-spacing: 0.2rem; */
    color: #666;
}

.bottom-row .text {
    max-width: 700px;
    width: 100%;
    text-align: center;
}
</style>
