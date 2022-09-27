//新增
const articleFileUpload = document.querySelector('#articleFileUpload')
const articleUploadBtn = document.querySelector('#articleUploadBtn')
const articleForm = document.querySelector('#articleForm')

//圖片預覽
articleFileUpload.addEventListener('change', e => {
    if (!e.target.files.length) {
        articleImagePreview.src = null
        return
    }
    //e.target.files; // FileList object
    // e.target.files[0]; // File Object (Special Blob)
    console.log(e.target.files)
    const articleImagePreview = document.querySelector('#articleImagePreview')
    articleImagePreview.src = window.URL.createObjectURL(e.target.files[0]); // 取得檔案
})

//檔案上傳
articleUploadBtn.addEventListener('click', () => {
    if (!articleFileUpload.files.length) return alert('請選擇檔案在上傳!!!')
    console.log(articleFileUpload.files)
    alert('post data to server...')
})

//新增
articleForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const sel_Zone = document.querySelector('#sel_Zone'),
        txt_Title = document.querySelector('#txt_Title'),
        txt_descr = document.querySelector('#sel_Zone')
    const articleModal = new bootstrap.Modal(document.getElementById('addArticle'), { keyboard: false })
    const data = {
        key: Date.now(),
        txt_Title: txt_Title.value,
        txt_descr: txt_descr.value,
        sel_Zone: sel_Zone.value,
        file: articleFileUpload.files.length ? articleFileUpload.files[0] : null,
    }
    console.log({ data })
    alert('post data to server')
    // articleModal.hide()
    // sel_Zone.selectedIndex = 0
    // txt_Title.value = null
    // txt_descr.value = null
})

//更新
const editArticleForm = document.querySelector('#editArticleForm')
editArticleForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const zone = editArticleModalEl.querySelector('#edit_sel_Zone'),
        title = editArticleModalEl.querySelector('#edit_txt_Title'),
        tag = editArticleModalEl.querySelector('#edit_txt_Tag'),
        content = editArticleModalEl.querySelector('#edit_txt_descr'),
        file = editArticleModalEl.querySelector('#editArticleFileUpload'),
        prviewImg = editArticleModalEl.querySelector('#editeditArticleImagePreview'),
        btnUpdate = editArticleModalEl.querySelector('#editAricleBtnSave')
    
    alert('update to serve')
})

//編輯dialog
const editArticleModal = new bootstrap.Modal(document.getElementById('editArticle'), {
    backdrop: 'static',
    keyboard: true,
    focus: true,
})
const editArticleModalEl = document.getElementById('editArticle')


function operateFormatter(value, row, index) {
    return `
        <button 
            class="btn btn-warning edit" 
            type="button" 
        >
            編輯
        </button>
        <button class="btn btn-danger remove" type="button">刪除</button>
    `
}



window.operateEvents = {
    'click .edit': function (e, value, row, index) {
        const zone = editArticleModalEl.querySelector('#edit_sel_Zone'),
            title = editArticleModalEl.querySelector('#edit_txt_Title'),
            tag = editArticleModalEl.querySelector('#edit_txt_Tag'),
            content = editArticleModalEl.querySelector('#edit_txt_descr'),
            file = editArticleModalEl.querySelector('#editArticleFileUpload'),
            prviewImg = editArticleModalEl.querySelector('#editeditArticleImagePreview'),
            btnUpdate = editArticleModalEl.querySelector('#editAricleBtnSave')
        console.log({ zone, title, tag, content, file, prviewImg, btnUpdate })

        editArticleModal.show()
    },
    'click .remove': function (e, value, row, index) {
        if (!confirm('你確定要刪除嗎?!')) return false;
        // $.ajax({
        //     type:'post',
        //     url: '456456',
        //     data: row,
        //     success:e=>{                
        //         console.log(e);
        //         $table.bootstrapTable('refresh');                                                          
        //     },
        //     error:e=>{
        //         console.log(e);
        //         alert('操作失敗');
        //     }

        // });     
    }
}
