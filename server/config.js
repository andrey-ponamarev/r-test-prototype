export default {
    secret: {
        client_id: '44524381264c4804888e067a8f4bfea9',
        client_secret: 'a2824848290f4aeaa598be162144a4ea'
    },
    redirect_uri: 'http://127.0.0.1:3000/api/handleauth',

    db: {
        production: "mongodb://roma:test54321@ds133428.mlab.com:33428/rtest",
        development: "mongodb://roma:test54321@ds133428.mlab.com:33428/rtest",
        test: "mongodb://roma:test54321@ds133428.mlab.com:33428/rtest"
    },
    server: {
        port: 8080
    }
};
