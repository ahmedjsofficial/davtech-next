import Schema from '../../Schema/Schema.json';

export default function handler(req, res) {
  Schema ? res.status(200).json(Schema) : res.status(400).send("Davuptech API not Found");
}
