import React from 'react'

export const Author = ({ author }) => {
  return (
    <>
      <img src={author.photo.url} alt={author.name} />
      <h2>{author.name}</h2>
    </>
  )
}
