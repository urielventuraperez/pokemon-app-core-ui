import React from "react"
import {PropTypes} from "prop-types"
import {CProgress, CProgressBar} from "@coreui/react"

const Progress = ({loading}) => {
  return (
    <>
      {loading ? (
        <CProgress className="mb-3">
          <CProgressBar color="success" variant="striped" animated value={25} />
        </CProgress>
      ) : null}
    </>
  )
}

Progress.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default Progress
