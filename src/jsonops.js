const jsonops = () => {
    const jsonfile = require('./preload.json');

    jsonfile.forEach(token => {
        let token_id = token.id;
        let rank_type = token.attributes[0].value;
        let hash_key = token.priv_attributes[2].value;
        let sql = `INSERT INTO discord (token_id, rank_type, hash_key) VALUES ('${token_id}', '${rank_type}', '${hash_key}');`;
        document.getElementById('newdata').innerHTML += sql + '<br/>';
    })
}

export default jsonops;
