export default (req, res) => {
  const {
    body: { votes },
  } = req
  // Take case of db operations here
  res.end((votes || 0) + 1)
}
