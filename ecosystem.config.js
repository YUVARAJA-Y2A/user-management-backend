module.exports = {
    apps: [
        {
            name: 'sanchu_auth',
            exec_mode: 'fork',
            ignore_watch: ["node_modules","logs"],
            instances: '1', // Or a number of instances
            env: {
                NODE_ENV: 'development'
            },
            script: "npm start"
        },
    ]
};
