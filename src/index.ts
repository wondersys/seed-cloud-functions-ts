import { Request, Response } from 'express';
import { escapeHtml } from 'escape-html';

/**
 * Generic background Cloud Function to be triggered by Cloud Storage.
 *
 * @param {object} data The event payload.
 * @param {object} context The event metadata.
 */
export async function helloStorage(data: any, context: any) {
    const file = data;
    console.log(`  Event ${context.eventId}`);
    console.log(`  Event Type: ${context.eventType}`);
    console.log(`  Bucket: ${file.bucket}`);
    console.log(`  File: ${file.name}`);
    console.log(`  Metageneration: ${file.metageneration}`);
    console.log(`  Created: ${file.timeCreated}`);
    console.log(`  Updated: ${file.updated}`);

    try {
        // WRITE CODE HERE
    } catch (err) {

    }


};

/**
 * Background Cloud Function to be triggered by Pub/Sub.
 * This function is exported by index.js, and executed when
 * the trigger topic receives a message.
 *
 * @param {object} pubSubEvent The event payload.
 * @param {object} context The event metadata.
 */
export async function helloPubSub(pubSubEvent, context) {
    const name = pubSubEvent.data
        ? Buffer.from(pubSubEvent.data, 'base64').toString()
        : 'World';

    console.log(`Hello, ${name}!`);
};

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
export async function helloHttp(req: Request, res: Response) {
    res.send(`Hello ${escapeHtml(req.query.name || req.body.name || 'World')}!`);
  };


