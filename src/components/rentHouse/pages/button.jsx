import React from 'react'

/**
 * Button
 * @param {Object} props React props
 * @returns {JSX} template
 */
export default function Button({ label }) {
  return <button className="button" type="button">{label}</button>
}
