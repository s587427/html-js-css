const articleFileUpload = document.querySelector('#articleFileUpload')
const articleImagePreview = document.querySelector('#articleImagePreview')
const articleUploadBtn = document.querySelector('#articleUploadBtn')
const aricleBtnSave = document.querySelector('#aricleBtnSave')
const articleForm = document.querySelector('#articleForm')
const articleModal = new bootstrap.Modal(document.getElementById('addArticle'), { keyboard: false })
const sel_Zone = document.querySelector('#sel_Zone')
const txt_Title = document.querySelector('#txt_Title')
const txt_descr = document.querySelector('#txt_descr')

//圖片預覽
articleFileUpload.addEventListener('change', e => {
    if (!e.target.files.length) {
        articleImagePreview.src = null
        return
    }
    //e.target.files; // FileList object
    // e.target.files[0]; // File Object (Special Blob)
    console.log(e.target.files)
    articleImagePreview.src = window.URL.createObjectURL(e.target.files[0]); // 取得檔案
})

//檔案上傳
articleUploadBtn.addEventListener('click', () => {
    if (!articleFileUpload.files.length) return alert('請選擇檔案在上傳!!!')
    console.log(articleFileUpload.files)
    alert('post data to server...')
})

//保存
articleForm.addEventListener('submit', (e) => {
    e.preventDefault()
    alert('post data to server')
    const data = {
        key: Date.now(),
        txt_Title: txt_Title.value,
        txt_descr: txt_descr.value,
        sel_Zone: sel_Zone.value,
        file: articleFileUpload.files.length ? articleFileUpload.files[0] : null,
    }
    console.log({ data })
    // articleModal.hide()
    // sel_Zone.selectedIndex = 0
    // txt_Title.value = null
    // txt_descr.value = null
})