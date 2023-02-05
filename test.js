function contador(min, max) {
    console.log(min + "\n");
    if (min < max) {
        contador(++min, max);
    }
}

contador(0, 10);