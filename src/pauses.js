
const Interval = require('./model/Interval')

const saveInterval = async (req, res) => {
    try {
        const pause = new Interval({
            id: req.body.id,
            date: req.body.date,
            agent: req.body.agent,
            reason: req.body.reason,
            offline: req.body.time
        });

        const createPause = await Interval.create(pause)
        return createPause ? res.status(200).json(`Pausa adicionada: ${ pause }`) : res.status(403).json('Error');

    } catch (error) {
        return console.log(error);
    }
}

const editInterval = async (req, res) => {
    try {
        const editPause = await Interval.where({ id: req.params.id }).updateOne({ online: req.body.time })
        return editPause ? res.status(200).json(`Pausa editada ${ editPause }`) : res.status(403).json('Error');

    } catch (error) {
        return console.log(error);
    }
}

const getPauses = async (req, res) => {
    try {
        const pauses = await Interval.find(req.query).lean();
        res.json({ 
            data: pauses
        });

    } catch (error) {
        return console.log('Error');
    }
}

const deleteAll = async (req, res) => {
    try {
        await Interval.deleteMany({}, (error) => {
            return error ? res.status(403).json('Error') : res.status(200).json('message: Deleted');
        })
    } catch (error) {
        return console.log('Error');
    }
}

module.exports = {
    saveInterval,
    editInterval,
    deleteAll,
    getPauses
};
