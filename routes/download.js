const router = require('express').Router();
const File = require('../models/file');

router.get('/:uuid', async (req, res) => {
    //check file is in db or not 
    const file = await File.findOne({ uuid: req.params.uuid })
    if (!file) {
        return res.render('download', { error: 'Link has been expired.' });
    }
    const filePath = `${__dirname}/../${file.path}`;
    //to download file in express
    res.download(filePath);
});

module.exports = router;