import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  const restaurants = [
    { name: "WoodsHill" },
    { name: "L'opossum" },
    { name: "Milk" }
  ]
  return (
    <div>
      <h1>Restaurant List</h1>
      {restaurants.map(item => {
        // eslint-disable-next-line react/jsx-key
        return <div>
          <Link as={"/restaurants/" + item.name} href="restaurants/[restaurant]">
            <a>{item.name}</a>
          </Link>
        </div>
      })}

    </div>
  )

}