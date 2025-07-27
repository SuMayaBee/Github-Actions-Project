const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Hello, SuMayaBee. You can do it, you are awesome, see you can do it !!!"
    })
})

app.listen(8080, () => {
    console.log('server running on port 8080')
})


// sudo ./svc.sh install
// sudo ./svc.sh install
// sudo ./svc.sh status