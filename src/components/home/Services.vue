<template>
    <section>
        <h1>SERVICES</h1>
        <div class="services">
            <div class="column; column1">
                <a href="">service 1</a>
                <br> <a href="">service 2</a>
                <br> <a href="">service 3</a>
                <br> <a href="">service 4</a>
            </div>
            <div class="image">
                <img src="../../assets/images/badge.jpg" alt="Badge">
            </div>
            <div class="column; column2">
                <a href="">Service 1</a>
                <br> <a href="">Service 2</a>
                <br> <a href="">Service 3</a>
                <br> <a href="">Service 4</a>
            </div>
        </div>
        <div class="notes">
            <div class="call-text">
                <p>For more information or to book services call: <br> <span>555-555-5555</span></p>
            </div>
            <div class="email-text">
                or email email@email.com
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    background: blue;
    margin: 0 4rem;
    margin-bottom: 1rem;
}

section>h1 {
    font-size: 48pt;
    font-family: 'Anton';
    font-weight: 400;
    text-decoration: underline;
    margin: 1rem auto;
    width: fit-content;
}

.notes {
    font-family: 'Josefin Slab';
    font-weight: 900;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: space-evenly;
}

.notes p {
  margin: 0.5em 0;
}

.services {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 4rem 0;
}

.column {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

.column1 {
    /* padding: 0.7rem 1rem;*/
    height: fit-content;
    width: fit-content;
    text-align: center;
    text-decoration: none;
    color: white;
    background: black;
    font-size: 14pt;
    font-family: 'Avenir';
    font-weight: 300;
    border: 2px solid green;
    transition: 0.2s;
}

.column1:hover {
    background: white;
    color: black;
}

.column2 {
    /* padding: 0.7rem 1rem;*/
    height: fit-content;
    width: 100px;
    text-align: center;
    text-decoration: none;
    color: white;
    background: black;
    font-size: 14pt;
    font-family: 'Avenir';
    font-weight: 300;
    border: 2px solid yellow;
    transition: 0.2s;
}

.column2:hover {
    background: white;
    color: black;
}

a {
    text-decoration: none;
    color: inherit;
}

a:hover {
    text-decoration: none;
}

.image {
    width: 225px;
    margin: 1rem 0;
}

.image img {
    width: 100%;
}

.call-text {
    font-size: 18pt;
}

.call-text span {
    font-size: 28pt;
}

.email-text {
    font-size: 24pt;
    margin-bottom: 2rem;
}
</style>
