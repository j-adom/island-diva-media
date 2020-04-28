export default {
    "type": "document",
    "name": "articleLink",
    "title": "Article Link",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the article.",
            "validation": Rule => Rule.required()
        },
        {
            "type": "url",
            "name": "articleUrl",
            "title": "Article URL",
            "description": "The text shown just below the post title.",
            "validation": Rule => Rule.required()
        },
        {
            "type": "date",
            "name": "date",
            "title": "Date",
            "validation": null
        },
        {
            "type": "image",
            "name": "thumb_img_path",
            "title": "Featured Image",
            "description": "The image shown with the article.",
            options: {
                hotspot: true // <-- Defaults to false
              },
            fields: [
            {
                name: 'caption',
                type: 'string',
                title: 'Caption',
                options: {
                isHighlighted: true // <-- make this field easily accessible
                }
            },
            {
                // Editing this field will be hidden behind an "Edit"-button
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
                options: {
                    isHighlighted: true // <-- make this field easily accessible
                    }
            }
              ],
            "validation": Rule => Rule.required()
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}