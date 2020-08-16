(function () {

    const client = filestack.init(FILESTACK_KEY);
    const options = {
        onUploadDone: res => {
            console.log(res);
        }
    };
    client.picker(options).open();
})();