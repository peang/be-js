import * as elasticsearch from 'elasticsearch';

import { Injectable } from '@nestjs/common';

let instance: any;

@Injectable()
export class ElasticService {
    public static initialize(): void {
        if (process.env.ELASTIC_DB_PROTOCOL &&
            process.env.ELASTIC_DB_HOST &&
            process.env.ELASTIC_DB_PORT &&
            process.env.ELASTIC_DB_USERNAME &&
            process.env.ELASTIC_DB_PASSWORD
        ) {
            if (!instance) {
                instance = new elasticsearch.Client({
                    hosts: [
                        `${process.env.ELASTIC_DB_PROTOCOL}://${process.env.ELASTIC_DB_USERNAME}:${process.env.ELASTIC_DB_PASSWORD}@${process.env.ELASTIC_DB_HOST}${process.env.ELASTIC_DB_PORT}/`
                    ]
                });
            }
        }
    }

    public static getInstance() {
        if (!instance) {
            throw new Error('Elastic Not initialize');
        }
        return instance;
    }
}
