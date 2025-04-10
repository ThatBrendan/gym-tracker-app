let visits = [];

export function createVisit(req, res) {
  const newVisit = {
    id: Date.now().toString(),
    ...req.body,
  };
  visits.push(newVisit);
  res.status(201).json(newVisit);
}

// Optionally, if you want to retrieve scheduled visits later:
export function getVisits(req, res) {
  res.json(visits);
}
