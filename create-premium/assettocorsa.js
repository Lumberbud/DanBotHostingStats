const generatePassword = require('../src/util/generatePassword.js');

module.exports = {
    isGameServer: true,
    isDisabled: true,
    subCategory: "SteamCMD",
    createServer: createServer
}

function createServer(ServerName, UserID){
    return {
        name: ServerName,
        user: UserID,
        nest: 4,
        egg: 54,
        docker_image: "quay.io/parkervcp/pterodactyl-images:ubuntu_source",
        startup: "./acServer",
        limits: {
            memory: 6144,
            swap: -1,
            disk: 0,
            io: 500,
            cpu: 0,
        },
        environment: {
            STEAM_USER: null,
            STEAM_PASS: null,
            STEAM_AUTH: null,
            HOSTNAME: "DBH hosted Assetto Corsa server.",
            PASSWORD: null,
            ADMIN_PASSWORD: generatePassword(),
            HTTP_PORT: "8081",
        },
        feature_limits: {
            databases: 2,
            allocations: 5,
            backups: 10,
        },
        deploy: {
            locations: gamingPREM,
            dedicated_ip: false,
            port_range: [],
        },
        start_on_completion: false,
        oom_disabled: false,
    };

};
