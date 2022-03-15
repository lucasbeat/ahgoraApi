const Interval = require("../model/Interval");
const moment = require("moment");

module.exports = {
  async filterPauses(req, res) {
    try {
      const data = await Interval.find(req.query).lean();
      const { start, end } = req.body;

      const dataFormatted = data.map((item) => ({
        agent: item.agent,
        id: item.id,
        reason: item.reason,
        offline: item.offline,
        online: item.online,
        date: item.date,
        dateFilter: moment(item.createdAt).format("DD/MM/YYYY"),
      }));

      const dateFilter = dataFormatted.filter((item) => {
        let time = item.dateFilter;

        if (start <= time && time <= end) {
          return time;
        }

        if (start >= time && time >= end) {
          return res.status(400).json({ message: "Invalid Date" });
        }
      });

      return res.status(200).json(dateFilter);
    } catch (error) {
      return console.log(error);
    }
  },
};
