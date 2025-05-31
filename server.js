import express from 'express'
import { startups } from './data/data.js'

const PORT = 8000

const app = express()

app.get('/api', (req, res) => {
  let filteredData = startups

  const {
    industry,
    country,
    continent,
    is_seeking_funding,
    has_mvp
  } = req.query

  const toBool = val => val === 'true'

  if (industry) {
    filteredData = filteredData.filter(startup =>
      startup.industry.toLowerCase() === industry.toLowerCase()
    )
  }

  if (country) {
    filteredData = filteredData.filter(startup =>
      startup.country.toLowerCase() === country.toLowerCase()
    )
  }

  if (continent) {
    filteredData = filteredData.filter(startup =>
      startup.continent.toLowerCase() === continent.toLowerCase()
    )
  }

  if (is_seeking_funding) {
    filteredData = filteredData.filter(startup =>
      startup.is_seeking_funding === toBool(is_seeking_funding)
    )
  }

  if (has_mvp) {
    filteredData = filteredData.filter(startup =>
      startup.has_mvp === toBool(has_mvp)
    )
  }

  res.json(filteredData)
  console.log(filteredData)
})

// Dynamic route: /api/:field/:term
app.get('/api/:field/:term', (req, res) => {
  const { field, term } = req.params;

  const filtered = startups.filter(startup => {
    const value = startup[field];
    if (typeof value === 'string') {
      return value.toLowerCase() === term.toLowerCase();
    }
    return false;
  });

  res.json(filtered);
  console.log(filtered);
});

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
