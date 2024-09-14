const SlugGenerator = (title) => {
    return title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '');
}

module.exports = SlugGenerator;