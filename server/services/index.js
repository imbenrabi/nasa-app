import { HandlerService } from './handler.service';
import { NasaService } from './nasa.service';
import { ParsingService } from './parsing.service';



/**
 * Export singleton services
 */
export const services = {
    nasa: new NasaService(),
    handler: new HandlerService(),
    parsing: new ParsingService()
};
