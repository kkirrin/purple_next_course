import React from "react"

export default async function AbouySingle({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  return (
    <div>
        My Post: {slug}
    </div>)
}