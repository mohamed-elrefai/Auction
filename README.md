const urls = []
    let files: any
    // eslint-disable-next-line prefer-const
    files = req.files
    for (const file of files) {
        const { path } = file

        const newPath = await cloudinaryImageUploadMethod(path)
        urls.push(newPath)
    }
    const multiImage = urls.map((url: any) => url.res)

    res.status(200).json(multiImage)