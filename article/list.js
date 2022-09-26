const articleContent = document.querySelectorAll('.article-content')

articleContent.forEach(ele => {
    const containerHeight = ele.clientHeight
    const p = ele.querySelector('p')
    const readMore = ele.querySelector('label')
    console.log(p.clientHeight)
    if (p.clientHeight > 96) {
        p.classList.toggle('overflowp')
    } else {
        readMore.classList.toggle('d-none')
    }
})
