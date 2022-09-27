
const editor = new EditorJS({
    holder: 'editorjs',
    autofocus: true,
    placeholder: '請輸入文章內容!',
    onReady: () => {
        console.log('Editor.js is ready to work!')
    },
    onChange: (api, event) => {
        console.log('Now I know that Editor\'s content changed!', event)
    },
    readOnly: true,
    //extra plugin
    tools: {
        header: {
            class: Header,
            shortcut: 'SHIFT+H', //快捷鍵
            placeholder: 'Enter a header',
            levels: [2, 3, 4],
            defaultLevel: 3,
        },
        image: {
            class: ImageTool,
            config: {
                endpoints: {
                    byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                    byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                }
            }
        }
        // image: SimpleImage,  ///?沒用
    },
    actions: [
        {
            name: 'new_button',
            icon: '<svg>...</svg>',
            title: 'New Button',
            action: (name) => {
                alert(`${name} button clicked`);
                return false;
            }
        }
    ],
    // 資料
    data: {
        "time": 1663748533063,
        "blocks": [
            {
                "id": "FbCrKWI2gK",
                "type": "header",
                "data": {
                    "text": "Editor.js",
                    "level": 2
                }
            },
            {
                "id": "oDiZF_6xqJ",
                "type": "paragraph",
                "data": {
                    "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
                }
            },
            {
                "id": "7jk2KNNurR",
                "type": "header",
                "data": {
                    "text": "Key features",
                    "level": 3
                }
            },
            {
                "id": "6WYBTuJXy5",
                "type": "list",
                "data": {
                    "style": "unordered",
                    "items": [
                        "It is a block-styled editor",
                        "It returns clean data output in JSON",
                        "Designed to be extendable and pluggable with a simple API"
                    ]
                }
            },
            {
                "id": "DPpvaPdKMj",
                "type": "header",
                "data": {
                    "text": "What does it mean «block-styled editor»",
                    "level": 3
                }
            },
            {
                "id": "cReGka567z",
                "type": "paragraph",
                "data": {
                    "text": "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
                }
            },
            {
                "id": "Zj8k5sNS4e",
                "type": "paragraph",
                "data": {
                    "text": "There are dozens of <a href=\"https://github.com/editor-js\">ready-to-use Blocks</a> and the <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games."
                }
            },
            {
                "id": "gM8du_CM9x",
                "type": "header",
                "data": {
                    "text": "What does it mean clean data output",
                    "level": 3
                }
            },
            {
                "id": "V0koUn0_ft",
                "type": "paragraph",
                "data": {
                    "text": "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
                }
            },
            {
                "id": "amGZ7KCRMR",
                "type": "paragraph",
                "data": {
                    "text": "Given data can be used as you want: render with HTML for <code class=\"inline-code\">Web clients</code>, render natively for <code class=\"inline-code\">mobile apps</code>, create markup for <code class=\"inline-code\">Facebook Instant Articles</code> or <code class=\"inline-code\">Google AMP</code>, generate an <code class=\"inline-code\">audio version</code> and so on."
                }
            },
            {
                "id": "uIa43AMr3E",
                "type": "paragraph",
                "data": {
                    "text": "Clean data is useful to sanitize, validate and process on the backend."
                }
            },
            {
                "id": "KR83GzA8Tm",
                "type": "delimiter",
                "data": {}
            },
            {
                "id": "EGvPlY6Zvz",
                "type": "paragraph",
                "data": {
                    "text": "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
                }
            },
            {
                "id": "Ff-FeuwnZc",
                "type": "image",
                "data": {
                    "file": {
                        "url": "https://codex.so/public/app/img/external/codex2x.png"
                    },
                    "caption": "",
                    "withBorder": false,
                    "stretched": false,
                    "withBackground": false
                }
            }
        ],
        "version": "2.24.3"
    }
});

const btnSave = document.getElementById('btn_Save')
btnSave.addEventListener('click', function () {
    editor.save().then((outputData) => {
        console.log('Article data: ', outputData)
    }).catch((error) => {
        console.log('Saving failed: ', error)
    });
})
