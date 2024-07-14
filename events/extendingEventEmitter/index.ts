import EventEmitter from 'events';
import path from 'path';

class FileUpload extends EventEmitter {
    upload(filePath: any) {
        console.log(`Starting upload for: ${filePath}`);
        // Simulate a file upload process
        setTimeout(() => {
            // Emit 'uploadComplete' event after the file is uploaded
            this.emit('uploadComplete', path.basename(filePath));
        }, 3000);
    }
}

const fileUpload = new FileUpload();

fileUpload.on('uploadComplete', (fileName) => {
    console.log(`File "${fileName}" has been successfully uploaded!`);
});

fileUpload.upload('/path/to/your/file.txt');
