import {IMorganBodyOptions} from 'morgan-body'
import {logConfig} from './ConfigLogMorganBody';

const morganBodyOptions: IMorganBodyOptions = {
    noColors: true,
    stream: logConfig
}

export {morganBodyOptions};