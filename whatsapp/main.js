#!/usr/bin/env node
/**
 * main.js
 *
 * Entry point for the relay.
 */
'use strict';
const WhatsAppDiscord = require('./index.js');

const relay = new WhatsAppDiscord();
relay.run();
process.on('SIGINT', relay.kill.bind(relay));