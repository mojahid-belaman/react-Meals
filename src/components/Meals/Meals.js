import React, { Fragment } from 'react'
import MealSummary from './MealSummary'
import MealsAvailable from './MealsAvailable'

function Meals() {
  return (
    <Fragment>
        <MealSummary />
        <MealsAvailable />
    </Fragment>
  )
}

export default Meals