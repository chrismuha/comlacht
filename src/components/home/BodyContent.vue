<template>
    <section>
        <div class="section">
            <a href="#" class="book-button">BOOK NOW</a>
            <p>Explanatory text</p>
        </div>
        <div class="header">
            <h1>BUSINESS NAME</h1>
            <h2>BUSINESS ADDRESS</h2>
        </div>
        <div class="phone-number">
            <h1>555-555-5555</h1>
        </div>
        <div class="content">
            <p class="body-text-1">Paragraph 1</p>
            <p class="body-text-2">Paragraph 2</p>
        </div>
    </section>
</template>

<style scoped>
section {
    margin: 1rem 0;
}

section>* {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
}

.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 0;
}

.section> {
    margin: 0;
}

.book-button {
    display: inline-block;
    margin-block: 1.5rem;
    padding: 1.5rem 3rem;
    background: #222;
    color: #fff;
    text-decoration: none;
    font-size: 16pt;
    font-family: 'Avenir';
    border: 2px solid green;
    transition: 0.2s;
}

.book-button+p {
    font-size: 12pt;
    font-family: 'Josefin Slab';
    font-weight: 900;
    margin: 0;
}

.book-button:hover {
    background: #fff;
    color: #222;
}

.header,
.phone-number {
    margin-block-start: 4rem;
}

</style>