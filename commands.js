import 'dotenv/config';
import { InstallGlobalCommands } from './func.js';

// UI commands
const YAYA_COMMAND = {
    name: 'yaya',
    type: 1,
    description: 'Yaya',
    options: [
        {
            type: 3,
            name: "text",
            description: `Santehsize!!`,
            required: true,
        },
    ],
    integration_types: [0, 1],
    contexts: [0, 1, 2],
};

const ZAZA_COMMAND = {
    name: 'zaza',
    type: 1,
    description: 'Zaza',
    options: [
        {
            type: 3,
            name: "text",
            description: `Normalize!!`,
            required: true,
        },
    ],
    integration_types: [0, 1],
    contexts: [0, 1, 2],
}

const INVITE = {
    name: 'add',
    type: 1,
    description: 'Add me~',
    integration_types: [0, 1],
    contexts: [0, 1, 2],
}

// APPS cummands
/*const MESSAGE_CONTEXT_MENU = {
    name: 'Test',
    type: 3,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
};*/

const ZAZA_APP = {
    name: 'Zaza',
    type: 3, 
    integration_types: [0, 1],
    contexts: [0, 1, 2],
}

const ALL_COMMANDS = [
    YAYA_COMMAND,
    ZAZA_COMMAND,
    INVITE,
    ZAZA_APP
]

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);