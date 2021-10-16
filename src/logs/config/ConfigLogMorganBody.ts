import fs from 'fs';
import path from 'path';

const logConfig: fs.WriteStream = fs.createWriteStream(
    path.join(__dirname, '../', 'express.log'), { flags: 'a'}
);

export {logConfig}
