window.HelloWorldComponent = xcomponent.create({
    tag: 'hello-world',
    url: document.currentScript.src.replace('component.js', 'index.html'),
    dimensions: {
        width: '1000px',
        height: '80px'
    },
    props: {
        name: {
            type: 'string',
            required: true
        },
        onHello: {
            type: 'function',
            required: true
        }
    }
});