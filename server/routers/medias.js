import express from 'express';
import { Media } from '../models/media'
import { handleMongoResp } from "../services/mongoResp.service";

export class MediasRouter {
    constructor(services) {
        this.prefix = 'medias';
        this.services = services;
        this.express = express.Router();
        this.init();
    }

    init() {
        console.log('Starting medias router...');
        this.express.route('/:id?').get(async (req, res, next) => {
            try {
                const _id = req.params.id;
                if (_id) {
                    const media = await Media.find({ _id });
                    const response = await handleMongoResp(media);
                    return next(response);
                } else {
                    const medias = await Media.find({});
                    const response = await handleMongoResp(medias);
                    return next(response);
                }
            } catch (e) {
                let content = this.services.parsing.parseError(e);
                return next(content);
            }
        });

        this.express.route('/media').post(async (req, res, next) => {
            try {
                let media = new Media(req.body);
                media = await media.save()
                return next(handleMongoResp(media));
            } catch (e) {
                let content = this.services.parsing.parseError(e);
                return next(content);
            }
        });

        this.express.route('/:id').patch(async (req, res, next) => {
            try {
                const _id = req.params.id;
                let media = await Media.findOne({ _id });
                if (!media) {
                    throw new Error('Media not found')
                }

                media.active = !media.active;
                media = await media.save()
                return next(handleMongoResp(media));
            } catch (e) {
                let content = this.services.parsing.parseError(e);
                return next(content);
            }
        });

        this.express.route('/:id').delete(async (req, res, next) => {
            try {
                const media = await Media.findOneAndDelete({ _id: req.params.id })
                if (!media) {
                    throw new Error('Media not found')
                }
                return next(handleMongoResp(media));
            } catch (e) {
                let content = this.services.parsing.parseError(e);
                return next(content);
            }
        });
    }
}