export const EVENT_TYPE_ACTION = 'action';
export const EVENT_TYPE_GENERATION = 'generation';

import User from '../../models/User';

function setAction({userID, action}, res) {
    User.findOne({userID}, (err, user) => {
        console.log('err',err);
        console.log('err',user);
        res.json(200, {a: 123})
    });
}

function setGeneration({userID, action}, res) {
}
                               
export default function(app) {
    app.get('/', function(req, res) {
        const request = req.body;
    
        switch ('action'){
            case(EVENT_TYPE_ACTION): setAction(request, res);
                break;
            case(EVENT_TYPE_GENERATION): setGeneration(request, res);
                break;
            default: res.json(200, {});
        }
    });
}
