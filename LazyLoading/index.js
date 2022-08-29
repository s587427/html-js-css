
const observeCallBack = (entries, observe) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log(entry.target)
            const imgSrc = entry.target.dataset.src
            entry.target.setAttribute('src', imgSrc)
            entry.target.onload = function(){
                this.classList.remove('skeleton')
            }
            // 完成後，停止觀察當前目標
            observe.unobserve(entry.target)
        }
    })
}

const options = {
    root: document.querySelector('.imgWrap'),
    threshold: 0.25, //可見程度
}

const intersectionObserver = new IntersectionObserver(observeCallBack, options)
const imgsElement = document.querySelectorAll('.imgWrap img')

imgsElement.forEach(img => {
    intersectionObserver.observe(img)
})

/*
    Intersection Obeserver API 
        1.好處在於：它能「非同步的」幫我們觀察一個或多個目標是否進出指定的外層元素或 viewport
        2.當目標元素進入或離開指定外層或預設 viewport 時觸發

        3.new IntersectionObserver(callback, options) 
            callback: 當目標元素進入或離開指定外層或預設 viewport 時觸發
                callback(entries, obsever)
                    entries: 能拿到所有目標元素進出(intersect)變化的資訊,是一個數組        
                        包含一個個 IntersectionObserverEntry 物件
                            target: 能取得是哪個目標元素進入或離開了 viewport
                            isIntersecting: 用來判別目標元素是否進入或離開了 
                    obsever: 觀察的容器本身 
                        
            options: 設定和控制在哪些情況下，呼叫 callback 函式, 是一個物件

                root: （用來觀察的盒子）預設（未指定，或值設定為 null 時）是以瀏覽器的 viewport 為範圍來判定目標元素的進出與否，
                    然而也能在此設定要改以哪個其他元素作為觀察範圍 — 需要注意的是「root 必須要是所有目標元素的父元素（或祖父層的元素）」
                
                rootMargin: 設定 root 周圍的 margin — 能有效的「擴大或縮小這個用來觀察的盒子範圍」。
                            設定的值就類似設定一般 margin："30px 30px 30px 30px"（上右下左），也能縮寫成一個值：30px。

                threshold:  預設值為 0, 設定目標元素的可見度達到多少比例時，觸發 callback 函式。
                            可以帶入單一一個值：「只想在可見度達一個比例時觸發」；
                            也可帶入一個陣列：「想在可見度達多個比例時觸發」
        
        3.IntersectionObserver 實例後，能透過 observe() 方法設定要觀察的元素：
*/
